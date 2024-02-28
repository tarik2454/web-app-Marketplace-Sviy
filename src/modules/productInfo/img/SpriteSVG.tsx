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

    case 'location':
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity="0" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h20v20H0z" />
          <g
            stroke="#1565C0"
            strokeLinejoin="round"
            strokeWidth="2"
            clipPath="url(#a)"
          >
            <path d="M16.25 7.916a6.25 6.25 0 0 0-12.5 0c0 5.416 6.25 10.416 6.25 10.416s6.25-5 6.25-10.416Z" />
            <path d="M10.957 10.227a2.527 2.527 0 0 0 1.353-1.354 2.511 2.511 0 0 0 0-1.914 2.526 2.526 0 0 0-1.353-1.354 2.502 2.502 0 0 0-2.725 4.078 2.502 2.502 0 0 0 2.725.544Z" />
          </g>
        </svg>
      );

    case 'minus':
      return (
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity="0" d="M0 0h18v18H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h18v18H0z" />
          <g clipPath="url(#a)">
            <path stroke="#656565" strokeWidth="2" d="M1.2 9h15.599" />
          </g>
        </svg>
      );

    case 'plus':
      return (
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity="0" d="M0 0h18v18H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h18v18H0z" />
          <g clipPath="url(#a)">
            <path
              stroke="#656565"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3.375v11.25M14.625 9H3.375"
            />
          </g>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
