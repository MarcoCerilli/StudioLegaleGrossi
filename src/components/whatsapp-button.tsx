"use client";

import Link from "next/link";

// Icona WhatsApp Ufficiale (SVG)
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

export function WhatsappButton() {
  const phoneNumber = "393500632527"; 
  const message = encodeURIComponent("Buongiorno Avvocato Grossi, vorrei richiedere informazioni su...");
  
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Tooltip */}
      <span className="mb-4 hidden md:block whitespace-nowrap rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-2xl border border-slate-100 animate-bounce relative">
        Scrivici ora
        <span className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-white border-r border-b border-slate-100"></span>
      </span>

      <Link 
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 duration-300 group"
        aria-label="Contattaci su WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 z-10" />
        
        {/* Nuovo Impulso Soft */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-soft-pulse group-hover:hidden"></span>

        <style jsx>{`
          @keyframes soft-pulse {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }
          .animate-soft-pulse {
            animation: soft-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </Link>
    </div>
  );
}