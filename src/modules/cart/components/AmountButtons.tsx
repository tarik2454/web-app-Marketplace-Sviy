import { SpriteSVG } from "@/shared/img/SpriteSVG";

export default function AmountButtons () {
  return (
    <div className="flex items-center xl:ml-auto">
      <div className="flex w-20 xl:mr-10">
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="minus" />
        </button>
        <p className="mx-auto">1</p>
        <button className="border-2 p-2 rounded-circle">
          <SpriteSVG name="plus" />
        </button>
      </div>
      <button className="ml-auto xl:ml-0">
        <SpriteSVG name="trash" />
      </button>
    </div>
  )
}