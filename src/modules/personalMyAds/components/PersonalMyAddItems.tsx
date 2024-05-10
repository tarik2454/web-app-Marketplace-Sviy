import { Dropdown, OrangeButton } from '@/shared/components';
import { SearchInput } from '@/modules/header/components/SearchProducts';
import PersonalMyAdsList from './PersonalMyAddList';
import {sort} from '@/modules/personalMyAds/data/myAddData';


export default function PersonalMyAdsItems() {

  return (
    <div>
      <div className="flex gap-6 w-full flex-col-reverse pt-8 md:pt-10 xl:pt-0 xl:flex-row ">
        <SearchInput className="border border-blue-500 rounded-[20px]" />
        <OrangeButton cssSettings="text-white w-full max-w-[215px]">
          Додати оголошення
        </OrangeButton>
      </div>
      <div className="flex justify-between mb-5">
        <p className="pt-5 text-sm flex items-center md:text-base">Всього: 8</p>
        <Dropdown
          onChange={() => {}}
          options={sort}
          placeholder="Сортувати"
          id={`novelties-${23}`}
          wrapperClassName="w-[193px]"
          menuClassName="!w-[193px]"
        />
      </div>
      <ul className="flex flex-col gap-5">
        <PersonalMyAdsList />
        <PersonalMyAdsList />
        <PersonalMyAdsList />
        <PersonalMyAdsList />
      </ul>
    </div>
  );
}
