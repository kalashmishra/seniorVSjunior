function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()


gsap.to('#loader',{
  duration:2,
  onStart:function(){
    var loader= document.querySelector("#loader");
  var text =  document.querySelector("#text");
  
  setTimeout(function(){
      loader.style.display = "none";
  },1500)
  var timer = 0;
  setInterval(function(){
    if(timer <=   100){
      text.innerHTML = timer ++;
    }
 },30)
}
  
  
})


function forDescramble(){
  $(document).ready(function() {
    var $scramble = $(".scramble");
    $scramble.scramble(2000, 20, "alphabet", true);
  });
}
forDescramble();
 




function circal(){
    
  var main = document.querySelector("#main")
  var circale = document.querySelector(".circale")
   var maintext = document.querySelector(".mainte xt h1")
  main.addEventListener("mousemove",function(dets){
 
   gsap.to(circale,{
     x : dets.clientX,
     y : dets.clientY,
     duration:.4
   })
  })

  maintext.addEventListener("mouseenter",function(){
    gsap.to(circale,{
      scale:2.5,
      duration:.5
    })
  })

  maintext.addEventListener("mouseleave",function(){
    gsap.to(circale,{
      scale:1,
      duration:.5 
    })
  })
}




var tl=gsap.timeline({
  repeat:-1

});
tl
.to(".imgcontainer",{
  ease: Expo.easeInOut,
  width: "100%",
  
   stagger: 4,
   duration:1,
  
},'a')

.to(".text h1", {
  ease: Expo.easeInOut,
  stagger: 4,
  top:0,
  duration:1

},'a')

.to(".text h1", {
  delay: 2,
  ease: Expo.easeInOut,
  stagger: 4,
  top: "-100%",
  duration:1

},"a")
.to(".textp p", {
  ease: Expo.easeInOut,
  stagger: 4,
  top:0,
  duration:1

},'a')

.to(".textp p", {
  delay: 2,
  ease: Expo.easeInOut,
  stagger: 4,
  top: "-100%",
  duration:1

},"a")


  



gsap.from(" #top",{
  scrollTrigger:{
    scroller:'#main',
    trigger:'#top',
    start:'top 90%',
    // markers:true,
    scrub:true,
  
  },
  x:  -900
})





gsap.from("#middle",{
  scrollTrigger:{
    scroller:'#main',
    trigger:'#middle',
    start:'top 100%',
    // markers:true,
    scrub:true
  },
  x: 1200
  // width:0
  })


gsap.to("#big-div",{
  scrollTrigger:{
    scroller:'#main',
    trigger:'#big-div',
    start:'top -20%',
    // markers:true,
    scrub:true,
     //pin: true
  },
  height:"155%",
  width:'100%',
  rotate:30
})



gsap.from("#bottom",{
  scrollTrigger:{
    scroller:'#main',
    trigger:'#bottom',
    start:'top 250%',
    // markers:true,
    scrub:true,
  },
  x: -800,
  // width: 0
})


gsap.to("#section2",{
  scrollTrigger:{
    scroller:'#main',
    trigger:'#section2',
    start:'top 0%',
    // markers:true,
    scrub: true,
    pin:true
  },
  // y:200
})










// function imganimation(){
//   var elems = document.querySelectorAll(".elem")
//   var images = document.querySelector("#image")
  
//   elems.forEach(function(elem){
  
//       elem.addEventListener("mouseenter",function(){
//           var img = elem.getAttribute("data-image");  
//           images.style.display = "intial"
//           var w = elem.getAttribute("data-width");  
//           var h = elem.getAttribute("data-height");  
//           images.style.backgroundImage = `url(${img})`
//           images.style.width = w;
//           images.style.height = h;
//       })
        
          
//   })
// }


 function footer(){
  var tl5= gsap.timeline({
    scrollTrigger:{
        trigger:"#footer",
        start:"top 5%",
      // markers:true,
      // pin:`#overlay`,
       scroller: "#main",
       end:"bottom 150%",
  //     pin:true,
         
  //       end:"50%",
       scrub:1,}
  });
  
   tl5.fromTo(".help__text-path", {
    attr: { startOffset: "-100%" }
  }, {
    attr: { startOffset: '0%' },
    ease: 'ease.inOut',
    duration: 1,
  delay:2
  })
   
  
  

 }
 footer()


circal()
imganimation()
