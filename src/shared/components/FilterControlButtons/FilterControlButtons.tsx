import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';
import { Dropdown } from '..';

type Props = {
  filterButtonClick: MouseEventHandler<HTMLButtonElement>;
  sortingMenuButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function FilterControlButtons({
  filterButtonClick,
  sortingMenuButtonClick,
}: Props) {
  const options = [
    { value: 'новинки', label: 'Новинки' },
    { value: 'від дорогих до дешевих', label: 'Від дорогих до дешевих' },
    { value: 'від дешевих до дорогих', label: 'Від дешевих до дорогих' },
    { value: 'за рейтингом', label: 'За рейтингом' },
  ];

  return (
    <div className="block md:flex flex-row-reverse items-center">
      <div className="flex md:gap-6">
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
      <h3 className="mt-5 md:mt-0 md:mr-auto">Всього: 10</h3>
    </div>
  );
}
