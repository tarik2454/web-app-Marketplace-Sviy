// import { useState } from 'react';

// export default function useModal() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const handleOpenModal = () => {
//     setIsOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpenModal(false);
//   };

//   return { isOpenModal, handleOpenModal, handleCloseModal };
// }

import { useState } from 'react';

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isItemModalOpen, setItemModalOpen] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenItemModal = () => {
    setItemModalOpen(true);
    setIsOpenModal(false); // Закриваємо першу модалку
  };
  const handleCloseItemModal = () => setItemModalOpen(false);

  return {
    isOpenModal,
    handleOpenModal,
    handleCloseModal,
    isItemModalOpen,
    handleOpenItemModal,
    handleCloseItemModal,
  };
}
