// public private protected
class Person {
  name: string
  age: number
}
// public 可以在类外类内被调用
// private 可以在类内使用
// protected 可以在类内和继承的类中使用
class Word {
  public name: string
  public toMakeSentence() {

  }
}
class Message {
  constructor(private form: String, private to: String) {
    this.form = form
    this.to = to
  }
  protected Way() {
    return 'to send one message';
  }
}
class M extends Message {
  constructor() {
    super('pen', 'letter'); // 相当于调用父类的构造函数
  }
}
const one_msg = new M();
console.log('one message: ', one_msg);