//엄격모드 적용
//전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다

//스크립트 전체에 strict mode가 적용된다
// 'use strict';

function test(){

    //코드의 선두에 위치시키지 않으면 strictmode가 제대로 동작하지않음
    'use strict'
    x = 10;
}

test();

/*서드파티 라이브러리 non-strict-mode일경우 즉시 실행함수로
스크립트 전체를 감싸서 스코프를 구분하고 즉시실행함수의 선두에strict mode를 적용한다 
서드파티 라이브러리 : 어플리케이션 개발시 외무에서 제공하는 소프트웨어 라이브러리*/

(function(){
    'use strict';
})


