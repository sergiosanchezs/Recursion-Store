import { IItem } from '../infra/mongoose/models/Product';

export default interface IUpdateProductDTO {
  name?: string;
  type?: string;
  categories?: string[];
  price?: number;
  description?: String;
  items?: IItem[];
}