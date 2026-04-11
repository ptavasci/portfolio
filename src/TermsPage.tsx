import { useTheme } from './ThemeContext'

export default function TermsPage() {
  const { lang } = useTheme()

  if (lang === 'es') {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
          Última actualización: {new Date().toLocaleDateString('es-AR')}
        </p>

        <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Aceptación</h2>
            <p>
              Al entrar a este sitio web aceptás que estás visitando el portfolio de un ingeniero de software
              con más de 25 años de experiencia y un criterio cuestionable para escribir textos legales.
              Si seguiste leyendo hasta acá, ya me caés bien.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Propósito del sitio</h2>
            <p>
              Este sitio existe con un único y noble propósito: demostrar que existo y que hago cosas.
              Cosas como diseñar sistemas distribuidos, configurar Wazuh a las 2 AM,
              y convencer a mi cafetera de que le diga a la licuadora que encienda al lavarropas
              cuando termine de llover en Kamchatka.
            </p>
            <p className="mt-3">
              No se comercializan productos ni servicios a través de este sitio.
              Si me querés contratar, hablemos primero. Soy selectivo pero encantador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Propiedad intelectual</h2>
            <p>
              El código, diseño, textos divertidos, y la frase de la cafetera son de mi autoría.
              Los logos de GitHub, Instagram y X pertenecen a sus respectivos dueños,
              que probablemente tienen mejores abogados que yo.
              Los screenshots de mis proyectos son reales (o lo serán cuando deje de procrastinar).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Garantías</h2>
            <p>
              No garantizo que este sitio funcione el 100% del tiempo.
              Pero si se rompe, me voy a enterar por Sentry antes que vos, y me va a doler más a mí que a vos.
              Dicho esto, es un sitio estático — romperlo sería casi un logro artístico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. Responsabilidad</h2>
            <p>
              No me hago responsable si después de leer mi perfil te dan ganas de automatizar tu casa,
              aprender TypeScript, o dejar tu trabajo para montar una vinoteca online.
              Esas decisiones son tuyas, y probablemente buenas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">6. Contacto</h2>
            <p>
              Si tenés dudas, sugerencias, o simplemente querés decirme que la frase de Kamchatka
              es brillante (lo es), podés encontrarme en las redes sociales que figuran en el sitio.
              Respondo todo, excepto mensajes que empiezan con "estimado señor".
            </p>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
        Terms & Conditions
      </h1>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>

      <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Acceptance</h2>
          <p>
            By entering this website you acknowledge that you're visiting the portfolio of a software engineer
            with 25+ years of experience and questionable judgment when it comes to writing legal text.
            If you've read this far, I already like you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Purpose</h2>
          <p>
            This site exists with one noble purpose: to prove I exist and I build things.
            Things like distributed systems, self-hosted Wazuh at 2 AM,
            and telling my coffee maker to tell the blender to turn on the washing machine
            when it stops raining in Kamchatka.
          </p>
          <p className="mt-3">
            No products or services are sold through this site.
            If you want to hire me, let's talk first. I'm selective but charming.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Intellectual property</h2>
          <p>
            The code, design, funny copy, and the coffee maker quote are mine.
            The GitHub, Instagram, and X logos belong to their respective owners,
            who probably have better lawyers than I do.
            The project screenshots are real (or will be once I stop procrastinating).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Warranties</h2>
          <p>
            I don't guarantee this site will work 100% of the time.
            But if it breaks, I'll find out through Sentry before you do, and it'll hurt me more than it hurts you.
            That said, it's a static site — breaking it would be almost an art form.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. Liability</h2>
          <p>
            I am not responsible if, after reading my profile, you feel the urge to automate your home,
            learn TypeScript, or quit your job to start an online wine shop.
            Those decisions are yours, and probably good ones.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">6. Contact</h2>
          <p>
            If you have questions, suggestions, or simply want to tell me that the Kamchatka line
            is brilliant (it is), you can find me on the social networks listed on the site.
            I reply to everything, except messages that start with "Dear Sir".
          </p>
        </section>
      </div>
    </div>
  )
}
