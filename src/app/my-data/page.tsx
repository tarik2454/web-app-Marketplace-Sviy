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
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} capitalizeLinks />
          <h2 className="text-4xl py-12">Мої дані</h2>
          <div className="flex items-start gap-8">
            <div  className="basis-1/3 max-w-[302px]">
              <SidebarNavigation/>
            </div>
            <div className="flex w-full justify-between flex-wrap">
              <div className="basis-2/3 max-w-[411px]">
                <FormPersonalData />
              </div>
              <div className="basis-2/3 max-w-[411px]">
                <FormLoginPassword />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
