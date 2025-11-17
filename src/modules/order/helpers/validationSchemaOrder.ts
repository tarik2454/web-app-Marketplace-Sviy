import * as yup from 'yup';

export const orderSchema = yup.object().shape({
  name: yup.string().required("Введіть ім'я"),
  location: yup.string().required('Виберіть ваше місто'),
  deliveryPicked: yup.string().required('Треба обрати спосіб доставки'),
  deliveryByAddressPicked: yup.boolean(),
  city: yup.string().when(['deliveryByAddressPicked', 'deliveryPicked'], {
    is: (deliveryByAddressPicked: boolean, deliveryPicked: string) =>
      deliveryByAddressPicked || deliveryPicked === 'Самовивіз',
    then: schema => schema,
    otherwise: schema => schema.required('Треба вказати місто'),
  }),
  warehouse: yup.string().when(['deliveryByAddressPicked', 'deliveryPicked'], {
    is: (deliveryByAddressPicked: boolean, deliveryPicked: string) =>
      deliveryByAddressPicked || deliveryPicked === 'Самовивіз',
    then: schema => schema,
    otherwise: schema => schema.required('Треба обрати відділення'),
  }),
  street: yup.string().when('deliveryByAddressPicked', {
    is: true,
    then: schema => schema.required('Треба ввести адресу'),
    otherwise: schema => schema,
  }),
  homeAddress: yup.string().when('deliveryByAddressPicked', {
    is: true,
    then: schema => schema.required('Треба ввести номер будинку'),
    otherwise: schema => schema,
  }),
  picked: yup.string().required('Треба обрати спосіб оплати'),
  customer: yup.string().required('Це поле має бути заповнено'),
});
