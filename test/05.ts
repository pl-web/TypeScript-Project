interface Person {
  name: string
}
type person = {
  name: string
}
// const getSomeoneName = (person: {name: string}) => {
//   console.log(person.name);
// }
// const setSomeoneName = (person: {name: string}) => {
//   console.log(person.name);
// }
const getSomeoneName = (person: Person) => {
  console.log(person.name);
}
const setSomeoneName = (person: person) => {
  console.log(person.name);
}
// 可以进行选择的变量属性
interface Subject {
  name: string;
  category?: string;
  readonly hot: boolean;
}
// 可以定义可选属性和只读属性
interface Event {
  name: string;
  [propertyName: string]: any; // 可以添加其他的属性名称和对应的内容值
}
interface Foo {
  foo(): string;
}
// 接口的应用
// implements
class Person_ implements Foo {
  foo() {
    return 'to express something'
  }
}
// 函数
interface SayHello {
  (str: string): string
}
const sayHello: SayHello = (something: string) => {
  return something
}