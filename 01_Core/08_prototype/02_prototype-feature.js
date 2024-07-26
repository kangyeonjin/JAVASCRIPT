const user ={
    id:'user',
    login :function(){
        console.log(`${this.id}님 로그인되었습니다`);
        
    }
}

//프로토타입은 프로퍼티를 읽을 떄만 사용하며
//프로퍼티를 추가,수정 ,삭제하는 연산은 객체에다가 직접한다.
const student ={
    __proto__:user
}

/*login메소드내의 this는 프로토타입에 영향을 받지않고 메소드를 객체에서
호출햇던 프로토타입에서 호출했던 상관없이 this언제나 .앞에 있는 객체이다. */
student.id ='user01'
console.log(student);

student.login();

console.log('------------------------');

//for in반복문은 상속프로퍼티도 순회 대상에 포함시킨다
//hasOwnProperty :key에 대응하는 프로퍼티가 상속프로퍼티가 아니고 
//obj에 직접 구현되어있는 프로퍼티일때만 true를 반환한다

for(let prop in student){
    console.log(prop);
    let isOwn = student.hasOwnProperty(prop);
    if(isOwn){
        console.log(`객체 자신의 프로퍼티${prop}`);
    }else{
        console.log(`상속프로퍼티 ${prop}`);
    }
    
}

