//정규 표현식 메소드

const target ='JavaScript';

//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭결과를배열로 반환
console.log(/va/.exec(target));

//g플래그를 지정해도 첫번쨰 매칭 결과만 반환
console.log(/va/g.exec(target)); //g:문자열내 패턴과 일치하는 모든 문자열을 전역에서 검색

console.log(/hello/.exec(target)); //매칭결과가 없을때는 null반환

// RegExp.prototype
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언으
// 로 반환한다.
console.log(/va/.test(target)); // true
console.log(/hello/.test(target)); //false

// String.prototype.match
// String 표준 빌트인 객체가 제공하는 메서드로 대상 문자열과 인수로 전달 받은 정규 표
// 현식과의 매칭 결과를 배열로 반환한다.
console.log(target.match(/va/)); 
console.log(target.match(/va/g)); // [ 'va', 'va' ]
console.log(target.match(/hello/)); 





