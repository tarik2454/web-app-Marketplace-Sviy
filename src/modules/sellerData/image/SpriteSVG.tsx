export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case "phone":
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="17.8699" 
          height="17.8699" 
          fill="none">
          <path 
            stroke="#386A93" 
            strokeWidth="2" 
            d="M13.9546 11.3294c-.3904-.3905-1.0237-.3905-1.4141 0l-1.0212 1.0212a.5331.5331 0 0 1-.6155.0998 12.2638 12.2638 0 0 1-5.4844-5.4843.5332.5332 0 0 1 .0999-.6155l1.0212-1.0212c.3904-.3905.3904-1.0237 0-1.4142L3.8923 1.2671a.9119.9119 0 0 0-1.2895 0C.6775 3.1923.4609 6.24 2.0945 8.4183L3.276 9.9938a23.0008 23.0008 0 0 0 4.6001 4.6l1.5755 1.1815c2.1779 1.6336 5.2258 1.417 7.1511-.5082a.9117.9117 0 0 0 0-1.2896l-2.6482-2.6481Z"
          />
        </svg>
      )
    case "mail":
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          fill="none">
          <rect 
            width="16.6667" 
            height="12.5" 
            x="1.6665" 
            y="4.1666" 
            stroke="#386A93" 
            strokeWidth="2" 
            rx="2"
          />
            <path 
              fill="#386A93" 
              fillRule="evenodd" 
              d="m2.1138 5.7722 7.439 3.7194q.2109.1056.447.1056.236 0 .4472-.1056l7.439-3.7194.8943 1.7888-7.4387 3.7195q-.6336.3167-1.3418.3167-.708 0-1.3416-.3167L1.2192 7.561l.8946-1.7888Z"
            />
        </svg>
      )
    case "area":
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14.5" 
          height="18.6666" 
          fill="none">
          <path 
            stroke="#386A93" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M13.5 7.25C13.5 3.7983 10.7017 1 7.25 1S1 3.7983 1 7.25c0 5.4167 6.25 10.4167 6.25 10.4167s6.25-5 6.25-10.4167Z"
          />
          <path 
            stroke="#386A93" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8.2068 9.5597a2.5003 2.5003 0 0 0 1.353-3.2664 2.501 2.501 0 0 0-1.353-1.353 2.5001 2.5001 0 0 0-2.7246 4.0775 2.5002 2.5002 0 0 0 2.7246.5419Z"
          />
        </svg>
      )
    default: 
      return "Sprite is not found"
  }
}