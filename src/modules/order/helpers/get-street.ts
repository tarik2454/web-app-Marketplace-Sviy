import { Dispatch, SetStateAction } from 'react';

export const handleStreetChange = (
  selectedOption: { value: string; label: string } | null,
  setSelectedStreet: Dispatch<
    SetStateAction<{ value: string; label: string } | null>
  >
) => {
  if (selectedOption) {
    setSelectedStreet(selectedOption);
  }
};
