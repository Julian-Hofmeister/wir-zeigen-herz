import {Category} from './categories';

export interface Partner {
  name: string;
  logoImg: string;
  link: string;
  category: Category | string;
}
