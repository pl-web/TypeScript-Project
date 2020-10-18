// 抽象类
class Content {
  constructor(private content: string) {
    this.content = content;
  }
}
const text = new Content('this is one paragraph');
console.log(text);


class Interest {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const i = new Interest('badminton');
console.log(i);
// i.name = ''  不能进行改写
