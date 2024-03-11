import { User } from "./user.interface";

export interface Location {
  id?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  name?: string;
  lat?: string;
  lng?: string;
  postalCode?: string;
  createdAt?: string;
  updatedAt?: string;
  employees?: User[];
  fullAddress?: string;
}

