import { useState } from "react"
import { site } from "../data/content"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setError(
        "El formulario aún no está activado. Escríbenos por WhatsApp o al correo indicado."
      )
      setLoading(false)
      return
    }

    const formData = new FormData(e.target)
    const area = formData.get("area")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("nombre"),
          email: formData.get("email"),
          phone: formData.get("telefono") || "No indicado",
          subject: `Nueva consulta — ${area || "General"} — D&D Lawyers`,
          message: formData.get("mensaje"),
          from_name: "D&D Lawyers — Sitio web",
          replyto: formData.get("email"),
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        return
      }

      setError(
        data.message ||
          "No se pudo enviar el mensaje. Intenta por WhatsApp o correo."
      )
    } catch {
      setError("Error de conexión. Intenta por WhatsApp o correo directo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-navy-900 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
              Contacto
            </p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Hablemos de tu caso
            </h2>
            <p className="mt-4 leading-relaxed text-white/55">
              Cuéntenos su situación y le responderemos a la brevedad con
              orientación clara y confidencial.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-white/40 uppercase">
                    Teléfono
                  </p>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-white transition-colors hover:text-gold"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-white/40 uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-white transition-colors hover:text-gold"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>

              {site.contact.address && (
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                    <svg
                      className="h-5 w-5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-white/40 uppercase">
                      Oficina
                    </p>
                    <p className="text-white">{site.contact.address}</p>
                    {site.contact.city && (
                      <p className="text-sm text-white/55">{site.contact.city}</p>
                    )}
                  </div>
                </li>
              )}

              {site.contact.hours && (
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                    <svg
                      className="h-5 w-5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-white/40 uppercase">
                      Horario
                    </p>
                    <p className="text-white">{site.contact.hours}</p>
                  </div>
                </li>
              )}
            </ul>

            <a
              href={`https://wa.me/${site.contact.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20legal.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          <div className="reveal">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-sm border border-gold/30 bg-navy-800/50 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white">
                  Mensaje enviado
                </h3>
                <p className="mt-2 text-white/55">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-white/8 bg-navy-800/50 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-1.5 block text-xs tracking-widest text-white/40 uppercase"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      className="w-full rounded-sm border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-1.5 block text-xs tracking-widest text-white/40 uppercase"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className="w-full rounded-sm border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                      placeholder="313 000 0000"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs tracking-widest text-white/40 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-sm border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="area"
                    className="mb-1.5 block text-xs tracking-widest text-white/40 uppercase"
                  >
                    Área legal
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="w-full rounded-sm border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold/50"
                  >
                    <option value="">Seleccionar área</option>
                    {site.services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-xs tracking-widest text-white/40 uppercase"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full resize-none rounded-sm border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                    placeholder="Describe brevemente tu consulta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-sm bg-gold py-3.5 text-sm font-semibold tracking-wide text-navy-900 transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar consulta"}
                </button>

                {error && (
                  <p className="mt-4 text-center text-sm text-red-300/90">
                    {error}
                  </p>
                )}

                <p className="mt-4 text-center text-xs text-white/30">
                  Tus datos están protegidos y no serán compartidos con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
