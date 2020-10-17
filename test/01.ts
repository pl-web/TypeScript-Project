// 基础类型

// const a: number = 1;
// a.toFixed(); 
// const one_name: string = 'Jack';


// 对象类型

const person: {
  name: string,
  age: number
} = {
  name: 'Jack',
  age: 1,
}
const new_arr: number[] = [1,2,3]
// 类
class Point {

}
const point_one: Point = new Point();
// 函数
// 返回值为数字的一个函数
const getSomething: () => number = () => {
  return 1;
}