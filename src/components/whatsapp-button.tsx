import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsappButton() {
  const phoneNumber = "390000000000"; // Replace with actual number
  const message = encodeURIComponent("Salve Avvocata Grossi, vorrei richiedere informazioni su...");
  
  return (
    <Link 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 duration-300"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="absolute -top-12 right-0 hidden md:block whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow-md animate-bounce">
        Chatta con noi
      </span>
    </Link>
  );
}
