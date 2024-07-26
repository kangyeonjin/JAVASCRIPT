
const obj ={};

console.log(obj.__proto__=== Object.prototype);
console.log(obj.toString=== obj.__proto__.toString);
console.log(obj.toString===Object.prototype.toString);

//object는내갖객체 생성자함수인데 생성자함수의prototype은 tostring을 비롯한
//다양한 메서드가 구현되어있는 거대한객체를 참조한다

