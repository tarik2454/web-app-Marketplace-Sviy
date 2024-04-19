'use client';

import { Container, Section } from '@/shared/components';
import { FormPersonalData, SidebarNavigation } from './components ';

export default function PersonalMyData() {
  return (
    <Section className="pt-[120px] md:pt-[140px] pb-[80px] xl:py-[164px]">
      <Container>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="w-full md:basis-2/3 lg:basis-1/3 md:max-w-[302px]">
            <SidebarNavigation />
          </div>
          <div className="flex w-full justify-between flex-wrap gap-6">
            <div className="w-full xl:basis-2/3 xl:max-w-[411px]">
              <FormPersonalData />
            </div>
            <div className="w-full xl:basis-2/3 xl:max-w-[411px]">
              {/* <FormLoginPassword /> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
