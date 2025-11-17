import MyOrderList from './MyOrderList';
import SearchInput from '@/shared/components/Search/SearchInput';
import { Dropdown, Pagination } from '@/shared/components';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import sort from '@/shared/data/personal-select-data';
import myOrderData from '../data/my-order-data';

const renderItemLi = (item: {
  id: number;
  name: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
}) => <MyOrderList myOrderData={myOrderData} key={item.id} />;

export default function MyOrderProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  const itemsPerPage = isOnMobile ? 1 : isOnTablet ? 2 : 3;
  return (
    <div className="max-xl:pt-8 pb-8">
      <SearchInput
        className="border border-blue-500 rounded-[20px] h-[50px] mb-5"
        inputStyle="placeholder-gray-600"
      />

      <div className="flex justify-between items-center mb-5">
        <span className="pt-5">Всього: 8</span>
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
        array={myOrderData}
        styleUl={'flex flex-col gap-5 mb-8'}
        renderItemLi={renderItemLi}
      />
    </div>
  );
}
