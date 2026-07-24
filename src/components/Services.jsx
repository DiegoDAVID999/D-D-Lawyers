import { site } from "../data/content"

const icons = {
  scale: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    />
  ),
  briefcase: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  document: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  ),
}

export default function Services() {
  return (
    <section id="areas" className="bg-navy-900 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
            Áreas de práctica
          </p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Soluciones legales integrales
          </h2>
          <p className="mt-4 text-white/55">
            {site.tagline}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {site.services.map((service) => (
            <article
              key={service.title}
              className="reveal group rounded-sm border border-white/8 bg-navy-800/50 p-8 transition-all hover:border-gold/30 hover:bg-navy-800"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 transition-colors group-hover:bg-gold/20">
                <svg
                  className="h-6 w-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {icons[service.icon]}
                </svg>
              </div>
              <h3 className="font-display text-xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/8 pt-5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/50"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
