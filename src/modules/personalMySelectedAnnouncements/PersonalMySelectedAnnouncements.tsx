'use client';

import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';

import ScreenSize from '@/shared/hooks/useMediaQuery';
import MySelectedProfile from './components/MySelectedProfile';

export default function PersonalMySelectedAnnouncements() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        {(isOnMobile && (
          <PersonalDynamicSidebar
            activeFavorite="active"
            childFavorite={<MySelectedProfile />}
          />
        )) ||
          (isOnTablet && (
            <PersonalDynamicSidebar
              activeFavorite="active"
              childFavorite={<MySelectedProfile />}
            />
          )) || (
            <div className="flex items-start gap-6">
              <div className="basis-1/3 max-w-[302px]">
                <PersonalDynamicSidebar activeFavorite="active" />
              </div>
              <div className="basis-3/4">
                <MySelectedProfile />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
