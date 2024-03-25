function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const home = document.getElementById('home');
const toggle = document.getElementById('toggle');
const profile = document.getElementById('circle1');
const strips = document.getElementById('strips1');
const about = document.getElementById('about1');
const contactBtn = document.getElementById('contact-btn');
const skills = document.getElementById('skills');
const skillStrips1 = document.getElementById('skills-slice1');
const skillStrips2 = document.getElementById('skills-slice2');
const contact = document.getElementById('contact');
const project = document.getElementById('project-heading');
const mainproj = document.getElementById('main-projects');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    home.classList.toggle('active');
    profile.classList.toggle('active');
    toggle2.classList.toggle('active');
    strips.classList.toggle('active');
    about.classList.toggle('active');
    contactBtn.classList.toggle('active');
    skills.classList.toggle('active');
    skillStrips1.classList.toggle('active');
    skillStrips2.classList.toggle('active');
    contact.classList.toggle('active');
    project.classList.toggle('active');
    mainproj.classList.toggle('active');
}

const toggle2 = document.getElementById('toggle2');
toggle2.onclick = function(){
    toggle2.classList.toggle('active');
    home.classList.toggle('active');
    profile.classList.toggle('active');
    toggle.classList.toggle('active');
    strips.classList.toggle('active');
    about.classList.toggle('active');
    contactBtn.classList.toggle('active');
    skills.classList.toggle('active');
    skillStrips1.classList.toggle('active');
    skillStrips2.classList.toggle('active');
    contact.classList.toggle('active');
    project.classList.toggle('active');
    mainproj.classList.toggle('active');
}


function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_yfnsaas","template_f2gkkrw" ,params).then(function(res){
        alert("Success!" + res.status);
    })
}






