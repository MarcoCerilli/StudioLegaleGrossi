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
  <DialogContent className="sm:max-w-[400px] rounded-[1.5rem] p-6 border-none shadow-2xl gap-0">
    <DialogHeader className="flex flex-col items-center">
      {/* Icona più piccola e discreta */}
      <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-3">
        <CalendarCheck className="h-6 w-6 text-primary" />
      </div>
      
      <DialogTitle className="text-xl font-headline text-center text-primary">
        Consulenza Professionale
      </DialogTitle>
      
      <DialogDescription className="text-center text-sm font-body mt-1">
        L'Avv. Simona Grossi riceve presso lo studio di Terracina.
      </DialogDescription>
    </DialogHeader>

    <div className="mt-4 space-y-3">
      {/* Informativa Onorario più sottile */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
              Informativa
            </p>
            <p className="text-[13px] text-muted-foreground leading-snug">
              La consulenza è un'attività professionale **soggetta a onorario**.
            </p>
          </div>
        </div>
      </div>

      {/* Badge riservatezza compatto */}
      <div className="flex items-center justify-center gap-2 py-1">
        <ShieldCheck className="h-4 w-4 text-accent" />
        <span className="text-[12px] font-medium text-primary/70">
          Riservatezza garantita
        </span>
      </div>

      {/* Pulsanti meno alti (py-6 invece di py-7) */}
      <div className="grid gap-2 pt-2">
        <Button
          className="w-full bg-[#723d5a] hover:bg-[#5a3047] py-6 text-base font-bold rounded-lg text-white transition-all shadow-sm"
          onClick={() => setIsOpen(false)}
        >
          Ho capito, procedi <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          className="w-full text-[#af52de] hover:text-[#9a42c5] hover:bg-[#af52de]/5 py-4 text-sm font-semibold"
          onClick={() => (window.location.href = "tel:+393500632527")}
        >
          Chiama lo studio
        </Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
  );
}