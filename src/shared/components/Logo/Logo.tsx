import { SpriteSVG } from "@/shared/img/SpriteSVG";
import Link from "next/link";

export default function Logo () {
  return (
    <Link href={"/"}>
      <SpriteSVG name="logo" />
    </Link>
  )
}