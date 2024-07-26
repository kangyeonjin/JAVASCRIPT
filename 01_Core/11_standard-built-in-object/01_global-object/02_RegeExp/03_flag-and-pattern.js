/*플래그 문자
flag는 옵션이므로 선택적으로 사용할 수 있고, 순서와 상관 없이 하나 이상의 플래그를
동시에 설정할 수 있다.
i(ignore case) : 대소문자를 구별하지 않고 패턴 검색한다.
g(Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
 */

let target = 'Java JavaScript';
console.log(target.match(/VA/)); // null
console.log(target.match(/VA/i)); 
console.log(target.match(/VA/ig)); 

// 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.
target = 'abcdefg';

//임의의 2자리 문자열 전역검색
console.log(target.match(/../g)); 

target = 'a aa aaa b bb bbb ab aab abb';
// a 최소 2번 ~ 최대 3번 반복
console.log(target.match(/a{2,3}/g)); // [ 'aa','aaa', 'aa' ]
// b 두번 반복
console.log(target.match(/b{2}/g)); // [ 'bb','bb', 'bb' ]
// b 세번 이상 반복
console.log(target.match(/b{3,}/g)); 

target = 'a aa aaa b bb bbb ab aab abb';
//최소 b 1번이상 반복
console.log(target.match(/b+/g)); 

target = 'soul seoul';
// s 다음 e가 최대 한번(0번 포함) 반복되고 oul이 이어지는 문자열전역 검색
console.log(target.match(/se?oul/g)); 

target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/a|b/g)); 
console.log(target.match(/a+|b+/g)); 

//[]내의 문자는 or로 동작
console.log(target.match(/[ab]+/g));
//-범위를 지정할때 사용함
console.log(target.match(/[a-z]+/g)); 
//대소문자 범위
console.log(target.match(/[A-Za-z]+/g)); 
//숫자 범위
console.log(target.match(/[0-9]+/g)); 

target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/\d+/g)); // [ '123', '456' ]
console.log(target.match(/\D+/g)); // [ 'aa bb cc dd ', ' ', ' _@' ]
console.log(target.match(/\w+/g)); 

console.log(target.match(/[^0-9]+/g)); // [ 'aa bb cc dd ', ' ', ' _@' ]
console.log(target.match(/[^a-z]+/g)); 

console.log('-----------시작위치와 마지막위치--------------');

target = 'https://www.google.com';

// https로 시작하는지 검사
console.log(/^https/.test(target)); 

// com으로 끝나는지 검사
console.log(/com$/.test(target)); 




