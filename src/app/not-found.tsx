import { NotFound } from '@/modules'
import { Breadcrumbs, ColorSpot, Container, Section } from '@/shared/components'
 
export default function Page () {
  return (
    <>
      <Section className='py-[80px] md:pt-[104px] xl:py-[164px]'>
        <ColorSpot />
        <Container>
          <Breadcrumbs homeElement={<span>Головна</span>} />
          <NotFound />
        </Container>
      </Section>
    </>
  )
}