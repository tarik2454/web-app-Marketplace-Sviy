import * as Yup from 'yup';

const validationLoginPassword = Yup.object().shape({
  // email: Yup.string()
  //   .email('Дані введені некоректно')
  //   .required("Поле обов'язкове для заповнення"),
  // password: Yup.string()
  //   .min(8, 'Пароль має містити не менше 8 символів')
  //   .matches(/[a-zA-Z]/, 'Пароль має містити хоча б одну літеру')
  //   .matches(/\d/, 'Пароль має містити хоча б одну цифру')
  //   .required("Поле обов'язкове для заповнення"),
  // new_password: Yup.string()
  //   .min(8, 'Пароль має містити не менше 8 символів')
  //   .matches(/[a-zA-Z]/, 'Пароль має містити хоча б одну літеру')
  //   .matches(/\d/, 'Пароль має містити хоча б одну цифру')
  //   .required("Поле обов'язкове для заповнення"),
  // repeatPassword: Yup.string()
  //   .oneOf([Yup.ref('new_password')], 'Паролі повинні співпадати')
  //   .required("Поле обов'язкове для заповнення"),
});

export default validationLoginPassword;
