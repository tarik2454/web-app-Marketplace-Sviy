import { Dropdown, FavoritesSection } from '@/shared/components';
import SearchInput from '@/shared/components/Search/SearchInput';
import sort from '@/shared/data/personal-select-data';
import sortOrder from '@/shared/data/sort-order-data';

export default function MySelectedProfile() {
  return (
    <div className="pt-6 pb-6 md:pt-10 md:pb-10 xl:pt-0 xl:pb-0">
      <SearchInput
        className={
          'mb-5 px-3 py-3 border-[1px] border-blue-700 rounded-default'
        }
        inputStyle={'placeholder-gray-600'}
      />

      <div className="md:flex md:flex-row-reverse md:justify-between md:mb-5">
        <div className="flex justify-between gap-2 mb-4 md:gap-6 md:mb-0">
          <Dropdown
            onChange={() => {}}
            options={sort}
            placeholder="Всі категорії"
            controlClassName="text-sm md:text-base"
            id={`novelties-${23}`}
            wrapperClassName="w-[169px] md:w-[193px]"
            menuClassName="!w-[169px] md:!w-[193px]"
          />
          <Dropdown
            onChange={() => {}}
            options={sortOrder}
            placeholder="За датою"
            controlClassName="text-sm md:text-base"
            id={`novelties-${23}`}
            wrapperClassName="w-[166px] md:w-[193px]"
            menuClassName="!w-[166px] md:!w-[193px]"
          />
        </div>

        <p className="mb-5 md:flex md:items-end md:mb-0">Всього: 8</p>
      </div>

      <FavoritesSection isInPersonalOffice={true} />
    </div>
  );
}
