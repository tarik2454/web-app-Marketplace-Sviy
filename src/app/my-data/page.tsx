'use client';

import {
  Breadcrumbs,
  ColorSpot,
} from '@/shared/components';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import SidebarNavigation from '@/modules/myData/components/SidebarNavigation/SidebarNavigation';
import FormPersonalData from '@/modules/myData/components/FormPersonalData/FormPersonalData';

export default function Page() {

  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <h2 className="text-4xl py-12">Мої дані</h2>
          <div className="flex items-start gap-8">
            <SidebarNavigation/>
            <div className="basis-2/3 max-w-[400px]">
              <FormPersonalData/>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
