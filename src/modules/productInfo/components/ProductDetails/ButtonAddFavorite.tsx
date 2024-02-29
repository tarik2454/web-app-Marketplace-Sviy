import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '../../img/SpriteSVG';

export default function ButtonAddFavorite({
  stylesWrapper,
}: {
  stylesWrapper?: string;
}) {
  const dynamicStyles = {
    boxShadow: '2px 2px 12px 0 rgba(186, 186, 186, 0.12)',
  };

  return (
    <button
      className={twMerge(
        `p-2 bg-white rounded-circle absolute z-10`,
        stylesWrapper
      )}
      style={dynamicStyles}
    >
      <SpriteSVG name="heart" />
    </button>
  );
}
