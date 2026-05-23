import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "wouter";
import { site, socialLinks, whatsappLinks } from "@/lib/site";

const iconByLabel = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <div className="grid gap-9 text-sm md:grid-cols-[1.35fr_1fr_1fr_auto] md:items-start">
          <div className="space-y-4">
            <div>
              <p className="font-serif text-2xl text-white" translate="no">
                LevelUp <span className="text-brand">Design Co.</span>
              </p>
              <p className="mt-3 max-w-sm text-white/55">
                Diseño web, branding, SEO y automatización.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand" />
                {site.email}
              </a>
              <a
                href="https://goo.gl/maps/4pYj5BqQYFy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <MapPin className="h-4 w-4 text-brand" />
                {site.location}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">
              Redes
            </p>
            <div className="flex flex-col items-start gap-2">
              {socialLinks.map(({ label, href }) => {
                const Icon = iconByLabel[label as keyof typeof iconByLabel];

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-brand" />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">
              Legal
            </p>
            <div className="flex flex-col items-start gap-2 text-white/60">
              <Link to="/aviso-legal" className="transition hover:text-white">
                Aviso legal
              </Link>
              <Link to="/privacidad" className="transition hover:text-white">
                Política de privacidad
              </Link>
              <Link to="/cookies" className="transition hover:text-white">
                Política de cookies
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <a
              href={whatsappLinks.call}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand/35 bg-brand/10 px-4 py-2 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
            >
              Reservar llamada
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-white/60 transition hover:text-white"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4 text-brand" />
            </a>
            <p className="text-white/40" translate="no">
              © {year} LevelUp Design Co. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
