import { Container, Section } from '@/shared/components'
import { SpriteSVG } from '@/shared/img/SpriteSVG'
import React from 'react'

export default function ContactsInfo() {
  return (
    <Section className={
      'pt-[32px] pb-[80px] md:pt-[78px] md:pb-[164px] xl:pt-[78px] xl:pb-[164px] xl:text-xl md:text-xl text-base'
    }>
      <Container>
        <p>Повідомляємо, що електронна скринька працює в будні дні з 9.00 до 18.00 </p>
        <p className='mb-10'>З питань, пов’язаних із товарами, радимо вам звертатися безпосередньо до продавців.</p>
        <p>Не знайшли на сайті те, що шукали?</p>
        <p className='mb-5'>Ви можете з нами зв’язатись:</p>
        <div className='text-base flex flex-col gap-3'>
            <a 
            href='mailto:sviy@gmail.com'
            target="_blank"
            className='flex gap-2 items-center'
            >
              <SpriteSVG 
                name="mail" 
                className="stroke-[#1565C0]"
                width={24}
                height={24}
              />
              sviy@gmail.com
            </a>
            <a 
              href='https://www.instagram.com/sviy.ua'
              target="_blank"
              className='flex gap-2 items-center text-ellipsis overflow-hidden ...'><SpriteSVG name="instagram" className='stroke-[#1565C0]'/> https://www.instagram.com/sviy.ua</a>
            <a 
              href='https://facebook.com/sviy.ua'
              target="_blank"
              className='flex gap-2 items-center text-ellipsis overflow-hidden ...'> <SpriteSVG name="facebook" className='stroke-[#1565C0]'/> https://facebook.com/sviy.ua</a>
        </div>
      </Container>
    </Section>
  )
}
