import { NotFound } from '@/modules'
import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components'
 
export default function Page () {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs 
        homeElement={<span>Головна</span>}
        containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}  
      />
      <NotFound />
    </PageWrapper>
  )
}