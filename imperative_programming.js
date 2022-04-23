/** @format */

// Review WeakMap
const _drawer = new WeakMap();
class CashRegister {
  constructor() {
    _drawer.set(this, [500, 200, 100, 50, 20, 10, 5, 2, 1]);
  }
  get drawer() {
    return _drawer.get(this);
  }

  makeChange(bill, tendered) {
    let difference = tendered - bill;
    let i = 0;
    const change = [];
    let denomination = this.drawer[0];

    while (difference > 0) {
      if (difference < denomination) {
        i++;
        denomination = this.drawer[i];
        continue;
      }
      change.push(denomination);
      difference -= denomination;
    }
    return change;
  }
}

const cashRegister = new CashRegister();
console.log(cashRegister.makeChange(400, 555)); // [100, 50, 5]
