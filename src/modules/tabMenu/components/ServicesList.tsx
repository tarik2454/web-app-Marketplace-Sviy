export default function ServicesList() {
  return (
    <div className="flex flex-col gap-6 md:gap-[107px] md:flex-row xl:gap-6">
      <div className="flex flex-col md:w-[343px] xl:w-[628px]">
        <p className="mb-6 text-xl text-blue-90 xl:mb-5  xl:text-2xl">Оплата</p>
        <ul className="flex flex-col gap-4">
          <li className="text-xl md:text-base xl:text-xl">
            Оплата під час отримання товару
          </li>
          <li className="text-xl md:text-base xl:text-xl">
            Оплата на карту ПриватБанку 5457 0822 2339 2551
          </li>
        </ul>
      </div>

      <div className="flex flex-col xl:w-[628px]">
        <p className="mb-6 text-xl text-blue-90 xl:mb-5 xl:text-2xl">
          Доставка
        </p>
        <ul className="flex flex-col gap-4">
          <li className="text-xl md:text-base xl:text-xl">Нова Пошта</li>
          <li className="text-xl md:text-base xl:text-xl">Укрпошта</li>
          <li className="text-xl md:text-base xl:text-xl">Самовивіз</li>
        </ul>
      </div>
    </div>
  );
}
