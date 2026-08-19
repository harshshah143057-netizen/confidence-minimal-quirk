import { useState } from "react";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your workflows, users and technical constraints before a single line of code is written.",
  },
  {
    n: "02",
    title: "Design Around You",
    body: "User-centered UI/UX and prototyping that shows exactly how the product will look, feel and flow.",
  },
  {
    n: "03",
    title: "Build What You Need",
    body: "Frontend, backend and APIs engineered for scale — mobile, web or SaaS, nothing you don't need.",
  },
  {
    n: "04",
    title: "Deploy & Support",
    body: "Cloud infrastructure, CI/CD pipelines and ongoing consulting so releases stay boring and safe.",
  },
];

export function Process() {
  const [open, setOpen] = useState(1);

  return (
    <section id="process" className="shell py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="section-label">[ How We Work ]</p>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.6rem]">
            <span className="text-foreground/55">Software and training that take you from</span>{" "}
            <span className="font-serif italic font-normal">chaos</span>{" "}
            <span className="text-foreground">→ clarity.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setOpen(i)}
              className="rounded-2xl bg-surface-2 px-6 py-6 text-left transition-colors hover:bg-secondary"
            >
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6">
                <span className="text-2xl font-medium text-muted-foreground">{s.n}</span>
                <span className="text-xl font-semibold leading-snug">{s.title}</span>
              </div>
              {open === i && (
                <p className="mt-4 max-w-md pl-[3.5rem] text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
