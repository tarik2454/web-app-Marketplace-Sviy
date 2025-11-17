import * as yup from 'yup';

export const feedbackSchema = yup.object().shape({
  rating: yup.number().min(1, 'Оберіть рейтинг').required('Оберіть рейтинг'),
  comment: yup.string().notRequired(),
});
