'use client';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { selectAuth } from '@/redux/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';

import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';

import { FormInput, ModalPersonalDataSuccess } from '@/shared/components';
import ButtonProfile from './ButtonProfile';
import Modal from '@/shared/components/Modal/Modal';
import { FormPersonalDataValues } from '@/models/dataToSubmit';

export default function FormPersonalData() {
  const [firstName, setFirstName] = useState('');
  const [remainingNames, setRemainingNames] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [dataToSubmitUpdate, setDataToSubmitUpdate] =
    useState<FormPersonalDataValues | null>(null);

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
    address: {
      city: address?.city || '',
      street: address?.street || '',
      number: address?.number || '',
    },
    phone: phone || '',
    email: email || '',
  };

  const handleSubmit = (values: FormPersonalDataValues, actions: any) => {
    const { full_name, lastName, address, ...formData } = values;

    const combinedFullName = `${full_name} ${lastName}`.trim();

    let updatedAddress;
    if (address && address.city && address.street && address.number) {
      updatedAddress = {
        ...address,
      };
    }

    const data: any = {
      ...formData,
      full_name: combinedFullName,
      email,
    };

    if (updatedAddress) {
      data.address = updatedAddress;
    }

    setDataToSubmitUpdate(data);
    setShowModal(true);
    setUpdateProfile(true);
    setDeleteProfile(false);
  };

  const formik = useFormik<FormPersonalDataValues>({
    initialValues,
    validationSchema: validationSchemaFormikProfile,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleUpdateProfileButton = () => {
    formik.handleSubmit();
  };

  const handleDeleteProfileButton = () => {
    setDeleteProfile(true);
    setUpdateProfile(false);
    setShowModal(true);
  };

  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Персональні дані</h3>

      <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <FormInput
            formik={formik}
            name="full_name"
            label={`Ім'я`}
            classNameLogin="mb-2 ml-0"
            placeholder={`Ім'я`}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="lastName"
            label={'Прізвище'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Прізвище'}
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
            name="address.city"
            label={'Місто/село'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Місто/село'}
            inputType="text"
          />
          <div className="grid grid-cols-[_2.1fr,_0.9fr]">
            <FormInput
              formik={formik}
              name="address.street"
              label={'Вулиця'}
              classNameLogin="mb-2 ml-0"
              stylesInputWrapper={'rounded-br-none rounded-tr-none'}
              placeholder={'Вулиця'}
              inputType="text"
            />
            <FormInput
              formik={formik}
              name="address.number"
              label={'Номер'}
              classNameLogin="mb-2 ml-0"
              stylesInputWrapper={'border-l-0 rounded-bl-none rounded-tl-none'}
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
            updateProfile={updateProfile}
            dataToSubmitUpdate={dataToSubmitUpdate}
            deleteProfile={deleteProfile}
          />
        </Modal>
      )}
    </>
  );
}
