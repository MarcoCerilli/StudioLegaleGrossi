import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-headline text-xl font-bold tracking-tighter text-primary">Simona Grossi</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Avvocata</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servizi" className="text-sm font-medium hover:text-accent transition-colors">Servizi</Link>
          <Link href="#chi-sono" className="text-sm font-medium hover:text-accent transition-colors">Chi Sono</Link>
          <Link href="#assistente-ai" className="text-sm font-medium hover:text-accent transition-colors">Assistente AI</Link>
          <Link href="#contatti">
            <Button variant="default" className="font-headline bg-primary hover:bg-primary/90">Richiedi Appuntamento</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
