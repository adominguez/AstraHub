import '@/app/ui/global.css';
import { archivoNarrow } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='scroll-smooth focus:scroll-auto'>
      <body className={cn(
        'antialiased',
        archivoNarrow.className,
      )}>{children}</body>
    </html>
  );
}
