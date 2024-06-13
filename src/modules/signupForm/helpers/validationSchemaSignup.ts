import * as Yup from 'yup';

const phoneRegExp =
  /^\+?\s*3\s*8\s*0\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d$/;

const validationSchemaSignup = Yup.object().shape({
  full_name: Yup.string()
    .min(2, 'Логін повинен мати довжину не менше 2 символів')
    .required("Введіть ім'я та призвище"),
  email: Yup.string()
    .email('Дані введені некоректно')
    .required('Введіть електронну пошту'),
  // password: Yup.string()
  //   .min(8, 'Пароль повинен мати довжину не менше 8 символів')
  //   .required('Введіть пароль'),
  // passwordRepeat: Yup.string()
  //   .oneOf([Yup.ref('password')], 'Паролі мають співпадати')
  //   .required('Повторіть пароль'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Невірний формат номера телефону')
    .required('Введіть номер телефону'),
  chekSignUp: Yup.boolean()
    .oneOf([true], 'Необхідно підтвердити згоду')
    .required('Необхідно підтвердити згоду'),
});

export default validationSchemaSignup;
