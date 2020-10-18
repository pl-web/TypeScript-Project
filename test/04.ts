// 数组和元组
const new_arr: Array<number> = [1, 2, 3];
const str_arr: Array<string> = ['1', '2', '3'];
const arr: (number | string)[] = [1, '1'];
const obj_arr: {name: string, age: number}[] = [
  {name: 'Jack', age: 1}
]
// 类型别名
type Person = {name: string, age: number};
const person_arr: Person[] = [
  { name: 'Jane', age: 1 }
]