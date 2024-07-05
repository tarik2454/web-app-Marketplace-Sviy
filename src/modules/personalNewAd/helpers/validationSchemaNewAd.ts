import * as Yup from 'yup';

const validationSchemaNewAd = Yup.object({
  title: Yup.string()
    .min(2, 'Назва повинна містити принаймні 2 символи')
    .max(66, 'Назва не повинна перевищувати 66 символів')
    .required('Назва оголошення обов’язкова'),
  category: Yup.string().required('Категорія обов’язкова'),
  description: Yup.string().max(
    250,
    'Опис не повинен перевищувати 250 символів'
  ),
  quantity: Yup.number().required('Вартість обов’язкова').positive().integer(),
  location: Yup.string().required('Місце розташування обов’язкове'),
  deliveryMethods: Yup.array()
    .min(1, 'Оберіть хоча б один спосіб доставки')
    .required('Спосіб доставки обов’язковий'),
  pay: Yup.array()
    .min(1, 'Оберіть cпосіб оплати')
    .required('Спосіб оплати обов’язковий'),
  card: Yup.string()
    .required('Введіть коректний номер карти')
    .length(12, 'Номер карти повинен містити рівно 12 символів')
    .matches(/^\d{12}$/, 'Номер карти повинен складатися тільки з цифр'),
});

export default validationSchemaNewAd;
