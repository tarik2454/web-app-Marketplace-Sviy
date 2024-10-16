import { Dropdown, OrangeButton, Pagination } from '@/shared/components';
import { SearchInput } from '@/modules/header/components/SearchProducts';
import PersonalMyAdsList from './PersonalMyAddList';
import sort from '@/shared/data/personal-select-data';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import productsData from '@/shared/data/products-data';
import { useRouter } from 'next/navigation';

export default function PersonalMyAdsItems() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const router = useRouter();

  const itemsPerPage = isOnMobile ? 6 : isOnTablet ? 8 : 9;

  const renderItemLi = (item: {
    id: number;
    image: string;
    name: string;
    information: string;
    price: number;
    currency: string;
  }) => <PersonalMyAdsList key={item.id} />;

  return (
    <>
      <div className="flex gap-6 w-full flex-col-reverse pt-8 md:pt-10 xl:pt-0 xl:flex-row mb-8 md:mb-5">
        <SearchInput
          className="border border-blue-500 rounded-[20px] py-3"
          inputStyle="!placeholder-gray-600"
        />
        <OrangeButton
          cssSettings="text-white w-full max-w-[215px] !py-3"
          onClick={() => router.push('/personal-office/new-ad')}
        >
          Додати оголошення
        </OrangeButton>
      </div>
      <div className="flex justify-between mb-5">
        <p className="pt-5 text-sm flex items-center md:text-base md:items-end">
          Всього: 8
        </p>
        <Dropdown
          onChange={() => {}}
          options={sort}
          placeholder="Сортувати"
          id={`novelties-${23}`}
          wrapperClassName="w-[193px]"
          menuClassName="!w-[193px]"
        />
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        array={productsData}
        styleUl={'flex flex-col gap-5 mb-5 md:mb-10'}
        renderItemLi={renderItemLi}
      />
    </>
  );
}
