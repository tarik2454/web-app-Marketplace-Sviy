export type Address = {
  region?: string;
  city: string;
  village?: string;
  street: string;
  number: string;
};

export type FormPersonalDataValues = {
  full_name: string;
  lastName?: string;
  address?: Address;
  phone: string;
};
