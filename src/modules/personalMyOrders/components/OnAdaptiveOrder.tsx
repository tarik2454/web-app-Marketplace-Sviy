import { OrderList, Dropdown } from '@/shared/components';
import { useState } from 'react';
import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { getStatusValues } from '../orderUtils';
import { Order } from '../types';

import sortOrder from '../data/sortOrder-data';

type Props = {
  orderedItems: Order[];
};

export default function OnAdaptiveOrder({ orderedItems }: Props) {
  const [openOrderList, setOpenOrderList] = useState<number | null>(null);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <span>Всього: 8</span>
        <Dropdown
          options={sortOrder.map(order => ({
            value: String(order.id),
            label: order.title,
          }))}
          placeholder={'Сортувати'}
          id={'orders'}
          onChange={() => {}}
          wrapperClassName="w-[193px]"
        />
      </div>
      <ul>
        {orderedItems.map((orderItem, index) => {
          const { class: statusClass, name: statusName } = getStatusValues([
            orderItem,
          ])[0];
          const containerClassName = `rounded-[20px] shadow border-l-4 ${statusClass}`;
          const isListOpen = openOrderList === index;

          return (
            <li key={index}>
              <div className={containerClassName}>
                <div
                  className={`flex justify-between white mt-8 mb-8 w-full h-full p-4 ${
                    isListOpen ? 'hidden' : 'block'
                  }`}
                >
                  <div className="flex flex-wrap">
                    <Image
                      className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={orderItem.images}
                      alt="Order photo"
                    />
                    <Image
                      className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={OrderImage}
                      alt="Order photo"
                    />
                    <Image
                      className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={OrderImage}
                      alt="Order photo"
                    />
                    <Image
                      className="max-w-[57px] max-h-[60px] rounded-[10px] mr-3"
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={OrderImage}
                      alt="Order photo"
                    />
                    <Image
                      className="max-w-[57px] max-h-[60px] rounded-[10px] "
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={OrderImage}
                      alt="Order photo"
                    />
                  </div>
                  <div>
                    <div className="flex mb-2.5">
                      <span className="mr-3">{orderItem.number}</span>
                      <span className="text-gray-600">{orderItem.date} </span>
                    </div>
                    <span>{statusName}</span>
                  </div>

                  <div className="flex flex-col items-center mb-2.5 mr-4">
                    <span>{orderItem.text}</span>
                    <span>{orderItem.total} ₴</span>
                  </div>
                  <div
                    onClick={() => setOpenOrderList(isListOpen ? null : index)}
                  >
                    <SpriteSVG
                      name={isListOpen ? 'expand_up' : 'expand_down'}
                    />
                  </div>
                </div>
                {isListOpen && (
                  <div className="bg-white mt-8 mb-8 w-full h-full p-4 rounded-[20px]">
                    <div className="flex justify-between">
                      <div className="flex mb-3">
                        <span className="mr-3">{orderItem.number}</span>
                        <span className="text-gray-600">{orderItem.date} </span>
                      </div>
                      <div
                        onClick={() =>
                          setOpenOrderList(isListOpen ? null : index)
                        }
                      >
                        <SpriteSVG
                          name={isListOpen ? 'expand_up' : 'expand_down'}
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <span>{statusName}</span>
                    </div>
                    <div className="flex mb-8">
                      <div className="mr-10">
                        <p className="text-xl mb-3">
                          Інформація про замовлення
                        </p>
                        <p className="text-sm leading-tight mb-3 ">
                          Самовивіз з відділення Нової Пошти №12
                        </p>
                        <p className="text-sm leading-tight mb-4 text-blue-700">
                          Львів, Сихівська 74А, Відділення 25
                        </p>
                        <p className="text-sm leading-tight mb-3 ">
                          Поліна Ващук
                        </p>
                        <p className="text-sm leading-tight mb-3">
                          380970000000
                        </p>
                        <p className="text-sm leading-tight mb-4 ">
                          polina.vach@gmail.com
                        </p>

                        <p className="mb-2">Коментар</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                      <div>
                        <p className="text-xl leading-loose">Продавець</p>
                        <p className="text-sm leading-tight">Назва бренду</p>
                        <div className="flex">
                          <SpriteSVG
                            name="location"
                            className="fill-blue-700"
                          />
                          <p className="text-sm leading-tight">
                            м. Львів, Залізничний р-н
                          </p>
                        </div>
                        <div>
                          <SpriteSVG name="mail" className="fill-blue-700" />
                          <p className="text-sm leading-tight">
                            fuhriug@gmail.com
                          </p>
                        </div>
                        <div>
                          <SpriteSVG name="phone" />
                        </div>
                      </div>
                    </div>

                    <OrderList
                      cartItems={orderedItems}
                      stylesImageWrapper="max-w-[57px] min-w-[57px]"
                      stylesButton="hidden"
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
