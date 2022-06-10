export interface DataSet {
  id: number;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  color?: string;
}
export interface Tag {
  name: string;
  description: string;
  color: string;
}
