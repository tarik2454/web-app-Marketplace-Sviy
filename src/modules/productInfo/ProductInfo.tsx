import Slider from './components/Slider';
import ProductDetails from './components/ProductDetails';
import { Container, Section } from '@/shared/components';

export default function ProductInfo() {
  return (
    <Section>
      <Container>
        <div className="flex">
          <div className="w-[628px]">
            <Slider />
          </div>
          <ProductDetails />
        </div>
      </Container>
    </Section>
  );
}
