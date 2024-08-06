import { Source_Sans_3 as SourceSans, Archivo_Narrow as Narrow } from 'next/font/google';

export const sourceSans = SourceSans({
  weight: ['200', '700'],
  subsets: ['latin'],
});

export const archivoNarrow = Narrow({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});