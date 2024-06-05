import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function InfoAboutSales() {
  return (
    <>
      <div className="xl:block xl:mr-6 xl:w-[282px]">
        <div className="flex justify-between mb-3">
          <p className="sm:text-sm md:text-base">Оплата</p>
          <p className="sm:text-sm md:text-base">Під час отримання товару</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="sm:text-sm md:text-base">Доставка</p>
          <p className="sm:text-sm md:text-base">За тарифами перевізника</p>
        </div>
        <div className="flex justify-between mb-5">
          <p className="sm:text-sm md:text-base">Разом</p>
          <p className="sm:text-sm md:text-base">150 ₴ </p>
        </div>
      </div>

      <div className="md:flex md:justify-between xl:block xl:mr-6 xl:w-[282px]">
        <div className="sm:mb-5 md:mr-10 xl:mr-0">
          <p className="text-xl mb-3">Інформація про замовлення</p>
          <p className="text-sm leading-tight mb-3 ">
            Самовивіз з відділення Нової Пошти №12
          </p>
          <p className="text-sm leading-tight mb-4 text-blue-700">
            Львів, Сихівська 74А, Відділення 25
          </p>
          <p className="text-sm leading-tight mb-3 ">Поліна Ващук</p>
          <p className="text-sm leading-tight mb-3">380970000000</p>
          <p className="text-sm leading-tight mb-4 ">polina.vach@gmail.com</p>

          <p className="mb-2">Коментар</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <p className="text-xl mb-3">Продавець</p>
          <p className="text-sm leading-tight mb-3">Назва бренду</p>
          <div className="flex mb-3">
            <div className="mr-3 text-blue-700">
              <SpriteSVG name="location" />
            </div>
            <p className="text-sm leading-tight">м. Львів, Залізничний р-н</p>
          </div>
          <div className="flex mb-3">
            <div className="mr-3 text-blue-700">
              <SpriteSVG name="email" />
            </div>
            <p className="text-sm leading-tight">fuhriug@gmail.com</p>
          </div>
          <div className="flex ">
            <div className="mr-3 text-blue-700">
              <SpriteSVG name="phone" className="fill-blue-700" />
            </div>
            <p>+380 96 900 90 90</p>
          </div>
        </div>
      </div>
    </>
  );
}
