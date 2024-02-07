'use client';

import { useMediaQuery } from 'react-responsive';

const ScreenSize = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.9px)',
  });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  return { isMobileScreen, isTabletScreen, isDesktopScreen };
};

export default ScreenSize;

// вызывать в компонентах для использования размеров дисплея вот так:
// const { isMobileScreen, isTabletScreen, isDesktopScreen } = ScreenSize();

// для перебора условий для размеров экранов пользуйтесь тернарником а не условными операторами
// типо так:
// {
//   isMobileScreen ? (
//     <Logo logo="logoHeaderMobile" />
//   ) : isTabletScreen ? (
//     <Logo logo="logoTablet" />
//   ) : (
//     <Logo logo="logoHeaderDesktop" />
//   );
// }
