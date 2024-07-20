import * as Yup from 'yup';

const validationSchemaSignin = Yup.object().shape({
  email: Yup.string()
    .email('Дані введені некоректно')
    .required("Поле обов'язкове для заповнення"),
  password: Yup.string()
    .min(8, 'Пароль має містити не менше 8 символів')
    .matches(/[a-zA-Z]/, 'Пароль має містити хоча б одну літеру')
    .matches(/\d/, 'Пароль має містити хоча б одну цифру')
    .required("Поле обов'язкове для заповнення"),
  // chekSignIn: Yup.boolean(),
});

export default validationSchemaSignin;
