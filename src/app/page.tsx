import ProductsWeek from '@/modules/productsWeek/ProductsWeek';
import Advertising from '@/modules/advertising/Advertising';
import { AboutUs, HeroSection } from '@/modules';
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
