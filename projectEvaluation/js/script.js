document.addEventListener('DOMContentLoaded', () => {
    // 로고 클릭 시 메인 페이지로 이동
    const logo = document.querySelector('.header h1 a');
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "main.html";
    });

    // 메뉴 항목 클릭 이벤트 처리
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            window.location.href = url;
        });
    });

    // 캡션 제목 클릭 이벤트 처리
    const captionTitle = document.querySelector('.caption h2');
    captionTitle.addEventListener('click', () => {
        const url = captionTitle.getAttribute('data-url');
        window.open(url, '_blank');
    });
});
function showPopup() {
    window.open("popup1.html", "a", "width=400px, height=300px, left=100, top=50"); 
}

function popupClose() {
    opener.location.href="main.html";
    self.close();
}

const alertt =()=>{
    alert('보호 메뉴 외 구현되지 않았습니다.');
}