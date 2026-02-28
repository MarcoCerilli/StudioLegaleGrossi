"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Send, MapPin } from "lucide-react";

// Componente per l'icona ufficiale di WhatsApp (SVG originale)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.04L0 24l6.117-1.605a11.837 11.837 0 005.925 1.586h.005c6.632 0 12.03-5.396 12.033-12.03a11.85 11.85 0 00-3.529-8.511z"/>
  </svg>
);

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione chiamata API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Messaggio inviato",
      description: "La ringraziamo per averci contattato. Le risponderemo al più presto.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-12">
      
      {/* COLONNA SINISTRA: RECAPITI */}
      <div className="space-y-10">
        <div>
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Mettiamoci in Contatto
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-body">
            Per richiedere una consulenza o fissare un appuntamento, può contattarmi direttamente sul cellulare o tramite messaggio. 
            Ricevo su appuntamento presso lo studio di Roma.
          </p>
        </div>

        <div className="space-y-8">
          {/* Blocco Cellulare/Chiamata */}
          <a
            href="tel:+393500632527"
            className="flex items-center gap-6 group no-underline"
          >
            <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
              <Phone className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                Chiamata Diretta
              </p>
              <p className="text-2xl font-bold text-primary tracking-tight">
                +39 350 063 2527
              </p>
            </div>
          </a>

          {/* Blocco WhatsApp con Icona Originale e Colore Brand */}
          <a
            href="https://wa.me/393500632527"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group no-underline"
          >
            <div className="p-4 rounded-2xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#25D366]/20 transition-all duration-300">
              <WhatsAppIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                WhatsApp
              </p>
              <p className="text-2xl font-bold text-primary tracking-tight">
                Messaggio Istantaneo
              </p>
            </div>
          </a>

          {/* Blocco Sede */}
         {/*  <div className="flex items-center gap-6 group">
            <div className="p-4 rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-primary transition-all duration-300">
              <MapPin className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                Sede Principale
              </p>
              <p className="text-2xl font-bold text-primary tracking-tight">
                Via delle Leggi, 12 — Roma
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* COLONNA DESTRA: FORM PROFESSIONALE */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-bold text-primary/80 ml-1">Nome Completo</Label>
              <Input id="name" placeholder="Mario Rossi" required className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary/20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-primary/80 ml-1">Email</Label>
              <Input id="email" type="email" placeholder="mario.rossi@email.it" required className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary/20" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-bold text-primary/80 ml-1">Oggetto della richiesta</Label>
            <Input id="subject" placeholder="Es. Consulenza Diritto Civile" required className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary/20" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold text-primary/80 ml-1">Messaggio</Label>
            <Textarea id="message" placeholder="Descriva brevemente la sua necessità..." className="min-h-[160px] bg-slate-50 border-none rounded-xl resize-none focus-visible:ring-primary/20 p-4" required />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 py-8 text-xl font-bold rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Invio in corso..."
            ) : (
              <span className="flex items-center gap-2">
                Invia Messaggio Professionale <Send className="h-5 w-5" />
              </span>
            )}
          </Button>
          
          <p className="text-[10px] text-center text-muted-foreground px-4">
            Il trattamento dei dati avviene nel rispetto della normativa privacy vigente.
          </p>
        </form>
      </div>
    </div>
  );
}