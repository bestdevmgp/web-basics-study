// 출력
// alert('Hello World!');
// confirm('hello');
// prompt('입력하세요');
// document.write('<h1>Hello</h1>');
// console.log('hello');    // 콘솔 열기: cmd+option+j

// console.log(num);
// var num = 10;

// var num;
// console.log(num);
// num = 10;

// var num = 10;
// var num = 20;

// console.log(num);
// let num = 10;

// let num = 10;    // 재할당 가능
// num = 30;
// console.log(num)

// const num2 = 10;    // const는 재할당 불가 (like 자바 final)
// num2 = 30;
// console.log(num2);

// let name = prompt('이름을 입력하세요');
// document.write(name);

// let address = '서울';
// console.log(address);

// console.log(100 < 10);

// let arr = ['봄', '여름', '가을', '겨울'];
// console.log(arr[0]);

// let num = 10;
// num--;
// console.log(num);

// console.log(3 == '3');
// console.log(3 === '3');
// console.log(3 != '3');
// console.log(3 !== '3');
// console.log(3==3 && 4==='4');
// console.log(3==3 || 4==='4');
// console.log(!(3==3));

// let a = 10;
// let b = 10;
// console.log(a++);
// console.log(a);
// console.log(++b);
// console.log(b);


// 삼항연산자
//(조건) ? true : false
// let num = 10;
// (num > 5) ? num = 5 : num = 0;
// console.log(num);


// if문
// let num = 7;
// if (num % 2 == 0){
//     console.log('2의 배수입니다.');
// } else if (num % 3 == 0){
//     console.log('3의 배수입니다.');
// } else{
//     console.log('2와 3의 배수가 아닙니다.')
// };

// switch문
// let num = 7;
// switch (num){
//     case 7:
//         console.log(7);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 1:
//         console.log(1);
//         break;
//     default:
//         console.log(100)
// }


// 반복문
// for(let i = 0; i<10;i++){
//     console.log(i);
// }

// for (let i = 10; i>=0; i--){
//     console.log(i);
// }

// for (let i = 0; i<=10; i+=2){
//     if (i > 5){
//         break;
//     }
//     console.log(i);
// }


// while문
// let num = 3;
// while (num < 3){
//     console.log(num);
//     num++;
// }
//
// do{
//     console.log(num);
//     num++;
// } while(num < 3);

// 4빼고 5까지 출력
// let num = 0;
// while (num <= 5){
//     if (num == 4) {
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }

// let num1 = 10;
// let num2 = 20;
// console.log(`${num1}*${num2}=${num1*num2}`);

//객체 리터럴
// let car = {
//     make:"kia",
//     year:2015,
//     start:function (){
//         console.log("start");
//     }
// };
// console.log(car.make);      //점 표기법
// console.log(car["make"]);   //대괄호 표기법
// car.year = 2024;
// console.log(car.year);
// car.start();


//for(초기값; 조건식; 증감값)
//for in: 키를 반환
//for of: 값을 반환

// let arr = ["orange", "banana", "apple"];
// for(let index in arr){
//     console.log(index);
// }
// for(let index of arr){
//     console.log(index);
// }

//함수 선언문: 호이스팅 O
// console.log(sumNum(10, 20));
// console.log(`함수실행결과: ${sumNum(10, 20)}`);
// function sumNum(a, b){
//     return a + b;
// }


//함수 표현식: 호이스팅 X, 1. 네이밍함수, 2. 익명함수, 3. 화살표함수
//1. 네이밍함수: 함수명이 있다.
// let result = function sumNum(a, b){
//     return a + b;
// };
// console.log(`함수실행결과: ${result(10, 20)}`);


//2. 익명함수: 함수명이 없다.
// let result = function(a, b){
//     return a + b;
// };
// console.log(`함수실행결과: ${result(10, 20)}`);


//3. 화살표 함수: 화살표를 쓴다.(=>)(많이 씀)
// let result = (a, b) => a + b;
// console.log(`함수실행결과: ${result(10, 20)}`);


//즉시실행함수
// (function init(){
//     console.log("Hello");
// })();   //실행 후 데이터 삭제
// init(); //참조오류


//매개변수와 인수의 개수가 다른 경우
//1. 초기값 설정
// let min = (a, b=2) => a - b;
// console.log(min(5, 10));
// console.log(min(10));   //a만 주면 b는 초기값으로 설정됨

//2. 나머지 매개변수 ...
// function sumScore(...scores){
//     console.log(scores);
//     let sum = 0;
//     for (let index of scores)
//         sum += index;
//     return sum;
// }
// console.log(sumScore(70, 80, 90, 100));


// let a = 10;
// function show() {
//     console.log(`함수 내부: ${a}`);
// }
// show();
// console.log(`함수 외부: ${a}`);
//
//
// function show() {
//     let b = 10;     //지역스코프
//     console.log(`함수 내부: ${b}`);
// }
// show();
// console.log(`함수 외부: ${b}`);
//
// let c = 20;
// {
//     let d = 30;
//     console.log(`블록내부: ${c}`);
//     console.log(`블록내부: ${d}`);
// }
// console.log(`블록외부: ${c}`);
// console.log(`블록외부: ${d}`);

// for (var i = 0; i < 2; i++) {
//     console.log(i);
// }
// console.log(i);


//1. 익명함수를 선언, 이름을 입력받아 document에 출력하는 프로그램
     //출력: 00님, 안녕하세요
let person = function (name){
    document.write(name);
}
person(prompt("이름?"));
//1-1. 1의 익명함수를 화살표 함수로 변경


//2. n을 입력받아 1부터 n까지 합을 구하는 함수 작성하기. 결과를 document에 출력한다.
    //출력: 1부터 n까지의 합은 00입니다.

