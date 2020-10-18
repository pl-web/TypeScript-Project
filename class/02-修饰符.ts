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
  private form: String
  private to: String
  protected Way() {
    
  }
}