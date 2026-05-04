import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';

export const fraunces = Fraunces({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});