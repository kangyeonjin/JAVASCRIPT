// global object (전역 객체)
/*전역객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 
어떤 객체 보다도 먼저 생성되는 특수한 객체
어떤 객체에도 속하지 않은 최상위 객체 
node.js환경에서는 global전역객체
브라우저 환경에서는 window가 전역객체

전역객체 자신은 어떤 객체의 프로퍼티가 아니며
객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 의미 

->프로토타입 상속 관계의 최상위 객체라는 의미가 아니다
*/

//빌트인 전역 프로퍼티
//infinity :무한대를 나타내는 숫자값

//전역프로퍼티는 global을 생략하고 참조할수있다.
console.log(global.Infinity === Infinity); 

//양의 무한대
console.log(10/0);

//음의 무한대
console.log(-10/0);
console.log(typeof Infinity); //number

//숫자가 아님을 나타내는 숫자값
//number.nan프로퍼티와 같음
console.log(global.NaN); // NaN
console.log(Number('abc')); // NaN
console.log(10 * 'abcf'); // NaN
console.log(typeof NaN); 

//원시 타입 undefined
console.log(global.undefined); // undefined
let nothing;
console.log(nothing); // undefined
console.log(typeof undefined);

/* 빌트인 전역 함수 */

// isFinite
// 전달 받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사를 수행하며, NaN으로 평가되는 값이면 false를 반환
console.log(isFinite(10));              // true
console.log(isFinite('10'));            // true
console.log(isFinite(null));            // true

console.log(isFinite(Infinity));        // false
console.log(isFinite(-Infinity));       // false

console.log(isFinite(NaN));             // false
console.log(isFinite('abc'));           // false
console.log('-------------------------------');

// isNaN
// 전달 받은 인수가 NaN인지 검사하여 그 검사 결과를 불리언 타입으로 반환
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사를 수행
console.log(isNaN(NaN));                // true
console.log(isNaN(10));                 // false

console.log(isNaN('abc'));              // true
console.log(isNaN('10'));               // false
console.log(isNaN(''));                 // false ('' => 0)

console.log(isNaN(true));               // false (true => 1)
console.log(isNaN(false));              // false (false => 0)

console.log(isNaN(undefined));          // true 

console.log(isNaN({}));                 // true
console.log('-------------------------------');

// parseFloat : 전달받은 문자열 인수를 부동 소수점 숫자, 실수로 해석하여 반환
console.log(parseFloat('10.01'));       // 10.01
console.log(parseFloat('10'));          // 10
// 공백으로 구분 된 문자열은 첫 번째 문자열만 변환
console.log(parseFloat('10 20 30'));    // 10
// 숫자가 아닌 문자열은 제외하고 변환
console.log(parseFloat('10cm'));        // 10
// 첫 번째 문자열을 숫자로 변환할 수 없다면 변환 불가
console.log(parseFloat('GS25'));        // NaN
// 앞뒤 공백은 무시
console.log(parseFloat('  1004  '));    // 1004

// parseInt : 전달받은 문자열 인수를 정수로 해석하여 반환
console.log(parseInt('10'));            // 10
console.log(parseInt('10.01'));         // 10
console.log('-------------------------------');

//encodeURI
//URI
const uri = 'http://greedy.com?name=홍길동&job=student';
const enc = encodeURI(uri);
console.log(enc); 

const dec = decodeURI(enc);
console.log(dec);


//encodeURIComponent
// URI 구성 요소를 인수로 전달 받아 알파벳, 0~9의 숫자, - _ . ! ~ * ’ ( ) 문자는 제외하고
// 인코딩한다.쿼리 스트링 구분자로 사용 되는 =, ?, &까지 인코딩한다.

const uriComp = 'name=홍길동&job=student';
const encComp = encodeURIComponent(uriComp);
console.log(encComp); // name%3D%ED%99%8D%EA%B8%B8%EB%8F%
const decComp = decodeURIComponent(encComp);
console.log(decComp);

