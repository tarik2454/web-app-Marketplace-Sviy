'use client';

import { toast } from 'react-toastify';
import { useEffect } from 'react';

import {
  deleteProfileThunk,
  refreshThunk,
  updatePasswordThunk,
  updateProfileThunk,
} from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';

import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { FormPersonalDataValues } from '@/models/dataToSubmit';

type ModalPersonalDataSuccessProps = {
  showModal?: boolean;
  setShowModal?: (show: boolean) => void;
  updateProfile?: boolean;
  dataToSubmitUpdate?: FormPersonalDataValues | null;
  deleteProfile?: boolean;
  changePassword?: boolean;
  passwordToSubmitUpdate?: any;
};

export default function ModalPersonalDataSuccess({
  showModal,
  setShowModal,
  updateProfile,
  dataToSubmitUpdate,
  deleteProfile,
  changePassword,
  passwordToSubmitUpdate,
}: ModalPersonalDataSuccessProps) {
  const dispatch = useAppDispatch();

  const modalActions = () => {
    setTimeout(() => {
      setShowModal?.(false);
    }, 300);
  };

  useEffect(() => {
    if (showModal) {
      dispatch(refreshThunk()).unwrap();
    }
  }, [showModal, dispatch]);

  const handleUpdateProfile = () => {
    if (!dataToSubmitUpdate) return;

    const updateData = {
      full_name: dataToSubmitUpdate.full_name,
      address: dataToSubmitUpdate.address || {
        city: '',
        street: '',
        number: '',
      },
      phone: dataToSubmitUpdate.phone,
      email: dataToSubmitUpdate.email,
    };

    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        return dispatch(updateProfileThunk(updateData)).unwrap();
      })
      .then(() => {
        modalActions();
        toast.success('Ваш профіль успішно оновлено');
      })
      .catch(error => {
        modalActions();
        toast.error(error);
      });
  };

  const handleDeleteProfile = () => {
    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        return dispatch(deleteProfileThunk()).unwrap();
      })
      .then(() => {
        modalActions();
        toast.success('Ваш профіль успішно видалено');
      })
      .catch(error => {
        modalActions();
        toast.error(error);
      });
  };

  const handleUdatePassword = () => {
    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        return dispatch(updatePasswordThunk(passwordToSubmitUpdate)).unwrap();
      })
      .then(() => {
        modalActions();
        toast.success('Ваш пароль успішно змінено');
      })
      .catch(error => {
        modalActions();
        toast.error(error);
      });
  };

  return (
    <>
      <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose md:text-2xl">
        {updateProfile && 'Ви дійсно бажаете оновити профіль?'}
        {deleteProfile && 'Ви дійсно бажаете видалити профіль?'}
        {changePassword && 'Ви дійсно бажаете змінити пароль?'}
      </h2>

      <div className="flex justify-center py-10">
        <SpriteSVG name="check-mark" className="fill-blue-700" />
      </div>

      <div className="flex justify-center items-start gap-3 text-white">
        {deleteProfile || updateProfile || changePassword ? (
          <>
            <OrangeButton onClick={() => setShowModal?.(false)}>
              Ні
            </OrangeButton>
            {updateProfile && (
              <OrangeButton onClick={handleUpdateProfile}>Так</OrangeButton>
            )}
            {deleteProfile && (
              <OrangeButton onClick={handleDeleteProfile}>Так</OrangeButton>
            )}
            {changePassword && (
              <OrangeButton onClick={handleUdatePassword}>Так</OrangeButton>
            )}
          </>
        ) : null}
      </div>
    </>
  );
}
