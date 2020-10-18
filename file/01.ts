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

// 方法的链式调用
class WorkFlow {
  firstStep() {
    return this;
  }
  secondStep() {
    return this;
  }
}
const workflow = new WorkFlow();
workflow.firstStep().secondStep();