import { AmountButtons } from "."

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
          <div className="max-w-52 xl:max-w-none xl:flex xl:w-[760px] xl:items-center">
            <p className="xl:max-w-60">{cartItem.heading}</p>
            <p className="my-2 xl:text-xl xl:text-center xl:ml-auto">{cartItem.price}</p>
            <AmountButtons />
          </div>
        </div>
      ))}
    </div>
  )
}