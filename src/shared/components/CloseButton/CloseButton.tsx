import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

export default function CloseButton({
  closeButtonClick,
}: {
  closeButtonClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={closeButtonClick}
      className="block p-2 absolute top-5 right-4 z-50"
    >
      <SpriteSVG name="close-button" />
    </button>
  );
}
