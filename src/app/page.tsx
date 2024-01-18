import ProductsWeek from '@/modules/productsWeek/components/ProductsWeek';
import AboutUs from '@/modules/AboutUs/AboutUs';
import { HeroSection } from '@/modules';

export default function Home() {
  return (
    <main className="font-lato">
      <HeroSection />
      <ProductsWeek />
      <AboutUs />
    </main>
  );
}
