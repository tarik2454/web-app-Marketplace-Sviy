import { StaticImageData } from 'next/image';
import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';

type Order = {
  name: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
  images: StaticImageData;
};

type MyOrderItemsListProps = {
  myOrderData: Order[];
};

export default function MyOrderItemsList({
  myOrderData,
}: MyOrderItemsListProps) {
  return (
    <>
      {myOrderData.map((orderItem, index) => {
        return (
          <li
            key={index}
            className="flex justify-between mb-4 border-b border-gray-300 pb-4 md:mb-6 md:pb-6"
          >
            <div className="flex items-center">
              <Image
                className="w-[57px] h-[57px] rounded-2xl mr-4 md:mr-6 md:w-[84px] md:h-[81px]"
                src={OrderImage}
                alt="Order photo"
              />
              <div>
                <p className=" text-gray-900 md:text-xl">{orderItem.name}</p>
                <p className="text-sm text-gray-400 md:text-base">Ціна</p>
                <p className="text-sm md:text-base">{orderItem.price} ₴</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <p className="text-sm text-gray-400 md:text-base">Сума</p>
              <p className="text-sm md:text-base">{orderItem.price} ₴</p>
            </div>
          </li>
        );
      })}
    </>
  );
}
