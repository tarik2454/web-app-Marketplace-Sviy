import { useState } from 'react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        ></div>
      )}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 sm:max-w-[343px] sm:max-h-[340px]"
        style={modalStyle}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &#10005;
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
