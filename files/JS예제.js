//1. 소수 판별하기
// var n = prompt('숫자를 입력하세요')
// for (var i = 2; i <= n; i++) {
//     if (n%i==1 && n%i==0) {
//         document.write('소수입니다.');
//         break;
//     } else{
//         document.write('소수가 아닙니다.');
//         break;
//         }
// }

//2. 자리 배치 프로그램

//3. 1~1000까지 홀수의 합 출력하기
// let i = 1;
// let sum = 0;
// for (i = 1; i<1000; i++){
//     if (i%2==1){
//         sum+=i
//     }
// }
// console.log(sum);

//4. 2~9단까지 구구단 출력하기
// for (i = 2; i <= 9; i++){
//     for (j = 1; j <= 9; j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
//     console.log()
// }

//5. 각 자리수의 합 출력하기
// let num = '18234';
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum+=parseInt(num[i]);
// }
// console.log(sum);

//6. 100~999 중 암스트롱 수 출력하기
let sum = 0;
for (i = 100; i <= 999; i++) {
  i = String(i);
  for (j = 0; j < 3; j++) {
    sum += parseInt(i[j] ** 3);
    if (i == sum) {
      console.log(sum);
    }
  }
}

//7. 1~1000까지 3의 배수의 합 출력하기
print(sum);
