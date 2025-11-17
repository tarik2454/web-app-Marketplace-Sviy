import { Dispatch, SetStateAction } from 'react';
import { getWarehouses, getStreets } from '../api/novapostAPI';

type Option = {
  value: string;
  label: string;
};

type SetOption = Dispatch<SetStateAction<Option | null>>;
type SetOptionsArray = Dispatch<SetStateAction<any[]>>;

export const handleCityChange = async (
  selectedOption: Option | null,
  setSelectedCity: SetOption,
  setWarehouses: SetOptionsArray,
  setSelectedWarehouse: SetOption,
  setStreets: SetOptionsArray,
  setSelectedStreet: SetOption
) => {
  if (selectedOption) {
    setSelectedCity(selectedOption);
    try {
      const warehousesData = await getWarehouses({
        cityRef: selectedOption.value,
      });
      setWarehouses(warehousesData);
      setSelectedWarehouse(null);

      const streetsData = await getStreets({
        cityRef: selectedOption.value,
      });
      setStreets(streetsData);
      setSelectedStreet(null);
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  }
};
