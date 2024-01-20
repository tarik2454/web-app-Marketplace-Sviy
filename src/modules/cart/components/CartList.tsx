import { SpriteSVG } from "@/shared/img/SpriteSVG"

export default function CartList () {
  const cartItems = [
    {
      heading: "Lorem ipsum dolor sit amet consectetur.",
      price: "150 ₴",
    },
    {
      heading: "Lorem ipsum dolor sit amet consectetur.",
      price: "150 ₴",
    },
    {
      heading: "Lorem ipsum dolor sit amet consectetur.",
      price: "150 ₴",
    },
  ]

  return (
    <div className="mt-5 mb-1 shadow-sm rounded-default">
      {cartItems.map((cartItem, counter) => (
        <div className="flex p-2 gap-4 mb-4" key={counter}>
          <div className="w-20 h-20 bg-neutral-400 rounded-default"></div>
          <div className="max-w-52">
            <p className="md:max-w-60">{cartItem.heading}</p>
            <p className="my-2">{cartItem.price}</p>
            <div className="flex items-center">
              <div className="flex w-20">
                <button className="border-2 p-2 rounded-circle">
                  <SpriteSVG name="minus" />
                </button>
                <p className="mx-auto">1</p>
                <button className="border-2 p-2 rounded-circle">
                  <SpriteSVG name="plus" />
                </button>
              </div>
              <button className="ml-auto">
                <SpriteSVG name="trash" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}