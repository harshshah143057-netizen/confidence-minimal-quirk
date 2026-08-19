import shot1 from "@/assets/edvance-1.jpg.asset.json";
import shot2 from "@/assets/edvance-2.jpg.asset.json";
import shot3 from "@/assets/edvance-3.jpg.asset.json";
import shot4 from "@/assets/edvance-4.jpg.asset.json";

const chat = [
  { side: "in", text: "Sir, my daughter finished 5 chapters in one week" },
  { side: "out", text: "Love that. Want us to add Gujarati quiz battles next?" },
  { side: "in", text: "Yes please — she competes with her friends daily now" },
  { side: "out", text: "Rolling it out by tomorrow" },
];

const widgets = ["Learn with AI", "Quiz Battles", "Earn Coins & XP", "Leaderboard Rank", "Track Progress"];

export function Showcase() {
  return (
    <section id="work" className="shell py-24 md:py-32">
      <p className="section-label">[ Selected Work ]</p>
      <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.9rem]">
        <span className="text-foreground">EdvanceAI</span>{" "}
        <span className="text-foreground/55">— an AI learning app we designed, built and shipped</span>{" "}
        <span className="font-serif italic font-normal">for students</span>.
      </h2>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {/* Chat card */}
        <div className="rounded-2xl bg-surface-2 p-6 md:col-span-2 md:p-10">
          <h3 className="text-xl font-semibold tracking-tight">
            <span className="text-foreground">Partnership,</span>{" "}
            <span className="text-foreground/55">Made Better</span>
          </h3>
          <p className="mt-2 text-sm text-foreground/50">
            Fast replies, clear updates &amp; zero stress.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {chat.map((c) => (
              <div
                key={c.text}
                className={
                  c.side === "in"
                    ? "max-w-[78%] self-start rounded-2xl bg-night px-4 py-3 text-sm leading-snug text-night-foreground"
                    : "max-w-[78%] self-end rounded-2xl bg-background px-4 py-3 text-sm leading-snug text-foreground/70"
                }
              >
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Stat card */}
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-night p-6 text-night-foreground md:p-8">
          <span className="text-xs uppercase tracking-[0.18em] text-night-muted">
            Chapters completed faster
          </span>
          <div>
            <div className="text-5xl font-semibold tracking-tight md:text-6xl">+85%</div>
            <p className="mt-3 text-sm text-night-muted">
              Higher lesson completion once quizzes, flashcards and keypoints sit in one flow.
            </p>
          </div>
        </div>
      </div>

      {/* Screens */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { src: shot1.url, cap: "Smart Learning, Made Fun", sub: "AI-powered lessons & challenges" },
          { src: shot2.url, cap: "Start Learning in One Tap", sub: "Guest login, no signup wall" },
          { src: shot3.url, cap: "Compete, Win & Earn Daily", sub: "Battles, friends, free coins" },
          { src: shot4.url, cap: "Master Every Subject", sub: "Six subjects, every chapter" },
        ].map((s) => (
          <figure key={s.cap} className="overflow-hidden rounded-2xl bg-surface-2">
            <img
              src={s.src}
              alt={`EdvanceAI app screen — ${s.cap}`}
              loading="lazy"
              className="h-[320px] w-full object-cover object-top"
            />
            <figcaption className="px-5 py-5">
              <p className="text-base font-medium leading-snug text-foreground">{s.cap}</p>
              <p className="mt-1 text-xs text-foreground/50">{s.sub}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Widget row */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {widgets.map((w, i) => (
          <span
            key={w}
            className={`rounded-xl px-4 py-2 text-sm ${
              i % 2 === 0
                ? "bg-night text-night-foreground"
                : "bg-surface-2 text-foreground/60"
            }`}
          >
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}
