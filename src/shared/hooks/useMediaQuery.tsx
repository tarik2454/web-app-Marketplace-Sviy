import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function ScreenSize() {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.9px)',
  });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isOnTablet, setIsOnTablet] = useState(false);
  const [isOnDesktop, setIsOnDesktop] = useState(false);

  useEffect(() => {
    setIsOnMobile(isMobileScreen);
    setIsOnTablet(isTabletScreen);
    setIsOnDesktop(isDesktopScreen);
  }, [isDesktopScreen, isMobileScreen, isTabletScreen]);

  return { isOnMobile, isOnTablet, isOnDesktop };
}

// вызывать в компонентах для использования размеров дисплея вот так:
// const { isOnMobile, isOnTablet, isOnDesktop } = ScreenSize();

// для перебора условий для размеров экранов пользуйтесь тернарником а не условными операторами
// типо так:
// {
//   isOnMobile ? (
//     <Logo logo="logoHeaderMobile" />
//   ) : isOnTablet ? (
//     <Logo logo="logoTablet" />
//   ) : (
//     <Logo logo="logoHeaderDesktop" />
//   );
// }
