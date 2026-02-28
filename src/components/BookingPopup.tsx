"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ShieldCheck, Info, ArrowRight } from "lucide-react";

export function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[450px] rounded-[2rem] p-8 border-none shadow-2xl">
        <DialogHeader className="space-y-4">
          <div className="mx-auto bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center">
            <CalendarCheck className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-headline text-center text-primary">
            Consulenza Professionale
          </DialogTitle>
          <DialogDescription className="text-center text-base font-body">
            L'Avvocato Simona Grossi riceve presso lo studio di Terracina per
            fornire assistenza legale dedicata.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-primary uppercase tracking-wider">
                  Informativa Professionale
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Si informa che, in conformità con i parametri forensi, la
                  consulenza legale è un'attività professionale **soggetta a
                  onorario**.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <p className="text-[13px] text-muted-foreground italic">
                Il preventivo dettagliato verrà fornito durante il primo
                incontro in base alla complessità del caso.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-primary/80">
              Massima riservatezza garantita
            </span>
          </div>

          <div className="grid gap-3 pt-4">
            {/* Pulsante Bordeaux (Identico a Navbar) */}
            <Button
              className="w-full bg-[#723d5a] hover:bg-[#5a3047] py-7 text-lg font-bold rounded-xl text-white transition-all shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Ho capito, procedi <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Pulsante Viola con Testo Bianco Fisso (anche in hover) */}
            <Button
              variant="default"
              className="w-full bg-[#af52de] hover:bg-[#9a42c5] py-7 text-lg font-bold rounded-xl text-white hover:text-white border-none transition-all shadow-md"
              onClick={() => (window.location.href = "tel:+393500632527")}
            >
              Oppure chiama lo studio
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}