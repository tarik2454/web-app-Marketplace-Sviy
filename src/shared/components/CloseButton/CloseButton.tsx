import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

export default function CloseButton({
  closeButtonClick,
  closeCatalogClick,
  closeForm, // close  form
}: {
  closeButtonClick?: MouseEventHandler<HTMLButtonElement>;
  closeCatalogClick?: MouseEventHandler<HTMLButtonElement>;
  closeForm?: MouseEventHandler<HTMLButtonElement>;
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
    if (closeForm) {
      // close form
      closeForm(event);
    }
  };

  return (
    <button className="flex p-2" onClick={handleClick}>
      <SpriteSVG name="close-button" />
    </button>
  );
}
