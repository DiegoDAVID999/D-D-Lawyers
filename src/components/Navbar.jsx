import { useState, useEffect } from "react"
import { site } from "../data/content"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-navy-900/95 py-3 shadow-lg shadow-navy-950/20 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 bg-navy-800 transition-colors group-hover:border-gold">
            <span className="font-display text-sm font-bold text-gold">
              {site.brand.logo}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-none tracking-[0.12em] text-white uppercase">
              {site.brand.wordmark}
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm tracking-wide text-white/75 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-sm border border-gold/60 bg-gold/10 px-5 py-2.5 text-sm font-medium tracking-wide text-gold transition-all hover:bg-gold hover:text-navy-900 md:inline-block"
        >
          Consulta gratuita
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-0 flex flex-col items-center justify-center gap-8 bg-navy-900/98 backdrop-blur-lg md:hidden">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-3xl text-white transition-colors hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-4 rounded-sm border border-gold bg-gold px-8 py-3 font-medium text-navy-900"
            onClick={() => setMenuOpen(false)}
          >
            Consulta gratuita
          </a>
        </div>
      )}
    </header>
  )
}
