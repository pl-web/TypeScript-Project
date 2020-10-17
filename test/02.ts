// 类型注解 & 类型推断
const firstNumber = 1;
const secondNumber = 2;
const add = firstNumber + secondNumber; // 此时add将会被推断出其类型为number
const getAdd: (data: number, data2: number) => number = (data: number, data2: number) => {
  return data + data2;
}