let menu = document.getElementById('ham');
let nav = document.getElementById('dropdown');
let scrollOne = document.getElementById('scroll_1');
let scrollTwo = document.getElementById('scroll_2');

// show and hide nav-menu on click

menu.addEventListener('click', (e) => {
    nav.classList.toggle('click-ham');
}) 

nav.addEventListener('click', (e) => {
    nav.classList.remove('click-ham');
})

// scroll to the top when clicking on the arrow-up

if (scrollOne !== null) {
scrollOne.addEventListener('click', (e) => {
    window.scrollTo(0,0);
})
}


if (scrollTwo !== null) {
scrollTwo.addEventListener('click', (e) => {
    window.scrollTo(0,0);
})
}

// when scrolling 694px show the arrow-up button 

if (scrollOne !== null) {
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 694) {
            scrollOne.style.right = "-17px";
            scrollOne.style.backgroundColor = "rgba(92,95,99,.8)";
            } else {
                scrollOne.style.right = "-58px";
                scrollOne.style.backgroundColor = "rgba(201,202,204,.7)";
                }
        })
    }

// arrow-up button for blog-page

if (scrollTwo !== null) {
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 694) {
            scrollTwo.style.right = "-1px";
            scrollTwo.style.backgroundColor = "rgba(92,95,99,.8)";
            } else {
                scrollTwo.style.right = "-40px";
                scrollTwo.style.backgroundColor = "rgba(201,202,204,.7)";
                }
        })
    }

// Smooth scrolling-effect

const easeInCubic = function (t) { return t*t*t }	
const scrollElems = document.getElementsByClassName('scroll');

const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
    
    const runtime = stamp - start;
    let progress = runtime / duration;
    const ease = easeInCubic(progress);
    
    progress = Math.min(progress, 1);
    
    const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

    if(runtime < duration){
      requestAnimationFrame((timestamp) => {
        const stamp = new Date().getTime();
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      })
    }
  }

for(let i=0; i<scrollElems.length; i++){
  const elem = scrollElems[i];
  
  elem.addEventListener('click',function(e) {
    e.preventDefault();
    const scrollElemId = e.target.href.split('#')[1];
    const scrollEndElem = document.getElementById(scrollElemId); 
    const anim = requestAnimationFrame(() => {
      const stamp = new Date().getTime();
      const duration = 1000;
      const start = stamp;
          
      const startScrollOffset = window.pageYOffset;

      const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
            
      scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    
      })
    })
  }