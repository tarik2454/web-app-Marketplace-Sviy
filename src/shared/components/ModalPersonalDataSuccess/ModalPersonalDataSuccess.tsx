'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import {
  deleteProfileThunk,
  refreshThunk,
  updateProfileThunk,
} from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';

import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type ModalPersonalDataSuccessProps = {
  showModal?: boolean;
  setShowModal?: (show: boolean) => void;
  setDeleteProfile?: (show: boolean) => void;
  setUpdateProfile?: (show: boolean) => void;
  updateProfile?: boolean;
  dataToSubmitUpdate?: any;
  deleteProfile?: boolean;
  changePassword?: boolean;
};

export default function ModalPersonalDataSuccess({
  showModal,
  setShowModal,
  setDeleteProfile,
  setUpdateProfile,
  updateProfile,
  dataToSubmitUpdate,
  deleteProfile,
  changePassword,
}: ModalPersonalDataSuccessProps) {
  const [deleteTitle, setDeleteTitle] = useState(
    'Ви дійсно бажаете видалити профіль?'
  );
  const [updateTitle, setUpdateTitle] = useState(
    'Ви дійсно бажаете оновити профіль?'
  );
  const [passwordTitle, setPasswordTitle] = useState(
    'Ви дійсно бажаете змінити пароль?'
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { email } = useAppSelector(selectAuth);

  const cataloguePage = '/catalogue';

  const handlePassToCatalog = () => {
    router.push(cataloguePage);
  };

  useEffect(() => {
    if (showModal) {
      dispatch(refreshThunk()).unwrap();
    }
  }, [showModal, dispatch]);

  const handleUpdateProfile = () => {
    dispatch(refreshThunk())
      .unwrap()
      .then(() => {
        return dispatch(updateProfileThunk(dataToSubmitUpdate)).unwrap();
      })
      .then(() => {
        setUpdateTitle('Ваш профіль успішно оновлено');
        setTimeout(() => {
          setShowModal?.(false);
        }, 2000);
      })
      .catch(error => {
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
        setDeleteTitle('Ваш профіль успішно видалено');
        setTimeout(() => {
          setShowModal?.(false);
        }, 2000);
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <>
      <h2 className="text-center text-stone-900 text-xl font-normal font-['Lato'] leading-loose md:text-2xl">
        {updateProfile && updateTitle}
        {deleteProfile && deleteTitle}
        {changePassword && passwordTitle}
      </h2>

      <div className="flex justify-center py-10">
        <SpriteSVG name="check-mark" className="fill-blue-700" />
      </div>

      <div className="flex justify-center items-start gap-3 text-white">
        {deleteProfile || updateProfile ? (
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
          </>
        ) : null}
      </div>
    </>
  );
}

// {
//   updateProfile && `Оновлення даних ${email} пройшло успішно`;
// }
// {
//   changePassword && `Пароль ${email} успішно змінено`;
// }
