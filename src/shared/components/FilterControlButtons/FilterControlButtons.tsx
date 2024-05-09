import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';
import { Dropdown } from '..';

type FilterControlButtonsProps = {
  filterButtonClick: MouseEventHandler<HTMLButtonElement>;
  sortingMenuButtonClick: MouseEventHandler<HTMLButtonElement>;
  options: Array<{ value: string; label: string }>;
};

export default function FilterControlButtons({
  filterButtonClick,
  sortingMenuButtonClick,
  options,
}: FilterControlButtonsProps) {
  return (
    <div className="block flex-row-reverse items-center md:flex md:mb-10 xl:mb-6">
      <div className="flex mb-5 md:gap-6 md:mb-0 ">
        <button
          onClick={filterButtonClick}
          className="flex items-center gap-2 py-[10px] pl-[10px] pr-[80px] mr-auto bg-white border-2 rounded-default xl:hidden"
        >
          <SpriteSVG name="filter" />
          <p>Фільтр</p>
        </button>

        <button
          onClick={sortingMenuButtonClick}
          className="flex items-center gap-[33px] py-[10px] px-[10px] bg-white border-2 rounded-default md:hidden"
        >
          <p>Сортування</p>
          <SpriteSVG name="arrow-to-bottom" />
        </button>

        <Dropdown
          onChange={() => {}}
          options={options}
          placeholder="Новинки"
          id="novelties"
          className="hidden mt-0 min-w-[300px] md:block"
        />
      </div>
      <p className="mb-5 md:mt-0 md:mr-auto md:mb-0">Всього: 10</p>
    </div>
  );
}
