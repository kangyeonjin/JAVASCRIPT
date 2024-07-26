//배열

//배열 리터럴을 통해 배열생성
//자바스크립트의 모든 값이 배열의 요소가 될수있다
// new Array[3]
const arr =['바나나','복숭아','키위']

//배열생성자함수
const arr2=new Array();
console.log(arr2);

//length 프로퍼티 값이 인수인 배열생성
const arr3 = new Array(10);
console.log(arr3);

//전달된 인수가 2개이상이거나 숫자가 아닌경우 인수를 요소로 갖는 배열을 생성
const arr4 = new Array(1,2,3);
console.log(arr4);

//array.of 메소드
//전달된 인수를 요소로 갖는배열을 생성
console.log(Array.of(10));

//배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며
//배열의 요소에 접근할때 사용
console.log(arr[0]); //바나나
console.log(arr[1]);  //복숭아
console.log(arr[2]);  //키위

//배열은 요소의 개수, 배열의 길이르 나타내는 length프로퍼티를 갖는다
console.log(arr.length);

//배열은 인덱스와 legnth프로퍼티를 갖기 때문에
//for문을 통해 순차적으로 요소에 접근가능
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//일반객체외 배열의 차이
//값의 순서(인덱스), length프로퍼티 유무 > 순차적으로 값에 접근하기 적합한 자료구조
//배열의 장점
//처음부터 순차적으로 요소에 접근할수 있고, 마지막 부터 역순으로 요소에 접근가능
//특정 위치부터 순차적으로 요소에 접근가능




