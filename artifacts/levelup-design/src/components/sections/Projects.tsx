import { ProjectCard } from "@/components/ProjectCard";
import homeCarlosScalera from "@/assets/home-carlos-scalera.png";
import homeJudith from "@/assets/home-judith.png";
import homeLevelupInteriores from "@/assets/home-levelupinteriores.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "carlos-scalera",
    title: "Carlos Scalera",
    description:
      "Saxofonista profesional para bodas y eventos. Web elegante con estética premium para reservas y presencia digital.",
    image: homeCarlosScalera,
    imageAlt: "Vista previa del sitio web de Carlos Scalera, saxofonista",
    link: "https://carlos-scalera-fullstack.vercel.app",
    tags: ["Web profesional", "Música", "Eventos"],
  },
  {
    id: "judith",
    title: "Judith",
    description:
      "Detalles personalizados y decoración de eventos en Málaga. Web cálida orientada a captar clientes y presupuestos.",
    image: homeJudith,
    imageAlt: "Vista previa del sitio web de Judith, detalles y eventos en Málaga",
    link: "https://judith-fullstack.vercel.app",
    tags: ["Web profesional", "Eventos", "Málaga"],
  },
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    description:
      "Empresa especializada en reformas de cocinas, baños y reformas integrales en Málaga.",
    image: homeLevelupInteriores,
    imageAlt: "Vista previa del proyecto web LevelUp Interiores",
    link: "https://levelup-interiores-fullstack.vercel.app",
    tags: ["Web profesional", "Diseño", "Málaga"],
  },
];

function ProjectsBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c0610] to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_-10%,rgba(123,30,43,0.22),transparent_55%),radial-gradient(ellipse_60%_45%_at_90%_110%,rgba(123,30,43,0.14),transparent_50%),radial-gradient(circle_at_50%_40%,rgba(255,160,90,0.05),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(115deg,transparent_42%,rgba(123,30,43,0.08)_50%,transparent_58%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="projects-neon-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(123,30,43,0)" />
            <stop offset="45%" stopColor="rgba(123,30,43,0.55)" />
            <stop offset="100%" stopColor="rgba(123,30,43,0)" />
          </linearGradient>
          <linearGradient id="projects-neon-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,160,90,0)" />
            <stop offset="50%" stopColor="rgba(255,140,80,0.35)" />
            <stop offset="100%" stopColor="rgba(255,160,90,0)" />
          </linearGradient>
        </defs>
        <path
          d="M-40 520 C 180 380, 320 640, 520 480 S 880 300, 1240 420"
          fill="none"
          stroke="url(#projects-neon-a)"
          strokeWidth="1.2"
        />
        <path
          d="M-20 180 C 240 320, 420 80, 640 220 S 960 380, 1220 260"
          fill="none"
          stroke="url(#projects-neon-b)"
          strokeWidth="0.9"
        />
        <path
          d="M80 720 L 420 580 L 760 660 L 1120 520"
          fill="none"
          stroke="rgba(123,30,43,0.25)"
          strokeWidth="0.6"
          strokeDasharray="6 14"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative w-full overflow-hidden">
      <ProjectsBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Nuestros trabajos
          </div>

          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-white">
            Proyectos destacados
          </h2>

          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
            Diseño, desarrollo y optimización digital de proyectos reales que
            generan resultados.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
