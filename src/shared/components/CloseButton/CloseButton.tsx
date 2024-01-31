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
    <button className="flex p-2" onClick={handleClick}>
      <SpriteSVG name="close-button" />
    </button>
  );
}
