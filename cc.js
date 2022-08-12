function show() {
   gsap.registerPlugin(ScrollTrigger);
   const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#bg"),
      smooth: true
   });
   locoScroll.on("scroll", ScrollTrigger.update);
   ScrollTrigger.scrollerProxy("#bg", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
   });
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   ScrollTrigger.refresh();
}

show();
var flgi=0;
document.querySelector("#top-fix #sr").addEventListener("click",function(){
   if(flgi===0){
   document.querySelector("#top-fix #srch").style.visibility="visible";
    flgi=1;  
   }
   else{
      document.querySelector("#top-fix #srch").style.visibility="hidden";
    flgi=0;
   }
})
var flg=0;
document.querySelector("#top-fix #sl").addEventListener("click",function(){
   if(flg===0){
   document.querySelector("#top-fix #sgn").style.visibility="visible";
   document.querySelector("#top-fix #lgn").style.visibility="visible";
    flg=1;  
   }
   else{
      document.querySelector("#top-fix #sgn").style.visibility="hidden";
   document.querySelector("#top-fix #lgn").style.visibility="hidden";
    flg=0;
   }
})
var fi=0;
document.querySelector("#ovrpge #top-fix #cnt").addEventListener("click",function(){
  if(fi===0){
   document.querySelector("#ovrpge #ctc").style.visibility="visible";
   fi=1;
}
  else{
   document.querySelector("#ovrpge #ctc").style.visibility="hidden";
   fi=0;
  }
})
var fia=0;
document.querySelector("#ovrpge #top-fix #abt").addEventListener("click",function(){
  if(fia===0){
   document.querySelector(".main h5").style.visibility="visible";
   fia=1;
}
  else{
   document.querySelector(".main h5").style.visibility="hidden";
   fia=0;
  }
})
var flag = 0;
document.querySelector("#top-fix #sgn").addEventListener("click", function () {
   if (flag === 0) {
      document.querySelector("#formm #sform").style.visibility = "visible";
      flag = 1;
   }
   else {
      document.querySelector("#formm #sform").style.visibility = "hidden";
      flag = 0;
   }
})
document.querySelector("#sform #sub #subm").addEventListener("click", function () {
   document.querySelector("#formm #sform").style.visibility = "hidden";
})
document.querySelector("#sform #crs #crsbtn ").addEventListener("click", function () {
   document.querySelector("#formm #sform").style.visibility = "hidden";
})

var flagi = 0;
document.querySelector("#top-fix #lgn").addEventListener("click", function () {
   if (flagi === 0) {
      document.querySelector("#formm #lform").style.visibility = "visible";
      flagi = 1;
   }
   else {
      document.querySelector("#formm #lform").style.visibility = "hidden";
      flagi = 0;
   }
})
document.querySelector("#lform #log #logm").addEventListener("click", function () {
   document.querySelector("#formm #lform").style.visibility = "hidden";
})
document.querySelector("#lform #crsi #crsbtni ").addEventListener("click", function () {
   document.querySelector("#formm #lform").style.visibility = "hidden";
})
gsap.to(".main #pic1>h1", {
   onStart: function () {
      $('.main #pic1>h1').textillate({ in: { effect: 'bounce' } });
   }
})

var arr = [
   {
      img: "https://images.unsplash.com/photo-1517864867049-6a0ca8363479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tag: "specs"
   },
   {
      img: "https://images.unsplash.com/photo-1497382706140-605ee76b3b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tag: "watches"
   },
   {
      img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tag: "shoes"
   },
   {
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      tag: "perfumes"
   },
   {
      img: "https://images.unsplash.com/photo-1491947146372-a19adb8ee300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80",
      tag: "hats"
   }
]
var arrf = [];
var arrc = [];
arr.forEach(function (elem, idx) {
   arrf.push(`<img src="${elem.img}" id="${idx}" alt="">`);
   arrc.push(`<div id="txt">${elem.tag}</div>`);
})
var c = 0;
setInterval(function () {
   if (arr.length > c) {
      document.querySelector(".maind #slide #imgg").innerHTML = arrf[c];
      document.querySelector(".maind #slide #textt").innerHTML = arrc[c];
      c++;
   }
   else {
      c = 0;
      clearInterval();
   }
}, 1700)


document.querySelector("#maind1  #card1 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card1 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card1 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card1 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card2 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card2 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card2 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card2 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card3 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card3 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card3 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card3 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card4 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card4 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card4 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card4 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card5 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card5 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card5 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card5 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card6 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card6 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card6 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card6 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card7 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card7 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card7 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card7 ").style.zIndex = "inherit";
})
document.querySelector("#maind1  #card8 ").addEventListener("mouseover", function () {
   document.querySelector("#maind1  #card8 ").style.zIndex = "9";
})
document.querySelector("#maind1  #card8 ").addEventListener("mouseout", function () {
   document.querySelector("#maind1  #card8 ").style.zIndex = "inherit";
})

var tl = gsap.timeline();
tl.from("#maind1 #text #textt", {
   x: -350,
   opacity: 0,
   scrollTrigger: {
      trigger: "#maind1 #text #textt",
      scroller: "#bg",
      start: "top 200%",
      end: "top 140%",
      scrub: true
   }
})
   .from("#maind1 #text #men", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
         trigger: "#maind1 #text #men",
         scroller: "#bg",
         start: "top 230%",
         end: "top 150%",
         scrub: true
      }
   })
   .from("#maind1 #text #women", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
         trigger: "#maind1 #text #women",
         scroller: "#bg",
         start: "top 240%",
         end: "top 160%",
         scrub: true
      }
   })
gsap.from("#maind2 #text1", {
   scale: 1.3,
   opacity:0,
   scrollTrigger: {
      trigger: "#maind2 #text1",
      scroller: "#bg",
      start: "top 310%",
      end: "top 270%",
      scrub: true
   },
   onStart: function () {
      $('#maind2 #text1').textillate({ in: { effect: 'rotateInUpLeft' } });
   }
})

var ar = ["~~casual wear~~", "~~ethnic wear~~", "~~summer wear~~", "~~winter wear~~", "~~party wear~~", "~~gym wear~~", "~~wedding wear~~"];
var p = 0;
setInterval(function () {
   if (p < 7) {
      document.querySelector("#ovrpge1 #maind2 #txt").textContent = ar[c];
      p++;
   }
   else {
      p = 0;
      clearInterval();
   }
}, 1000);

var gs=gsap.timeline();
gs.to(".main #hl",{
   onStart: function () {
      $('.main #hl').textillate({ in: { effect: 'bounceInRight' } });
   }
})
.from(".main h2",{
   x:-200,
   duration:1
})
gsap.to(".main #cmt1 h1",{
   onStart: function () {
      $('.main #cmt1 h1').textillate({ in: { effect: 'bounceInUp' } });
   }
})

gsap.from(".main h4",{
   y:100,
   opacity:0,
   scrollTrigger: {
      trigger: ".main h4",
      scroller: "#bg",
      start: "top 130%",
      end: "top 50%",
      scrub: true,
   }
})
gsap.from(".main h3",{
   x:-200,
   opacity:0,
   scrollTrigger: {
      trigger: ".main h4",
      scroller: "#bg",
      start: "top 130%",
      end: "top 50%",
      scrub: true,
   }
})

gsap.to("#ovrpge1 #maind3 h1",{
   opacity:0.5,
   y:-100,
   scrollTrigger: {
      trigger: "#ovrpge1 #maind3 h1",
      scroller: "#bg",
      start: "top 378%",
      end: "top 300%",
      scrub: true
   },
   onStart: function () {
      $('#ovrpge1 #maind3 h1').textillate({ in: { effect: 'bounceInUp' } });
   }
})
gsap.to("#ovrpge1 #maind3 #cvr",{
   opacity:1,
   height:0,
   scrollTrigger:{
      trigger: "#ovrpge1 #maind3 #cvr",
      scroller: "#bg",
      start: "top 400%",
      end: "top 350%",
      scrub: true,
   }
})