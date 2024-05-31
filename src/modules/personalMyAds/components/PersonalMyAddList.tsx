import { Dropdown } from '@/shared/components';
import Image from 'next/image';
import OrderImage from '@/shared/img/salo.jpeg';
import adsData from '../data/my-add-data';
import options from '../data/my-options-data';

export default function PersonalMyAdsList() {
  return (
    <>
      {adsData.map(ad => (
        <div
          key={ad.id}
          className="w-full bg-white py-5 px-4 rounded-[20px] flex flex-col relative"
        >
          <div className="flex flex-col md:flex-row">
            <div className="mr-6 flex gap-2 md:flex-col xl:gap-3 mb-3 xl:mb-0">
              <p>{ad.number}</p>
              <p className="text-gray-600">{ad.date}</p>
            </div>

            <div className="flex">
              <div className="max-w-[62px] h-[64px] rounded-[10px] overflow-hidden mr-3 md:mr-6 ">
                <Image
                  className="w-full h-full"
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={OrderImage}
                  alt="Order photo"
                />
              </div>
              <div>
                <p className="mb-3">{ad.description}</p>
                <p>{ad.price}</p>
              </div>
            </div>
          </div>
          <Dropdown
            onChange={() => {}}
            options={options}
            placeholder="Дія"
            id={`novelties-${ad.id}`}
            wrapperClassName=" mt-0 w-[136px] md:w-[156px] text-gray-600 absolute right-[10px] top-[85px] md:top-[5px] py-1.5"
            menuClassName="!w-[136px] md:!w-[156px] text-gray-900"
            dropdownIndicatorClassName="text-gray-600"
          />
        </div>
      ))}
    </>
  );
}
