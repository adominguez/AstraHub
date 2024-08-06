import Image from 'next/image'
import DemoForm from '@/app/ui/web/demo-form'

export default async function Demo() {
  return (<section id="demo" className="min-h-dvh relative flex justify-center items-center flex-col gap-4 text-current w-full">
    <Image
      src="/demo/demo-image-desktop.webp"
      width={1920}
      height={640}
      className="hidden md:block absolute w-full min-h-dvh aspect-video mx-auto object-cover top-0"
      alt="hero image of AstraHub in desktop version"
    />
    <Image
      src="/demo/demo-image-mobile.webp"
      width={560}
      height={800}
      className="block md:hidden absolute w-full min-h-dvh aspect-auto mx-auto object-cover top-0"
      alt="hero image of AstraHub in mobile version"
    />
    <div
    className="w-full relative min-h-dvh flex flex-col gap-4 text-current max-w-[1218px] mx-auto py-3 overflow-hidden">
      <DemoForm />
    </div>
  </section>)
}