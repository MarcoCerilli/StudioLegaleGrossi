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

const LEGAL_DISCLAIMER = "Disclaimer: The information provided here is for general informational purposes only and does not constitute legal advice. For specific legal guidance, please consult with a qualified attorney.";

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
  prompt: `You are a helpful AI legal assistant for the law firm of Simona Grossi. Your purpose is to provide general information about legal matters based on the client's question. It is crucial that you *do not* provide legal advice, opinions, or specific recommendations. Keep your answers clear, concise, and easy to understand.\n\nQuestion: {{{question}}}\n\nPlease provide a general answer to the question. Do not include any disclaimers in your answer, as a separate disclaimer will be added.`,
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
      throw new Error("AI did not provide an answer.");
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
