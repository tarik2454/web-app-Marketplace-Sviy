export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg width="28" height="28" fill="none">
          <path
            fill="#fff"
            d="m20.636 11.532.224-.716.715.224-.223.716-.716-.224ZM9.48 18.222a.75.75 0 0 1-.696-1.329l.696 1.33Zm4.368-9.597 7.012 2.191-.448 1.432-7.011-2.191.447-1.432Zm7.504 3.13-2.191 7.012-1.432-.447 2.191-7.012 1.432.448Zm-.368.441L9.48 18.222l-.696-1.329 11.504-6.025.696 1.328Z"
          />
        </svg>
      );

    case 'favorite-header':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
        >
          <path
            stroke="#1565C0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 8.9764c-2.3333-5.4763-10.5-4.893-10.5 2.107S14 23.9168 14 23.9168s10.5-5.8334 10.5-12.8334c0-7-8.1667-7.5833-10.5-2.107Z"
          />
        </svg>
      );

    case 'cart':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          fill="none"
        >
          <path
            stroke="#1565C0"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1.5 1.333h2.2318c.7782 0 1.1666 0 1.4768.1702.128.0704.2438.1607.3432.2676.2402.2595.3349.637.523 1.3918l.2497.9979c.1386.5545.2086.8317.3157 1.065a2.745 2.745 0 0 0 1.9847 1.551c.2525.0467.538.0467 1.1104.0467"
          />
          <path
            stroke="#1565C0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.7159 19.1762H6.3729c-.1991 0-.2993 0-.3762-.0082a1.3733 1.3733 0 0 1-1.1911-1.0821 1.373 1.373 0 0 1 .0011-.5691 4.227 4.227 0 0 1 .1112-.3596c.0714-.2114.1057-.317.1455-.4117a2.7456 2.7456 0 0 1 2.3306-1.68c.1015-.0069.2141-.0069.435-.0069h7.3967"
          />
          <path
            stroke="#1565C0"
            strokeLinecap="round"
            strokeWidth="2"
            d="M15.9505 15.0585h-4.878c-1.669 0-2.5035 0-3.1473-.3774a2.7433 2.7433 0 0 1-.715-.6067c-.4805-.5737-.6177-1.3972-.8908-3.0429-.2787-1.6677-.4173-2.5022-.0865-3.1198a2.0588 2.0588 0 0 1 .56-.6616c.5545-.4269 1.4-.4269 3.091-.4269h9.1357c1.9901 0 2.9852 0 3.3888.6506.4021.652-.0439 1.5414-.9334 3.3216l-.6135 1.2284c-.7384 1.4769-1.1076 2.2153-1.7706 2.6243-.6643.4104-1.4892.4104-3.1404.4104Z"
          />
          <path
            fill="#1565C0"
            d="M19.3433 24.666c.758 0 1.3725-.6145 1.3725-1.3726 0-.758-.6145-1.3725-1.3725-1.3725-.7581 0-1.3726.6145-1.3726 1.3725 0 .7581.6145 1.3726 1.3726 1.3726ZM8.3628 24.666c.758 0 1.3725-.6145 1.3725-1.3726 0-.758-.6145-1.3725-1.3725-1.3725s-1.3726.6145-1.3726 1.3725c0 .7581.6146 1.3726 1.3726 1.3726Z"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#1565C0"
            d="m5.07 4.5.3375.6675L5.82 6H9v3.75H3V4.5h2.07ZM5.535 3H2.25a.75.75 0 0 0-.75.75v6.75a.7499.7499 0 0 0 .75.75h7.5a.7497.7497 0 0 0 .75-.75V5.25a.7498.7498 0 0 0-.75-.75h-3l-.54-1.0875A.75.75 0 0 0 5.535 3ZM17.07 4.5l.3375.6675L17.82 6H21v3.75h-6V4.5h2.07Zm.465-1.5H14.25a.7499.7499 0 0 0-.75.75v6.75a.7497.7497 0 0 0 .75.75h7.5a.7497.7497 0 0 0 .75-.75V5.25a.7498.7498 0 0 0-.75-.75h-3l-.54-1.0875A.7498.7498 0 0 0 17.535 3ZM5.07 14.25l.3375.6675.4125.8325H9v3.75H3v-5.25h2.07Zm.465-1.5H2.25a.7498.7498 0 0 0-.75.75v6.75a.7499.7499 0 0 0 .75.75h7.5a.7497.7497 0 0 0 .75-.75V15a.7497.7497 0 0 0-.75-.75h-3l-.54-1.0875a.7503.7503 0 0 0-.675-.4125Zm11.535 1.5.3375.6675.4125.8325H21v3.75h-6v-5.25h2.07Zm.465-1.5H14.25a.7497.7497 0 0 0-.75.75v6.75a.7497.7497 0 0 0 .75.75h7.5a.7497.7497 0 0 0 .75-.75V15a.7497.7497 0 0 0-.75-.75h-3l-.54-1.0875a.7501.7501 0 0 0-.675-.4125Z"
          />
        </svg>
      );

    case 'search':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
        >
          <path
            stroke="#1565C0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m24.5002 24.5002-5.0668-5.0668m0 0a9.3343 9.3343 0 0 0 2.7337-6.5998 9.3344 9.3344 0 0 0-5.7617-8.6231 9.3335 9.3335 0 1 0 3.028 15.2229Z"
          />
        </svg>
      );

    case 'user':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
        >
          <g stroke="#1565C0" strokeWidth="2">
            <path
              strokeLinejoin="round"
              d="M1.667 18.0007a4.6668 4.6668 0 0 1 4.6667-4.6667h9.3333a4.6668 4.6668 0 0 1 4.6667 4.6667 2.3334 2.3334 0 0 1-2.3334 2.3333h-14a2.3333 2.3333 0 0 1-2.3333-2.3333Z"
            />
            <path d="M11 8.667c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z" />
          </g>
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

    case 'logo':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="45"
          viewBox="0 0 130 45"
          fill="none"
        >
          <path
            d="M61.2404 7.15732C62.5256 7.15732 63.6181 7.33785 64.5177 7.69892C65.4174 8.05999 66.2956 8.56974 67.1524 9.22816C67.3881 9.41932 67.5915 9.5149 67.7629 9.5149C68.1913 9.5149 68.4698 8.87771 68.5983 7.60335H69.3373C69.2516 9.04763 69.2088 11.6176 69.2088 15.3133H68.4698C68.277 13.7415 68.02 12.5415 67.6986 11.7132C67.3773 10.8848 66.8311 10.1627 66.06 9.54675C65.5245 9.03701 64.9033 8.6547 64.1964 8.39983C63.4895 8.12371 62.7505 7.98566 61.9794 7.98566C59.8159 7.98566 58.2094 9.03701 57.1598 11.1397C56.1102 13.2212 55.5854 15.823 55.5854 18.9452C55.5854 22.0462 56.1316 24.6374 57.2241 26.7188C58.3165 28.8003 59.9444 29.841 62.1079 29.841C62.8362 29.841 63.5538 29.7136 64.2607 29.4587C64.989 29.1826 65.5994 28.7897 66.0921 28.2799C66.8847 27.6852 67.4309 26.9418 67.7308 26.0498C68.0521 25.1577 68.2984 23.8515 68.4698 22.1311H69.2088C69.2088 25.9754 69.2516 28.6516 69.3373 30.1596H68.5983C68.534 29.4799 68.4377 29.0021 68.3091 28.7259C68.202 28.4286 68.0414 28.2799 67.8272 28.2799C67.6558 28.2799 67.4309 28.3649 67.1524 28.5348C66.1885 29.2145 65.2674 29.7348 64.3892 30.0959C63.511 30.4357 62.4506 30.6056 61.2083 30.6056C58.9377 30.6056 56.9456 30.149 55.232 29.2357C53.5397 28.3224 52.2224 27.0056 51.2799 25.2852C50.3374 23.5435 49.8661 21.4727 49.8661 19.0726C49.8661 16.7363 50.3481 14.6655 51.312 12.8601C52.2759 11.0548 53.6147 9.65295 55.3283 8.6547C57.0634 7.65645 59.0341 7.15732 61.2404 7.15732Z"
            fill="#1565C0"
          />
          <path
            d="M83.6701 18.308C86.4548 18.5204 88.5004 19.1576 89.8071 20.2196C91.1137 21.2815 91.767 22.5347 91.767 23.9789C91.767 25.9542 90.9852 27.4834 89.4215 28.5667C87.8578 29.6286 85.6836 30.1596 82.899 30.1596C82.2778 30.1596 81.753 30.149 81.3246 30.1278C79.9108 30.0853 78.5292 30.064 77.1797 30.064C74.9734 30.064 73.324 30.0959 72.2316 30.1596V29.5224C72.9385 29.4799 73.4525 29.395 73.7738 29.2676C74.1166 29.1401 74.3415 28.8959 74.4486 28.5348C74.5771 28.1737 74.6414 27.5896 74.6414 26.7825V10.9804C74.6414 10.1733 74.5771 9.58923 74.4486 9.22816C74.3415 8.86709 74.1166 8.62284 73.7738 8.4954C73.4525 8.36797 72.9385 8.28301 72.2316 8.24053V7.60335C73.324 7.66707 74.952 7.69892 77.1154 7.69892L80.6819 7.66707C81.1103 7.64583 81.603 7.63521 82.16 7.63521C84.7304 7.63521 86.6904 8.09185 88.0399 9.00515C89.4108 9.91844 90.0962 11.1291 90.0962 12.6371C90.0962 13.869 89.55 15.0159 88.4576 16.0779C87.3865 17.1398 85.7907 17.862 83.6701 18.2443V18.308ZM81.7422 8.24053C81.1639 8.24053 80.7355 8.31487 80.457 8.46354C80.2 8.61222 80.0179 8.87771 79.9108 9.26002C79.8037 9.64233 79.7502 10.2158 79.7502 10.9804V18.1806H81.1318C82.5241 18.1806 83.4987 17.7133 84.0557 16.7788C84.6126 15.823 84.8911 14.5593 84.8911 12.9875C84.8911 11.3946 84.634 10.2052 84.1199 9.41932C83.6273 8.63346 82.8347 8.24053 81.7422 8.24053ZM81.9672 29.4268C84.9446 29.4268 86.4333 27.5684 86.4333 23.8515C86.4333 22.1736 86.0049 20.8992 85.1481 20.0284C84.2913 19.1576 82.9418 18.7222 81.0996 18.7222H79.7502V26.7825C79.7502 27.5472 79.8037 28.11 79.9108 28.4711C80.0179 28.8321 80.2214 29.087 80.5213 29.2357C80.8426 29.3631 81.3246 29.4268 81.9672 29.4268Z"
            fill="#1565C0"
          />
          <path
            d="M103.654 8.24053C102.925 8.28301 102.401 8.36797 102.079 8.4954C101.758 8.62284 101.533 8.86709 101.404 9.22816C101.297 9.58923 101.244 10.1733 101.244 10.9804V26.7825C101.244 27.5896 101.297 28.1737 101.404 28.5348C101.533 28.8959 101.758 29.1401 102.079 29.2676C102.401 29.395 102.925 29.4799 103.654 29.5224V30.1596C102.497 30.0959 100.88 30.064 98.8019 30.064C96.5099 30.064 94.8177 30.0959 93.7252 30.1596V29.5224C94.4321 29.4799 94.9462 29.395 95.2675 29.2676C95.6102 29.1401 95.8351 28.8959 95.9422 28.5348C96.0708 28.1737 96.135 27.5896 96.135 26.7825V10.9804C96.135 10.1733 96.0708 9.58923 95.9422 9.22816C95.8351 8.86709 95.6102 8.62284 95.2675 8.4954C94.9462 8.36797 94.4321 8.28301 93.7252 8.24053V7.60335C94.8177 7.66707 96.5099 7.69892 98.8019 7.69892C100.88 7.69892 102.497 7.66707 103.654 7.60335V8.24053Z"
            fill="#1565C0"
          />
          <path
            d="M130 8.24053C129.272 8.28301 128.747 8.36797 128.426 8.4954C128.104 8.62284 127.879 8.86709 127.751 9.22816C127.644 9.58923 127.59 10.1733 127.59 10.9804V26.7825C127.59 27.5896 127.644 28.1737 127.751 28.5348C127.879 28.8959 128.104 29.1401 128.426 29.2676C128.747 29.395 129.272 29.4799 130 29.5224V30.1596C128.908 30.0959 127.215 30.064 124.923 30.064C122.824 30.064 121.207 30.0959 120.072 30.1596V29.5224C120.778 29.4799 121.293 29.395 121.614 29.2676C121.957 29.1401 122.182 28.8959 122.289 28.5348C122.417 28.1737 122.481 27.5896 122.481 26.7825V11.8725L113.324 27.1967C113.346 27.8551 113.421 28.3436 113.549 28.6622C113.678 28.9596 113.903 29.172 114.224 29.2994C114.545 29.4056 115.049 29.4799 115.734 29.5224V30.1596C114.577 30.0959 112.96 30.064 110.882 30.064C108.59 30.064 106.898 30.0959 105.806 30.1596V29.5224C106.512 29.4799 107.027 29.395 107.348 29.2676C107.691 29.1401 107.916 28.8959 108.023 28.5348C108.151 28.1737 108.215 27.5896 108.215 26.7825V10.9804C108.215 10.1733 108.151 9.58923 108.023 9.22816C107.916 8.86709 107.691 8.62284 107.348 8.4954C107.027 8.36797 106.512 8.28301 105.806 8.24053V7.60335C106.898 7.66707 108.59 7.69892 110.882 7.69892C112.96 7.69892 114.577 7.66707 115.734 7.60335V8.24053C115.006 8.28301 114.481 8.36797 114.16 8.4954C113.838 8.62284 113.613 8.86709 113.485 9.22816C113.378 9.58923 113.324 10.1733 113.324 10.9804V25.8268L122.481 10.4388C122.46 9.82287 122.374 9.36622 122.224 9.06887C122.096 8.77151 121.871 8.56974 121.55 8.46354C121.228 8.35735 120.736 8.28301 120.072 8.24053V7.60335C121.185 7.66707 122.803 7.69892 124.923 7.69892C127.215 7.69892 128.908 7.66707 130 7.60335V8.24053ZM122.963 0.0527339C123.692 0.0527339 124.291 0.254508 124.763 0.658057C125.255 1.04037 125.502 1.53949 125.502 2.15544C125.502 3.08997 124.859 3.87583 123.574 4.51301C122.91 4.85284 122.096 5.12895 121.132 5.34135C120.168 5.5325 119.097 5.62808 117.919 5.62808C116.741 5.62808 115.67 5.5325 114.706 5.34135C113.742 5.12895 112.928 4.85284 112.264 4.51301C111 3.87583 110.368 3.08997 110.368 2.15544C110.368 1.53949 110.604 1.04037 111.075 0.658057C111.546 0.254508 112.157 0.0527339 112.906 0.0527339C113.656 0.0527339 114.277 0.254508 114.77 0.658057C115.263 1.04037 115.509 1.55011 115.509 2.1873C115.509 2.71828 115.316 3.16431 114.931 3.52538C114.567 3.88645 114.095 4.1307 113.517 4.25814C114.095 4.51301 114.781 4.70417 115.573 4.8316C116.387 4.9378 117.169 4.9909 117.919 4.9909C118.669 4.9909 119.44 4.92718 120.232 4.79974C121.046 4.67231 121.732 4.48115 122.289 4.22628C121.71 4.0776 121.239 3.83335 120.875 3.49352C120.532 3.13245 120.361 2.69704 120.361 2.1873C120.361 1.55011 120.607 1.04037 121.1 0.658057C121.592 0.254508 122.214 0.0527339 122.963 0.0527339Z"
            fill="#1565C0"
          />
          <path
            d="M14.893 35.4783C12.8825 35.4783 11.2437 33.7651 11.2437 31.6582C11.2437 29.5513 12.8785 27.834 14.893 27.834C16.9075 27.834 18.5383 29.5471 18.5383 31.6582C18.5383 33.7693 16.9035 35.4783 14.893 35.4783ZM14.893 30.2592C14.1575 30.2592 13.558 30.8875 13.558 31.6582C13.558 32.4289 14.1575 33.053 14.893 33.053C15.6284 33.053 16.224 32.4247 16.224 31.6582C16.224 30.8917 15.6244 30.2592 14.893 30.2592Z"
            fill="#1565C0"
          />
          <path
            d="M30.7092 35.4783C28.6987 35.4783 27.0599 33.7651 27.0599 31.6582C27.0599 29.5513 28.6947 27.834 30.7092 27.834C32.7237 27.834 34.3545 29.5471 34.3545 31.6582C34.3545 33.7693 32.7197 35.4783 30.7092 35.4783ZM30.7092 30.2592C29.9737 30.2592 29.3742 30.8875 29.3742 31.6582C29.3742 32.4289 29.9737 33.053 30.7092 33.053C31.4446 33.053 32.0402 32.4247 32.0402 31.6582C32.0402 30.8917 31.4406 30.2592 30.7092 30.2592Z"
            fill="#1565C0"
          />
          <path
            d="M41.1173 8.46602C39.6624 8.40319 38.2035 8.34036 36.7486 8.29847C35.2737 8.2524 33.7948 8.24402 32.3159 8.22727L30.0975 8.23565L27.8752 8.27753C26.3923 8.32361 24.9094 8.36968 23.4225 8.49534C24.8814 8.82206 26.3443 9.07338 27.8112 9.31632L30.0096 9.65979L32.208 9.96975C33.6749 10.1541 35.1418 10.3467 36.6127 10.5017C37.5879 10.6106 38.5632 10.707 39.5425 10.7991C39.2867 11.574 38.9949 12.3363 38.6631 13.0735C35.5495 13.1029 32.4318 13.1866 29.3181 13.3416C25.3691 13.5511 21.42 13.8401 17.471 14.4014C21.42 14.9626 25.3691 15.2516 29.3181 15.4611C31.9681 15.5951 34.6182 15.6747 37.2682 15.7124C37.1563 15.8925 37.0483 16.0726 36.9324 16.2486C36.165 17.3921 35.2937 18.4518 34.3464 19.4236C32.5477 19.4696 30.7491 19.5408 28.9504 19.6456C25.6129 19.855 22.2714 20.144 18.9339 20.7053C22.2714 21.2666 25.6129 21.5556 28.9504 21.765C29.7898 21.8153 30.6291 21.853 31.4685 21.8865C29.6459 23.1515 27.6474 24.1065 25.5569 24.6803L24.6976 24.873C24.4098 24.94 24.122 25.0112 23.8502 25.0364C23.2986 25.1285 22.751 25.162 22.2154 25.1704C21.1402 25.1704 20.117 24.9526 19.2337 24.517C18.3503 24.0813 17.6069 23.4279 17.0393 22.5944C16.4717 21.7608 16.076 20.7555 15.8442 19.6623L15.7523 19.256L15.7003 18.833C15.6643 18.5439 15.6204 18.2884 15.5964 17.9366L15.4165 15.9553L15.0488 11.9971C14.9928 11.3311 14.9009 10.6902 14.8809 10.0074C14.8289 9.26187 14.733 8.49534 14.5811 7.74138C14.2734 6.22928 13.7538 4.70879 12.8384 3.29303C12.3828 2.58933 11.8032 1.91915 11.0997 1.34949C9.49693 0.0593835 7.85016 -0.183559 6.21539 0.113836C3.77321 0.562023 2.46219 3.38937 3.62532 5.68475L5.40799 4.69204C6.25935 4.21872 7.05076 4.0805 7.69028 4.24385C8.3338 4.39465 8.98532 4.88891 9.51692 5.68894C10.0485 6.48479 10.4402 7.51938 10.6721 8.61681C10.788 9.16972 10.8679 9.731 10.9119 10.3174C10.9359 10.9708 11.0398 11.6536 11.0997 12.3196L11.7672 18.3513C11.7952 18.6654 11.8592 19.0675 11.9151 19.4445L12.0031 20.01L12.135 20.5796C12.4867 22.0875 13.0942 23.5996 14.0575 24.9149C15.0088 26.2301 16.3158 27.3066 17.7628 27.9558C19.2137 28.6135 20.7645 28.8564 22.2394 28.8145C22.9749 28.7852 23.7063 28.714 24.4098 28.5674C24.7735 28.5129 25.1013 28.4166 25.437 28.3245L26.4403 28.0522C29.0863 27.2103 31.5604 25.8573 33.7388 24.1232C35.8972 22.3598 37.7358 20.2026 39.1867 17.8067C40.6137 15.3899 41.6489 12.7385 42.2365 9.9865L42.2485 9.93205C42.2684 9.83152 42.2764 9.72681 42.2724 9.6179C42.2445 8.98123 41.7169 8.49115 41.1093 8.46183L41.1173 8.46602Z"
            fill="#FF9800"
          />
          <path
            d="M1.84662 38.3694C1.84662 38.3694 104.005 33.0378 128.523 38.37C128.523 38.37 24.1819 34.9388 0 45C0 45 0.503624 40.5014 1.84662 38.3694Z"
            fill="#FF9800"
          />
        </svg>
      );

    case 'catalog-arrow':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path stroke="#333" d="m9 6 6 6-6 6" />
        </svg>
      );

    case 'heart':
      return (
        <svg width="24" height="24" fill="none">
          <path
            stroke="#FF9800"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
          />
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

    case 'card-part':
      return (
        <svg width="95" height="98" fill="none">
          <g clipPath="url(#a)">
            <path
              fill="#F6F6F6"
              d="M30 36.999C9.5 61 33 81.5 0 97.999h74.508C85.554 98 94.5 89.05 94.5 78.004V0C85 27.5 59 1.5 30 36.999Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h95v98H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'slider-prev':
      return (
        <svg width="24" height="24" fill="none">
          <path stroke="#212121" strokeWidth="2" d="m15 6-6 6 6 6" />
        </svg>
      );

    case 'slider-next':
      return (
        <svg width="24" height="24" fill="none">
          <path stroke="#212121" strokeWidth="2" d="m9 6 6 6-6 6" />
        </svg>
      );
    
    case 'profile-picture':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          fill="none">
          <g 
            stroke="#212121" 
            strokeWidth="2">
            <path 
              strokeLinejoin="round" 
              d="M1 25.5a6.9998 6.9998 0 0 1 7-7h14c1.8565 0 3.637.7375 4.9497 2.0503A6.9997 6.9997 0 0 1 29 25.5a3.5 3.5 0 0 1-3.5 3.5h-21A3.5003 3.5003 0 0 1 1 25.5Z"/>
            <path 
              d="M15 11.5c2.8995 0 5.25-2.3505 5.25-5.25S17.8995 1 15 1 9.75 3.3505 9.75 6.25 12.1005 11.5 15 11.5Z"/>
          </g>
        </svg>
      )

    case 'close-button':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none">
          <g 
            stroke="#212121" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12"/>
          </g>
        </svg>
      )
    
    default:
      return 'SVG not found'; 
  }
};
