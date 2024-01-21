import { CloseButton } from "@/shared/components";
import { Category } from "./components";
import { MouseEventHandler } from "react";

type Props = {
  categoriesDisplay: String,
  closeCategoriesClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Categories ({categoriesDisplay, closeCategoriesClick }: Props) {
  const categories = [
    "Фрукти, ягоди та овочі", "Кулінарія", "Випічка", "Овочі",
    "Фрукти", "Мед та продукти бджільництва", "М'ясо та м'ясні вироби",
    "Молочна продукція", "Риба та морепродукти", "Яйця та птиця",
    "Зернові та бобові", "Горіхи та сухофрукти", "Консервовані продукти"
  ];

  return (
    <div className={`${categoriesDisplay} absolute w-full h-screen left-0 top-0 z-20 overflow-y-auto bg-white`}>
      <div className="flex w-screen left-0 px-4 py-6 border-b-2">
        <h1 className="text-stone-900 text-xl font-normal font-lato leading-loose">Категорії товарів</h1>
        <CloseButton closeButtonClick={closeCategoriesClick} />
      </div>
      <div className="px-4">
        {categories.map((category, counter) => (
          <Category categoryName={category} key={counter} />
        ))}
      </div>
    </div>
  );
}