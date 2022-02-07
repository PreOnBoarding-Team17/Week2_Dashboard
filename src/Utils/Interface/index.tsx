export interface DataInterface {
  id: number;
  title: string;
  client: string;
  due: string;
  status: string;
  count?: number;
  docs?: number;
  amount: number;
  method: string[];
  material: string[];
}
export interface CardProps {
  data: DataInterface;
}
export interface IFilter {
  title: string;
  name: string;
  options: string[];
}
