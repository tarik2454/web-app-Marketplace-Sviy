import * as Yup from 'yup';

const validationSchemaFormikProfile = Yup.object().shape({
  // full_name: Yup.string()
  //   .min(2, "Ім'я повинно бути не менше 2 символів")
  //   .required("Потрібно ім'я"),
  // lastName: Yup.string()
  //   .min(2, 'Прізвище повинно бути не менше 2 символів')
  //   .required('Потрібно прізвище'),
  // address: Yup.object().shape({
  //   city: Yup.string()
  //     .min(2, 'Місто повинно бути не менше 2 символів')
  //     .required('Потрібно місто/село'),
  //   street: Yup.string()
  //     .min(2, 'Вулиця повинна бути не менше 2 символів')
  //     .required('Потрібна вулиця'),
  //   number: Yup.string()
  //     .min(1, 'Номер повинен бути не менше 1 символу')
  //     .required('Номер'),
  // }),
  // phone: Yup.string()
  //   .matches(
  //     /^\+38 \(\d{3}\) \d{3} \d{2}\d{2}$/,
  //     'Телефон повинен бути у форматі +38 (000) 000 0000'
  //   )
  //   .required("Телефон обов'язковий"),
});

export default validationSchemaFormikProfile;
