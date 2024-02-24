import { SpriteSVG } from "./image/SpriteSVG"

type Props = {
  phoneNumber: string,
  email: string,
  area: string,
  delivery: string,
}

export default function SellerData ({ phoneNumber, email, area, delivery }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 font-base md:items-end md:ml-auto md:mb-[40px]">
      <div className="flex items-center gap-2">
        <SpriteSVG name="phone" />
        <p>{phoneNumber}</p>
      </div>
      <div className="flex items-center gap-2">
        <SpriteSVG name="mail" />
        <p>{email}</p>
      </div>
      <div className="flex items-center gap-2">
        <SpriteSVG name="area" />
        <p>{area}</p>
      </div>
      <p><span className="text-blue-900 mr-2">Доставка: </span>{delivery}</p>
    </div>
  )
}