// sticky navbar
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


//type effect
var typed = new Typed(".typing", {
    strings: ["Web designer", "Graphic Designer", "Product Designer", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});




//skills bar
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()
t1.fromTo(htmlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .fromTo(cssBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .fromTo(jsBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(75% - 6px)`, ease: Power4.easeOut })
    .fromTo(reactBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)`, ease: Power4.easeOut })

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
        triggerElement: '.skills',
        triggerHook: 0
    })
    .setTween(t1)
    .addTo(contoller);

const showRequiredCatergory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i=0; i<links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }


    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i=0; i<categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')

        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}





