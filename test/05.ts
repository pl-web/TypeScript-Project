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