function loco() {
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

function loader() {
  let circularprogress = document.querySelector(".circular-bar");
  let progressvalue = document.querySelector(".progress-value");
  let progressStartValue = 0,
    progressEndValue = 100,
    speed = 1;

  let progress = setInterval(() => {
    progressStartValue++;
    progressvalue.textContent = `${progressStartValue}%`;
    circularprogress.style.background = `conic-gradient(rgb(255, 85, 252)${
      progressStartValue * 3.6
    }deg,white 0deg)`;
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  });
}
loader();

function loaderAnimation() {
  var tl1 = gsap.timeline();

  tl1.to(".container", {
    top:"-100%",
    opacity: 0,
    delay: 0.5,
    duration: 2,
  });
  tl1.from("#loader h1", {
    opacity: 0,
    y: 300,
    duration: 0.4,
  });
}
loaderAnimation();

function page1() {
  var tl2 = gsap.timeline();

  tl2.to("#loader", {
    top: "-100%",
    scale: 0,
    delay: 4,
    duration: 2,
  });
  tl2.from("nav", {
    opacity: 0,
    y: -300,
    duration: 0.8,
  });
  tl2.from(".lft h1", {
    opacity: 0,
    y: 300,
    duration: 0.5,
  });
  tl2.from([".leftpt-one p", ".page1-btns"], {
    opacity: 0,
    x: -300,
    duration: 0.8,
  });
  tl2.from(".right video", {
    opacity: 0,
    x: 300,
    duration: 0.5,
  });
}
page1();

function page2() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "page2",
      scroller: "#main",
      // markers:true,
      start: "50%",
      end: "-14%",
      scrub: 3,
    },
  });
  tl3.from("#page2 h1", {
    opacity: 0,
    y: 300,
    duration: 0.8,
  });
  tl3.from("#page2para", {
    opacity: 0,
    y: 300,
    duration: 0.5,
  });
  tl3.from(".gola", {
    opacity: 0,
    scale: 0,
    duration: 1,
  });
}
page2();

function page41() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      // markers: true,
      start: " top 50% top -20%",
      end: "4%",
      scrub: 3,
    },
  });
  tl4.from( ["#page-4 h1",".hider"],{
    opacity: 0,
    y: 600,
    duration: 0.8,
  });
}
page41();


function page4() {
gsap.to("#page4 #imgpartt,#textp", {
  x: -1050,
  opacity: 3,
  scrollTrigger: {
    // markers:true,
    scroller: "#main",
    trigger: "#page4",
    start: "top 0%",
    pin: true,
    scrub: 3,
  },
});
gsap.from("#page4 #textp", {
  y: 150,
  scrollTrigger: {
    // markers:true,
    scroller: "#main",
    trigger: "#page4",
    start: "top 0%",
    end: "-150%",
    pin: true,
  },
});
gsap.from("#righty h1,#righty h2,#righty p", {
  y: 150,
  scrollTrigger: {
    // markers:true,
    scroller: "#main",
    trigger: "#page4",
    start: " top 0 top 90%",
    end: "-590%",
    pin: true,
  },
})
}
page4();

function page5() {
  
var b1 = document.querySelector("#clickp #bar1")
var b2 = document.querySelector("#clickp #bar2")
var b3 = document.querySelector("#clickp #bar3")
var b4 = document.querySelector("#clickp #bar4")
var b5 = document.querySelector("#clickp #bar5")

var c1 = document.querySelector("#cards")



b1.addEventListener("click", function () {
    c1.style.transform = "translateX(0%)";
    b1.style.height = "0.6vh"
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})


b2.addEventListener("click", function () {
    c1.style.transform = "translateX(-1390px)";
    b2.style.height = "0.6vh"
    b2.style.backgroundColor = "white";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})

b3.addEventListener("click", function () {
    c1.style.transform = "translateX(-2790px)";
    b3.style.height = "0.6vh"
    b3.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";

})

b4.addEventListener("click", function () {
    c1.style.transform = "translateX(-4185px)";
    b4.style.height = "0.6vh"
    b4.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b5.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})

b5.addEventListener("click", function () {
    c1.style.transform = "translateX(-5585px)";
    b5.style.height = "0.6vh"
    b5.style.backgroundColor = "white";
    b2.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b3.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b4.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
    b1.style.backgroundColor = "rgba(128, 128, 128, 0.767)";
})

}
page5();

function page6() {
  
gsap.from("#page6 p", {
  y: 100,

  scrollTrigger: {
      // markers:true,
      scroller: "#main",
      trigger: "#page6",
      start: "top 40%",
      end: "-100%",

  }
}
)
gsap.from("#page6 #half1 button", {
  y: 100,

  scrollTrigger: {
      // markers:true,
      scroller: "#main",
      trigger: "#page6",
      start: "top 15%",
      end: "-100%",

  }
}
)
}
page6();

function page7() {
  gsap.from("#page7 h1", {
    y: 150,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page7",
        start: "top 85%",
        end: "-100%",

    }
}
)
gsap.from("#page7 p", {
    y: 150,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page7",
        start: "top 40%",
        end: "-100%",

    }
}
)
gsap.from("#page7 button", {
    y: 150,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page7",
        start: "top 15%",
        end: "-100%",

    }
}
)
}
page7();

function page8() {
  gsap.from("#page8 img", {
    y: 350,

    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page8",
        start: "top 80%",
        end: "-100%",

    }
}
)


}
page8();

function page11() {
  gsap.from(["#w","#tr"], {
    y: 150,
    opacity:0,
    scrollTrigger: {
        // markers:true,
        scroller: "#main",
        trigger: "#page11",
        start: "top 80%",
        end: "-100%",

    }
}
)
}
page11();

