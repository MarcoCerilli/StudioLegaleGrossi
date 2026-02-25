
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-primary" />
          <div className="flex flex-col">
            <span className="font-headline text-lg font-bold tracking-tighter text-primary leading-none">Simona Grossi</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Avvocato</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servizi" className="text-sm font-medium hover:text-accent transition-colors">Servizi</Link>
          <Link href="#chi-sono" className="text-sm font-medium hover:text-accent transition-colors">Chi Sono</Link>
          <Link href="#assistente-ai" className="text-sm font-medium hover:text-accent transition-colors">Assistente AI</Link>
          <Link href="#contatti">
            <Button variant="default" size="sm" className="font-headline bg-primary hover:bg-primary/90">Appuntamento</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
