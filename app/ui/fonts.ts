import { Inter } from 'next/font/google'; // this is a primary font
import { Lusitana } from 'next/font/google'; // this is a secondary font

export const inter = Inter({ subsets: ['latin'] }); // specify the subset of the font (in this case : latin)
export const lusitana = Lusitana({ weight: ['400','700'],subsets:['latin'] }); // specify the weight of the font (in this case : 400)
