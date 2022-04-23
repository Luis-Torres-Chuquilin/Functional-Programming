/** @format */

class Bicycle {
  constructor() {
    let _speed = 0;
    let _speedStep = 10;
    this.getSpeed = () => {
      return _speed;
    };
    this.accelerate = () => {
      _speed += _speedStep;
    };
    this.slowDown = () => {
      _speed -= _speedStep;
    };
  }
}
var bicycle = new Bicycle();
console.log(bicycle._speed); // undefined
console.log(bicycle.getSpeed()); // 0
console.log(bicycle._speedStep); // undefined
console.log(bicycle.accelerate()); // undefined
console.log(bicycle._speed); // undefined
console.log(bicycle.getSpeed()); // 10
// Now you cannot change the values from outside
bicycle.speed = 100;
console.log(bicycle.accelerate()); // undefined
console.log(bicycle.getSpeed); // 20
