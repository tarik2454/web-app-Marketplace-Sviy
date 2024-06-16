export const handleWarehouseChange = (
  selectedOption: { value: string; label: string } | null,
  setSelectedWarehouse: React.Dispatch<
    React.SetStateAction<{ value: string; label: string } | null>
  >
) => {
  if (selectedOption) {
    setSelectedWarehouse(selectedOption);
  }
};
