const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
console.log(menuIcon)

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

     menuIcon.classList.remove('bx-x');
    //  navbar.classList.toggle('active')

}

// Menu icon

// dark mode

let darkModeIcon = document.querySelector('#darkMode-icon');
console.log(darkModeIcon);
darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('light-mode')
});
// darkModeIcon.onclick = () => {
//     darkModeIcon.classList.toggle(bx-sun);
//     document.body.classList.toggle('light-mode')
// }