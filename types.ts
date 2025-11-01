
export enum Page {
  DASHBOARD = 'DASHBOARD',
  HAJI = 'HAJI',
  UMRAH = 'UMRAH',
  CONTACT = 'CONTACT',
}

export interface Package {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  imageUrl: string;
  type: 'Haji' | 'Umrah';
}
