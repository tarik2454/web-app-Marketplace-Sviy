import ScreenSize from '@/shared/hooks/useMediaQuery';
import OnMobileOrder from './OnMobileOrder';
import OnAdaptiveOrder from './OnAdaptiveOrder';
import { Order } from '../types';

type Props = {
  orderedItems: Order[];
};

export default function MyOrderProfile({ orderedItems }: Props) {
  const { isOnMobile } = ScreenSize();
  return (
    <>
      {(isOnMobile && <OnMobileOrder orderedItems={orderedItems} />) || (
        <OnAdaptiveOrder orderedItems={orderedItems} />
      )}
    </>
  );
}
