import Dep from './Dep';
class Observer {
  constructor(data: any) {
    this.observe(data);
  }

  observe(data: any) {
    if (data && typeof data === 'object') {
      if (Array.isArray(data)) {
        data.forEach(v => this.observe(v));
        return;
      }
      Object.keys(data).forEach(k => this.defineReactive);
    }
  }

  defineReactive(obj: object, key: string | number, value: any) {
    const _this = this;
    this.observe(value);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set(newVal) {
        if (newVal !== value) {
          _this.observe(newVal);
          value = newVal;
          dep.notify();
        }
      }
    });
  }
}

export default Observer;
