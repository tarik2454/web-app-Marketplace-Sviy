import React, {
  useState,
  useEffect,
  ReactNode,
  MouseEventHandler,
} from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key);
      if (event.key === 'Escape') {
        onClose();
      }
    };
    // Додано умовну перевірку для document.body
    if (isOpen && document.body) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      // Очистка події keydown
      if (document.body) {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className=" w-full max-w-[514px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] z-50 px-4 sm:pt-[72px] sm:pb-10  md:pt-20 md:pb-16">
            <button
              onClick={onClose}
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
}
