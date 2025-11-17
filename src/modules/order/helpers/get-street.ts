import { Dispatch, SetStateAction } from 'react';

type Option = {
  value: string;
  label: string;
};

type SetOption = Dispatch<SetStateAction<Option | null>>;

export const handleStreetChange = (
  selectedOption: Option | null,
  setSelectedStreet: SetOption
) => {
  if (selectedOption) {
    setSelectedStreet(selectedOption);
  }
};
