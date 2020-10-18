interface Person {
  name: string
}
type person = {
  name: string
}
// const getSomeoneName = (person: {name: string}) => {
//   console.log(person.name);
// }
// const setSomeoneName = (person: {name: string}) => {
//   console.log(person.name);
// }
const getSomeoneName = (person: Person) => {
  console.log(person.name);
}
const setSomeoneName = (person: person) => {
  console.log(person.name);
}