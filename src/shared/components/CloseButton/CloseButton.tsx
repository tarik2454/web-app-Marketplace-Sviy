import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { MouseEventHandler } from 'react';

export default function CloseButton({
  closeButtonClick,
}: {
  closeButtonClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={closeButtonClick} className="block ml-auto mr-0 p-2">
      <SpriteSVG name="close-button" />
    </button>
  );
}
