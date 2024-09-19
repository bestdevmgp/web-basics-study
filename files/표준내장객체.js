//string 길이 변환
// const pw = '1234';
// if (pw.length < 5)
//     console.log("비밀번호의 길이가 짧습니다.")

//특정 문자열이 포함되어 있는지, 특정 문자를 찾아서 다른 문자로 변환
// const email = 'test!naver.com';
// if (email.includes("@") === false){
//     console.log("이베일 형식 어쩌구");
//     console.log(email.replace("!", "@"));
// }

//arr 길이 출력
// const arr = [10, 20, 30];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//array 파괴적 메서드 push, pop, shift, unshift, sort, reverse
// const arr2 = [1, 2, 3];
// arr2.push(4);  //4가 추가됨
// console.log(arr2);
// console.log();
//
// arr2.pop();
// console.log(arr2.pop());  //마지막 요소가 삭제되고 반환됨
// console.log(arr2);
// console.log();
//
// arr2.unshift(0);  //첫 번째에 값 추가
// console.log(arr2);
// console.log();
//
// arr2.shift(0);  // 첫 번째 요소의 값 삭제
// console.log(arr2);


//array 비파괴적 메서드 forEach, filter, find, includes, join
// const arr3 = [5, 6, 7];
// arr3.forEach(function (v){
//     console.log(v);
// })
// console.log(arr3);
// console.log(arr3.join('&'));  //값 사이사이에 문자 추가
// console.log(arr3);

// const arr4 = [8, 9, 10];
// console.log(arr3.join(arr4))  //이상하게 뜸


//Date 객체를 호출해 날짜와 시간 데이터 생성 -> 생성되는 데이터 = 인스턴스
// const date = new Date();
// console.log(date);


//난수 생성하기 math
const random = Math.random();  //0~1 사이의 난수 출력
console.log(random);

//난수 범위를 정해보자
function getRandom(max){
    //floor: 버림
    return Math.floor(Math.random() * max);
}
console.log(getRandom(20));  //0~20 사이의 난수


//window: 브라우저 창과 관련
//window.open(경로, 이름, 속성): 팝업 열기
//경로: 팝업으로 띄울 창의 경로
//이름: 새 창의 이름, 내부적인 이름
//속성: 창 크기, 위치
function popup(){
    window.open('표준내장객체.html', 'popup', 'width=200, height=400, top=100, left=100');
}  //이름이 같은 창은 하나만 열린다. (popup을 지우면 여러 개 열수있다.)

function closePop(){
    window.open('', 'popup').close();  //open된 창을 닫는다.
}