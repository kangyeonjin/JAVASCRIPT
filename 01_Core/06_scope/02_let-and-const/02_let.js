/*let
var 키워드의 단점을 보완하기위해 es6 새로운 변수 선언 키워드인
let, const를 도입 */
//변수 중복 선언 금지
// let msg = '안녕하세요';
// let msg

//블록레벨 스코프
//let 키워드로 선언한 변수는 모든 코드 블록
//(함수, if문, for문, while문, try/catch문)을 지역스코프로 인장한다

let i =0;
for(let i =0; i <10; i++){
    console.log(`지역변수 i: ${i}`);
}
console.log(`전역변수 i :${i}`);

//변수 호이스팅
console.log(x);

let x;

let y=1;
if(true){
    //변수 호이스팅으로 아래의 지역변수y가 선언이 먼저 일어났기 때문에
    //전역변수 y를 참조하지 않고 오류가 발생
    console.log(y);
    let y = 2;
    
}
