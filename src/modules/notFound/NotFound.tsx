"use client"

import { OrangeButton } from "@/shared/components";
import { SpriteSVG } from "./image/SpriteSVG";
import Image from "next/image";
import cake from "./image/cake.png";
import { useRouter } from "next/navigation";

export default function NotFound () {
  const router = useRouter();

  return (
    <div className="max-w-[624px] text-center mx-auto">
      <div className="flex w-fit mx-auto items-center">
        <SpriteSVG name="four" />
        <Image src={cake} alt="cake image" width={0} height={0} />
        <SpriteSVG name="four" />
      </div>
      <h1 className="mt-[60px] text-blue-700 text-2xl">На жаль, сторінку, яку ви шукаєте, не знайдено.</h1>
      <p className="mt-4">Можливо, ви перейшли за застарілим посиланням або 
        сторінка була переміщена. Щоб повернутися на головну сторінку, натисніть кнопку.
      </p>
      <OrangeButton onClick={() => router.push("/")} cssSettings="mx-auto mt-8">На головну</OrangeButton>
    </div>
  )
}