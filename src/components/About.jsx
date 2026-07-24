import { site } from "../data/content"

export default function About() {
  return (
    <section id="estudio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="reveal">
            <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
              El estudio
            </p>
            <h2 className="font-display text-4xl leading-tight font-semibold text-navy-900 sm:text-5xl">
              Un equipo legal que entiende{" "}
              <span className="text-gold italic">su caso</span>
            </h2>
            <p className="mt-6 leading-relaxed text-navy-700/80">
              {site.lawyer.bio}
            </p>
            <p className="mt-4 leading-relaxed text-navy-700/80">
              {site.lawyer.purpose}
            </p>
          </div>

          <div className="reveal">
            <p className="mb-6 text-sm tracking-[0.3em] text-gold uppercase">
              ¿Por qué elegirnos?
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-sm border border-navy-900/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
