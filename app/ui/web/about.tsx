import AstraCharacter from '@/app/ui/astra-lightbulb/astra'
import Image from 'next/image'
import { sourceSans } from '@/app/ui/fonts'

export default function About() {
  return (
    <section className="min-h-dvh relative flex justify-center items-center flex-col gap-4 text-current w-full">
      <Image
        src="/about/about-image-desktop.webp"
        width={1920}
        height={640}
        className="hidden md:block absolute w-full min-h-dvh aspect-video mx-auto object-cover top-0"
        alt="hero image of AstraHub in desktop version"
      />
      <Image
        src="/about/about-image-mobile.webp"
        width={560}
        height={620}
        className="block md:hidden absolute w-full min-h-dvh aspect-auto mx-auto object-cover top-0"
        alt="hero image of AstraHub in mobile version"
      />
      <div className="w-full relative min-h-dvh flex justify-center items-center flex-col gap-4 text-current max-w-[1200px] mx-auto py-10 px-2">
        <div className="speech-bubble">
          <p>
            Bienvenido a AstraHub, donde el futuro de tu empresa comienza a tomar forma. Me llamo Astra, y seré tu nuevo <strong>copiloto empresarial</strong>. No soy sólo un personaje, si no que seré tu guía en este viaje hacia el éxito y el crecimiento empresarial.
          </p>
          <p className='hidden md:block'>
            Antes de nada, déjame contarte un poco más sobre Astra Hub...
          </p>
          <h2 className={`text-xl md:text-2xl lg:text-3xl text-balance tracking-wide font-bold text-web-secondary pb-4 ${sourceSans.className}`}>¿Qué es Astra Hub?</h2>
          <p>
            <strong>AstraHub es una plataforma diseñada para facilitar la gestión y el crecimiento de tu negocio</strong>. Con Astra a tu lado, tendrás acceso a una suite de herramientas inteligentes que te ayudarán a navegar por los desafíos empresariales con confianza y precisión.
          </p>
        </div>
        <AstraCharacter className="absolute right-3 bottom-3" />
      </div>
    </section>
  )
}