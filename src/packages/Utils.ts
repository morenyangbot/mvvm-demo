class Utils {
  // 从obj中根据表达式取值
  // a = {b: {c: 1} }
  // resolveValue(a, 'b.c') => 1
  static resolveValue(data: any, exp: string): any {
    return exp.split('.').reduce((_data, current) => _data[current], data);
  }
}

export default Utils;
