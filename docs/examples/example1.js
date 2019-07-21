/* eslint-disable */
const obj = {};

let name = 'CaiXukun';

Object.defineProperty(obj, 'name', {
  enumerable: true, // 可枚举
  configurable: true, // 可配置
  get() {
    console.log(`${name} play basketball very well. `);
    return name;
  },
  set(val) {
    console.log(`Ji ni tai mei`);
    name = val;
  }
});

obj.name;
obj.name = 'Kunkun';
