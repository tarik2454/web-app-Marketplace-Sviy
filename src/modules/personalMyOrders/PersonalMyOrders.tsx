'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';

export default function PersonalMyOrders() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  return <div>Root</div>;
}
