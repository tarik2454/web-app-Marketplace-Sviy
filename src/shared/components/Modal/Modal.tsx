import React, { useEffect, ReactNode } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';
import { boolean } from 'yup';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  showCatalog?: boolean;
  showSearch?: boolean;
  children?: ReactNode;
  stylesWrapper?: string;
  stylesCloseButton?: string;
};

export default function Modal({
  isOpen,
  onClose,
  showCatalog,
  showSearch,
  children,
  stylesWrapper,
  stylesCloseButton,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    if (!isOpen && !showCatalog && !showSearch) {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, showCatalog, showSearch]);

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
}
