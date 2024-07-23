import '@/app/ui/global.css';
import { interFontHeading, interFontBody } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        'antialiased',
        interFontHeading.variable,
        interFontBody.variable
      )}>{children}</body>
    </html>
  );
}
