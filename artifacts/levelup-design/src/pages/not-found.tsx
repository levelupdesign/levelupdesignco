import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="Página no encontrada | LevelUp Design Co."
        description="La página solicitada no existe o se ha movido."
        noindex
      />
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-5 pt-24 pb-16">
        <div className="max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
            Error 404
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Página no encontrada
          </h1>
          <p className="mt-4 text-white/60">
            El enlace no existe o ya no está disponible. Puedes volver al inicio y continuar navegando.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_12px_30px_rgba(123,30,43,0.35)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
