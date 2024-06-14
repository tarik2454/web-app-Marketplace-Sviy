import * as Yup from 'yup';

const validationSchemaSignin = Yup.object().shape({
  email: Yup.string()
    .email('Дані введені некоректно')
    .required('Введіть електронну пошту'),
  password: Yup.string()
    .min(8, 'Пароль повинен мати довжину не менше 8 символів')
    .required('Введіть пароль'),
  // chekSignIn: Yup.boolean(),
});

export default validationSchemaSignin;
