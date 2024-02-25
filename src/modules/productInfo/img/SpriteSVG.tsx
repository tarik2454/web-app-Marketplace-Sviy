export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-left':
      return (
        <svg width="24" height="24" fill="none">
          <path
            fill="#212121"
            fillRule="evenodd"
            d="m8.293 6.707 6 6L15 12l-.707-.707-6 6 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707Z"
          />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg width="24" height="24" fill="none">
          <path
            fill="#212121"
            fillRule="evenodd"
            d="m15.707 6.707-6 6L9 12l.707-.707 6 6-1.414 1.414L7.586 12l6.707-6.707 1.414 1.414Z"
          />
        </svg>
      );

    case 'heart':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity="0" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h24v24H0z" />
          <g clipPath="url(#a)">
            <path
              stroke="#FF9800"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9.5c0 6 9 11 9 11s9-5 9-11-7-6.5-9-1.805C10 3 3 3.5 3 9.5Z"
            />
          </g>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
