import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

export default function CloseButton({
  closeButtonClick,
  closeCatalogClick,
}: {
  closeButtonClick?: MouseEventHandler<HTMLButtonElement>;
  closeCatalogClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (closeButtonClick) {
      closeButtonClick(event);
    }
    if (closeCatalogClick) {
      closeCatalogClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="block p-2 absolute top-5 right-4 z-50"
    >
      <SpriteSVG name="close-button" />
    </button>
  );
}
