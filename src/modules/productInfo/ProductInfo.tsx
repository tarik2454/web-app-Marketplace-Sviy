import ProductDetails from './components/ProductDetails/ProductDetails';
import { Container, Section } from '@/shared/components';
import SliderInfo from './components/SliderInfo';

export default function ProductInfo() {
  return (
    <Section className={'pt-[42px] md:pt-[88px] xl:pt-[98px]'}>
      <Container>
        <div className="flex flex-col md:flex-row md:gap-4 xl:gap-6">
          <SliderInfo />

          <ProductDetails />
        </div>
      </Container>
    </Section>
  );
}
