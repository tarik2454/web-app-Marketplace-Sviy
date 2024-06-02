'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import MySalesProfile from './components/MySalesProfile';

export default function PersonalMyOrders() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        {(isOnMobile && (
          <PersonalDynamicSidebar
            activeSale="active"
            childSale={<MySalesProfile />}
          />
        )) ||
          (isOnTablet && (
            <PersonalDynamicSidebar
              activeSale="active"
              childSale={<MySalesProfile />}
            />
          )) || (
            <div className="flex items-start gap-6">
              <div className="basis-1/3 max-w-[302px]">
                <PersonalDynamicSidebar activeSale="active" />
              </div>
              <div className="basis-3/4">
                <MySalesProfile />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
