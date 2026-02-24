"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Messaggio inviato",
      description: "La ringraziamo per averci contattato. Le risponderemo al più presto.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h3 className="font-headline text-3xl font-bold text-primary mb-4">Mettiamoci in Contatto</h3>
          <p className="text-lg text-muted-foreground">
            Per richiedere una consulenza o fissare un appuntamento in studio, non esiti a contattarci tramite il modulo o i nostri recapiti diretti.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-lg font-medium">studio@simonagrossi.it</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Telefono</p>
              <p className="text-lg font-medium">+39 0123 456789</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Sede</p>
              <p className="text-lg font-medium">Via delle Leggi, 12 - 00100 Roma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg border">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" placeholder="Mario Rossi" required className="bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="mario.rossi@email.it" required className="bg-background" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Oggetto</Label>
            <Input id="subject" placeholder="Consulenza Diritto di Famiglia" required className="bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Messaggio</Label>
            <Textarea id="message" placeholder="Come possiamo aiutarla?" className="min-h-[150px] bg-background" required />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-headline" disabled={isSubmitting}>
            {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
}
