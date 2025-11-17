import React, { useEffect, ReactNode } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { twMerge } from 'tailwind-merge';

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
      document.body.style.overflow = 'auto';
    }
  };

  const handleCloseButtonClick = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {isOpen && (
        <div
          className="flex items-center justify-center bg-black bg-opacity-50 fixed z-50 inset-0 "
          onClick={handleBackdropClick}
        >
          <div
            className={twMerge(
              `w-[96%] max-w-[530px] bg-white rounded-default px-4 pt-[72px] md:pt-20 pb-10 md:pb-16 fixed top-1/2 left-1/2 z-50  transform -translate-x-1/2 -translate-y-1/2`,
              stylesWrapper
            )}
          >
            <button
              onClick={handleCloseButtonClick}
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
