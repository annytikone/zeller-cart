import { productData, Product } from "./productData";

// Buy 2 get 1 free discount on Apple TVs
export const applyAppleTVDiscount = (items: Product[]): number => {
    const appleTVs = items.filter(item => item.sku === 'atv').length;
    const setsOfThree = Math.trunc(appleTVs / 3);
  
    const discountedCount = setsOfThree * 2 + (appleTVs % 3);
    return discountedCount * productData['atv'].price;
  };
  
  // Buy more than 4 Super iPads and the price drops to $499.99
 export const applySuperIPadDiscount = (items: Product[]): number => {
    const iPads = items.filter(item => item.sku === 'ipd').length;
    const pricePerIPad = iPads > 4 ? 499.99 : productData['ipd'].price;
    return iPads * pricePerIPad;
  };