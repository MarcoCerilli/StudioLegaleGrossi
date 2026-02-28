"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import {
  Users,
  Scale,
  Briefcase,
  Gavel,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Phone,
  MessageSquare,
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

// Icona WhatsApp SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.04L0 24l6.117-1.605a11.837 11.837 0 005.925 1.586h.005c6.632 0 12.03-5.396 12.033-12.03a11.85 11.85 0 00-3.529-8.511z" />
  </svg>
);

export default function Home() {
  const heroImg = PlaceHolderImages.find(
    (img) => img.id === "legal-office-hero",
  );
  const aboutImg = PlaceHolderImages.find(
    (img) => img.id === "legal-documents-about",
  );
  const scalesImg = PlaceHolderImages.find((img) => img.id === "legal-scales");

  const services = [
    {
      title: "Diritto di Famiglia",
      desc: "Separazioni, divorzi e tutela dei minori con approccio umano e risolutivo.",
      icon: Users,
    },
    {
      title: "Diritto Civile",
      desc: "Consulenza contrattuale, risarcimento danni e controversie civili.",
      icon: Scale,
    },
    {
      title: "Diritto del Lavoro",
      desc: "Assistenza per licenziamenti, mobbing e sicurezza sul lavoro.",
      icon: Briefcase,
    },
    {
      title: "Diritto Penale",
      desc: "Difesa tecnica in procedimenti penali per persone fisiche ed enti.",
      icon: Gavel,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-12 md:pt-24 md:pb-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 space-y-8 text-center lg:text-left lg:pr-8">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                <ShieldCheck className="mr-2 h-4 w-4" />
                <span>Professionalità a Terracina</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-[1.1] tracking-tight">
                Simona Grossi <br />
                <span className="text-accent italic font-light">Avvocato</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-body leading-relaxed">
                Soluzioni legali concrete e consulenza strategica nel territorio
                di <strong>Terracina</strong>, guidate da competenza e rigore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg rounded-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105"
                >
                  <Link href="#contatti">Consulenza Legale</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/5 px-8 py-7 text-lg rounded-xl transition-all"
                >
                  <Link href="#servizi">Scopri i Servizi</Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10 w-full flex justify-center lg:justify-end lg:pr-12">
              {/* Contenitore Immagine Ridotto */}
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/20">
                <Image
                  src={heroImg?.imageUrl || ""}
                  alt="Avvocato Simona Grossi Terracina"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Overlay sfumato */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Glow decorativo di sfondo proporzionato */}
              <div className="absolute -bottom-8 -right-8 -z-10 w-48 h-48 bg-[#723d5a]/10 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Aree di Attività
              </h2>
              <p className="font-headline text-4xl font-bold text-primary">
                Eccellenza Legale e Strategia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl border border-transparent bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-sono" className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={aboutImg?.imageUrl || ""}
                    alt="Avvocato Simona Grossi"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border max-w-[240px]">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartHandshake className="text-accent h-5 w-5" />
                    <span className="font-bold text-sm text-primary">
                      Il Nostro Impegno
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    "Ogni caso merita una strategia su misura e un impegno
                    instancabile."
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                    Lo Studio
                  </h2>
                  <h3 className="font-headline text-4xl font-bold text-primary leading-tight">
                    Esperienza e Metodo
                  </h3>
                </div>
                <div className="space-y-6 text-muted-foreground font-body text-lg">
                  <p>
                    L'Avvocato Simona Grossi esercita la professione forense con
                    una visione moderna del diritto, unendo precisione tecnica a
                    una spiccata capacità di problem solving.
                  </p>
                  <p>
                    Lo studio riceve su appuntamento nel territorio di{" "}
                    <strong>Terracina</strong>, offrendo assistenza legale sia
                    in ambito giudiziale che stragiudiziale.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Diritto Civile",
                      "Diritto di Famiglia",
                      "Diritto del Lavoro",
                      "Diritto Penale",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-primary font-medium"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contatti"
          className="py-20 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {" "}
              {/* Stringiamo il contenitore principale */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testi e Recapiti */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#723d5a] mb-3">
                      Contatti
                    </h2>
                    <h3 className="font-headline text-4xl font-bold text-primary mb-4">
                      Mettiamoci in Contatto
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Per richiedere una consulenza o fissare un appuntamento,
                      può contattarmi direttamente.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="tel:+393500632527"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-[#723d5a]/5 text-[#723d5a] group-hover:bg-[#723d5a] group-hover:text-white transition-all">
                        <Phone className="h-6 w-6" />
                      </div>
                      <span className="text-xl font-bold text-primary">
                        +39 350 063 2527
                      </span>
                    </a>

                    <a
                      href="https://wa.me/393500632527"
                      target="_blank"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                        <WhatsAppIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xl font-bold text-primary">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </div>

                {/* Il Form vero e proprio */}
                <div className="bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* Glow di sfondo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full -z-10" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Scale className="h-8 w-8 text-accent" />
                <span className="font-headline text-2xl font-bold tracking-tighter">
                  Simona Grossi
                </span>
              </div>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-sm">
                Difesa legale d'eccellenza e consulenza strategica. Un approccio
                moderno e rigoroso al servizio del diritto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-headline font-bold text-sm mb-8 uppercase tracking-widest text-accent">
                  Esplora
                </h4>
                <ul className="space-y-4 text-sm text-primary-foreground/70">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#servizi"
                      className="hover:text-white transition-colors"
                    >
                      Servizi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#chi-sono"
                      className="hover:text-white transition-colors"
                    >
                      Chi Sono
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm mb-8 uppercase tracking-widest text-accent">
                  Contatti
                </h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Si riceve su appuntamento presso il territorio di <br />
                  <strong>Terracina (LT)</strong>
                </p>
              </div>
            </div>

            <div className="lg:pl-8 space-y-8">
              <h4 className="font-headline font-bold text-sm mb-8 uppercase tracking-widest text-primary-foreground/90">
                Contatto Diretto
              </h4>
              <div className="space-y-6">
                <a
                  href="tel:+393500632527"
                  className="group flex items-center gap-5 text-primary-foreground/70 hover:text-white transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 group-hover:bg-accent group-hover:text-primary transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                      Telefono
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                      +39 350 063 2527
                    </span>
                  </div>
                </a>
                <a
                  href="https://wa.me/393500632527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 text-primary-foreground/70 hover:text-[#25D366] transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                      WhatsApp
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                      Messaggio Istantaneo
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-primary-foreground/40 font-bold uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} Avv. Simona Grossi. Tutti i diritti
              riservati.
            </p>
            <div className="flex gap-6 items-center">
              <span>P.IVA 12345678901</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Ordine degli Avvocati di Latina</span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsappButton />
      <Toaster />
    </div>
  );
}
