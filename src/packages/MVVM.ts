import Observer from './Obverser';
import Compiler from './Compiler';

class MVVM {
  $el: string | Element | null;
  $data: object;
  constructor(options: {
    el: Element | string | null;
    data?: object;
    computed?: object;
    methods?: object;
  }) {
    this.$el = options.el;
    this.$data = options.data || {};
    const computed = options.computed;
    const methods = options.methods;
    const _this = this;
    if (this.$el) {
      new Observer(this.$data);
      // 将computed 绑定到this.$data
      computed &&
        Object.keys(computed).forEach(key => {
          Object.defineProperty(_this.$data, key, {
            enumerable: true,
            configurable: true,
            get() {
              // @ts-ignore
              return computed[key].call(_this);
            }
          });
        });

      // 将methods 绑定到this
      methods &&
        Object.keys(methods).forEach(key => {
          
          Object.defineProperty(this, key, {
            get() {
              // @ts-ignore
              return methods[key].bind(this) 
            }
          });
          console.log(this)
        });

      this.proxyData(this.$data);
      new Compiler(this.$el, this);
      return this
    }
  }
  proxyData(data: object) {
    // 将data 绑定到实例
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          // @ts-ignore
          return data[key];
        },
        set(val) {
          // @ts-ignore
          data[key] = val;
        }
      });
    });
  }
}

export default MVVM;
