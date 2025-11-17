export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case "four":
      return (
        <svg className="w-[100px] md:w-[170px]" viewBox="0 0 171 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_di_3334_13429)">
            <path d="M124.638 161.04C124.638 165.373 124.551 169.533 124.378 173.52C124.204 177.333 123.944 180.453 123.598 182.88C126.718 182.533 130.184 182.36 133.998 182.36C137.984 182.187 141.104 182.1 143.358 182.1V199H72.1178V184.7H73.6778C78.3578 184.527 82.0845 183.747 84.8578 182.36C87.8045 180.8 89.9711 178.2 91.3578 174.56C92.9178 170.747 93.6978 165.46 93.6978 158.7V150.9H20.3778V130.36L111.118 12.84H124.638V130.1H150.378V150.9H124.638V161.04ZM93.4378 61.46L42.2178 129.06L93.6978 129.58L93.9578 61.46H93.4378Z" fill="#1565C0"/>
          </g>
          <defs>
            <filter id="filter0_di_3334_13429" x="0.37793" y="0.839844" width="170" height="226.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="8"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3334_13429"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3334_13429" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3334_13429"/>
            </filter>
          </defs>
        </svg>
      )
  }
}