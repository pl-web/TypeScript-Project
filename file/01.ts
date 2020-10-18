// 抽象类
abstract class Base {
  getOneName(name: string) {
    return name
  };
  abstract getAddress();
}
// 继承与抽象类的类
class Person extends Base{
  getAddress() {
    return 'city'
  }
}
class Animal extends Base {
  getAddress() {
    return 'wild'
  }
}