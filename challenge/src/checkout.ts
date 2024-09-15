import { Product, SKU, productData } from './productData';
import { applyAppleTVDiscount, applySuperIPadDiscount } from './pricingRules';
export class Checkout {
    private items: Product[] = [];
  
    scan(sku: SKU): void {
      this.items.push(productData[sku]);
    }

    cart(): Product[] {
        return this.items;
    }
  
    total(): number {
      const totalForAppleTV = applyAppleTVDiscount(this.items);
      const totalForSuperIPad = applySuperIPadDiscount(this.items);
  
      //Sum of non-discounted items
      const otherItemsTotal = this.items
        .filter(item => item.sku !== 'atv' && item.sku !== 'ipd')
        .reduce((sum, item) => sum + item.price, 0);
  
      return totalForAppleTV + totalForSuperIPad + otherItemsTotal;
    }
  }

  const co = new Checkout();

// Example 1: 3 Apple TVs, 1 VGA adapter
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');
console.log("Your Cart Details",co.cart(),"\n Grant Total:",co.total()); // Expected: $249.00

// Example 2: 2 Apple TVs, 5 Super iPads
const co2 = new Checkout();
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('ipd');
console.log("Your Cart Details",co2.cart(),"\n Grant Total:",co2.total()); // Expected: $2718.95