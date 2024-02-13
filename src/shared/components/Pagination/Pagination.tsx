import { MouseEventHandler } from "react"

type Props = {
  moreProductsClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Pagination ({ moreProductsClick }: Props) {
  return (
    <div>
      <div className="hidden md:flex mt-10 gap-5 items-center justify-center text-neutral-400">
        <button className="px-[9px] py-[6px]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="8.1211" 
            height="13.4141" 
            fill="none">
              <path 
                fill="#9E9E9E" 
                fillRule="evenodd" 
                d="m8.121 1.414-6 6-.707-.707L2.121 6l6 6-1.414 1.4141L0 6.7071 6.707 0l1.414 1.414Z"/>
          </svg>
        </button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>8</button>
                  
        <button className="px-[9px] py-[6px]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="8.1211" 
            height="13.4141" 
            fill="none">
            <path 
              fill="#9E9E9E" 
              fillRule="evenodd" 
              d="m0 1.414 6 6 .707-.707L6 6l-6 6 1.414 1.4141 6.707-6.707L1.414 0 0 1.414Z"/>
          </svg>
        </button>
      </div>
      <button
        onClick={moreProductsClick}
        className="block mx-auto mt-9 p-1 text-xl text-blue-700">
        Дивитися більше
      </button>
    </div>
  )
}