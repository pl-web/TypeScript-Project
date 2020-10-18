// 数组n Array
const new_arr: Array<number> = [1, 2, 3];
const str_arr: Array<string> = ['1', '2', '3'];
const arr: (number | string)[] = [1, '1'];
const obj_arr: { name: string, age: number }[] = [
  { name: 'Jack', age: 1 }
]
// 类型别名
type Person = { name: string, age: number };
const person_arr: Person[] = [
  { name: 'Jane', age: 1 }
]

// 元组 Tuple
const userInfo = [
  { name: 'Jenny', age: 1, id: '00001' }
];
const user: [string, string, number] = ['jenny', '00001', 1];
const userList: [string, string, number][] = [
  ['Jack', '10001', 10],
  ['Fnny', '10002', 11]
]