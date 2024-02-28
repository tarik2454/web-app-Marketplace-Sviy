'use client';

import {
  Breadcrumbs,
  ColorSpot,
} from '@/shared/components';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import SidebarNavigation from '@/modules/myData/components/SidebarNavigation/SidebarNavigation';
import FormPersonalData from '@/modules/myData/components/FormPersonalData/FormPersonalData';
import FormLoginPassword from '@/modules/myData/components/FormLoginPassword/FormLoginPassword';

export default function Page() {

  return (
    <>
      <Section className='pt-[120px] md:pt-[140px] pb-[80px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <h2 className="text-4xl py-12">Мої дані</h2>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div  className="w-full md:basis-2/3 lg:basis-1/3 md:max-w-[302px]">
              <SidebarNavigation/>
            </div>
            <div className="flex w-full justify-between flex-wrap gap-6">
              <div className="w-full xl:basis-2/3 xl:max-w-[411px]">
                <FormPersonalData />
              </div>
              <div className="w-full xl:basis-2/3 xl:max-w-[411px]">
                {/*<FormLoginPassword />*/}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
