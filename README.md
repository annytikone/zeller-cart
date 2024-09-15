
# [Zeller Computer Store - Checkout System - Refer below content for the requirements ](https://github.com/zhaoyi0113/zeller-backend-ts-coding-challenge)

Zeller is starting a computer store, and you have been engaged to build the checkout system. This project implements a flexible checkout system with opening day specials and various pricing rules.

## Catalogue

Here are the products in our current catalogue:

| SKU  | Name            | Price    |
|------|-----------------|----------|
| ipd  | Super iPad       | $549.99  |
| mbp  | MacBook Pro      | $1399.99 |
| atv  | Apple TV         | $109.50  |
| vga  | VGA adapter      | $30.00   |

## Pricing Rules

For our launch, we have the following promotional pricing rules:

1. **Apple TV (SKU: atv) Promotion:**
   - "3 for 2" deal on Apple TVs. If you buy 3 Apple TVs, you only pay for 2.

2. **Super iPad (SKU: ipd) Bulk Discount:**
   - If a customer buys more than 4 Super iPads, the price drops from $549.99 to $499.99 each.

## Checkout System

The checkout system is designed to handle scanning of items in any order and apply relevant pricing rules. The checkout interface in TypeScript looks like this:

```typescript
const co = new Checkout(pricingRules);
co.scan(item1);
co.scan(item2);
const totalPrice = co.total();
```

## How to test this?
Checkout this branch and then follow this command
 ``` npm i && npm run start ```
OR ```npm i && npx ts-node src/checkout.ts ```
It should return below results
```
Your Cart Details [
  { sku: 'atv', name: 'Apple TV', price: 109.5 },
  { sku: 'atv', name: 'Apple TV', price: 109.5 },
  { sku: 'atv', name: 'Apple TV', price: 109.5 },
  { sku: 'vga', name: 'VGA adapter', price: 30 }
] 
 Grant Total: 249
Your Cart Details [
  { sku: 'atv', name: 'Apple TV', price: 109.5 },
  { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  { sku: 'atv', name: 'Apple TV', price: 109.5 },
  { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  { sku: 'ipd', name: 'Super iPad', price: 549.99 }
] 
 Grant Total: 2718.95
```
To run the test cases run ``npm test``
``` 
 PASS  tests/checkout.spec.ts
  Checkout
    ✓ should correctly calculate total for 3 Apple TVs and 1 VGA adapter (1 ms)
    ✓ should correctly calculate total for 2 Apple TVs and 5 Super iPads
    ✓ should correctly calculate total when no discounts are applied (1 ms)
    ✓ should correctly handle an empty cart

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.645 s, estimated 1 s
```




