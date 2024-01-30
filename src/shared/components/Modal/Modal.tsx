import { useEffect } from 'react';
import { ReactNode } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] z-100 sm:px-4 sm:pt-[72px] sm:pb-10 md:px-[97.50px] md:pt-20 md:pb-16">
        <button
          onClick={onClose}
          className="absolute top-5 right-4 text-600 hover:text-gray-800"
        >
          <SpriteSVG name="close-button" />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
