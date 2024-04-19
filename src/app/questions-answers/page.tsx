import QuestionsAnswersPage from '@/modules/questionsAnswers/QuestionsAnswersPage';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function QuestionsAnswers() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'mb-11 md:mb-[38px] xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle
          name={'Питання і відповіді'}
        />
      </Container>
      <QuestionsAnswersPage />
    </PageWrapper>
  );
}
