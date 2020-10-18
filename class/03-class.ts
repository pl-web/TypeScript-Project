// class-demo
// setter && getter
class Person {
  constructor(private _name: string) {
    this._name = _name;
  }
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}
const person = new Person('Jack');
console.log(person.name);
person.name = 'Jenny';
console.log(person.name);