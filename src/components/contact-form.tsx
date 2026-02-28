"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Messaggio inviato",
      description: "Le risponderemo al più presto.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-xs font-bold text-primary/70 uppercase ml-1">Nome</Label>
        <Input id="name" placeholder="Il suo nome" required className="bg-slate-50 border-none h-12 rounded-xl" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-bold text-primary/70 uppercase ml-1">Email</Label>
        <Input id="email" type="email" placeholder="email@esempio.it" required className="bg-slate-50 border-none h-12 rounded-xl" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-bold text-primary/70 uppercase ml-1">Messaggio</Label>
        <Textarea id="message" placeholder="Come posso aiutarla?" className="min-h-[100px] bg-slate-50 border-none rounded-xl resize-none p-4" required />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#723d5a] hover:bg-[#5a3047] py-6 text-lg font-bold rounded-xl text-white transition-transform active:scale-95"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio..." : <span className="flex items-center gap-2">Invia <Send className="h-4 w-4" /></span>}
      </Button>
    </form>
  );
}