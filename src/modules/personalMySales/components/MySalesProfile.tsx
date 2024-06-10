import { Dropdown, Pagination } from '@/shared/components';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import sort from '@/shared/data/personal-select-data';
import sortSales from '@/shared/data/sort-sales-data';
import MySalesList from './MySalesList';
import mySalesData from '../data/my-sales-data';

const renderItemLi = (item: {
  id: number;
  name: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
}) => <MySalesList mySalesData={mySalesData} key={item.id} />;

export default function MySalesProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  const itemsPerPage = isOnMobile ? 1 : isOnTablet ? 2 : 3;
  return (
    <>
      <div className="flex mt-5 mb-5 sm:justify-between md:justify-end md:gap-6 xl:mt-0">
        <Dropdown
          onChange={() => {}}
          options={sort}
          placeholder="Сортувати"
          controlClassName="text-sm md:text-base"
          id={`novelties-${23}`}
          wrapperClassName="w-[164px] md:w-[193px]"
          menuClassName="!w-[164px] md:!w-[193px]"
        />
        <Dropdown
          onChange={() => {}}
          options={sortSales}
          placeholder="Всі замовлення"
          controlClassName="text-sm md:text-base"
          id={`novelties-${23}`}
          wrapperClassName="w-[165px] md:w-[193px]"
          menuClassName="!w-[165px] md:!w-[193px]"
        />
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        array={mySalesData}
        styleUl={'flex flex-col gap-5 mb-8'}
        renderItemLi={renderItemLi}
      />
    </>
  );
}
