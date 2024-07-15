

// header active menu
const header = document.querySelector('header');
const toggleMenu = document.querySelector('.toggle__menu');

toggleMenu.onclick = function () {
    header.classList.toggle('active_menu');
}


// hero content form validation
const heroEmail = document.querySelector('#email');
const heroForm = document.querySelector('#hero_form')


heroForm.addEventListener('submit', e =>{
    e.preventDefault();

    validateEmail();
})

const setError = (element, message)=>{
    const inputError = element.parentElement;
    const displayError = inputError.querySelector('.error_msg');

    displayError.innerText = message;
    inputError.classList.add('error');
    inputError.classList.remove('success')
}

const setSuccess = element => {
    const inputError = element.parentElement;
    const displayError = inputError.querySelector('.error_msg');

    displayError.innerText = '';
    inputError.classList.add('success');
    inputError.classList.remove('error');
}


const isValidEmail = email =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
}

const validateEmail = () =>{
    const heroEmailValue = heroEmail.value.trim();

    if(heroEmailValue === ''){
        setError(heroEmail, 'Field required');
    }else if(!isValidEmail(heroEmailValue)){
        setError(heroEmail, 'make sure it\'s an email')
    }else{
        setSuccess(heroEmail);
    }
}



//#### scroll reveal 
ScrollReveal({
    distance: '80px',
    duration: 3500,
    deley: 700
})

ScrollReveal().reveal('.logo', {deley:500, origin: 'top', interval: 400})
ScrollReveal().reveal('.hero__wrap h1, #hero_form,.section_4_wrap h2, .section_4_wrap button', {deley:800, origin: 'left', interval: 400})
ScrollReveal().reveal('.hero__wrap p, #deal_btn, .section_4_wrap p', {deley:900, origin: 'bottom'})
ScrollReveal().reveal('.card, .section_4_img_bg img', {deley:600, origin: 'bottom', interval: 400})
ScrollReveal().reveal('.gallary__section h2, .section_3_wrap h2', {deley:600, origin: 'bottom'})
ScrollReveal().reveal('.img__wrap', {deley:600, origin: 'left', interval: 500})
ScrollReveal().reveal('.deal__content h3, .deal__content p, .deal__content h5', {deley:600, origin: 'left', interval: 500})
ScrollReveal().reveal('.deal__img img', {deley:700, origin: 'bottom',})

// footer
ScrollReveal().reveal('.top_box h2,.top_box a', {deley:500, origin: 'bottom', interval: 100})
ScrollReveal().reveal('.socials a', {deley:700, origin: 'left', interval: 200})
ScrollReveal().reveal('.down__content', {deley:800, origin: 'right'})

