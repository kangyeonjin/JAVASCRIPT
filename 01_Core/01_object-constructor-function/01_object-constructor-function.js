/*object생성자함수
new연산자와 함께 object생성자 함수를 호출하면 빈객체를 생성해 반환한다
빈객체 생성이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할수있다 */

//빈 객체 생성
const student =new Object();

//프로퍼티 추가
student.name ='유관순';
student.age =16;
console.log(student);
