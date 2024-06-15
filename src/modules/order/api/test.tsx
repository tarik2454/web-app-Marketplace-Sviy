import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { getCities, getWarehouses } from './novapostAPI'; // Підключаємо ваші функції з файлу з API Нової Пошти

const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/';

const Test = () => {
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    async function fetchCities() {
      try {
        const citiesData = await getCities();
        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    }
    fetchCities();
  }, []);

  const handleCityChange = async (selectedOption: any) => {
    setSelectedCity(selectedOption);
    try {
      const warehousesData = await getWarehouses({
        cityRef: selectedOption.value,
      });
      setWarehouses(warehousesData);
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  };

  const cityOptions = cities.map((city: any) => ({
    value: city.Ref,
    label: city.Description,
  }));

  return (
    <div>
      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Виберіть місто"
        maxMenuHeight={300}
      />

      <select>
        <option value="">Виберіть відділення</option>
        {warehouses.map((warehouse: any) => (
          <option key={warehouse.Ref} value={warehouse.Ref}>
            {warehouse.Description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;
