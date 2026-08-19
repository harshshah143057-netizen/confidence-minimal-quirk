import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";

const title = "Prognostic Infotech & Training Center — Web, Mobile & AI Studio";
const description =
  "Rajkot-based software studio building scalable web, mobile, SaaS and AI products — plus a training center for programmers and learners.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Prognostic Infotech & Training Center",
          description,
          telephone: "+919033152603",
          email: "info@prognosticinfotech.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3rd Floor, RuLoans Building, Tagore Rd, Near Virani Chowk",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            postalCode: "360005",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.facebook.com/prognosticinfotech/",
            "https://www.instagram.com/prognosticinfotech/",
            "https://in.linkedin.com/in/nasit-chetan",
          ],
        }),
      },
    ],
  }),
});

const stats = [
  { value: "9+", label: "Core Services" },
  { value: "2", label: "Platforms — Android & iOS" },
  { value: "100%", label: "User-Centered Builds" },
];

const services = [
  {
    name: "Mobile App Development",
    body: "Android and iOS applications engineered for performance — from first prototype to store release, with clean architecture that survives growth.",
  },
  {
    name: "Custom Web Development",
    body: "Frontend and backend built together. High-performance web platforms with modern interfaces designed around real user engagement.",
  },
  {
    name: "UI/UX Design & Prototyping",
    body: "User-centered design and clickable prototypes so decisions get made on screens, not on assumptions.",
  },
  {
    name: "AI & Machine Learning",
    body: "Predictive analytics and AI chatbot development that turn the data you already collect into decisions you can act on.",
  },
  {
    name: "Cloud & DevOps",
    body: "Cloud infrastructure management, CI/CD pipeline automation and API integration and optimization that keep releases calm.",
  },
  {
    name: "SaaS, E-commerce & Consulting",
    body: "Subscription products, storefronts and software consulting for teams who need a second opinion before they commit.",
  },
];

const capabilities = [
  { label: "Mobile & SaaS", word: "SHIPPED" },
  { label: "Frontend & backend", word: "One team" },
  { label: "APIs integrated and", word: "OPTIMIZED" },
  { label: "Design that is", word: "User-first" },
  { label: "Predictive analytics &", word: "CHATBOTS" },
  { label: "Cloud, CI/CD and", word: "Uptime" },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="shell pb-20 pt-16 md:pb-28 md:pt-24">
        <h1 className="text-[3.25rem] font-semibold leading-[0.95] tracking-tight md:text-[7rem]">
          <span className="block text-foreground">Design</span>
          <span className="block text-foreground/55 md:pl-[14%]">App Dev</span>
          <span className="block text-foreground md:pl-[28%]">Automate</span>
        </h1>
        <div className="mt-16 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <div className="text-3xl font-medium md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Prognostic Infotech &amp; Training Center turns complex business problems into scalable
            web, mobile and AI systems — and stays a perfect place for programmers and learners
            while doing it.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="shell py-24 md:py-32">
        <p className="section-label">[ What We Deliver ]</p>
        <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.9rem]">
          Everything we <span className="font-serif italic font-normal">build</span> is designed to
          save you time, reduce chaos, and lighten the load.
        </h2>
        <div className="mt-14 flex flex-col gap-4">
          {services.map((s) => (
            <article
              key={s.name}
              className="grid gap-4 rounded-2xl bg-surface-2 px-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:px-10 md:py-10"
            >
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <h3 className="text-2xl font-semibold tracking-tight md:text-right md:text-[1.75rem]">
                {s.name}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <Process />

      {/* Capabilities — dark grid */}
      <section id="capabilities" className="bg-night py-24 text-night-foreground md:py-32">
        <div className="shell">
          <p className="section-label text-night-muted">[ Capabilities ]</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.word}
                className="flex min-h-[190px] flex-col justify-between rounded-2xl border border-white/10 p-7"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-night-muted">
                  {c.label}
                </span>
                <span className="text-3xl font-semibold tracking-tight">{c.word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      {/* Contact / closing dark hero */}
      <section id="contact" className="shell pb-16">
        <div className="rounded-3xl bg-night px-6 py-14 text-night-foreground md:px-12 md:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <nav className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#services" className="nav-bracket-invert">
                Services
              </a>
              <a href="#process" className="nav-bracket-invert">
                Process
              </a>
              <a href="#capabilities" className="nav-bracket-invert">
                Capabilities
              </a>
              <a href="#faq" className="nav-bracket-invert">
                FAQ
              </a>
            </nav>
            <a
              href="https://www.instagram.com/prognosticinfotech/"
              target="_blank"
              rel="noreferrer"
              className="nav-bracket-invert shrink-0"
            >
              Instagram
            </a>
          </div>

          <h2 className="mx-auto mt-24 max-w-3xl text-center text-3xl font-semibold leading-[1.2] tracking-tight md:mt-32 md:text-[3.25rem]">
            Let&apos;s turn your daily <span className="font-serif italic font-normal">chaos</span>{" "}
            into
            <span className="mt-2 block font-serif font-normal italic md:mt-3">
              clean automated flow
            </span>
          </h2>

          <div className="mt-24 grid gap-8 md:mt-32 md:grid-cols-2 md:items-end">
            <div>
              <div className="text-2xl font-semibold lowercase tracking-tight">
                prognostic
                <sup className="ml-0.5 align-super text-[0.5em] text-night-muted">®</sup>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-night-muted">
                3rd Floor, RuLoans Building, Tagore Rd, Opp. Dharti Honda Service Station,
                <br />
                Near Virani Chowk, Rajkot, Gujarat 360005
              </p>
              <p className="mt-3 text-xs text-night-muted">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <div className="md:text-right">
                <p className="text-xs text-night-muted">Email</p>
                <a href="mailto:info@prognosticinfotech.in" className="text-base font-medium">
                  info@prognosticinfotech.in
                </a>
              </div>
              <div className="md:text-right">
                <p className="text-xs text-night-muted">Phone</p>
                <a href="tel:+919033152603" className="text-base font-medium">
                  (+91) 90331 52603
                </a>
              </div>
              <div className="flex gap-4 text-xs text-night-muted">
                <a href="https://www.facebook.com/prognosticinfotech/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://in.linkedin.com/in/nasit-chetan" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
