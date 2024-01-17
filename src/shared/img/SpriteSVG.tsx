export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg width="28" height="28" fill="none">
          <path
            fill="currentColor"
            d="m20.636 11.532.224-.716.715.224-.223.716-.716-.224ZM9.48 18.222a.75.75 0 0 1-.696-1.329l.696 1.33Zm4.368-9.597 7.012 2.191-.448 1.432-7.011-2.191.447-1.432Zm7.504 3.13-2.191 7.012-1.432-.447 2.191-7.012 1.432.448Zm-.368.441L9.48 18.222l-.696-1.329 11.504-6.025.696 1.328Z"
          />
        </svg>
      );

    case 'favorite-header':
      return (
        <svg width="28" height="28" fill="none">
          <path
            stroke="#386A93"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 8.976C11.667 3.5 3.5 4.083 3.5 11.083S14 23.917 14 23.917s10.5-5.834 10.5-12.834S16.333 3.5 14 8.976Z"
          />
        </svg>
      );

    case 'cart':
      return (
        <svg width="24" height="25" fill="none">
          <path
            stroke="#386A93"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1.5 1.333h2.232c.778 0 1.166 0 1.477.17.128.07.243.161.343.268.24.26.335.637.523 1.392l.25.997c.138.555.208.832.315 1.066a2.745 2.745 0 0 0 1.985 1.55c.252.047.538.047 1.11.047"
          />
          <path
            stroke="#386A93"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.716 19.176H6.373c-.2 0-.3 0-.376-.008a1.374 1.374 0 0 1-1.19-1.651c.031-.122.069-.242.11-.36.072-.211.107-.317.146-.412a2.746 2.746 0 0 1 2.331-1.68c.102-.006.214-.006.435-.006h7.397"
          />
          <path
            stroke="#386A93"
            strokeLinecap="round"
            strokeWidth="2"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
              strokeWidth="2"
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
              strokeWidth="2"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m24.5 24.5-5.067-5.067m0 0a9.334 9.334 0 1 0-13.2-13.2 9.334 9.334 0 0 0 13.2 13.2Z"
          />
        </svg>
      );

    case 'user':
      return (
        <svg width="28" height="28" fill="none">
          <path
            stroke="#386A93"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.667 21a4.667 4.667 0 0 1 4.667-4.666h9.333a4.666 4.666 0 0 1 4.667 4.667A2.333 2.333 0 0 1 21 23.334H7a2.333 2.333 0 0 1-2.333-2.333Z"
          />
          <path
            stroke="#386A93"
            strokeWidth="2"
            d="M14 11.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          />
        </svg>
      );
    case 'h-arrow-top':
      return (
        <svg
          className="fill-current stroke-current w-full h-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 139 32"
        >
          <path d="M0.356 31.494c6.372-12.132 39.142-27.507 62.208-29.739 24.966-2.417 39.113 0.768 67.834 15.477-0.363-1.958-0.725-3.49-0.926-5.037-0.218-1.683-0.425-3.394-0.348-5.077 0.017-0.525 0.96-1.35 1.536-1.41 0.557-0.049 1.549 0.597 1.726 1.148 1.579 4.727 3.046 9.502 4.467 14.283 0.474 1.594-0.139 2.741-1.875 3.115-6.387 1.357-12.766 2.803-19.187 4.032-1.51 0.292-3.17-0.151-5.193-0.288 1.722-4.083 5.21-3.499 7.748-4.527 2.675-1.090 5.549-1.698 8.954-2.705-7.917-5.717-15.957-9.421-24.529-11.866-31.475-8.986-60.828-3.409-88.397 13.44-3.588 2.191-6.927 4.8-10.406 7.179-0.937 0.64-1.995 1.114-3.601 1.995l-0.011-0.021z"></path>
        </svg>
      );

    case 'h-arrow-bottom':
      return (
        <svg
          className="fill-current stroke-current w-full h-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="32"
          viewBox="0 0 76 32"
        >
          <path d="M76.201 26.831c-6.080 4.953-26.784 5.679-39.424 1.669-13.686-4.337-20.417-9.194-32.226-23.391-0.249 1.113-0.405 2-0.646 2.859-0.263 0.935-0.539 1.882-0.956 2.751-0.128 0.272-0.81 0.495-1.126 0.396-0.305-0.098-0.682-0.662-0.651-0.992 0.233-2.843 0.532-5.686 0.859-8.521 0.108-0.945 0.689-1.413 1.686-1.218 3.668 0.721 7.35 1.394 11.007 2.191 0.859 0.185 1.634 0.793 2.668 1.317-1.825 1.762-3.53 0.672-5.095 0.642-1.654-0.027-3.303-0.354-5.322-0.588 2.882 4.788 6.282 8.545 10.244 11.758 14.549 11.806 31.25 15.466 49.548 12.794 2.382-0.347 4.726-0.969 7.090-1.44 0.638-0.127 1.3-0.137 2.345-0.24v0.012z"></path>
        </svg>
      );

    case 'rating-star':
      return (
        <svg
          width="8"
          height="9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.391 2.67c.238-.595.356-.892.55-.933a.37.37 0 0 1 .154 0c.193.04.312.338.55.932.135.338.203.507.33.622a.758.758 0 0 0 .114.086c.147.088.33.105.694.137.618.056.928.084 1.022.26.02.037.033.076.04.117.03.198-.196.406-.651.82l-.126.115c-.213.194-.319.29-.38.412a.746.746 0 0 0-.073.23c-.02.135.011.276.074.557l.022.1c.112.504.167.756.098.88a.371.371 0 0 1-.306.189c-.141.006-.341-.157-.74-.483-.264-.215-.395-.322-.54-.364a.742.742 0 0 0-.41 0c-.146.042-.277.15-.54.364-.4.326-.6.49-.74.483a.371.371 0 0 1-.306-.189c-.07-.124-.014-.376.098-.88l.022-.1c.062-.281.093-.422.074-.556a.746.746 0 0 0-.073-.231c-.062-.121-.168-.218-.38-.412l-.126-.115c-.455-.414-.682-.622-.65-.82a.384.384 0 0 1 .039-.117c.094-.176.403-.204 1.021-.26.366-.032.548-.049.695-.137a.758.758 0 0 0 .114-.086c.127-.115.194-.284.33-.622Z"
            fill="url(#a)"
            stroke="url(#b)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="a"
              x1="4.018"
              y1="1.728"
              x2="4.018"
              y2="7.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBFF25" />
              <stop offset="1" stopColor="#B78400" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="4.018"
              y1="1.728"
              x2="4.018"
              y2="7.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBFF25" />
              <stop offset="1" stopColor="#B78400" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'ears_of_corn':
      return (
        <svg
          className="w-full h-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#ff9800"
            d="M5.464 0c-1.244 1.82-1.99 3.514-2.19 4.894l1.597 2.63 1.909-2.248c0.058-1.424-0.366-3.268-1.315-5.276zM30.414 0.198c-1.898 1.104-3.294 2.309-4.064 3.467l0.317 3.068 2.684-1.205c0.66-1.261 1.063-3.109 1.063-5.33zM24.296 2.030c-0.678 1.413-1.12 2.743-1.344 3.917l1.225 3.874 1.32-2.3-0.434-4.178h0.002c-0.296-0.56-0.566-1.012-0.854-1.451l0.041 0.067 0.044 0.072zM0.723 4.305c-0.008 1.569 0.16 2.962 0.458 4.118l2.759 2.966 0.208-2.646-2.176-3.584 0.002-0.002c-0.347-0.261-0.756-0.541-1.175-0.805l-0.077-0.045zM9.582 5.012c-0.561 0.235-1.086 0.485-1.574 0.746l-2.616 3.087-0.208 2.643 3.363-2.626c0.448-1.068 0.806-2.368 1.034-3.851zM21.4 6.465c-1.602 3.901-1.078 6.572 0.525 7.286l1.411-2.459-1.306-4.126c-0.224-0.261-0.432-0.492-0.645-0.718l0.008 0.009 0.008 0.008zM31.138 6.479c-0.304-0.002-0.598 0.006-0.886 0.019l-3.677 1.65-1.319 2.302 4.158-0.917c0.86-0.77 1.74-1.788 2.578-3.029-0.29-0.014-0.576-0.023-0.854-0.025zM16.062 7.065c-1.55 1.56-2.59 3.090-3.037 4.41l1.096 2.882 2.282-1.864c0.313-1.39 0.229-3.281-0.342-5.427zM0 9.562c0.218 4.216 1.832 6.4 3.584 6.352l0.223-2.835-2.938-3.156c-0.171-0.083-0.458-0.205-0.748-0.319l-0.121-0.042zM9.55 10.326c-0.414 0.087-0.826 0.19-1.234 0.306l-3.266 2.547-0.221 2.804c1.766 0.504 3.812-1.381 4.72-5.658zM10.622 10.43c-0.291 1.541-0.377 2.939-0.292 4.131l2.18 3.425 0.682-2.565-1.494-3.925h0.002c-0.344-0.37-0.704-0.726-1.077-1.066zM28.454 11.031l-4.039 0.888-1.396 2.434c1.379 1.222 4.030 0.405 6.677-3.064-0.274-0.076-0.657-0.16-1.044-0.229l-0.198-0.029zM19.206 12.746c-0.595 0.129-1.154 0.28-1.68 0.448l-3.133 2.554-0.681 2.565 3.78-1.967c0.633-0.968 1.222-2.182 1.713-3.599zM29.55 14.429c-1.724 1.365-2.938 2.758-3.536 4.015l0.747 2.991 2.486-1.576c0.475-1.343 0.616-3.23 0.302-5.43zM21.324 15.006c-2.296 5.21-3.96 10.682-4.198 16.994h1.248c0.238-6.098 1.838-11.379 4.088-16.484l-1.138-0.51zM8.962 15.47c-0.544 4.187 0.648 6.63 2.38 6.9l0.732-2.744-2.322-3.644c-0.175-0.124-0.407-0.278-0.643-0.426l-0.068-0.040-0.080-0.046zM23.75 17.118c-0.47 1.493-0.721 2.872-0.777 4.064l1.76 3.667 0.98-2.466-1.019-4.076h0.004c-0.286-0.392-0.602-0.79-0.948-1.19zM3.58 17.221c-0.578 5.009-0.542 9.928 0.813 14.779h1.296c-1.392-4.753-1.451-9.606-0.87-14.634l-1.238-0.145zM18.215 17.966c-0.466 0.011-0.906 0.039-1.342 0.082l0.073-0.006-3.67 1.912-0.722 2.714c1.646 0.821 3.997-0.66 5.662-4.702zM31.999 20.446c-0.604 0.058-1.177 0.138-1.718 0.242l-3.411 2.163-0.979 2.462 3.984-1.498c0.743-0.886 1.47-2.020 2.126-3.369zM21.51 21.924c-1.035 4.093-0.139 6.662 1.549 7.138l1.048-2.638-1.874-3.898c-0.21-0.186-0.446-0.383-0.686-0.574l-0.037-0.029zM11.126 23.643c-0.845 2.769-1.484 5.544-1.79 8.357h1.254c0.301-2.668 0.912-5.321 1.728-7.99l-1.192-0.367zM29.13 25.433l-3.868 1.457-1.038 2.611c1.538 1.014 4.046-0.176 6.176-3.99-0.355-0.037-0.787-0.065-1.223-0.077l-0.023-0h-0.024zM22.678 30.38c-0.121 0.466-0.208 1.012-0.241 1.571l-0.001 0.024-0.001 0.025h1.245c0.030-0.449 0.104-0.887 0.208-1.322l-1.21-0.298z"
          ></path>
        </svg>
      );
    case 'notebook':
      return (
        <svg
          className="w-full h-full"
          viewBox="0 0 73 72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.5 22.5C30.5 22.1022 30.658 21.7206 30.9393 21.4393C31.2206 21.158 31.6022 21 32 21H44C44.3978 21 44.7794 21.158 45.0607 21.4393C45.342 21.7206 45.5 22.1022 45.5 22.5C45.5 22.8978 45.342 23.2794 45.0607 23.5607C44.7794 23.842 44.3978 24 44 24H32C31.6022 24 31.2206 23.842 30.9393 23.5607C30.658 23.2794 30.5 22.8978 30.5 22.5ZM32 27C31.6022 27 31.2206 27.158 30.9393 27.4393C30.658 27.7206 30.5 28.1022 30.5 28.5C30.5 28.8978 30.658 29.2794 30.9393 29.5607C31.2206 29.842 31.6022 30 32 30H44C44.3978 30 44.7794 29.842 45.0607 29.5607C45.342 29.2794 45.5 28.8978 45.5 28.5C45.5 28.1022 45.342 27.7206 45.0607 27.4393C44.7794 27.158 44.3978 27 44 27H32ZM30.5 42C30.5 41.6022 30.658 41.2206 30.9393 40.9393C31.2206 40.658 31.6022 40.5 32 40.5H44C44.3978 40.5 44.7794 40.658 45.0607 40.9393C45.342 41.2206 45.5 41.6022 45.5 42C45.5 42.3978 45.342 42.7794 45.0607 43.0607C44.7794 43.342 44.3978 43.5 44 43.5H32C31.6022 43.5 31.2206 43.342 30.9393 43.0607C30.658 42.7794 30.5 42.3978 30.5 42ZM32 46.5C31.6022 46.5 31.2206 46.658 30.9393 46.9393C30.658 47.2206 30.5 47.6022 30.5 48C30.5 48.3978 30.658 48.7794 30.9393 49.0607C31.2206 49.342 31.6022 49.5 32 49.5H44C44.3978 49.5 44.7794 49.342 45.0607 49.0607C45.342 48.7794 45.5 48.3978 45.5 48C45.5 47.6022 45.342 47.2206 45.0607 46.9393C44.7794 46.658 44.3978 46.5 44 46.5H32Z"
            fill="#FF9800"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 40.5C15.5 40.1022 15.658 39.7206 15.9393 39.4393C16.2206 39.158 16.6022 39 17 39H24.5C24.8978 39 25.2794 39.158 25.5607 39.4393C25.842 39.7206 26 40.1022 26 40.5V48C26 48.3978 25.842 48.7794 25.5607 49.0607C25.2794 49.342 24.8978 49.5 24.5 49.5H17C16.6022 49.5 16.2206 49.342 15.9393 49.0607C15.658 48.7794 15.5 48.3978 15.5 48V40.5ZM18.5 42V46.5H23V42H18.5Z"
            fill="#FF9800"
          />
          <path
            d="M27.0616 23.5596C27.3348 23.2767 27.486 22.8978 27.4826 22.5045C27.4792 22.1112 27.3214 21.735 27.0433 21.4569C26.7652 21.1788 26.389 21.0211 25.9957 21.0176C25.6024 21.0142 25.2235 21.1654 24.9406 21.4386L20.0011 26.3781L18.0616 24.4386C17.7787 24.1654 17.3998 24.0142 17.0065 24.0176C16.6132 24.0211 16.237 24.1788 15.9589 24.4569C15.6808 24.735 15.523 25.1112 15.5196 25.5045C15.5162 25.8978 15.6674 26.2767 15.9406 26.5596L20.0011 30.6201L27.0616 23.5596Z"
            fill="#FF9800"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 9C13.9087 9 12.3826 9.63214 11.2574 10.7574C10.1321 11.8826 9.5 13.4087 9.5 15V57C9.5 58.5913 10.1321 60.1174 11.2574 61.2426C12.3826 62.3679 13.9087 63 15.5 63H45.5C47.0913 63 48.6174 62.3679 49.7426 61.2426C50.8679 60.1174 51.5 58.5913 51.5 57V15C51.5 13.4087 50.8679 11.8826 49.7426 10.7574C48.6174 9.63214 47.0913 9 45.5 9H15.5ZM12.5 15C12.5 14.2044 12.8161 13.4413 13.3787 12.8787C13.9413 12.3161 14.7044 12 15.5 12H45.5C46.2957 12 47.0587 12.3161 47.6213 12.8787C48.1839 13.4413 48.5 14.2044 48.5 15V57C48.5 57.7957 48.1839 58.5587 47.6213 59.1213C47.0587 59.6839 46.2957 60 45.5 60H15.5C14.7044 60 13.9413 59.6839 13.3787 59.1213C12.8161 58.5587 12.5 57.7957 12.5 57V15ZM54.5 24C54.5 22.8065 54.9741 21.6619 55.818 20.818C56.6619 19.9741 57.8065 19.5 59 19.5C60.1935 19.5 61.3381 19.9741 62.182 20.818C63.0259 21.6619 63.5 22.8065 63.5 24V54.4545L59 61.2045L54.5 54.4545V24ZM59 22.5C58.6022 22.5 58.2206 22.658 57.9393 22.9393C57.658 23.2206 57.5 23.6022 57.5 24V27H60.5V24C60.5 23.6022 60.342 23.2206 60.0607 22.9393C59.7794 22.658 59.3978 22.5 59 22.5ZM59 55.7955L57.5 53.5455V30H60.5V53.5455L59 55.7955Z"
            fill="#FF9800"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
