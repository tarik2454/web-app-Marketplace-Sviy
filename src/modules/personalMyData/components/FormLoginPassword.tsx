import { BlueBorderButton, FormInput } from '@/shared/components';

type FormLoginPasswordProps = {
  formik: any;
}

export default function FormLoginPassword({formik}: FormLoginPasswordProps ) {
  return (
    <>
      <h3 className="text-2xl xl:mb-10 md:mb-10 mb-0">Логін та пароль</h3>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col xl:gap-2 md:gap-6'>
            <FormInput
              formik={formik}
              name="currentEmail"
              label={'Поточний логін'}
              inputType="email"
              id="currentEmailProfile"
              classNameLogin="mb-2 ml-0"
            />
            <FormInput
              formik={formik}
              name="newEmail"
              label={'Новий логін'}
              inputType="email"
              id="newEmailProfile"
              classNameLogin="mb-2 ml-0"
            />
          </div>
          <BlueBorderButton onClick={() => {}} smallButton type="button">
            Змінити електронну адресу
          </BlueBorderButton>
          <div className='flex flex-col gap-6'>
            <FormInput
              formik={formik}
              name="password"
              label={'Поточний пароль'}
              inputType="password"
              id="passwordProfile"
              classNameLogin="mb-2 ml-0"
            />
            <FormInput
              formik={formik}
              name="newPassword"
              label={'Новий пароль'}
              inputType="password"
              classNameLogin="mb-2 ml-0"
              id="newPasswordProfile"
            />
            <FormInput
              formik={formik}
              name="repeatPassword"
              label={'Повторіть пароль'}
              inputType="password"
              classNameLogin="mb-2 ml-0"
              id="repeatPasswordProfile"
            />
          </div>
          <BlueBorderButton onClick={() => {}} smallButton type="button">
            Змінити пароль
          </BlueBorderButton>
        </div>
    </>
  );
}
