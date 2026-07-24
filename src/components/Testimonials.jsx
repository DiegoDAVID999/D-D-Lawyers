import { site } from "../data/content"

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
            Testimonios
          </p>
          <h2 className="font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {site.testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="reveal flex flex-col rounded-sm border border-navy-900/8 bg-white p-8 shadow-sm"
            >
              <svg
                className="mb-4 h-8 w-8 text-gold/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.973zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="flex-1 text-sm leading-relaxed text-navy-700/80 italic">
                "{item.quote}"
              </p>
              <footer className="mt-6 border-t border-navy-900/8 pt-4">
                <cite className="not-italic">
                  <p className="text-sm font-medium text-navy-900">
                    {item.author}
                  </p>
                  <p className="text-xs text-navy-700/50">{item.role}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
