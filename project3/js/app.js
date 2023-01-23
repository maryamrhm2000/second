let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
})


// --------------------------------------------
const block = document.querySelectorAll('.block');
window.addEventListener('load', function(){
  block.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    console.log(num)
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
       clearInterval();
      } else {
        
          count += 1;
          numElement.innerText = count;
          
        

      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});

// window.onscroll = function() {myFunction()};

// var scrol = document.querySelector(".svg");
// var sticky = scrol.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= (sticky+100)) {
//     // scrol.classList.add("test", "dots::after");
//     FontFaceSetLoadEvent()
    
//   } else {
    
//   }
// }


var swiper = new Swiper(".mySwiper", {

  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    568: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});
