import ProductDetails from './components/ProductDetails';
import { Container, Section } from '@/shared/components';
import SliderInfo from './components/SliderInfo';

export default function ProductInfo() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row md:gap-4 xl:gap-6">
          <SliderInfo />

          <ProductDetails />
        </div>
      </Container>
    </Section>
  );
}
