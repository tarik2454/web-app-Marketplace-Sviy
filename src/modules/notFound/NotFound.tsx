"use client"

import { Container, OrangeButton, Section } from "@/shared/components";
import { SpriteSVG } from "./image/SpriteSVG";
import Image from "next/image";
import cake from "./image/cake.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setInterval } from "timers";

export default function NotFound () {
  const router = useRouter();

  const [rotate, setRotate] = useState("rotate-0");

  useEffect(() => {
    const rotationHandler = () => {
      setRotate("rotate-[-30deg]")
    }

    setInterval(rotationHandler, 1000);
  })

  return (
    <Section className="p-0 md:p-0 xl:p-0">
      <Container>
        <div className="max-w-[624px] text-center mx-auto">
          <div className="flex w-fit mx-auto items-center relative">
            <SpriteSVG name="four" />
            <Image className="w-[120px] md:w-[200px]" src={cake} alt="cake image" width={0} height={0} />
            <div className={`${rotate} transition-transform ease-in-out origin-bottom`}>
              <SpriteSVG name="four" />
            </div>
          </div>
          <h1 className="mt-[60px] text-blue-700 text-2xl">На жаль, сторінку, яку ви шукаєте, не знайдено.</h1>
          <p className="mt-4">Можливо, ви перейшли за застарілим посиланням або 
            сторінка була переміщена. Щоб повернутися на головну сторінку, натисніть кнопку.
          </p>
          <OrangeButton onClick={() => router.push("/")} cssSettings="mx-auto mt-8">На головну</OrangeButton>
        </div>
      </Container>
    </Section>
  )
}