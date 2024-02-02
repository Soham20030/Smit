function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


var moon = document.getElementById('moon');
var circle1 = document.getElementById('circle1');
var github = document.getElementById('github-icon');
var linkedin = document.getElementById('linkedin-icon');
var ellipse = document.getElementById('ellipse');
var listItems = document.querySelectorAll('#listss li');


moon.addEventListener('click', function() {

    if (moon.classList.contains('night-time')){
        moon.src = './images/sun-line.svg';
        moon.classList.add('day-time');
        moon.classList.remove('night-time');
        circle1.src = './images/Group 2-light.svg';
        github.src = './images/github-light.svg';
        linkedin.src = './images/linkedin-dark.svg';
        ellipse.src = './images/Ellipse 2-light.svg';
    }

    else if (moon.classList.contains('day-time')){
        moon.src = './images/moon-line.svg';
        moon.classList.remove('day-time');
        moon.classList.add('night-time');
        circle1.src = './images/Group 2.svg'
        github.src = './images/github.svg';
        linkedin.src = './images/linkedin.svg';
        ellipse.src = './images/Ellipse 2.svg';
    }
});


moon.onclick = function() {
    document.body.classList.toggle("light-theme");
}






// const moon = document.querySelector('.moon');
// moon.addEventListener('click', function() {
//     moon.src = './images/sun-line.svg';
//     moon.classList.add('day-time');
// });

// if (moon.classList.contains('day-time')) {
//     const moon = document.querySelector('.moon');
//     moon.addEventListener('click', function(){
//     moon.src = './images/moon-line.svg';
//     });
// }





if ('scrollBehavior' in document.documentElement.style === false) {
    import('smoothscroll-polyfill').then(module => module.polyfill());
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
