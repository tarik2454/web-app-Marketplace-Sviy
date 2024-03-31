import React, { useEffect, ReactNode } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  stylesWrapper?: string;
  stylesCloseButton?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  stylesWrapper,
  stylesCloseButton,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key);
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen && document.body) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    if (!isOpen) {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div
            className={twMerge(
              `w-full max-w-[514px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-default z-50 px-4 pt-[72px] pb-10 md:pt-20 md:pb-16`,
              stylesWrapper
            )}
          >
            <button
              onClick={onClose}
              className={twMerge(
                `absolute top-5 right-4 text-600 hover:text-gray-800`,
                stylesCloseButton
              )}
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
