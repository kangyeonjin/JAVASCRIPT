//[[prototype]]

const user ={
    activate : true,
    login :function(){
        console.log('로그인이 되었습니다');
        
    }
}

const student ={
    passion :true
}
//.__proto__ :[[prototype]]의 getter,setter이다.
//함수 object.getprototypeof or object.setprototypeof
//이 두메서드를 통해서 get,set한다
student.__proto__=user;

console.log(student.activate);

student.login();
console.log(student.passion);
console.log('-------프롤토타입 체인-------');
const greedyStudent ={
    class :11,
    __proto__:student
}

console.log(greedyStudent.activate);  //user
console.log(greedyStudent.passion);  //student

/*프로토타입 체이닝은 순환참조가 허용되지 않는다
_proto__의 값은 객체 또는 null민가능하며 다른 자료형은 무시된다 */




