export const Sprite = ({ name }: { name: string }) => {
  switch (name) {
    case 'star':
      return (
        <svg width="17" height="16" fill="none">
          <path
            fill="#DFB300"
            fillRule="evenodd"
            d="M8.5 0 5.61 4.91 0 6.11l3.825 4.237L3.247 16 8.5 13.71 13.753 16l-.578-5.652L17 6.11 11.39 4.91 8.5 0Z"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
