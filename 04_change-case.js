//변화상황
//1. 일반 함수의 this

(function(){

    'use strict'

    //엄격모드에서는 일반함수의 this사용을제한하고
    //생성자 함수의 this만 허용한다.
    function test(){
        console.log(this);
        
    }

    test(); //undefined
    new test(); //test{}

})





