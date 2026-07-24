import { site } from "../data/content"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,39,68,0.8)_0%,_transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-28 pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-0">
        <div>
          <p className="animate-fade-up mb-4 text-sm tracking-[0.3em] text-gold uppercase">
            {site.hero.eyebrow}
          </p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl leading-[1.1] font-semibold text-white sm:text-6xl lg:text-7xl">
            {site.hero.headline}{" "}
            <span className="text-gold italic">{site.hero.headlineAccent}</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            {site.hero.subheadline}
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-900 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Agendar consulta
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:border-gold/50 hover:text-gold"
            >
              Ver áreas legales
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[4/5]">
            <div className="absolute -inset-4 rounded-sm border border-gold/20" />
            <div className="absolute -top-6 -right-6 h-full w-full rounded-sm bg-gold/10" />
            <div className="relative h-full overflow-hidden rounded-sm bg-gradient-to-br from-navy-800 to-navy-700">
              {site.lawyer.photo ? (
                <img
                  src={site.lawyer.photo}
                  alt={site.lawyer.photoAlt}
                  className="h-full w-full object-cover object-[center_28%]"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/30 bg-navy-900/50">
                    <svg
                      className="h-14 w-14 text-gold/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent px-8 pt-16 pb-8 text-center">
                <p className="font-display text-2xl text-white">
                  {site.lawyer.name}
                </p>
                <p className="mt-1 text-sm tracking-widest text-gold uppercase">
                  {site.lawyer.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <a href="#estudio" aria-label="Desplazarse hacia abajo">
          <svg
            className="h-6 w-6 text-gold/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
