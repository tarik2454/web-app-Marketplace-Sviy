import { Dispatch, SetStateAction } from 'react';

type Option = {
  value: string;
  label: string;
};

type SetOption = Dispatch<SetStateAction<Option | null>>;

export const handleWarehouseChange = (
  selectedOption: Option | null,
  setSelectedWarehouse: SetOption
) => {
  if (selectedOption) {
    setSelectedWarehouse(selectedOption);
  }
};
