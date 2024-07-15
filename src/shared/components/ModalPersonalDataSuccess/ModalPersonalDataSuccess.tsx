'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { deleteProfileThunk } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';

import OrangeButton from '@/shared/components/OrangeButton/OrangeButton';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type ModalPersonalDataSuccessProps = {
  isFormPersonalData?: boolean;
  deleteProfile?: boolean;
  updateProfile?: boolean;
  changePassword?: boolean;
  setShowModal?: (show: boolean) => void;
};

export default function ModalPersonalDataSuccess({
  isFormPersonalData,
  deleteProfile,
  updateProfile,
  changePassword,
  setShowModal,
}: ModalPersonalDataSuccessProps) {
  const [modalTitle, setModalTitle] = useState(
    'Ви дійсно бажаете видалити профіль?'
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { email } = useAppSelector(selectAuth);

  const cataloguePage = '/catalogue';

  const handlePassToCatalog = () => {
    router.push(cataloguePage);
  };

  const handleDeleteProfile = () => {
    dispatch(deleteProfileThunk())
      .unwrap()
      .then(() => {
        setModalTitle('Ваш профіль успішно видалено');
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
        {deleteProfile && modalTitle}
        {updateProfile && `Оновлення даних ${email} пройшло успішно`}
        {changePassword && `Пароль ${email} успішно змінено`}
      </h2>

      <div className="flex justify-center py-10">
        <SpriteSVG name="check-mark" className="fill-blue-700" />
      </div>

      <div className="flex justify-center items-start gap-3 text-white">
        {deleteProfile ? (
          <>
            <OrangeButton onClick={() => setShowModal?.(false)}>
              Ні
            </OrangeButton>
            <OrangeButton onClick={handleDeleteProfile}>Так</OrangeButton>
          </>
        ) : (
          <OrangeButton onClick={handlePassToCatalog}>До каталогу</OrangeButton>
        )}
      </div>
    </>
  );
}
