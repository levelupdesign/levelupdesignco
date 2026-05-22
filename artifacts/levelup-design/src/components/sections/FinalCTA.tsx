import { MessageCircle } from "lucide-react";
import { whatsappLinks } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
          Contacto
        </div>

        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white leading-tight">
          Todo negocio merece una presencia digital que impulse su crecimiento y represente a empresas reales.
        </h2>

        <p className="mt-5 text-base text-white/60 leading-relaxed max-w-xl mx-auto">
          Si una empresa busca mejorar su imagen, captar más clientes o estructurar su presencia online, el estudio está disponible para valorar el proyecto sin compromiso.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLinks.budget}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_4px_20px_rgba(123,30,43,0.3)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-px hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_28px_rgba(123,30,43,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar presupuesto
          </a>
          <a
            href={whatsappLinks.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-md border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-px hover:border-brand/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft sm:w-auto"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
