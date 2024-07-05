import { BlueBorderButton, FormInput } from '@/shared/components';

export default function FormLoginPassword({ formik }: any) {
  // const dispatch = useAppDispatch();

  // const handleSubmit = (values: FormPersonalDataValues) => {
  //   const {
  //     full_name,
  //     lastName,
  //     newEmail,
  //     currentPassword,
  //     password,
  //     repeatPassword,
  //     ...formData
  //   } = values;

  //   // Отправка запроса на обновление пароля
  //   if (currentPassword && password) {
  //     dispatch(
  //       updatePasswordThunk({
  //         password: currentPassword,
  //         new_password: password,
  //       })
  //     )
  //       .unwrap()
  //       .then(() => {
  //         toast.success('Password updated successfully');
  //       })
  //       .catch(error => {
  //         toast.error(error);
  //       });
  //   }
  // };

  return (
    <>
      <h3 className="text-2xl xl:mb-10 md:mb-10 mb-0">Логін та пароль</h3>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <FormInput
            formik={formik}
            name="email"
            label={'Логін'}
            inputType="email"
            classNameLogin="mb-2 ml-0"
            readOnly
          />
          <FormInput
            formik={formik}
            name="currentPassword"
            label={'Поточний пароль'}
            inputType="password"
            classNameLogin="mb-2 ml-0"
          />
          <FormInput
            formik={formik}
            name="password"
            label={'Новий пароль'}
            inputType="password"
            classNameLogin="mb-2 ml-0"
          />
          <FormInput
            formik={formik}
            name="repeatPassword"
            label={'Повторіть пароль'}
            inputType="password"
            classNameLogin="mb-2 ml-0"
          />
        </div>
        <BlueBorderButton
          onClick={() => {}}
          smallButton={true}
          cssSettings="text-nowrap xl:max-w-[164px]"
          type="button"
        >
          Змінити пароль
        </BlueBorderButton>
      </div>
    </>
  );
}
