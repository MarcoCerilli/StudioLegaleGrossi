"use client";

import { useState, useRef, useEffect } from "react";
import { aiLegalAssistantQuery } from "@/ai/flows/ai-legal-assistant-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  disclaimer?: string;
};

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Buongiorno, sono l'assistente virtuale dello studio legale Grossi. Come posso aiutarla oggi? Posso fornirle informazioni generali su questioni legali.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await aiLegalAssistantQuery({ question: userMessage });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.answer, disclaimer: result.disclaimer },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Spiacente, si è verificato un errore nel processare la richiesta. Riprova più tardi." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/20 bg-white/50 backdrop-blur-sm">
      <CardHeader className="border-b bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="font-headline text-primary">Assistente Legale AI</CardTitle>
            <CardDescription className="text-muted-foreground">Ottieni chiarimenti su materie giuridiche</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-6" ref={scrollRef}>
          <div className="space-y-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`mt-1 flex-shrink-0 p-2 rounded-full ${msg.role === "user" ? "bg-accent text-white" : "bg-primary text-white"}`}>
                  {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-white rounded-tr-none"
                        : "bg-secondary text-secondary-foreground rounded-tl-none border"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.disclaimer && (
                    <div className="text-[10px] text-muted-foreground italic mt-1 leading-tight flex items-start gap-1">
                      <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      {msg.disclaimer}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3 border">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2 bg-white">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrivi qui la tua domanda legale..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading} className="bg-primary hover:bg-primary/90 shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}