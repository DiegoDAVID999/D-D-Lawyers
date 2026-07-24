import { site } from "../data/content"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-900/8 bg-cream py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 bg-navy-900">
              <span className="font-display text-[10px] font-bold text-gold">
                {site.brand.logo}
              </span>
            </div>
            <div>
              <p className="font-display text-base tracking-[0.1em] text-navy-900 uppercase">
                {site.brand.wordmark}
              </p>
              <p className="text-[10px] tracking-[0.15em] text-navy-700/50 uppercase">
                {site.lawyer.name} · {site.lawyer.title}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-navy-700/60 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-navy-700/40">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
