'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import FormikProfile from './components/FormikProfile';

export default function PersonalMyData() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        {(isOnMobile && (
          <PersonalDynamicSidebar
            activeProfile="active"
            childProfile={<FormikProfile />}
          />
        )) ||
          (isOnTablet && (
            <PersonalDynamicSidebar
              activeProfile="active"
              childProfile={<FormikProfile />}
            />
          )) || (
            <div className="flex items-start gap-6">
              <div className="basis-1/3 max-w-[302px]">
                <PersonalDynamicSidebar activeProfile="active" />
              </div>
              <div className="basis-2/3">
                <FormikProfile />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
