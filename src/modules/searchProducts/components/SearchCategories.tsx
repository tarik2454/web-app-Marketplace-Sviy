import { SpriteSVG } from "@/shared/img/SpriteSVG";
import { Dropdown } from ".";

export default function SearchCategories () {
  const options = [
    { value: "-", label: "Фрукти, ягоди та овочі" },
    { value: "-", label: "Кулінарія" },
    { value: "-", label: "Випічка" },
    { value: "-", label: "Овочі" },
    { value: "-", label: "Мед та продукти бджільництва" },
    { value: "-", label: "М'ясо та м'ясні вироби" },
    { value: "-", label: "Молочна продукція" },
    { value: "-", label: "Риба та морепродукти" },
    { value: "-", label: "Яйця та птиця" },
    { value: "-", label: "Зернові та бобові" },
    { value: "-", label: "Горіхи та сухофрукти" },
    { value: "-", label: "Консервовані продукти" },
  ];

  return (
    <div className="hidden border-blue-700 md:block md:w-full md:border-r-0 xl:w-72 xl:border-r-2">
      <div className="flex items-center px-2 py-2 md:w-full xl:w-72">
        <div>
          <SpriteSVG name="catalog" />
        </div>
        <Dropdown options={options} placeholder={"Всі категорії"}  />
      </div>
    </div>
  )
}