class Utils {
  // 从obj中根据表达式取值
  // a = {b: {c: 1} }
  // resolveValue(a, 'b.c') => 1
  static resolveValue(data: any, exp: string): any {
    return exp.split('.').reduce((_data, current) => _data[current], data);
  }
  static setValue(data: any, exp: string, value: any) {
    exp.split('.').reduce((_data, current, index, arr) => {
      if (index === arr.length - 1) {
        return (_data[current] = value);
      }
      return _data[current];
    }, data);
  }
}

export default Utils;
