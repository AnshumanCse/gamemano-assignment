// app/fonts.js or src/fonts.js
import { Poppins, Prosto_One, Press_Start_2P, Wallpoet } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const prostoOne = Prosto_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prosto',
  display: 'swap',
});

export const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-press',
  display: 'swap',
});

export const wallpoet = Wallpoet({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-wallpoet',
  display: 'swap',
});
