let settingsBtn = document.querySelectorAll('.menu-icon');
let sidebar = document.getElementById('sidebar');
let sidebarItems = document.querySelectorAll('.sidebar .links li');
let alertDiv = document.getElementById('alert-background');
let rightBar = document.getElementById('right-bar');
let alertBackground = document.getElementById('alert-background');
let settingsDiv = document.getElementById('settings');
let settingsBtns = document.querySelectorAll('.settings div');
let goTopBtn = document.querySelector('.go-top');
let copyRightYear = document.querySelector('.copyright span');
let sidebarSettingsBtn = document.querySelector('.sidebar .settings');
let sidebarSettingsBtnMore = document.querySelector('.sidebar .settings .more');
let sidebarOptionsDiv = document.querySelector('.options-div .options');
let sidebarSettingsOptions = document.querySelectorAll('.sidebar .options li');
let sidebarSettingsOptionsIcon = document.querySelectorAll('.sidebar .options li i');
let ModeSidebar = document.querySelector('.mode-sidebar');
let navbarFixedBtn = document.querySelector('.navbar-fixed');
let extraNavbarFixedBtn = document.querySelector('.extra-navbar-fixed');
let navbar = document.querySelector('.navbar-top');
let extraNavbar = document.querySelector('.extra-info-nav');
let langOptions = document.querySelectorAll('.lang option');

// tape scroller
let el = document.querySelector(".tape");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// sidebar
[...settingsBtn].map((e) => {
    e.onclick = () => {
        sidebar.classList.toggle('off');
        sidebar.classList.toggle('on');

        [...settingsBtn].map((ee) => {
            ee.classList.toggle('active');
            if (ee.classList.contains('un-active')) {
                ee.classList.toggle('un-active');
            }
            ee.classList.toggle('yy');
        });
        alertDiv.classList.toggle('active');
    }
});
function removeAlertBackground(){
    sidebar.classList.toggle('off');
    sidebar.classList.toggle('on');
    [...settingsBtn].map((ee) => {
        ee.classList.toggle('active');
        if (ee.classList.contains('un-active')) {
            ee.classList.toggle('un-active');
        }
        ee.classList.toggle('yy');
    });
    alertDiv.classList.toggle('active');
};
alertBackground.onclick = () => {
    removeAlertBackground();
};

[...sidebarItems].map((e)=>{
    e.addEventListener('click',()=>{
        [...sidebarItems].map((ee)=>{
            ee.classList.remove('active');
            sidebarSettingsBtn.classList.remove('active');
        });
        e.classList.add('active');
        removeAlertBackground();
    });
});

sidebarSettingsBtn.onclick = ()=>{
    sidebarSettingsBtnMore.classList.toggle('fa-caret-down');
    sidebarSettingsBtnMore.classList.toggle('fa-caret-up');
    [...sidebarItems].map((ee)=>{
        ee.classList.remove('active');
    });
    sidebarSettingsBtn.classList.add('active');
    sidebarOptionsDiv.classList.toggle('off');
};

[...sidebarSettingsOptions].map((e)=>{
    e.addEventListener('click', ()=>{
        e.children[0].classList.toggle('fa-toggle-on');
        e.children[0].classList.toggle('fa-toggle-off');
    });
});

// sidebar more settings
navbarFixedBtn.onclick = ()=>{
    navbar.classList.toggle('fixed');
};
extraNavbarFixedBtn.onclick = ()=>{
    extraNavbar.classList.toggle('fixed');
    navbar.classList.toggle('plus');
}

// get time
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(window.localStorage.getItem('language') == 'en'){
        var session = "AM";
    }else{
        var session = "ص";
    }

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        if(window.localStorage.getItem('language') == 'en'){
            session = "PM";
        }else{
            session = "م";
        }
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();


// on scroll
window.onscroll = () => {
    if (window.scrollY >= 150) {
        rightBar.classList.add('active');
    } else {
        rightBar.classList.remove('active');
    }
}

// right bar
settingsBtns[0].onclick = () => {
    settingsDiv.classList.toggle('active');
    settingsBtns[0].classList.toggle('active');
    settingsBtns[0].children[0].classList.toggle('fa-gear');
    settingsBtns[0].children[0].classList.toggle('fa-arrow-up');
}

// scroll top
goTopBtn.onclick = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}

// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    speed: 5000,
    allowTouchMove: true,
    disableOnInteraction: false,
    autoplay: {
        delay: 1,
    }
});


// mode
if (window.localStorage.getItem('mode')) { } else {
    window.localStorage.setItem('mode', 'dark');
}

var mode = document.querySelectorAll('.mode i');
var modeDiv = document.querySelectorAll('.mode');
var logo = document.getElementById("logo");

[...mode].map((e) => {
    e.onclick = () => {
        changeMode();
    }
});
ModeSidebar.onclick = ()=>{
    changeMode();
};
function changeMode(){
    document.body.classList.toggle("white-theme");
    if (document.body.classList.contains("white-theme")) {
        [...mode].map((ee) => {
            ee.classList.add('fa-moon');
            ee.classList.remove('fa-sun');
        });

        window.localStorage.setItem('mode', 'white');
        [...modeDiv].map((ee) => {
            ee.style = "transform: rotate(360deg);";
        });
        ModeSidebar.children[0].classList.remove('fa-toggle-on');
        ModeSidebar.children[0].classList.add('fa-toggle-off');
    } else {
        [...mode].map((ee) => {
            ee.classList.add('fa-sun');
            ee.classList.remove('fa-moon');
        });

        window.localStorage.setItem('mode', 'dark');
        [...modeDiv].map((ee) => {
            ee.style = "transform: rotate(-360deg);";
        });
        ModeSidebar.children[0].classList.add('fa-toggle-on');
        ModeSidebar.children[0].classList.remove('fa-toggle-off');
    }
}
if (window.localStorage.getItem('mode') == 'dark') {
    [...mode].map((ee) => {
        ee.classList.add('fa-sun');
        ee.classList.remove('fa-moon');
        
    });
    ModeSidebar.children[0].classList.add('fa-toggle-on');
    ModeSidebar.children[0].classList.remove('fa-toggle-off');
} else {
    document.body.classList.toggle("white-theme");
    [...mode].map((ee) => {
        ee.classList.add('fa-moon');
        ee.classList.remove('fa-sun');
    });
    ModeSidebar.children[0].classList.add('fa-toggle-off');
    ModeSidebar.children[0].classList.remove('fa-toggle-on');
}

// language
let enBtns = document.querySelectorAll('.lang-en');
let arBtns = document.querySelectorAll('.lang-ar');
[...enBtns].map((e)=>{
    e.onclick = ()=>{
        enLang();
    };
});
[...arBtns].map((e)=>{
    e.onclick = ()=>{
        arLang();
    };
});
document.querySelector('.lang').onchange = (e)=>{
    if(e.target.value == 'en'){
        enLang();
    }
    if(e.target.value == 'ar'){
        arLang();
    }
}
function arLang(){
    window.location.replace(`http://${window.location.hostname}:${window.location.port}/public/index-ar.html`);
    window.localStorage.setItem('language', 'ar');
}
function enLang(){
    window.location.replace(`http://${window.location.hostname}:${window.location.port}/index.html`);
    window.localStorage.setItem('language', 'en');
}


// copyrights year
var d = new Date();
copyRightYear.innerHTML = d.getFullYear();

// background animation
const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;
for(let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox);
}


// scrollReveal
ScrollReveal({ distance: "500px" });
ScrollReveal().reveal(".sec1 img", {
    origin: "top",
    reset: true,
    scale: 0.85,
});
ScrollReveal().reveal(".sec1 h3", {
    origin: "right",
    reset: true,
    delay: 400,
});
ScrollReveal().reveal(".sec1 a", {
    origin: "bottom",
    reset: true,
    delay: 550,
});
ScrollReveal().reveal(".about .row1 .about-content p", {
    delay: 200,
    origin: "left",
    reset: true,
    scale: 0.75
});
ScrollReveal().reveal(".about .row1 .about-img", {
    delay: 500,
    origin: "right",
    reset: true,
    scale: 0.75
});
ScrollReveal().reveal(".about .row2 .about-content p", {
    delay: 200,
    origin: "right",
    reset: true,
    scale: 0.75
});
ScrollReveal().reveal(".about .row2 .about-img", {
    delay: 500,
    origin: "left",
    reset: true,
    scale: 0.75
});
ScrollReveal().reveal(".title h2", {
    delay: 300,
    distance: "1000px",
    origin: "top",
    reset: true,
    scale: 0.75
});
ScrollReveal().reveal(".title h3", {
    delay: 400,
    distance: "1000px",
    origin: "bottom",
    reset: true,
    scale: 0.75
});

scrolling('.ser1', 'left', '500px', 200, true);
scrolling('.ser2', 'right', '500px', 200, true);
scrolling('.ser3', 'left', '500px', 300, true);
scrolling('.ser4', 'right', '500px', 300, true);
scrolling('.services .back1', 'right', '500px', 300, true);
scrolling('.services .back2', 'left', '500px', 300, true);

scrolling('.work-with-us h1', 'left', '500px', 200, true);
scrolling('.work-with-us p', 'right', '500px', 300, true);
scrolling('.work-with-us .a1', 'left', '500px', 400, true);
scrolling('.work-with-us .a2', 'right', '500px', 400, true);

scrolling('.con1', 'left', '500px', 200, true);
scrolling('.con2', 'top', '500px', 400, true);
scrolling('.con3', 'right', '500px', 200, true);
scrolling('.send', 'bottom', '500px', 400, true);
scrolling('.send .map', 'left', '500px', 600, true);
scrolling('.send .form', 'right', '500px', 600, true);

function scrolling(className, origin, distance, delay, reset) {
    ScrollReveal().reveal(className, {
        delay: delay,
        distance: distance,
        origin: origin,
        reset: reset,
        scale: 0.75
    });
}