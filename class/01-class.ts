class Person {
  name: string;
  getName() {
    return this.name;
  }
  setName(value: string) {
    this.name = value;
  }
}
class Teacher extends Person {
  constructor() {
    super();
  }
}
const T = new Teacher();
T.setName('Jack');
console.log(T.getName());