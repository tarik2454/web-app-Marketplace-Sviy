import { useState } from 'react';

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, handleOpenModal, handleCloseModal };
}
