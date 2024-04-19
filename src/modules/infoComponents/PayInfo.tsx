import { Container, Section, SectionTitle } from '@/shared/components'
import React from 'react'

export default function PayInfo() {
  return (
    <Section className={
        'pt-[20px] pb-[80px] md:pt-[40px] md:pb-[164px] xl:pt-[40px] xl:pb-[164px] xl:text-xl md:text-xl text-base'
      }>
      <Container>
      <SectionTitle name={'Оплата'} className="mb-5 xl:mb-10 md:mb-10"/>
        <p className='mb-8'>В нашому маркетплейсі, продавець визначає доступні способи оплати замовлення. Ви можете обрати найбільш зручний для вас варіант при оформленні покупки:</p>
        <ul className='!list-disc pl-8 text-pretty'>
            <li className='!list-disc'>Оплата при отриманні: оплатіть готівкою при самовивозі з точки видачі продавця або у відділенні кур&apos;єрської служби.</li>
            <li className='!list-disc'>Оплата на картку продавця: здійсніть прямий банківський переказ на картку продавця згідно з наданими реквізитами.</li>
        </ul>
      </Container>
    </Section>
  )
}
