import ProductsWeek from '@/modules/productsWeek/ProductsWeek';
import { AboutUs, HeroSection, Advertising } from '@/modules';
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
