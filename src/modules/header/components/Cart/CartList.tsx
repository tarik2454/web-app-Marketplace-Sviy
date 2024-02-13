import { AmountButtons } from '.';

export default function CartList() {
  const cartItems = [
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
    {
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      price: '150 ₴',
    },
  ];

  return (
    <div className="w-full mt-5 mb-1 shadow-sm rounded-default md:overflow-auto md:h-full xl:max-w-[760px]">
      {cartItems.map((cartItem, counter) => (
        <div className="flex p-2 gap-4 mb-4" key={counter}>
          <div className="min-w-20 h-20 bg-neutral-400 rounded-default"></div>
          <div className='w-full items-center xl:flex'>
            <p className="xl:max-w-60">{cartItem.heading}</p>
            <div className='w-full items-center md:flex'>
              <p className="min-w-14 my-2 xl:w-1/3 xl:text-center">
                {cartItem.price}
              </p>
              <AmountButtons />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
