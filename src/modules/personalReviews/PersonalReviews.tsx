"use client"

import { Container, PersonalDynamicSidebar, Section } from "@/shared/components";
import ScreenSize from "@/shared/hooks/useMediaQuery";
import PersonalFeedback from "./components/PersonalFeedback";

export default function PersonalReviews() {
   const { isOnMobile, isOnTablet } = ScreenSize();
   return (
     <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
       <Container>
         {(isOnMobile && (
           <PersonalDynamicSidebar
             activeReviews="active"
             childReviews={<PersonalReviews />}
           />
         )) ||
           (isOnTablet && (
             <PersonalDynamicSidebar
               activeFeedback="active"
               childFeedback={<PersonalReviews />}
             />
           )) || (
             <div className="flex items-start gap-6">
               <div className="basis-1/3 max-w-[302px]">
                 <PersonalDynamicSidebar activeFeedback="active" />
               </div>
               <div className="basis-3/4">
                 <PersonalFeedback />
               </div>
             </div>
           )}
       </Container>
     </Section>
   );
}
