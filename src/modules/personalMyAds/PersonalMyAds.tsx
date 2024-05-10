'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import PersonalMyAdsItems from './components/PersonalMyAddItems';


export default function PersonalMyAds() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        {(isOnMobile && (
          <PersonalDynamicSidebar
            activeAds="active"
            childAds={<PersonalMyAdsItems />}
          />
        )) ||
          (isOnTablet && (
            <PersonalDynamicSidebar
              activeAds="active"
              childAds={<PersonalMyAdsItems />}
            />
          )) || (
            <div className="flex items-start gap-6">
              <div className="basis-1/3 max-w-[302px]">
                <PersonalDynamicSidebar childAds="active" />
              </div>
              <div className="basis-3/4">
                <PersonalMyAdsItems />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
