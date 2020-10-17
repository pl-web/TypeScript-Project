let b: number = 1;
// b = '123'; // 不能将类型“string”分配给类型“number”。
interface Person {
  name: string;
  age: number;
}
const P: Person = {
  name: 'Jack',
  age: 30
}