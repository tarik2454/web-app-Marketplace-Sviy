import { CloseButton } from "@/shared/components";
import { Category } from "./components";

export default function Categories () {
  return (
    <div className="hidden absolute w-full h-screen left-0 top-0 z-20 overflow-y-auto bg-white">
      <div className="flex w-screen left-0 px-4 py-6 border-b-2">
        <h1 className="text-stone-900 text-xl font-normal font-lato leading-loose">Категорії товарів</h1>
        <CloseButton />
      </div>
      <div className="px-4">
        <Category categoryName="Фрукти, ягоди та овочі" />
        <Category categoryName="Кулінарія" />
        <Category categoryName="Випічка" />
        <Category categoryName="Овочі" />
        <Category categoryName="Фрукти" />
        <Category categoryName="Мед та продукти бджільництва" />
        <Category categoryName="М'ясо та м'ясні вироби" />
        <Category categoryName="Молочна продукція" />
        <Category categoryName="Риба та морепродукти" />
        <Category categoryName="Яйця та птиця" />
        <Category categoryName="Зернові та бобові" />
        <Category categoryName="Горіхи та сухофрикти" />
        <Category categoryName="Консервовані продукти" />
      </div>
    </div>
  );
}