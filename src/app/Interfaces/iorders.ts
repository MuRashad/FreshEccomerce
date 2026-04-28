// interfaces/iorder.ts

export interface OrdersResponse {
  results: number;
  metadata: OrderMetadata;
  data: Order[];
}

export interface OrderMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}
 
export interface Order {
  _id: string;
  id: number;
  user: OrderUser;
  cartItems: CartItem[];
  shippingAddress?: ShippingAddress;  // optional — cash orders may not have it
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: 'card' | 'cash';
  isPaid: boolean; 
  isDelivered: boolean;
  paidAt?: string;       // only exists when isPaid = true
  createdAt: string;
  updatedAt: string;
}

export interface OrderUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
  postalCode?: string;   // optional — not all orders have it
}

export interface CartItem {
  _id: string;
  count: number;
  price: number;
  product: OrderProduct;
}

export interface OrderProduct {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: ProductCategory;
  subcategory: ProductSubcategory[];
  brand: ProductBrand;
}

export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;   // just the parent category _id as string
}

export interface ProductBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}