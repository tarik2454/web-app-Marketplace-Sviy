import ProductsWeek from '@/modules/productsWeek/ProductsWeek';
import AboutUs from '@/modules/AboutUs/AboutUs';
import Advertising from '@/modules/advertising/Advertising';
import { HeroSection } from '@/modules';
import Novelties from '@/modules/novelties/Novelties';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsWeek />
      <Advertising />
      <Novelties />
      <AboutUs />
    </>
  );
}
