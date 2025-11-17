import * as Yup from 'yup';

const phoneRegExp =
  /^\+?\s*3\s*8\s*0\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d$/;

const validationSchemaSignup = Yup.object().shape({
  full_name: Yup.string()
    .min(2, "Ім'я повинно бути не менше 2 символів")
    .required("Поле обов'язкове для заповнення"),
  email: Yup.string()
    .email('Дані введені некоректно')
    .required("Поле обов'язкове для заповнення"),
  phone: Yup.string()
    .matches(
      /^\+38 \(\d{3}\) \d{3} \d{2}\d{2}$/,
      'Телефон повинен бути у форматі +38 (000) 000 0000'
    )
    .required("Поле обов'язкове для заповнення"),
  password: Yup.string()
    .min(8, 'Пароль має містити не менше 8 символів')
    .matches(/[a-zA-Z]/, 'Пароль має містити хоча б одну літеру')
    .matches(/\d/, 'Пароль має містити хоча б одну цифру')
    .required("Поле обов'язкове для заповнення"),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпадати')
    .required("Поле обов'язкове для заповнення"),
  // chekSignUp: Yup.boolean()
  //   .oneOf([true], 'Необхідно підтвердити згоду')
  //   .required('Необхідно підтвердити згоду'),
});

export default validationSchemaSignup;
