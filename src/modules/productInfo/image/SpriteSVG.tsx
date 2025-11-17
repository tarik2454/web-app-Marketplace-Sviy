export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-left':
      return (
        <svg width="24" height="24" fill="none">
          <path
            fill={'currentColor'}
            fillRule="evenodd"
            d="m8.293 6.707 6 6L15 12l-.707-.707-6 6 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707Z"
          />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg width="24" height="24" fill="none">
          <path
            fill={'currentColor'}
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
            <path stroke={'currentColor'} strokeWidth="2" d="M1.2 9h15.599" />
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
              stroke={'currentColor'}
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3.375v11.25M14.625 9H3.375"
            />
          </g>
        </svg>
      );

    case 'viber':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            fill="#6E92B1"
            d="M7.965 6.202a.822.822 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823-.24.277-.37.557-.404.827-.02.16-.006.322.04.475l.019.01c.27.793.622 1.556 1.052 2.274a13.373 13.373 0 0 0 2.03 2.775l.024.034.038.028.023.027.028.024a13.567 13.567 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.61 1.61 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.2-.38.133-.738-.157-.981A12.122 12.122 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a11.808 11.808 0 0 0-1.347-1.88.748.748 0 0 0-.44-.263l.002.001ZM12.58 5a.5.5 0 0 0 0 1c1.264 0 2.314.413 3.145 1.205.427.433.76.946.978 1.508.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042 5.358 5.358 0 0 0-.361-2.17 5.44 5.44 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.086 5 12.58 5Z"
          />
          <path
            fill="#6E92B1"
            d="M12.545 6.644a.5.5 0 1 0 0 1h.017c.912.065 1.576.369 2.04.868.478.514.725 1.153.706 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002h-.05Z"
          />
          <path
            fill="#6E92B1"
            d="M12.526 8.318a.5.5 0 1 0-.052.998c.418.022.685.148.853.317.17.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52-.387-.39-.914-.58-1.512-.612Z"
          />
          <path
            fill="#6E92B1"
            fillRule="evenodd"
            d="M7.067 2.383a22.15 22.15 0 0 1 9.664 0l.339.075a5.155 5.155 0 0 1 3.872 3.763 19.718 19.718 0 0 1 0 9.7 5.155 5.155 0 0 1-3.872 3.763l-.34.075a22.15 22.15 0 0 1-6.077.5L8 22.631a.75.75 0 0 1-1.24-.435l-.44-2.622a5.156 5.156 0 0 1-3.464-3.654 19.717 19.717 0 0 1 0-9.7 5.155 5.155 0 0 1 3.872-3.763l.339-.075Zm9.337 1.463a20.65 20.65 0 0 0-9.01 0l-.34.076A3.655 3.655 0 0 0 4.31 6.59a18.217 18.217 0 0 0 0 8.962 3.655 3.655 0 0 0 2.745 2.668l.09.02a.75.75 0 0 1 .576.608l.294 1.758 1.872-1.675a.749.749 0 0 1 .553-.19c1.999.142 4.008-.008 5.964-.445l.339-.076a3.655 3.655 0 0 0 2.745-2.668c.746-2.94.746-6.02 0-8.962a3.655 3.655 0 0 0-2.745-2.668l-.34-.076Z"
            clipRule="evenodd"
          />
        </svg>
      );

    case 'phone':
      return (
        <svg width="22" height="21" fill="none" viewBox="0 0 22 21">
          <path
            stroke="#386A93"
            strokeWidth="2"
            d="m17.707 13.707 2.648 2.648a.912.912 0 0 1 0 1.29 5.471 5.471 0 0 1-7.151.508l-1.575-1.182a22.996 22.996 0 0 1-4.6-4.6l-1.182-1.575a5.471 5.471 0 0 1 .508-7.151.912.912 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.533.533 0 0 0-.1.616 12.262 12.262 0 0 0 5.484 5.484.533.533 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"
          />
        </svg>
      );

    case 'telegram':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#6E92B1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 5 2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5 9 13.5m0 0V19l3.249-3.277"
          />
        </svg>
      );

    case 'email':
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <rect
            width="16.667"
            height="12.5"
            x="1.666"
            y="4.166"
            stroke="#386A93"
            strokeWidth="2"
            rx="2"
          />
          <path
            stroke="#386A93"
            strokeWidth="2"
            d="m1.666 6.666 7.439 3.72a2 2 0 0 0 1.789 0l7.439-3.72"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
