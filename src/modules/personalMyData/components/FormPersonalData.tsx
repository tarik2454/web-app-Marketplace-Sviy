import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';
import { refreshThunk, updateProfileThunk } from '@/redux/auth/operations';

import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';
import phoneFormattingBeforeSending from '@/shared/helpers/phoneFormattingBeforeSending';

import { FormInput, ModalPersonalDataSuccess } from '@/shared/components';
import ButtonProfile from './ButtonProfile';
import Modal from '@/shared/components/Modal/Modal';

type Address = {
  region: string;
  city: string;
  village?: string;
  street: string;
  number: string;
};

type FormPersonalDataValues = {
  full_name: string | undefined;
  lastName?: string;
  address?: {
    region: string;
    city: string;
    village?: string;
    street: string;
    number: string;
  };
  phone: string | undefined;
};

export default function FormPersonalData() {
  const [firstName, setFirstName] = useState('');
  const [remainingNames, setRemainingNames] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [dataToSubmitUpdate, setDataToSubmitUpdate] =
    useState<FormPersonalDataValues | null>(null);

  const dispatch = useAppDispatch();

  const { full_name, phone, email, address } = useAppSelector(selectAuth);

  useEffect(() => {
    if (full_name) {
      const nameParts = full_name.split(' ');
      if (nameParts.length > 0) {
        setFirstName(nameParts[0]);
        setRemainingNames(nameParts.slice(1).join(' '));
      }
    }
  }, [full_name]);

  const initialValues: FormPersonalDataValues = {
    full_name: firstName,
    lastName: remainingNames,
    address: address,
    // address: {
    //   region: '',
    //   city: '',
    //   street: '',
    //   number: '',
    // },
    phone: phone || '',
  };

  // const address: Address = {
  //   region: 'Ukr',
  //   city: 'Odesa',
  //   village: '',
  //   street: 'Street',
  //   number: '48',
  // };

  const handleSubmit = (values: FormPersonalDataValues) => {
    const { full_name, lastName, address, ...formData } = values;

    const combinedFullName = `${full_name} ${lastName}`.trim();

    formData.phone = phoneFormattingBeforeSending(formData, 'phone');

    const data = {
      ...formData,
      full_name: combinedFullName,
      email,
      address,
    };

    setDataToSubmitUpdate(data);
  };

  const handleUpdateProfileButton = () => {
    setShowModal(true);
    setUpdateProfile(true);
    setDeleteProfile(false);
  };

  const handleDeleteProfileButton = () => {
    setShowModal(true);
    setUpdateProfile(false);
    setDeleteProfile(true);
  };

  const formik = useFormik<FormPersonalDataValues>({
    initialValues,
    validationSchema: validationSchemaFormikProfile,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Персональные данные</h3>

      <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <FormInput
            formik={formik}
            name="full_name"
            label={'Имя'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Имя'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="lastName"
            label={'Фамилия'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Фамилия'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="phone"
            label={'Телефон'}
            classNameLogin="mb-2 ml-0"
            inputType="tel"
          />

          <FormInput
            formik={formik}
            name="city"
            label={'Місто/село'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Місто/село'}
            inputType="text"
          />
          <div className="flex w-full">
            <FormInput
              formik={formik}
              name="street"
              label={'Вулиця'}
              classNameLogin="mb-2 ml-0"
              stylesInputWrapper={'rounded-br-none rounded-tr-none'}
              placeholder={'Вулиця'}
              inputType="text"
            />
            <FormInput
              formik={formik}
              name="number"
              label={'Номер'}
              classNameLogin="mb-2 ml-0"
              stylesInputWrapper={'rounded-bl-none rounded-tl-none'}
              placeholder={'Номер'}
              inputType="text"
            />
          </div>
        </div>

        <ButtonProfile
          handleUpdateProfileButton={handleUpdateProfileButton}
          handleDeleteProfileButton={handleDeleteProfileButton}
        />
      </form>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalPersonalDataSuccess
            showModal={showModal}
            setShowModal={setShowModal}
            setUpdateProfile={setUpdateProfile}
            updateProfile={updateProfile}
            dataToSubmitUpdate={dataToSubmitUpdate}
            setDeleteProfile={setDeleteProfile}
            deleteProfile={deleteProfile}
          />
        </Modal>
      )}
    </>
  );
}
