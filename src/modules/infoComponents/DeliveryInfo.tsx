import { Container, Section } from '@/shared/components'
import React from 'react'

export default function DeliveryInfo() {
  return (
    <Section className={
        'pt-[20px] pb-[80px] md:pt-[40px] md:pb-[88px] xl:pt-[40px] xl:pb-[88px] xl:text-xl md:text-xl text-base'
      }>
      <Container>
        <p className='mb-8'>Кожне замовлення  відправляється Вам безпосередньо виробником. Якщо ви замовляєте продукти у більш ніж одного продавця, ви отримаєте декілька доставок.</p>
        <div>
            <h4 className='xl:text-2xl md:text-2xl text-xl mb-4'>Способи доставки</h4>
            <ul className='!list-disc pl-8 text-pretty'>
                <li className='!list-disc'>Самовивіз ( ви можете самостійно забрати своє замовлення в пункті видачі продавця);</li>
                <li className='!list-disc'>Доставка на відділення Нової Пошти та Укрпошти (за тарифами перевізника, термін доставки залежить від роботи перевізника);</li>
                <li className='!list-disc'>Кур’єрська доставка додому (продавці співпрацюють з кур’єрськими службами за тарифами перевізників).</li>
            </ul>
        </div>
        
      </Container>
    </Section>
  )
}
