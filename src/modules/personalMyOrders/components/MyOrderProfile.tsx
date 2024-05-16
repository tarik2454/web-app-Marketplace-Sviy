import MyOrderList from './MyOrderList';
import { Order } from '../types';

type Props = {
  orderedItems: Order[];
};

export default function MyOrderProfile({ orderedItems }: Props) {
  return (
    <>
      <MyOrderList orderedItems={orderedItems} />
    </>
  );
}
