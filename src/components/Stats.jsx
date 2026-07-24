import { site } from "../data/content"

export default function Stats() {
  return (
    <section className="border-y border-navy-900/8 bg-cream-dark py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="reveal text-center">
              <p className="font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-navy-700/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
