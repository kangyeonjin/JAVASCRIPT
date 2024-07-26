/*배열의 고차함수
고차참수 : 함수를 인수로 전달 받거나 함수를 반환하는 함수 */

let numbers =[];

//10개의 1~100까지의 정수를 numbers배열에 담아준다
for(let i =0;i <10; i++){
    numbers[i] = Math.floor(Math.random()*100)+1;
}

console.log(`정렬 전 numbers : ${numbers}`);
numbers.sort();  //정렬

//배열이 기본적으로 문자열 정렬이되므로 한자리수 세자리수가 올바르게 정렬되지않음
console.log(`정렬 후 numbers : ${numbers}`);

//오름차순
function compare(a,b){
    if(a > b) return 1;   //a를 b보다 뒤에 위치시킴
    if(a ==b) return 0;   //a와 b의 순서를 변경하지 않음
    if(a < b) return -1;   //a를 b보다 앞에 위치시킴
}

numbers.sort(compare);
console.log(`compare정렬후 numbers : ${numbers}`);

numbers.sort((a, b) => a - b);
console.log(`정렬후 numbers : ${numbers}`);

/**함수형 프로그래밍
 * 순수함수와 보조함수의 조합을 통해 로직내에 존재하는 조건문과 반복문을 제거하여
 * 복잡성을 해결하고 변수의 사용을 억제하여 상태변경을 피하려는 프로그래밍 패러다임
 */

numbers = [1, 2, 3, 4, 5];
for(let i =0; i<numbers.length; i++){
    //하나하나 꺼내는 출력
}
numbers.forEach( item => console.log(item * 10) );

numbers.forEach(function(item,index,array){
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})

console.log('------------item*10-----------');

//각요소별로 *10한 값을 출력
numbers.forEach(item =>console.log(item*10))

//배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성 된 새로운 배열 반환
//콜백함수 : 다른함수의 내부로 전달되는 함수
//다른 함수가 실행을 끝낸 뒤 실행되는 callback되는 함수 를 말한다
console.log('----------map----------');

const types =[true,1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`); 

//Array.prototype.filter
//자바스크립트는 조건문에 %2 ->짝수면 0홀수면 1
const odds = numbers.filter(item => item % 2);
console.log(odds);

//짝수판별
const even = numbers.filter(item => item % 2 ===0);
console.log(even);

//Array.prototype.reduce

//Array.prototype.some
//배열내요소중 10보다 큰 값이 1개이상 존재하는지 확인
let result = [1, 5, 3, 2, 4].some(item => item > 10);
console.log(`result : ${result}`); 

//배열내 요소중 3보다 큰 값이 1개이상 존재하는지 확인
result = [1, 5, 3, 2, 4].some(item => item > 3);
console.log(`result : ${result}`); 

//배열내 요소중 특정값이 1개이상 존재하는지 확인
arr1 = ['apple', 'banana', 'cat', 'dog']
result= arr1.some(item =>item === 'egg');
result= arr1.some(item =>item === 'dog');
console.log(`result : ${result}`);

//Array.prototype.every
//배열내 모든 요소가 3보다 큰지 확인
result = [1, 5, 3, 2, 4].every(item => item > 3);
console.log(`result : ${result}`);

//배열내 모든 요소가 0보다 큰지 확인
result = [1, 5, 3, 2, 4].every(item => item > 0);
console.log(`result : ${result}`); 

//Array.prototype.find, Array.prototype.findIndex
const students = [
    { name : '유관순', score : 90 },
    { name : '홍길동', score : 80 },
    { name : '장보고', score : 70 }
];
result = students.find(item => item.name === '유관순');
console.log(result); // { name: '유관순', score: 90 }
result = students.findIndex(item => item.name === '유관순');
console.log(result); // 0
result = students.find(item => item.name === '신사임당');
console.log(result); // undefined
result = students.findIndex(item => item.name === '신사임당');
console.log(result); 
 //find, findiex 일치하는 요소를 찾으면 더이상 탐색하지 않음, 하나의요소,인덱스만 반환
 //60점이상 학생들을 전부 알고싶으면?


 

