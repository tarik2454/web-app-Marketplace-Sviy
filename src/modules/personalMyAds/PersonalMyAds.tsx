'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import PersonalMyAdsItems from './components/PersonalMyAddItems';
import { useDispatch } from 'react-redux';
import {
  createAdvertThunk,
  deleteAdvertThunk,
  getAdvertListThunk,
  getAdvertThunk,
  updateAdvertThunk,
} from '@/redux/adverts/operations';

export default function PersonalMyAds() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const dispatch = useDispatch();

  const handleCreateAdvert = () => {
    console.log('Create Advert button clicked');
    const advertData = {
      owner: 1,
      category: 2,
      name: 'NIK',
      descr: 'mas',
      price: '77',
      quantity: 32,
      pickup: true,
      nova_post: true,
      courier: true,
      address: {
        city: 'Kherson',
        street: 'Any',
        number: '7',
      },
    };
    dispatch(createAdvertThunk(advertData))
      .unwrap()
      .then(response => console.log('Advert created:', response))
      .catch(error => console.error('Error creating advert:', error));
  };

  const handleFetchAdverts = () => {
    console.log('Fetch Adverts button clicked');
    dispatch(getAdvertListThunk())
      .unwrap()
      .then(response => console.log('Adverts fetched:', response))
      .catch(error => console.error('Error fetching adverts:', error));
  };

  const handleFetchAdvertById = () => {
    console.log('Fetch Advert by ID button clicked');
    const advertId = 8; // замінити на існуючий ID
    dispatch(getAdvertThunk(advertId))
      .unwrap()
      .then(response => console.log('Advert fetched by ID:', response))
      .catch(error => console.error('Error fetching advert by ID:', error));
  };

  const handleUpdateAdvert = () => {
    console.log('Update Advert button clicked');
    const advertId = 1; // замінити на існуючий ID
    const updateData = {
      owner: 1,
      category: 2,
      name: 'Updated Name',
      descr: 'Updated Description',
      price: '99',
      quantity: 32,
      pickup: true,
      nova_post: true,
      courier: true,
      address: {
        city: 'Kherson',
        street: 'Any',
        number: '7',
      },
    };
    dispatch(updateAdvertThunk({ id: advertId, data: updateData }))
      .unwrap()
      .then(response => console.log('Advert updated:', response))
      .catch(error => console.error('Error updating advert:', error));
  };

  const handleDeleteAdvert = () => {
    console.log('Delete Advert button clicked');
    const advertId = 32; // замінити на існуючий ID
    dispatch(deleteAdvertThunk(advertId))
      .unwrap()
      .then(response => console.log('Advert deleted, ID:', response))
      .catch(error => console.error('Error deleting advert:', error));
  };

  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <div className="flex gap-6">
        <button onClick={handleCreateAdvert}>Create</button>
        <button onClick={handleFetchAdverts}>Fetch</button>
        <button onClick={handleFetchAdvertById}>by ID</button>
        <button onClick={handleUpdateAdvert}>Update</button>
        <button onClick={handleDeleteAdvert}>Delete</button>
      </div>
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
