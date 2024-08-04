// --------taggle icon navbar ----------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//----scroll section-----
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navabar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
           //---- active sections for Animation on scroll----
           sec.classList.add('show-animate');
        }
        //----if want to use Animation that repeats on scroll use this -----
        else{
            sec.classList.remove('show-animate');
        }
    })
    //sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scrolly)
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}