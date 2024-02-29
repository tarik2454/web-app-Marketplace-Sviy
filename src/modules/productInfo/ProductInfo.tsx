import ProductDetails from './components/ProductDetails/ProductDetails';
import { Container, Section } from '@/shared/components';
import SliderInfo from './components/SliderInfo';
import { SpriteSVG } from './img/SpriteSVG';

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
