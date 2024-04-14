import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import QuestionsAnswersPage from './QuestionsAnswersPage';

export default function QuestionsAnswers() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <QuestionsAnswersPage />
    </PageWrapper>
  );
}
