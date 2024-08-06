import { sourceSans, archivoNarrow } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Image
        src="/hero/hero-image-desktop.webp"
        width={1920}
        height={640}
        className="hidden md:block w-full h-dvh aspect-video mx-auto object-cover"
        alt="hero image of AstraHub in desktop version"
      />
      <Image
        src="/hero/hero-image-mobile.webp"
        width={560}
        height={620}
        className="block md:hidden w-full h-dvh aspect-auto mx-auto object-cover"
        alt="hero image of AstraHub in mobile version"
      />
      <div className="absolute text-center top-0 w-full h-dvh aspect-video flex justify-end items-center flex-col gap-4 z-10 text-white max-w-[1200px] mx-auto py-10 px-2">
        <div className='flex flex-col items-center gap-6'>
          <span className="text-4xl lg:text-5xl text-balance tracking-wide font-bold text-web-secondary shadow-text">AstraHub</span>
          <div className='flex flex-col'>
            <h1 className={`text-xl md:text-2xl lg:text-3xl text-balance tracking-wide uppercase font-bold text-current ${sourceSans.className}`}>Conduce tu empresa hacia el futuro.</h1>
            <span className="text-xl md:text-2xl lg:text-3xl text-balance tracking-tighter text-web-primary font-extralight">
              Tu copiloto en la travesía hacia el crecimiento empresarial.
            </span>
          </div>
          <Link href="#demo" className={`rounded-full text-xl md:text-2xl lg:text-3xl border px-4 py-2 hover:shadow-2xl shadow-button ${sourceSans.className}`}>Comienza a mejorar tu empresa</Link>
        </div>
      </div>
    </>
  )
}