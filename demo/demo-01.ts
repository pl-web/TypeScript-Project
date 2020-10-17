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

function demo(data: { x: number; y: number }) {
  const sqrt = Math.sqrt(data.x * data.x + data.y * data.y);
  return sqrt;
}

const sqrt = demo( {x:1,y:2} );
console.log(sqrt);
