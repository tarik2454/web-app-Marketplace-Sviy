import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Хто ми?"></SectionTitle>
        <p>Свій - інноваційний торговий майданчик</p>
        <p>Ласкаво просимо на наш унікальний маркетплейс локальних товарів! </p>
        <p>
          Ми - команда ентузіастів, які вірять у силу спільноти та підтримку
          місцевих виробників
        </p>
        <p>
          Наш маркетплейс - це інтернет-платформа для місцевих продуктів
          харчування, де ми об`єднуємо виробників і споживачів. Тут вас чекають
          найсвіжіші та найсмачніші страви, вироблені нашими місцевими
          партнерами. Підтримуючи місцевих виробників, ми сприяємо розвитку
          нашої громади. Приєднуйтеся до нас, якщо ви цінуєте якість, унікальний
          смак та підтримку свого регіону. Ласкаво просимо в наш світ смаку та
          традицій!
        </p>
      </Container>
    </Section>
  );
}
