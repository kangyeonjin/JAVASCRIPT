// 메서드 단축

// ES5에서 메서드를 정의하는 방법 (프로퍼티 값으로 함수 할당)
var dog = {
    name : '구찌',
    
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

dog.eat('고구마');


// ES6에서는 메서드를 정의할때 function 키워드를 생략한 축약 표현이 가능하다.
var dog2 = {
    name : '구찌',
    
    // 메소드 축약표현
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

dog2.eat('고구마');
