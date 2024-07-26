//배열 메소드
const arr =[];

//배열의 생성자함수 = Array
console.log(arr.constructor === Array);

//배열의 프로토타입객체 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

/*Array.prototype.indexOf
:indexOf : 배열에서 요소가 위치한 인덱스를 리턴
lastIndexOf :배열의요소가 위치한 마지막 인덱스를 리턴
includes :배열의 해당 요소 포함 여부를 리턴*/

const foodList =['물회','삼계탕','냉면','수박','물회'];
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); 

//중복값중 두번재 위치반환
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회',1)}`);
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`); // -1
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`); // 4
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`); // -1
console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`); // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`); // false

/*Array.protytype.push :배열의 맨뒤에 요소를 추가
Array.protytype.push :배열의 맨뒤에 요소를 추가 */

const chineseFood =['짜장면', '짬뽕', '우동']
console.log(`push전 chineseFood : ${chineseFood}`);
// chineseFood.push('탕수육');
// chineseFood.push('양장피');
chineseFood.push('탕수육', '양장피');
console.log(`push후 arr : ${chineseFood}`);

console.log('----------pop---------------');
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`pop후 chineseFood : ${chineseFood}`);

const chickenList =['양념치킨','후라이드','파닭'];
console.log(`unshift 전 chckenList : ${chickenList}`);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');

console.log(`unshift후 chickenList : ${chickenList}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`); 
console.log(`chickenList.shift() : ${chickenList.shift()}`); 
console.log(`chickenList.shift() : ${chickenList.shift()}`); 

console.log(`shift 후 chickenList : ${chickenList}`); 

const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '에스파'];
const idol3 = ['블랙핑크', '레드벨벳'];

const mix = idol1.concat(idol2); //idol1기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2); //idol3기준으로 합쳐짐

console.log(`idol1 기준으로 idol2 배열을 concat : ${mix}`); 
console.log(`idol3 기준으로 idol1, idol2 배열을 concat : ${mix2}`);

console.log(`${mix}`);
console.log(`${mix2}`);

const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];

console.log(`front.slice(1, 3) : ${front.slice(1, 3)}`); 
console.log(`front : ${front}`); 
console.log(`front.splice(3, 1, "React") : ${front.splice(3, 1, "React")}`); 
console.log(`front : ${front}`); 

const snackList = ['사탕', '초콜렛', '껌', '과자'];
console.log(`snackList.join() : ${snackList.join()}`); 
console.log(`snackList.join('/') : ${snackList.join('/')}`); 

console.log('---------reverse---------------');
//Array.prototype.reverse : 배열의 순서를 뒤집음
console.log(`[1, 2, 3, 4, 5].reverse() : ${[1, 2, 3, 4, 5].reverse()}`); 




