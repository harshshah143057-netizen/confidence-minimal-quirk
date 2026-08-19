import { useState } from "react";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Mobile apps for Android and iOS, custom web platforms, SaaS products, e-commerce builds, API work and AI/ML solutions.",
  },
  {
    q: "Do you also train developers?",
    a: "Yes. Prognostic is a perfect place for programmers and learners — we run a training center alongside our client work.",
  },
  {
    q: "Can you handle cloud and deployment?",
    a: "We manage cloud infrastructure, CI/CD pipeline automation and DevOps so your releases ship predictably.",
  },
  {
    q: "Where are you based?",
    a: "3rd Floor, RuLoans Building, Tagore Rd, near Virani Chowk, Rajkot, Gujarat 360005 — working with clients anywhere.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="shell py-24 md:py-32">
      <p className="section-label">[ FAQ ]</p>
      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.4rem]">
          Questions, answered <span className="font-serif italic font-normal">plainly</span>.
        </h2>
        <div className="divide-y divide-border border-t border-border">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-6 text-left"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <span className="text-lg font-medium leading-snug">{f.q}</span>
                <span className="shrink-0 text-muted-foreground">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && (
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
