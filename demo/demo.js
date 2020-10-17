var b = 1;
var P = {
    name: 'Jack',
    age: 30
};
function demo(data) {
    var sqrt = Math.sqrt(data.x * data.x + data.y * data.y);
    return sqrt;
}
var sqrt = demo({ x: 1, y: 2 });
console.log(sqrt);
