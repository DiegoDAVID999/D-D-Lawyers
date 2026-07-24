import { site } from "../data/content"

export default function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
            Nuestro proceso
          </p>
          <h2 className="font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Cómo trabajamos su caso
          </h2>
          <p className="mt-4 text-navy-700/70">
            Un método claro y transparente para acompañarlo en cada etapa del
            proceso legal.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((item) => (
            <article
              key={item.step}
              className="reveal relative rounded-sm border border-navy-900/8 bg-white p-8 shadow-sm"
            >
              <p className="font-display text-3xl text-gold/40">{item.step}</p>
              <h3 className="mt-4 font-display text-xl text-navy-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
