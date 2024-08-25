'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import PersonalMyAdsItems from './components/PersonalMyAddItems';
import { useDispatch } from 'react-redux';
import { createAdvertThunk } from '@/redux/adverts/operations';


export default function PersonalMyAds() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const dispatch = useDispatch();

  // const handleCreateAdvert = () => {
  //     console.log('Button clicked');

  //   const advertData = {
  //     owner: 1,
  //     category: 2,
  //     name: 'NIK',
  //     descr: 'mas',
  //     price: '77',
  //     quantity: 32,
  //     pickup: true,
  //     nova_post: true,
  //     courier: true,
  //     address: {
  //       city: 'Kherson',
  //       street: 'Any',
  //       number: '7',
  //     },
  //   };
  //   dispatch(createAdvertThunk(advertData));
  // };

  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
     {/* <button onClick={handleCreateAdvert}>Create Advert</button>; */}
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
                <PersonalDynamicSidebar activeAds="active" />
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
