// function clickEvent(){
//     alert("clicked");
// }
//
// const btnClick = document.querySelector("#click2");
// btnClick2.onclick=()=>{
//     alert("click2");
// }
//
// //addEventListener("이벤트타입", 함수); 이벤트가 발생할 때 실행할 함수를 지정. 권장
// const btnClick3 = document.querySelector("#click3");
// btnClick3.addEventListener("Click", function (){
//     alert("click3");
// });
//
// const focus=document.querySelector('input')
// focus.addEventListener('focus',function(){
//     console.log('focus')
// });
//
// const blur=document.querySelector('input')
// blur.addEventListener('blur',function(){
//     console.log('blur')
// });


//1. getElementsById(특정 id, #필요 없음)  2. getElementsByClassName  3. getElementsByTagName
//4. querySelector(일치하는 첫번째 요소)  5. querySelectorAll(일치하는 모든요소)
document.querySelector("#querySelector").addEventListener("click", function () {
    document.querySelector(".query").classList.add("highlight");
})

document.querySelector("#querySelectorAll").addEventListener("click", function () {
    var elements = document.querySelectorAll(".query");
    elements.forEach(function (element) {
        element.classList.add("highlight");
    })
})