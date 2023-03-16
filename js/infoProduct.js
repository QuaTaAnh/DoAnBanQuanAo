const cartBtn = document.querySelector('.bxs-shopping-bag');
const closeBtn = document.querySelector('.bx-x');
const cart = document.querySelector('.cart');

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

//Xử lí hình ảnh trong infoProduct
const images = [
    './assets/images/imgInfo1.jpg', 
    './assets/images/imgInfo2.jpg', 
    './assets/images/imgInfo3.jpg', 
    './assets/images/imgInfo4.jpg'
]

const prevBtn = document.querySelector('.bx-chevron-left');
const nextBtn = document.querySelector('.bx-chevron-right');
const imgMain = document.querySelector('.img-main img');

var i = 0;
//Hàm next
function nextImage(){
    imgMain.src = images[i];
    i++;
    if(i >= images.length){
        i=0;
    }
}

var j = images.length - 1;

//Hàm prev
function prevImage(){
    imgMain.src = images[j];
    j--;
    if(j <= - 1){
        j=images.length - 1;
    }
}
//Khi click vào nút next thì ảnh sẽ chuyển tiếp
nextBtn.addEventListener('click', nextImage);
//Khi click vào nút prev thì ảnh sẽ quay lại
prevBtn.addEventListener('click', prevImage);

const listImages = document.querySelectorAll('.list-img img')
listImages.forEach((listImg, index) => {
    const image = images[index];
    listImg.addEventListener('click',()=>{
        imgMain.src = image;
    })
})

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







