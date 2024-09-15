import { test, expect } from '@jest/globals';
import { Checkout } from '../src/checkout';
describe('Checkout', () => {
  let co: Checkout;

  beforeEach(() => {
    co = new Checkout();
  });

  test('should correctly calculate total for 3 Apple TVs and 1 VGA adapter', () => {
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    const cart = co.cart();
    const total = co.total();

    expect(cart).toHaveLength(4);
    expect(total).toBe(249.00);
  });

  test('should correctly calculate total for 2 Apple TVs and 5 Super iPads', () => {
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');

    const cart = co.cart();
    const total = co.total();

    expect(cart).toHaveLength(7);
    expect(total).toBe(2718.95);
  });

  test('should correctly calculate total when no discounts are applied', () => {
    co.scan('vga');
    co.scan('mbp');

    const cart = co.cart();
    const total = co.total();

    expect(cart).toHaveLength(2);
    expect(total).toBe(1429.99);
  });

  test('should correctly handle an empty cart', () => {
    const total = co.total();

    expect(co.cart()).toHaveLength(0);
    expect(total).toBe(0);
  });
});