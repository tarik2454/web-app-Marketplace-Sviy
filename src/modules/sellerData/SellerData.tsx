import { Container, Section, SectionTitle } from "@/shared/components"
import { SpriteSVG } from "./image/SpriteSVG"

type Props = {
  phoneNumber: string,
  email: string,
  area: string,
  delivery: string,
}

export default function SellerData ({ phoneNumber, email, area, delivery }: Props) {
  return (
    <Section className="p-0 md:p-0 xl:p-0">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="relative">
            <SectionTitle name="Продавець ім'я ФОП" />
            <p className="hidden absolute top-14 text-xs text-blue-900 md:block">3 роки на Свій</p>
          </div>
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
        </div>
      </Container>
    </Section>
  )
}