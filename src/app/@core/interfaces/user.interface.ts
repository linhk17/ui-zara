import { Image } from "./image.interface";
import { Permission } from "./permission.interface";

export interface User {
  id?: string;
  userId?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  totalJob?: number;
  phone?: string;
  email?: string;
  status?: boolean | string | number;
  avatar?: Image;
  isAdmin?: boolean;
  isEmployee?: boolean;
  // permissions?: Permission[];
}