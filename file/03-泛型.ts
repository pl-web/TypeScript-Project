function print(str: string): string {
  return str;
}
// 联合类型  &&  any类型
function printSomething(str: any): any {
  return str;
}
// 泛型
function printAnything <T>(str: T): T {
  return str;
}
// <>在使用时，可以进一步指定其类型
printAnything<string>('123');
printAnything<number[]>([1,2,3]);
printAnything<object>({name: 'oo', age: 0});