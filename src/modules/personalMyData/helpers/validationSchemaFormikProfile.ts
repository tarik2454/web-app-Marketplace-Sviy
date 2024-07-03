import * as Yup from 'yup';

const validationSchemaFormikProfile = Yup.object().shape({
  // name: Yup.string()
  //   .min(2, "Ім'я повинно бути не менше 2 символів")
  //   .required("Потрібно ім'я"),
  // lastName: Yup.string()
  //   .min(2, 'Прізвище повинно бути не менше 2 символів')
  //   .required('Потрібно прізвище'),
  // address: Yup.string()
  //   .min(2, 'Адреса повинна бути не менше 2 символів')
  //   .required('Потрібна адреса'),
  // phoneNumbers: Yup.array().of(Yup.string().required("Телефон обов'язковий")),
  // newEmail: Yup.string()
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
  // repeatPassword: Yup.string().oneOf(
  //   [Yup.ref('newPassword')],
  //   'Паролі повинні співпадати'
  // ),
  // newPassword: Yup.string().when(['password'], {
  //   is: (password: string) => password === undefined,
  //   then: schema =>
  //     schema
  //       .required("Пароль обов'язковий")
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //         'Пароль має містити 8 символів, один великий регістр, один малий регістр, одну цифру та один символ спеціального регістру'
  //       ),
  //   otherwise: schema => schema,
  // }),
});

export default validationSchemaFormikProfile;
