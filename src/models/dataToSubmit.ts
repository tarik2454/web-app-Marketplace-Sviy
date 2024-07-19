export type Address = {
  city?: string;
  street?: string;
  number?: string;
};

export type FormPersonalDataValues = {
  full_name: string;
  lastName?: string;
  address?: Address;
  phone: string;
};
