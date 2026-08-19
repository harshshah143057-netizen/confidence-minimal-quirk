const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="shell grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#top" className="min-w-0">
          <span className="text-2xl font-semibold tracking-tight lowercase">
            prognostic
            <sup className="ml-0.5 align-super text-[0.5em] text-muted-foreground">®</sup>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nav-bracket">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
