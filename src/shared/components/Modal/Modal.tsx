import React, { useState, useEffect, ReactNode } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { OrangeButton } from '..';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeyDown);
    onClose();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <OrangeButton onClick={openModal}>Click</OrangeButton>
      {/* <button onClick={openModal}>Open</button> */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className=" w-full max-w-[514px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] z-50 px-4 sm:pt-[72px] sm:pb-10  md:pt-20 md:pb-16">
            <button
              onClick={closeModal}
              className="absolute top-5 right-4 text-600 hover:text-gray-800"
            >
              <SpriteSVG name="close-button" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

// import { useEffect } from 'react';
// import { ReactNode } from 'react';
// import { SpriteSVG } from '@/shared/img/SpriteSVG';

// import ReactModal from 'react-modal';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isOpen]);

//   const handleClickEscape = () => {
//     console.log('Clicked on Escape!');
//     onClose();
//   };

//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={handleClickEscape}
//       ariaHideApp={false}
//       className="fixed inset-0 flex items-center justify-center"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//     >
//       <div className=" w-full max-w-[514px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] z-50 px-4 sm:pt-[72px] sm:pb-10  md:pt-20 md:pb-16">
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-4 text-600 hover:text-gray-800"
//         >
//           <SpriteSVG name="close-button" />
//         </button>
//         {children}
//       </div>
//     </ReactModal>
//   );
// };

// export default Modal;
