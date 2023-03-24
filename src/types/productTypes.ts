export interface ProductInitialState {
  products: any;
  loading: boolean;
  errors: any;
  totalPages: number;
  currentPage: number;
  totalProducts: number;
  editProduct: IProduct;
  productQuery: string;
  markQuery: string;
}

export interface IProduct {
  article: string;
  box: string;
  createdAt: string;
  currency: string;
  description: string;
  fuel: string;
  imagesUrl: [string];
  mark: string;
  mode: string;
  model: string;
  numberOfProduct: number;
  price: number;
  product: string;
  state: string;
  type: string;
  bodyType: string;
  updatedAt: string;
  volume: string;
  year: number;
  __v: number;
  _id: string;
  views: number;
}

export interface IOptionsInitialState {
  autos: any;
  options: IOptions[] | null;
  status: string;
  errors: any;
  partsCategory: any;
}

export interface IUserInitialState {
  userId: string;
  status: null | string;
  error: any;
}

export interface IOptions {
  _id: string;
  years: [number];
  fuel: ["бензин", "дизель"];
  type: [string];
  box: ["АКПП", "МКПП"];
  bodyType: [string];
  __v: number;
}

export interface IAutoPartsInitialState {
  parts: any;
  loading: boolean;
  errors: any;
  totalPages: number;
  currentPage: number;
  totalProducts: number;
  limit: number;
}
