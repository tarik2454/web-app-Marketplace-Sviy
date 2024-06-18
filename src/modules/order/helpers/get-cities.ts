import { Dispatch, SetStateAction } from 'react';
import { getWarehouses } from '../api/novapostAPI';

export const handleCityChange = async (
  selectedOption: { value: string; label: string } | null,
  setSelectedCity: Dispatch<
    SetStateAction<{ value: string; label: string } | null>
  >,
  setWarehouses: Dispatch<SetStateAction<any[]>>,
  setSelectedWarehouse: Dispatch<
    SetStateAction<{ value: string; label: string } | null>
  >
) => {
  if (selectedOption) {
    setSelectedCity(selectedOption);
    try {
      const warehousesData = await getWarehouses({
        cityRef: selectedOption.value,
      });
      setWarehouses(warehousesData);
      setSelectedWarehouse(null);
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  }
};
