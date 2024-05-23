import MyOrderList from './MyOrderList';
import { Order } from '../types';
import SearchInput from '@/shared/components/Search/SearchInput';
import { Dropdown, Pagination } from '@/shared/components';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import { sort } from '@/modules/personalMyAds/data/my-add-data';
import orderedItems from '../data/myOrder-data';
import productsData from '@/shared/data/products-data';

const renderItemLi = (item: {
  id: number;
  image: string;
  name: string;
  information: string;
  price: number;
  currency: string;
}) => <MyOrderList orderedItems={orderedItems} key={item.id} />;

export default function MyOrderProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  const itemsPerPage = isOnMobile ? 1 : isOnTablet ? 2 : 2;
  return (
    <div className="max-xl:mt-8 mb-8">
      <SearchInput className="border border-blue-500 rounded-[20px]" />

      <div className="flex justify-between items-center mb-5">
        <span>Всього: 8</span>
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
        styleUl={'flex flex-col gap-5 mb-8'}
        renderItemLi={renderItemLi}
      />
    </div>
  );
}
