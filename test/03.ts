// 函数
// ①
function firstFoo() {

}
// ②
const secondFoo: () => number = () => {
  return 1
}
// 应用
function add (firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber
}
const oneNumber = add(1, 2); // 3
// void
function sayHello(): void {
  // return '' // 不能将类型“string”分配给类型“void”。
}
// never
function errorMessage(): never {
  throw new Error("")
}
function errorMessage_(): never {
  while (true) {
    // ...
  }
}
// 解构
function doAdd({ firstNumber, secondNumber }: { firstNumber: number, secondNumber: number }): number {
  return firstNumber + secondNumber;
}
doAdd({firstNumber: 1, secondNumber: 2});