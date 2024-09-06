export interface MyAd {
  id: number;
  number: string;
  date: string;
  image: string;
  description: string;
  price: string;
}

const adsData: MyAd[] = [
  {
    id: 1,
    number: '№ 1223',
    date: '10.04.2024',
    image: 'url_to_image',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '200 грн',
  },
];

export default adsData;
