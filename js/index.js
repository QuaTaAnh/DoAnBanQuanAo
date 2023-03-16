const cartBtn = document.querySelector('.cart-header');
const closeBtn = document.querySelector('.bx-x');
const cart = document.querySelector('.cart');
// console.log(cart);

//Hàm hiện Giỏ hàng
function showCartModal(){
    cart.classList.add('show');
}
//Hàm ẩn Giỏ hàng
function hiddenCartModal(){
    cart.classList.remove('show');
}
//Xử lí sự kiện click cho cart btn
cartBtn.addEventListener('click', showCartModal);
//Xử lí sự kiện click cho close btn
closeBtn.addEventListener('click', hiddenCartModal);

//Xử lí nút scroll top
const searchBtn = document.querySelector('.item-search-btn');
const goToTopBtn = document.querySelector('.btn-scroll-top');

function scrollShow(){
    goToTopBtn.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll', ()=>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
          } else {
            goToTopBtn.style.display = "none";
          }
    })
}
scrollShow();

//Xử lý nút menu khi dùng trên điện thoại
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})

// Thông báo đăng nhập
const cartBtns = document.querySelectorAll('.bx-shopping-bag');
console.log(cartBtns);
const messageBox = document.querySelector('.message-box');
const closeBtnBox = document.querySelector('.close-btn');
const applyBtnBox = document.querySelector('.apply-btn');

function showBoxMessage(){
    messageBox.classList.add('show');
}

function hiddenBoxMessage(){
    messageBox.classList.remove('show');
}

cartBtns.forEach(function(item){
    item.addEventListener('click', showBoxMessage)
})

closeBtnBox.addEventListener('click', hiddenBoxMessage);
applyBtnBox.addEventListener('click', function(){
    alert('Bạn đã đăng nhập')
    messageBox.classList.remove('show');
});
