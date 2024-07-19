import * as Yup from 'yup';

const validationLoginPassword = Yup.object().shape({
  // email: Yup.string()
  //   .email('Некоректний email')
  //   .when(['currentEmail'], {
  //     is: (currentEmail: string) => currentEmail === undefined,
  //     then: schema =>
  //       schema
  //         .required('Потрібен email')
  //         .test('Validate Email', 'Error. The mail is incorrect.', value => {
  //           const re =
  //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //           return re.test(String(value).toLowerCase());
  //         }),
  //     otherwise: schema => schema,
  //   }),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('new_password')], 'Паролі повинні співпадати')
    .required("Пароль обов'язковий"),
  new_password: Yup.string()
    .when(['password'], {
      is: (password: string) => password === undefined,
      then: schema =>
        schema
          .required("Пароль обов'язковий")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Пароль має містити 8 символів, один великий регістр, один малий регістр, одну цифру та один символ спеціального регістру'
          ),
      otherwise: schema => schema,
    })
    .required("Пароль обов'язковий"),
});

export default validationLoginPassword;
