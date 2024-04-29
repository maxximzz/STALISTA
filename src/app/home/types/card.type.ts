import { Product } from "./product.type";

export interface CartItem {
    product: Product;
    quantity: number;
    amount: number;
}

export interface Cart {
    products: CartItem[];
    totalProducts: number;
    totalAmount: number;
}

export interface DeliveryAddress {
    userName: string;
    address: string;
    city: string;
    province: string;
    codePostal: string;
}