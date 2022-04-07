import { filterProducts, FILTER_PRODUCT, getAllProducts, getProducts, GET_ALL_PRODUCTS } from '../actions/products';

type Actions =
  | ReturnType<typeof getAllProducts>
  | ReturnType<typeof getProducts>
  | ReturnType<typeof filterProducts>;

type File = {
  original: string;
  compressed?: string;
};

type CreatedBy = {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: File;
};

type JsonNftData = {
  name: string;
  image: string;
  attributes: {
    value: string;
    trait_type: string;
    description: string;
  }[];
  external_url: string;
};

export type Product = {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: File;
  other_file: File;
  additional_photos: File[];
  created_by: CreatedBy;
  json_nft_data: JsonNftData;
  json_nft_link: string;
  tx_status: string;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: number;
  quantity_available: number;
};

export type initProducts = {
  allProducts: Product[];
  products: Product[];
  product: Product;
};

const initial: initProducts = {
  allProducts: [],
  products: [],
  product: {} as Product,
};

export const produtReducer = (state = initial, action: Actions) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      const products = action.payload;

      return {
        ...state,
        allProducts: products,
        products,
      };
    }
    case FILTER_PRODUCT: {
      const check = action.payload;

      return {
        ...state,
        products: state.allProducts.filter(product => check ? product.quantity_available > 0: product) };
    }
    default: return state;
  }
};
