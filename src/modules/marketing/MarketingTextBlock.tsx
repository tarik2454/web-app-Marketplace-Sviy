import PageTitle from '@/shared/components/PageTitle/PageTitle';

export default function MarketingTextBlock() {
  return (
    <div>
      <PageTitle
        stylesPageTitle={'mb-8 mt-[-40px]'}
        name={'Реклама на сайті'}
      />
      <p className="mb-8 md:text-xl xl:text-2xl ">
        Реклама власних продуктів основний спосіб залучення уваги покупців до
        свого продукту.
      </p>
      <p className="xl:text-xl xl:pb-2">
        За допомогою реклами можна досягнути наступних цілей:
      </p>
      <ul className=" mb-8 xl:text-xl">
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div> розширення клієнтської бази;</div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div> пошук нових клієнтів;</div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div>
            повернення клієнтів, які вже були на сайті, але не здійснили
            покупку;
          </div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div> стимулювання людей робити повторні покупки;</div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div> підвищення рівня упізнання;</div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div> регулярне зростання продажів;</div>
        </li>
        <li className="grid grid-cols-[6px,auto] gap-2">
          <div className=" before:inline-block before:w-2 before:h-2 before:mr-2 before:bg-black before:rounded-full"></div>
          <div>
            допомогає користувачам побачити акцію або рекламну пропозицію, і
            купити пропонований товар.
          </div>
        </li>
      </ul>
    </div>
  );
}
