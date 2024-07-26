//에러상황


//암묵적 전역
(function(){
    'use strict'

    x=1;
    console.log(x);
}());


// with문의 사용
(function(){
    with({x:1}){
        console.log(x);
        
    }
})