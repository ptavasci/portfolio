import { useTheme } from './ThemeContext'

export default function PrivacyPage() {
  const { lang } = useTheme()

  if (lang === 'es') {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
          Última actualización: {new Date().toLocaleDateString('es-AR')}
        </p>

        <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. ¿Quién soy?</h2>
            <p>
              Soy Pablo Tavasci Dozo. Ingeniero de software, padre de la princesa más encantadora del reino,
              entusiasta de la domótica y ocasionalmente capaz de automatizar cosas que nadie pidió que se automaticen.
              Esta web es mi carta de presentación al mundo. No vendo nada, no tengo newsletter,
              y definitivamente no te voy a mandar spam a las 3 de la mañana.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. ¿Qué datos recopilo?</h2>
            <p>
              Casi nada. Esta web es estática, no tiene login, no tiene formularios, no tiene base de datos.
              Es como un folleto digital que resulta que tiene modo oscuro. Sin embargo, utilizo dos herramientas de terceros:
            </p>
            <ul className="mt-3 space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold mt-0.5">•</span>
                <span><strong>Microsoft Clarity:</strong> Registra cómo los usuarios interactúan con el sitio (clics, scrolls, mapas de calor). No recopila datos personales. Básicamente, me dice si alguien leyó mi portfolio o si se fue después de 2 segundos (probablemente lo segundo).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold mt-0.5">•</span>
                <span><strong>Sentry:</strong> Monitoreo de errores. Si algo se rompe, quiero saberlo antes que vos. Es una cuestión de orgullo profesional.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Cookies</h2>
            <p>
              Las herramientas mencionadas pueden usar cookies. No son de las ricas.
              Son cookies técnicas que ayudan a que el sitio funcione correctamente y que yo pueda llorar con datos cuando algo falla.
              No hay cookies de marketing porque, insisto, no vendo nada. Si querés galletas de verdad, te invito un café.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Tus derechos</h2>
            <p>
              Tenés todo el derecho de irte de esta web y nunca volver. Lo entendería, pero dolería un poco.
              Si tenés alguna duda sobre tus datos, podés contactarme. Prometo responder más rápido que un deployment fallido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. Cambios</h2>
            <p>
              Me reservo el derecho de actualizar esta política cuando aprenda algo nuevo sobre privacidad,
              o cuando mi hija me diga que "papá, tu web es aburrida" y necesite agregar más cosas.
            </p>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>

      <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Who am I?</h2>
          <p>
            I'm Pablo Tavasci Dozo. Software engineer, father of the most charming princess in the kingdom,
            home automation enthusiast, and occasionally capable of automating things nobody asked to be automated.
            This website is my digital business card. I don't sell anything, I don't have a newsletter,
            and I will definitely not spam you at 3 AM.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. What data do I collect?</h2>
          <p>
            Almost nothing. This site is static — no login, no forms, no database.
            It's basically a brochure that happens to have a dark mode. However, I use two third-party tools:
          </p>
          <ul className="mt-3 space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-brand-primary font-bold mt-0.5">•</span>
              <span><strong>Microsoft Clarity:</strong> Records how users interact with the site (clicks, scrolls, heatmaps). No personal data collected. Basically, it tells me if someone read my portfolio or bounced after 2 seconds (probably the latter).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary font-bold mt-0.5">•</span>
              <span><strong>Sentry:</strong> Error monitoring. If something breaks, I want to know before you do. It's a matter of professional pride.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Cookies</h2>
          <p>
            The aforementioned tools may use cookies. Not the delicious kind.
            They're technical cookies that help the site work correctly and let me cry with data when something fails.
            There are no marketing cookies because, again, I'm not selling anything. If you want real cookies, let's grab coffee.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Your rights</h2>
          <p>
            You have every right to leave this website and never come back. I'd understand, but it would sting a little.
            If you have questions about your data, feel free to contact me. I promise to respond faster than a failed deployment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. Changes</h2>
          <p>
            I reserve the right to update this policy whenever I learn something new about privacy,
            or when my daughter tells me "dad, your website is boring" and I need to add more stuff.
          </p>
        </section>
      </div>
    </div>
  )
}
