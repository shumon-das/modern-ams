export interface ProductTableInterface {
    code: string;
    name: string;
    category: string;
    quantity: number;
}

export interface CustomerTableInterface {
    name: string;
    country: { name: string };
    representative: { name: string };
    status: string;
}