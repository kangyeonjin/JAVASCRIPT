//http//또는 https//로 시작하는지 검사
//hint이스케이프문 \/\/ => //
const url = 'https://www.google.com';
console.log(/^https?:\/\//.test(url));

//파일명을 통해 자바스크립트 확장자인지 검사
const fileName = 'test.js';
console.log(/js$/.test(fileName));

const id = 'hello123';
console.log(/^[A-Za-z0-9]{6,12}$/.test(id));

//핸드폰 번호 형식에 맞는지 검사
const phone = '010-1234-5678';


const target2 = 'hello#world';

