import * as Yup from 'yup';

const validationSchemaNewAd = Yup.object({
  title: Yup.string()
    .min(2, 'Назва повинна містити принаймні 2 символи')
    .max(70, 'Назва не повинна перевищувати 70 символів')
    .required('Назва оголошення обов’язкова'),
  category: Yup.string().required('Категорія обов’язкова'),
  description: Yup.string()
    .min(2, 'Опис повинен містити принаймні 2 символи')
    .max(1024, 'Опис не повинен перевищувати 1024 символів'),
  price: Yup.string()
    .required('Вартість обов’язкова'),
    // .positive('Вартість повинна бути більшою 0')
    // .integer(),
  availability: Yup.string()
    .required('Наявність обов’язкова'),
  location: Yup.string().required('Місце розташування обов’язкове'),
  deliveryMethods: Yup.array()
    .min(1, 'Оберіть хоча б один спосіб доставки')
    .required('Спосіб доставки обов’язковий'),
  diliveryComment: Yup.string()
    .min(2, 'Опис повинен містити принаймні 2 символи')
    .max(1024, 'Опис не повинен перевищувати 256 символів'),
  card: Yup.string().test(
    'card-validation',
    'Введіть коректний номер карти',
    function (value) {
      const { pay } = this.parent;
      if (pay.includes('На картку продавця')) {
        return Yup.string()
          .required("Номер карти обов'язковий")
          .length(16, 'Номер карти повинен містити рівно 16 символів')
          .matches(/^\d{16}$/, 'Номер карти повинен складатися тільки з цифр')
          .isValidSync(value);
      }
      return true;
    }
  ),
  comment: Yup.string()
    .min(2, 'Опис повинен містити принаймні 2 символи')
    .max(1024, 'Опис не повинен перевищувати 256 символів'),
});

export default validationSchemaNewAd;
