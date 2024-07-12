import React from 'react';

import { deleteProfileThunk } from '@/redux/auth/operations';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/redux/hooks';

import { BlueBorderButton, OrangeButton } from '@/shared/components';

interface ButtonProfileProps {
  setShowModal: (show: boolean) => void;
}

export default function ButtonProfile({ setShowModal }: ButtonProfileProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProfile = () => {
    dispatch(deleteProfileThunk())
      .unwrap()
      .then(() => {
        setShowModal(true);
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col gap-6 text-nowrap">
      <OrangeButton
        type="submit"
        cssSettings="text-white md:max-w-[159px] xl:max-w-[167px]"
      >
        Зберегти дані
      </OrangeButton>
      <BlueBorderButton
        onClick={handleDeleteProfile}
        type="button"
        cssSettings="md:max-w-[163px] xl:max-w-[201px]"
      >
        Видалити профіль
      </BlueBorderButton>
    </div>
  );
}
