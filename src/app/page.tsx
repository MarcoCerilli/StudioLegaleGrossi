import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { AiChat } from "@/components/ai-chat";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Scale, 
  Briefcase, 
  Gavel, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-lawyer");
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-simone");
  const scalesImg = PlaceHolderImages.find(img => img.id === "legal-scales");
  
  const services = [
    {
      title: "Diritto di Famiglia",
      desc: "Separazioni, divorzi, affidamento minori e tutela dei diritti familiari con approccio risolutivo.",
      icon: Users,
    },
    {
      title: "Diritto Civile",
      desc: "Consulenza contrattuale, risarcimento danni e controversie di natura civilistica.",
      icon: Scale,
    },
    {
      title: "Diritto del Lavoro",
      desc: "Assistenza per licenziamenti, mobbing, differenze retributive e sicurezza sul lavoro.",
      icon: Briefcase,
    },
    {
      title: "Diritto Penale",
      desc: "Difesa tecnica in procedimenti penali per persone fisiche e responsabilità degli enti.",
      icon: Gavel,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-background">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 animate-fade-in">
                <ShieldCheck className="mr-2 h-4 w-4" />
                <span>Integrità e Professionalità</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight">
                Simone Grossi <br />
                <span className="text-accent italic font-light">Avvocato</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-body">
                Soluzioni legali concrete per cittadini e imprese, guidate da competenza e rigore professionale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg rounded-2xl shadow-lg">
                  Consulenza Legale
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 px-8 py-7 text-lg rounded-2xl">
                  Scopri i Servizi
                </Button>
              </div>
            </div>
            
            <div className="relative z-10 mx-auto lg:mx-0 w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src={heroImg?.imageUrl || ""} 
                alt={heroImg?.description || "Simone Grossi Avvocato"} 
                fill 
                className="object-cover"
                data-ai-hint={heroImg?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-accent/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-primary/10 blur-[80px] rounded-full" />
        </section>

        {/* Services Section */}
        <section id="servizi" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Aree di Attività</h2>
              <p className="font-headline text-4xl md:text-5xl font-bold text-primary">Eccellenza Legale e Strategia</p>
              <p className="text-lg text-muted-foreground">Un approccio analitico e determinato per ogni sfida legale, garantendo la massima tutela.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div key={i} className="p-8 rounded-3xl border border-transparent bg-background/50 hover:bg-white hover:border-primary/10 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-sono" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl z-10">
                  <Image 
                    src={aboutImg?.imageUrl || ""} 
                    alt="Simone Grossi" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    data-ai-hint={aboutImg?.imageHint}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10" />
                <div className="absolute top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                
                <div className="absolute -bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <HeartHandshake className="text-accent h-6 w-6" />
                    <span className="font-bold text-primary">Missione</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"Ogni caso merita una strategia su misura e un impegno instancabile per il risultato."</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Chi Sono</h2>
                  <h3 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">Avv. Simone Grossi</h3>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground font-body">
                  <p>
                    L'Avvocato Simone Grossi esercita la professione forense con una visione moderna e dinamica del diritto. La sua esperienza è maturata attraverso anni di assistenza legale complessa, dove la precisione tecnica si unisce a una spiccata capacità di problem solving.
                  </p>
                  <p>
                    Lo studio si distingue per l'uso di strumenti tecnologici all'avanguardia per la gestione delle pratiche, garantendo trasparenza e velocità di risposta ai propri assistiti.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Patrocinante in Cassazione",
                      "Esperto in Arbitrato e Mediazione",
                      "Consulente per primarie aziende nazionali",
                      "Formatore in ambito di protezione dati"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-primary font-medium">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Symbolism Section (Bonus for "Bilancia etc") */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary">Giustizia ed Equilibrio</h2>
                <p className="text-lg text-muted-foreground italic">
                  "La legge è uguale per tutti, ma la sua applicazione richiede equilibrio e una profonda conoscenza dei meccanismi giuridici."
                </p>
                <div className="h-1 w-20 bg-accent" />
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src={scalesImg?.imageUrl || ""} 
                  alt="Bilancia della Giustizia" 
                  fill 
                  className="object-cover"
                  data-ai-hint={scalesImg?.imageHint}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section id="assistente-ai" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                Diritto & Tecnologia
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Assistenza Informativa AI</h2>
              <p className="text-lg text-muted-foreground">Poni le tue domande al nostro assistente intelligente per orientarti tra le materie legali.</p>
            </div>
            
            <AiChat />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <ContactForm />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Scale className="h-8 w-8 text-accent" />
                <span className="font-headline text-2xl font-bold tracking-tighter">Simone Grossi</span>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                Difesa legale d'eccellenza e consulenza strategica. Impegno e trasparenza al servizio del diritto.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline font-bold text-lg mb-6">Navigazione</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#servizi" className="hover:text-accent transition-colors">Servizi</a></li>
                <li><a href="#chi-sono" className="hover:text-accent transition-colors">Chi Sono</a></li>
                <li><a href="#assistente-ai" className="hover:text-accent transition-colors">Assistente AI</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline font-bold text-lg mb-6">Servizi</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li>Diritto di Famiglia</li>
                <li>Diritto Civile</li>
                <li>Diritto Penale</li>
                <li>Diritto del Lavoro</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Note Legali</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Avv. Simone Grossi. Tutti i diritti riservati.</p>
            <p>P.IVA 09876543210 | Ordine degli Avvocati di Roma</p>
          </div>
        </div>
      </footer>
      
      <WhatsappButton />
      <Toaster />
    </div>
  );
}