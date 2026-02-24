'use server';
/**
 * @fileOverview This file implements a Genkit flow for an AI legal assistant.
 *
 * - aiLegalAssistantQuery - A function that handles general legal questions.
 * - AiLegalAssistantQueryInput - The input type for the aiLegalAssistantQuery function.
 * - AiLegalAssistantQueryOutput - The return type for the aiLegalAssistantQuery function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const LEGAL_DISCLAIMER = "Disclaimer: Le informazioni fornite sono a scopo puramente informativo e non costituiscono consulenza legale. Per un parere specifico, consultare direttamente l'avvocato.";

const AiLegalAssistantQueryInputSchema = z.object({
  question: z
    .string()
    .describe('The general legal question asked by the client.'),
});
export type AiLegalAssistantQueryInput = z.infer<typeof AiLegalAssistantQueryInputSchema>;

const AiLegalAssistantQueryInternalOutputSchema = z.object({
  answer: z
    .string()
    .describe('The AI assistant\'s general answer to the legal question.'),
});

const AiLegalAssistantQueryOutputSchema = z.object({
  answer: z
    .string()
    .describe('The AI assistant\'s general answer to the legal question.'),
  disclaimer: z
    .string()
    .describe('A disclaimer stating that the information provided is not legal advice.'),
});
export type AiLegalAssistantQueryOutput = z.infer<typeof AiLegalAssistantQueryOutputSchema>;

const legalAssistantPrompt = ai.definePrompt({
  name: 'legalAssistantPrompt',
  input: { schema: AiLegalAssistantQueryInputSchema },
  output: { schema: AiLegalAssistantQueryInternalOutputSchema },
  prompt: `Sei un assistente AI professionale per lo studio legale dell'Avvocato Simone Grossi. Il tuo scopo è fornire informazioni generali su questioni legali basate sulla domanda dell'utente. È fondamentale che tu *non* fornisca consulenza legale specifica, opinioni vincolanti o raccomandazioni personalizzate. Mantieni le risposte chiare, concise e professionali.\n\nDomanda: {{{question}}}\n\nFornisci una risposta generale. Non includere disclaimer nella risposta, poiché verranno aggiunti separatamente. Rispondi in italiano.`,
});

const aiLegalAssistantQueryFlow = ai.defineFlow(
  {
    name: 'aiLegalAssistantQueryFlow',
    inputSchema: AiLegalAssistantQueryInputSchema,
    outputSchema: AiLegalAssistantQueryOutputSchema,
  },
  async (input) => {
    const { output } = await legalAssistantPrompt(input);
    if (!output?.answer) {
      throw new Error("L'AI non ha fornito una risposta.");
    }
    return {
      answer: output.answer,
      disclaimer: LEGAL_DISCLAIMER,
    };
  }
);

export async function aiLegalAssistantQuery(
  input: AiLegalAssistantQueryInput
): Promise<AiLegalAssistantQueryOutput> {
  return aiLegalAssistantQueryFlow(input);
}