//함수의(디폴트 프로퍼티) 프로토타입과 constructor(생성자)프로퍼티
//모든함수는 기본적으로 prototype프로퍼티를 갖는다

function Student(){};
Student.prototype ={constructor :Student};
//디폴트 프로퍼티 portotype은 ocnstructor프로퍼티 하나만있는 객체를 가리킨다
//constructor는 함수 자신을 가르킨다
console.log(Student.prototype.constructor);

console.log(Student.prototype.constructor==Student);
console.log(Student.prototype.constructor===Student);

let student = new Student(); //{constructor :student}을 상속받음
console.log(student.constructor ==Student); //true([[prototype]]을 거쳐 접근함)


