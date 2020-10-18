// 接口的继承
// 接口可以继承接口
// 接口也可以继承类
class Content {
  text = '内容'
}
interface Common extends Content {

}
class TextContent implements Common {
  // text = 'content'
  text: string
}