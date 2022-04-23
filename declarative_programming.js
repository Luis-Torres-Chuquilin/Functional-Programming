/** @format */

const _drawer = new WeakMap();
class CashRegister {
  constructor() {
    _drawer.set(this, [500, 200, 100, 50, 20, 10, 5, 2, 1]);
  }
  get drawer() {
    return _drawer.get(this);
  }
  makeChange(bill, tendered) {
    return getChange(tendered - bill, this.drawer);
  }
}

const getChange = (difference, denominations) => {
  if (difference === 0) {
    return [];
  }
  if (denominations.length === 0) {
    return false;
  }
  if (difference < denominations[0]) {
    return getChange(difference, denominations.slice(1));
  } else {
    return [denominations[0]].concat(
      getChange(difference - denominations[0], denominations)
    );
  }
};

import CashRegister from "./CashRegister";
const cashRegister = new CashRegister();
cashRegister.makeChange(400, 555); // [100, 50, 5]
