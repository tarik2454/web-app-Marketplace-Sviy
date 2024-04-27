'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import persistStore from 'redux-persist/es/persistStore';

persistStore(store);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
