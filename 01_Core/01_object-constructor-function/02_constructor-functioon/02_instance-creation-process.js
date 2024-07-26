//인스턴스 생성과정
function Student(name, age){

    //암묵적으로 인스턴스가 생성되고 this에 바인딩되는 과정이 런타임이전에 실행됨
    console.log(this);
    
    //this에 바인딩되어잇는 인스턴스를 초기화한다
    this.name = name;
    this.age = age;
    this.getInfo =function(){
        return `${this.name}은 ${this.age}세 입니다`
    }
//완성된 인스턴스가 바인딩된 this암묵적으로 반환
//생성자 내부에서 return은생략하는것이 기본

    // return{}; //명시적으로 객체를 반환하면 암묵적인this반환이 무시된다
    // return 1; //명시적으로 원시값을 반환하면 원시값 반환이 무시된다
}
const student = new Student('홍길동',20);
console.log(student);



