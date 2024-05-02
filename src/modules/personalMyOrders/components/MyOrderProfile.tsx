import { OrderList } from '@/shared/components';
import orderedProducts from '../../../shared/data/ordered-products-data';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import OrderImage from '@/shared/img/salo.jpeg';
import Image from 'next/image';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { PersonalDynamicSidebar } from '@/shared/components';

type Order = {
  status: string;
  number: string;
  text: string;
  total: string;
  date: string;
};

type Props = {
  activeMyOrder?: string;
  status?: string;
  orderedItems: Order[];
};

const getStatusValues = (orderedItems: { status: string }[]) => {
  return orderedItems.map(item => {
    switch (item.status) {
      case 'new':
        return { class: 'border-blue-700', name: 'Нове' };
      case 'inprogress':
        return { class: 'border-amber-500', name: 'В роботі' };
      case 'fulfilled':
        return { class: 'border-green-700', name: 'Виконано' };
      case 'canceled':
        return { class: 'border-neutral-400', name: 'Скасовано' };
      default:
        return { class: '', name: '' };
    }
  });
};

export default function MyOrderProfile({ activeMyOrder, orderedItems }: Props) {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 57px))',
    gridGap: '10px',
    marginBottom: '10px',
  };

  return (
    <ul className="">
      {orderedItems.map((orderItem, counter) => {
        const { class: statusClass, name: statusName } = getStatusValues([
          orderItem,
        ])[0]; // Отримуємо статус та ім'я поточного замовлення
        const containerClassName = `bg-white mt-8 mb-8 w-full h-full p-4 rounded-[20px] shadow border-l-4 ${statusClass}`;

        return (
          <li className="" key={counter}>
            <div className={containerClassName}>
              <div className="flex mb-2.5">
                <span className="mr-3">{orderItem.number}</span>
                <span className="text-gray-600">{orderItem.date} </span>
              </div>
              <div className="flex justify-between mb-2.5">
                <span>{orderItem.text}</span>
                <span>{orderItem.total} ₴</span>
              </div>
              <div style={containerStyle}>
                <Image
                  className="max-w-[57px] max-h-[60px] rounded-[10px] "
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
              <div className="flex justify-between">
                <span>{statusName}</span>
                <SpriteSVG name={activeMyOrder ? 'expand_up' : 'expand_down'} />

                {/* <PersonalDynamicSidebar
            activeMyOrder="active"
            childOrders={<OrderList cartItems={orderedProducts} />}
           />  */}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
