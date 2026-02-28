"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import { BookingPopup } from "./BookingPopup";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      {/* Altezza aumentata a h-24 per un aspetto più premium */}
      <div className="container mx-auto flex h-24 items-center justify-between px-8">
        {/* Logo Section: Icona e testi più grandi */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-90"
        >
          <Scale className="h-10 w-10 text-primary" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-bold tracking-tight text-primary leading-tight">
              Simona Grossi
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Avvocato Legale
            </span>
          </div>
        </Link>

        {/* Navigation: Link più grandi e pulsante con lo stile della foto */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10 mr-6">
            <Link
              href="#servizi"
              className="text-lg md:text-xl font-semibold text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Servizi
            </Link>
            <Link
              href="#chi-sono"
              className="text-lg md:text-xl font-semibold text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Chi Sono
            </Link>
          </div>

          <Link href="#contatti">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-6 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Prenota Appuntamento
            </Button>
          </Link>

          {/* Il componente popup automatico */}
          <BookingPopup />
        </nav>
      </div>
    </header>
  );
}
