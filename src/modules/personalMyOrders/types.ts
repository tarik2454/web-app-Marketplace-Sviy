import { StaticImageData } from 'next/image';

export type Order = {
  heading: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
  images: StaticImageData;
};
