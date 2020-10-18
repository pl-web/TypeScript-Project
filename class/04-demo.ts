// 单例模式
class Demo {
  private static instance = Demo;
  private constructor() {

  }
  static createInstance() {
    if(!this.instance) {
      this.instance = Demo;
    }
    return this.instance;
  }
}
const demo = Demo.createInstance();
const demo_ = Demo.createInstance();
console.log(demo == demo_); // true