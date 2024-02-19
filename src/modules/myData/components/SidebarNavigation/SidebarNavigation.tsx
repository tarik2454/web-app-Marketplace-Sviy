import { SpriteSVG } from '@/shared/img/SpriteSVG';

const liClass = "flex gap-5 py-4 px-4 text-xl cursor-pointer items-center group-[.active]:bg-blue-200 group-[.active]:text-blue-700 hover:bg-blue-200 hover:text-blue-700"

export default function SidebarNavigation () {
  return (
    <ul className="bg-white rounded-[20px] shadow-md">
      <li className="group active">
        <div className={'rounded-tl-[20px] rounded-tr-[20px]' + ` ${liClass}`}>
          <SpriteSVG name="user"/>
          Профіль
        </div>
      </li>
      <li className="group">
        <div className={liClass}>
          <SpriteSVG name="basket" />
          Мої замовлення
        </div>
      </li>
      <li className="group">
        <div className={liClass}>
          <SpriteSVG name="speaker" />
          Мої оголошення
        </div>
      </li>
      <li className="group">
        <div className={liClass}>
          <SpriteSVG name="discount-label" />
          Мої продажі
        </div>
      </li>
      <li className="group">
        <div className={liClass}>
          <SpriteSVG name="favorite-header"/>
          Обране
        </div>
      </li>
      <li className="group">
        <div className={liClass}>
          <SpriteSVG name="message" />
          Відгуки
        </div>
      </li>
      <li className="group">
        <div className={'rounded-tl-[20px] rounded-tr-[20px]' + ` ${liClass}`}>
          <SpriteSVG name="exit" />
          Вийти
        </div>
      </li>
    </ul>
  )
}