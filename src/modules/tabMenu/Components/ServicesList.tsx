import Link from 'next/link';

export default function ServicesList() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col w-[628px]">
        <p className="mb-6 text-2xl leading-[1.6] text-blue-90">Оплата</p>
        <ul className="flex flex-col gap-4">
          <li className="text-xl">Оплата під час отримання товару</li>
          <li className="text-xl">
            Оплата на карту ПриватБанку 5457 0822 2339 2551
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-[628px]">
        <p className="mb-6 text-2xl leading-[1.6] text-blue-90">Доставка</p>
        <ul className="flex flex-col gap-4">
          <li className="text-xl">Нова Пошта</li>
          <li className="text-xl">Укрпошта</li>
          <li className="text-xl">Самовивіз</li>
        </ul>
      </div>
    </div>
  );
}
