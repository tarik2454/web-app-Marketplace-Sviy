import { BlueBorderButton, FormInput } from '@/shared/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormLoginPassword() {
  const formik = useFormik({
    initialValues: {
      currentEmail: '',
      newEmail: '',
      password: '',
      newPassword: '',
    },
    validationSchema: Yup.object().shape({
      currentEmail: Yup.string()
        .min(10, 'Email повинен бути не менше 10 символів')
        .required('Потрібен email'),
      newEmail: Yup.string()
        .min(10, 'Email повинен бути не менше 10 символів')
        .required('Потрібен email'),
      password: Yup.string().required('Password is required'),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref('newPassword')],
        'Паролі повинні співпадати'
      ),
    }),
    onSubmit: values => {
      console.log('values', values);
    },
  });

  return (
    <div>
      <h3 className="text-2xl mb-7">Логін та пароль</h3>
      <form
        className="flex flex-col gap-7 w-full items-start"
        onSubmit={formik.handleSubmit}
      >
        <FormInput
          formik={formik}
          name="currentEmail"
          label={'Поточний логін'}
          inputType="email"
        />
        <FormInput
          formik={formik}
          name="newEmail"
          label={'Новий логін'}
          inputType="email"
        />
        <BlueBorderButton onClick={() => {}} smallButton type="button">
          Змінити електронну адресу
        </BlueBorderButton>

        <FormInput
          formik={formik}
          name="password"
          label={'Поточний пароль'}
          inputType="password"
        />
        <FormInput
          formik={formik}
          name="newPassword"
          label={'Новий пароль'}
          inputType="password"
        />
        <FormInput
          formik={formik}
          name="repeatPassword"
          label={'Повторіть пароль'}
          inputType="password"
        />

        <BlueBorderButton onClick={() => {}} smallButton type="submit">
          Змінити пароль
        </BlueBorderButton>
      </form>
    </div>
  );
}
