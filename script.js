function navbtn() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className = "responsive";
    } else {
        x.className = "navbar";
    }
}
//end of navbar
function scrollToSectionResume() {
    var targetSection = document.querySelector('.third');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSectionSkill() {
    var targetSection = document.querySelector('.four');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSectionContact() {
    var targetSection = document.querySelector('.six');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

/////////////////////
var a = document.getElementById("typing");
var dev = 'Developer';
var des = 'Designer';
var strings = [dev, des];
var stringIndex = 0;
var index = 0;
var animationDuration = 1000;
var typingTimeout;

// Start typing animation
startTyping();

function startTyping() {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(typeOne, animationDuration / dev.length);
}

function typeOne() {
    var currentString = strings[stringIndex];
    if (index < currentString.length) {
        a.innerHTML += currentString.charAt(index);
        index++;
        typingTimeout = setTimeout(typeOne, animationDuration / currentString.length);
    } else {
        setTimeout(startErasing, animationDuration);
    }
}

function startErasing() {
    clearTimeout(typingTimeout);
    index--;
    eraseText();
}

function eraseText() {
    var currentString = strings[stringIndex];
    if (index >= 0) {
        a.innerHTML = currentString.substring(0, index);
        index--;
        typingTimeout = setTimeout(eraseText, animationDuration / currentString.length); // 
    } else {
        stringIndex = (stringIndex + 1) % strings.length;
        startTyping();
    }
}
// --------------------------------------------------

let sum = 0;
let check = 0;
var target = document.querySelector('.container');

document.addEventListener('scroll', function () {
    depth('bridge-4456255_1920.jpg');
});
function depth(image) {
    var topp = window.scrollY;
    if (topp >25 && check == 0) {

        target.style.top = topp + "px";
        document.body.style.overflow = 'hidden';

        document.querySelector(".content").style.transform = 'scale(' + 20 + ',' + 20 + ')';

        sum++;
        check++;

    }

    if (sum == 1) {
        sum = 2;
        check = 1;
        document.querySelector('.navright').style.opacity = 1;
        setTimeout(function () {
            document.querySelector(".content").style.transform = 'scale(' + 1 + ',' + 1 + ')';
            document.querySelector(".content").style.backgroundImage = 'none';
            document.querySelector(".content").style.opacity = 0;
           
            
        }, 1000);
        setTimeout(function () {
            document.getElementById("secondId").style.height = 100 + '%';
            document.getElementById("secondId").style.width = 100 + '%';

            //   document.querySelector('navbar').style.height = 5 +'vh';
            document.getElementById("secondId").style.opacity = 1;  
            setTimeout(function(){
                document.body.style.overflowY = 'auto';
            },2000);
            window.scroll({
                top: 0,
            });         
        }, 1500);

    }
};


document.getElementById("secondId").style.height = innerHeight + "px";

var bwpicid = document.getElementById("bwpicid");
var leftbox = document.getElementById("leftBox");
var rightBox = document.getElementById("rightBox");
var cordpic = bwpicid.offsetTop - (innerHeight * (3 / 4));
var degree = document.querySelector('.degree');
var twelve = document.querySelector('.twelve');
var zomato = document.querySelector('.zomato');
var ten = document.querySelector('.ten');
var android = document.querySelector('.android');
var ecommerce = document.querySelector('.ecommerce');
var cordecommerce = ecommerce.offsetTop - (innerHeight * (3 / 4));
var cordandroid = android.offsetTop - (innerHeight * (3 / 4));
var cordzomato = zomato.offsetTop - (innerHeight * (3 / 4));
var cordten = ten.offsetTop - (innerHeight * (3 / 4));
var cordtwelve = twelve.offsetTop - (innerHeight * (3 / 4));
var corddegree = degree.offsetTop - (innerHeight * (3 / 4));
window.addEventListener('scroll', cordination);
function cordination() {
    var cord = window.scrollY;


    if (cord >= cordpic) {

        setTimeout(function () {
            bwpicid.style.opacity = "1";
            bwpicid.style.padding = "0";
        }, 2000);
        setTimeout(function () {
            leftbox.style.height = "170px";
            rightBox.style.height = "170px";
        }, 2500);
    }
    if (cord >= corddegree) {
        degree.style.opacity = "1";
        degree.style.padding = '0 30px 20px 20px';
    }
    if (cord >= cordtwelve) {

        twelve.style.opacity = "1";
        twelve.style.padding = '0 30px 20px 20px';
    }
    if (cord >= cordten) {

        ten.style.opacity = "1";
        ten.style.padding = '0 30px 20px 20px';
    }
    if (cord >= cordzomato) {

        zomato.style.opacity = "1";
        zomato.style.padding = '0 30px 20px 20px';
    }
    if (cord >= cordandroid) {

        android.style.opacity = "1";
        android.style.padding = '0 30px 20px 20px';
    }
    if (cord >= cordecommerce) {

        ecommerce.style.opacity = "1";
        ecommerce.style.padding = '0 30px 20px 20px';
    }
}
function refreshPage() {
    location.reload();
};
window.addEventListener('beforeunload', function () {
    // Scroll to the top of the page before refreshing
    window.scrollTo(0, 0);
});
//////////////////////////////////////////

const circlehtml = document.querySelector('.circlehtml');
const circlecss = document.querySelector('.circlecss');
const circlejs = document.querySelector('.circlejs');
const circlejava = document.querySelector('.circlejava');
const circledsa = document.querySelector('.circledsa');
const circlereact = document.querySelector('.circlereact');

var html = document.querySelector('.html');
var cordhtml = html.offsetTop - (innerHeight * (3 / 4));
var java = document.querySelector('.java');
var cordjava = java.offsetTop - (innerHeight * (3 / 4));

document.addEventListener('scroll', function () {
    var cord = window.scrollY;
    if (cord >= cordhtml) {
        circlehtml.style.strokeDasharray = '85, 100';
        circlecss.style.strokeDasharray = '70, 100';
        circlejs.style.strokeDasharray = '65, 100';
    }
    if (cord >= cordjava) {
        circlejava.style.strokeDasharray = '70, 100';
        circledsa.style.strokeDasharray = '55, 100';
        circlereact.style.strokeDasharray = '40, 100';
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
