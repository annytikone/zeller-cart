export type SKU = 'ipd' | 'mbp' | 'atv' | 'vga';

export interface Product {
  sku: SKU;
  name: string;
  price: number;
}

export const productData: Record<SKU, Product> = {
  ipd: { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  mbp: { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
  atv: { sku: 'atv', name: 'Apple TV', price: 109.50 },
  vga: { sku: 'vga', name: 'VGA adapter', price: 30.00 },
};