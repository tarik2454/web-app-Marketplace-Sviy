import { MouseEventHandler } from "react";

export default function HamburgerButton ({ hamburgerClick }: { hamburgerClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="md:hidden" onClick={hamburgerClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M3 9H10.5H18" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3 17H17H31" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3 25H13H23" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  )
}