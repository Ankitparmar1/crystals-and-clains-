

window.addEventListener("mousemove", (dets) => {
   temp = dets.clientY;
   gsap.to(".cursor", {
      y: dets.pageY,
      x: dets.pageX,
      translate: '-50% -50%',
      rotate: `${(dets.pageY + dets.pageX)/5}deg`
   });
});


// Image Carousel Script

const carousel = document.querySelector('.img-div1' );
const slides = carousel.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
   slides.forEach((slide, index) => {
      if (index === currentSlide) {
         slide.classList.add('active');
      } else {
         slide.classList.remove('active');
      }
   });
   currentSlide++;
   if (currentSlide >= slides.length) {
      currentSlide = 0;
   }
}
setInterval(showSlide, 1000); 
// Change slide every 2 seconds
/////////////////////////////////////////////// image carosele slider ////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
   let carousel = document.querySelector(".carousel");
   let items = carousel.querySelectorAll(".item");
   let dotsContainer = document.querySelector(".dots");

   // Insert dots into the DOM
   items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
   });

   let dots = document.querySelectorAll(".dot");

   // Function to show a specific item
   function showItem(index) {
      items.forEach((item, idx) => {
         item.classList.remove("active");
         dots[idx].classList.remove("active");
         if (idx === index) {
            item.classList.add("active");
            dots[idx].classList.add("active");
         }
      });
   }

   // Event listeners for buttons
   document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
         item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
   });

   document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
         item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
   });

   // Event listeners for dots
   dots.forEach((dot) => {
      dot.addEventListener("click", () => {
         let index = parseInt(dot.dataset.index);
         showItem(index);
      });
   });
});

////////////////////////////card trigger aimation///////////////////

gsap.from("#page2 .container", {
   scale: 0,
   delay: 0.5,
   duration:1,
   scrollTrigger: "#page1 .container",
   trigger: "#page1",
   scroller: "#page1",
   top:"50%",
   markers: true
})
gsap.from("#page3 .cols", {
   scale: 0,
   delay: 0.5,
   duration: 1,
   scrollTrigger: ".main-container-card-page3 .cols",
   trigger: ".main-container-card-page3",
   top:"-30%",
   scroller: "body",
   markers: true
})
gsap.from("#page4 .card1", {
   scale: 0,
   delay: 0.5,
   scrub:1,
   duration: 1,
   scrollTrigger: "#page4 .card1",
   trigger: "#page4",
   scroller: "body",
})
gsap.from("#page4 .card2", {
   scale: 1.9,
   delay: 0.5,
   duration: 1,
   scrollTrigger: "#page4 .card2",
   trigger: "#page4",
   start:"top -30%",
   markers:true,
   scroller: "body",
})
gsap.from("#page4 .card3", {
   scale: 0,
   delay: 0.5,
   duration: 1,
   scrollTrigger: "#page4 .card3",
   trigger: "#page4",
   scroller: "body",
})
////////////////////////page popup form//////////////////////////////////////
window.addEventListener("load", function () {
   setTimeout(function open(event) {
      document.querySelector(".popup").classList.add("open-popup");
   }, 2000); // adjust the time to your liking
});

document.getElementById("close").addEventListener("click", function () {
   document.querySelector(".popup").classList.remove("open-popup");
});





///////////////////////////////gsp home page slider ///////////////////////
$(function () {

   var $div2slider = $(".div3-slide");
   var divSlider =0;

   TweenLite.set($div2slider.filter(":gt(0)"), { left: "960px" });
   TweenLite.delayedCall(1, leftSlide);

   function leftSlide() {
      TweenLite.to($div2slider.eq(divSlider), 0.5, { left: "-960px" });

      if (divSlider < $div2slider.length - 1) {
         divSlider++;
      }
      else {
         divSlider = 1;
      }

      TweenLite.fromTo($div2slider.eq(divSlider), 0.5, { left: "960px" }, { left: "0px" });
      TweenLite.delayedCall(2, leftSlide);
   }


});