import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      {/* Aumentato l'altezza da h-16 a h-24 e i padding verticali */}
      <div className="container mx-auto flex h-24 items-center justify-between px-8">
        
        {/* Logo Section: Icona più grande e testo più spaziato */}
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-90">
          <Scale className="h-9 w-9 text-primary" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-bold tracking-tight text-primary leading-tight">
              Simona Grossi
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Avvocato Legale
            </span>
          </div>
        </Link>

        {/* Navigation: Font più grandi, gap maggiore e pulsante più "importante" */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 mr-4">
            <Link href="#servizi" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              Servizi
            </Link>
            <Link href="#chi-sono" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              Chi Sono
            </Link>
           {/*  <Link href="#assistente-ai" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              Assistente AI
            </Link> */}
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
        </nav>
      </div>
    </header>
  );
}