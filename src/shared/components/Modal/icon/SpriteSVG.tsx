export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'check-mark':
      return (
        <svg
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="emojione-v1:left-check-mark"
            clip-path="url(#clip0_1708_11739)"
          >
            <path
              id="Vector"
              d="M57.2343 5.07967C48.7973 12.3817 41.6593 19.3327 35.1243 28.4017C32.2423 32.4017 29.0373 37.1097 26.9423 41.5547C25.7463 43.9117 23.5903 47.5947 22.8553 51.1357C18.8353 47.3957 14.5173 43.1507 10.0993 39.8257C6.95026 37.4567 -2.11974 42.2867 1.57226 45.0647C8.18927 50.0417 13.6923 56.2407 20.1283 61.4397C22.8203 63.6117 28.7863 58.8947 30.1883 56.9157C34.7903 50.3957 35.4193 42.4257 38.7733 35.3137C43.8943 24.4367 52.9763 15.5017 61.9433 7.74267C67.8843 2.20167 61.7483 1.17967 57.2433 5.07967"
              fill="#1565C0"
            />
          </g>
          <defs>
            <clipPath id="clip0_1708_11739">
              <rect
                width="64"
                height="64"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
