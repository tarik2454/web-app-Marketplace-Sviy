'use client';

import { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { toast } from 'react-toastify';

import { selectAuth } from '@/redux/auth/authSlice';
import { updatePasswordThunk } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';

import {
  BlueBorderButton,
  FormInput,
  ModalPersonalDataSuccess,
} from '@/shared/components';
import Modal from '@/shared/components/Modal/Modal';

type FormLoginPasswordValues = {
  email: string | undefined;
  password: string;
  new_password: string;
  repeatPassword: string;
};

export default function FormLoginPassword() {
  const [showModal, setShowModal] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const { email } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: FormLoginPasswordValues,
    actions: FormikHelpers<FormLoginPasswordValues>
  ) => {
    const { password, new_password } = values;

    dispatch(
      updatePasswordThunk({
        password: password,
        new_password: new_password,
      })
    )
      .unwrap()
      .then(() => {
        setChangePassword(true);
        setShowModal(true);
        actions.resetForm();
      })
      .catch(error => {
        toast.error(error);
      });
  };

  const formik = useFormik<FormLoginPasswordValues>({
    initialValues: {
      email: email,
      password: '',
      new_password: '',
      repeatPassword: '',
    },
    validationSchema: validationSchemaFormikProfile,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Логін та пароль</h3>

      <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
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
            name="password"
            label={'Поточний пароль'}
            inputType="password"
            classNameLogin="mb-2 ml-0"
          />
          <FormInput
            formik={formik}
            name="new_password"
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
          smallButton={true}
          cssSettings="text-nowrap xl:max-w-[164px]"
          type="submit"
        >
          Змінити пароль
        </BlueBorderButton>
      </form>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalPersonalDataSuccess changePassword={changePassword} />
        </Modal>
      )}
    </>
  );
}
