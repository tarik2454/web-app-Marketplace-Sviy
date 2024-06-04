import { Dropdown } from '@/shared/components';
import sort from '@/shared/data/personal-select-data';
import sortSales from '@/shared/data/sort-sales-data';
import MySalesList from './MySalesList';
import mySalesData from '../data/my-sales-data';

export default function MySalesProfile() {
  return (
    <>
      <div className="flex mb-5 sm:justify-between md:justify-end md:gap-6">
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
      <MySalesList mySalesData={mySalesData} />
    </>
  );
}
