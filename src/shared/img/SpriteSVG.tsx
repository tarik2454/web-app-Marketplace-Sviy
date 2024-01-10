export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg width="29" height="29" fill="none">
          <path
            fill="#fff"
            d="m20.636 11.532.224-.716.715.224-.223.716-.716-.224ZM9.48 18.222a.75.75 0 0 1-.696-1.329l.696 1.33Zm4.368-9.597 7.012 2.191-.448 1.432-7.011-2.191.447-1.432Zm7.504 3.13-2.191 7.012-1.432-.447 2.191-7.012 1.432.448Zm-.368.441L9.48 18.222l-.696-1.329 11.504-6.025.696 1.328Z"
          />
        </svg>
      );

    case 'favorite-header':
      return (
        <svg width="28" height="28" fill="none">
          <path
            stroke="#386A93"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 8.976C11.667 3.5 3.5 4.083 3.5 11.083S14 23.917 14 23.917s10.5-5.834 10.5-12.834S16.333 3.5 14 8.976Z"
          />
        </svg>
      );

    case 'cart':
      return (
        <svg width="24" height="25" fill="none">
          <path
            stroke="#386A93"
            stroke-linecap="round"
            stroke-width="2"
            d="M1.5 1.333h2.232c.778 0 1.166 0 1.477.17.128.07.243.161.343.268.24.26.335.637.523 1.392l.25.997c.138.555.208.832.315 1.066a2.745 2.745 0 0 0 1.985 1.55c.252.047.538.047 1.11.047"
          />
          <path
            stroke="#386A93"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.716 19.176H6.373c-.2 0-.3 0-.376-.008a1.374 1.374 0 0 1-1.19-1.651c.031-.122.069-.242.11-.36.072-.211.107-.317.146-.412a2.746 2.746 0 0 1 2.331-1.68c.102-.006.214-.006.435-.006h7.397"
          />
          <path
            stroke="#386A93"
            stroke-linecap="round"
            stroke-width="2"
            d="M15.95 15.059h-4.877c-1.67 0-2.504 0-3.148-.378a2.743 2.743 0 0 1-.715-.607c-.48-.573-.618-1.397-.89-3.043-.28-1.667-.418-2.502-.087-3.12.137-.257.328-.483.56-.66.554-.428 1.4-.428 3.09-.428h9.137c1.99 0 2.985 0 3.388.65.402.653-.044 1.542-.933 3.322l-.614 1.229c-.738 1.477-1.107 2.215-1.77 2.624-.664.41-1.49.41-3.14.41Z"
          />
          <path
            fill="#386A93"
            d="M19.343 24.666a1.373 1.373 0 1 0 0-2.745 1.373 1.373 0 0 0 0 2.745ZM8.363 24.666a1.373 1.373 0 1 0 0-2.745 1.373 1.373 0 0 0 0 2.745Z"
          />
        </svg>
      );

    case 'favorit-card':
      return (
        <svg width="58" height="62" fill="none">
          <g filter="url(#a)">
            <rect
              width="40"
              height="40"
              x="10"
              y="8"
              fill="#fff"
              rx="20"
              shape-rendering="crispEdges"
            />
            <path
              stroke="url(#b)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M30 23.694C28 19 21 19.5 21 25.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
            />
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="21.985"
              x2="39.19"
              y1="20.54"
              y2="21.781"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DD9301" />
              <stop offset=".557" stop-color="#E8B860" />
              <stop offset="1" stop-color="#E8B65E" />
            </linearGradient>
            <filter
              id="a"
              width="64"
              height="64"
              x="0"
              y="-2"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0.12 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_682_3461"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_682_3461"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );

    case 'facebook':
      return (
        <svg width="24" height="24" fill="none">
          <g clip-path="url(#a)">
            <path
              stroke="#386A93"
              stroke-width="2"
              d="M12 23.2A11.2 11.2 0 1 1 12 .798 11.2 11.2 0 0 1 12 23.2Zm0 0V10.4a3.2 3.2 0 0 1 3.2-3.2h.8m-8 6.4h8"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'instagram':
      return (
        <svg width="24" height="24" fill="none">
          <g clip-path="url(#a)">
            <path
              stroke="#386A93"
              stroke-width="2"
              d="M17.6 5.6h1.6M7.2.8h9.6a6.4 6.4 0 0 1 6.4 6.4v9.6a6.4 6.4 0 0 1-6.4 6.4H7.2a6.4 6.4 0 0 1-6.4-6.4V7.2A6.4 6.4 0 0 1 7.2.8Zm4.8 16a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'catalog':
      return (
        <svg width="24" height="24" fill="none">
          <path
            fill="#386A93"
            d="m5.07 4.5.337.668L5.82 6H9v3.75H3V4.5h2.07ZM5.535 3H2.25a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75h-3l-.54-1.087A.75.75 0 0 0 5.535 3ZM17.07 4.5l.337.668.413.832H21v3.75h-6V4.5h2.07Zm.465-1.5H14.25a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75h-3l-.54-1.087A.75.75 0 0 0 17.535 3ZM5.07 14.25l.337.668.413.832H9v3.75H3v-5.25h2.07Zm.465-1.5H2.25a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-3l-.54-1.088a.75.75 0 0 0-.675-.412Zm11.535 1.5.337.668.413.832H21v3.75h-6v-5.25h2.07Zm.465-1.5H14.25a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-3l-.54-1.088a.75.75 0 0 0-.675-.412Z"
          />
        </svg>
      );

    case 'search':
      return (
        <svg width="28" height="28" fill="none">
          <path
            stroke="#386A93"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m24.5 24.5-5.067-5.067m0 0a9.334 9.334 0 1 0-13.2-13.2 9.334 9.334 0 0 0 13.2 13.2Z"
          />
        </svg>
      );

    case 'user':
      return (
        <svg width="28" height="28" fill="none">
          <path
            stroke="#386A93"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.667 21a4.667 4.667 0 0 1 4.667-4.666h9.333a4.666 4.666 0 0 1 4.667 4.667A2.333 2.333 0 0 1 21 23.334H7a2.333 2.333 0 0 1-2.333-2.333Z"
          />
          <path
            stroke="#386A93"
            stroke-width="2"
            d="M14 11.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
