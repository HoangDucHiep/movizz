/*--nav bar stuff---------------------------------*/

//search box openclose------------------------------
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-magnifying-glass");
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("fa-magnifying-glass", "fa-xmark");
    }else{
        searchBox.classList.replace("fa-xmark", "fa-magnifying-glass");
    }
});


//sidebar open close------------------------
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let closeOpenBtn = document.querySelector(".nav-links .fa-xmark");
let navLinks = document.querySelector(".nav-links");
menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
}); 


//sidebar submenu open-close----------------------
let branchArrow = document.querySelector(".branch");
branchArrow.onclick = function() {
    if (navLinks.classList.contains("show1")) {
        navLinks.classList.remove("show1");
    } else {
        navLinks.classList.remove("show2",);
        navLinks.classList.add("show1");
    }
};

let branchNguyenTraiArrow = document.querySelector(".branch-4");
branchNguyenTraiArrow.onclick = function() {
    if (navLinks.classList.contains("show2")) {
        navLinks.classList.remove("show2");
    } else {
        navLinks.classList.add("show2");
    }
};

/* ---------login-signup------------------- */
let password = document.getElementById('password-sign');
let togglePassword = document.getElementById('pass-toggle');


function showHide() {
    if(password.type == 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
    }
}

/* ----------------------------show-hide pass for signup---------------------------- */
let passwordSn = document.getElementById('password-sign-up');
let togglePasswordSn = document.getElementById('pass-toggle-sn');


function showHidesn() {
    if(passwordSn.type == 'password') {
        passwordSn.setAttribute('type', 'text');
        togglePasswordSn.classList.add('hide');
    }
    else {
        passwordSn.setAttribute('type', 'password');
        togglePasswordSn.classList.remove('hide');
    }
}

/* ------------------------show-hide pass for repeat password------------------------ */
let passwordSnRp = document.getElementById('password-sign-up-rp');
let togglePasswordSnRp = document.getElementById('pass-toggle-sn-rp');


function showHidesnrp() {
    if(passwordSnRp.type == 'password') {
        passwordSnRp.setAttribute('type', 'text');
        togglePasswordSnRp.classList.add('hide');
    }
    else {
        passwordSnRp.setAttribute('type', 'password');
        togglePasswordSnRp.classList.remove('hide');
    }
}


/* switch form onclick */
const signUpTog = document.getElementById('to-sign-up-link');
const loginTog = document.getElementById('to-login-link');
const loginForm = document.getElementById('login'); 
const signupForm = document.getElementById('signup'); 
const resetForm = document.getElementById('reset-pass');
const resetTog = document.getElementById('back-login-link');
const logToFoget = document.getElementById('to-reset');


signUpTog.addEventListener("click", () => {
    loginForm.style.left = '155%';
    signupForm.style.left = '50%';
    loginForm.style.opacity = '0';
    signupForm.style.opacity = '1';
});

loginTog.addEventListener("click", () => {
    loginForm.style.left = '50%';
    signupForm.style.left = '-55%';
    loginForm.style.opacity = '1';
    signupForm.style.opacity = '0';
});

logToFoget.addEventListener("click", () => {
    loginForm.style.left = "-55%";
    resetForm.style.left = "50%";
    loginForm.style.opacity = '0';
    resetForm.style.opacity = '1';
});

resetTog.addEventListener("click", () => {
    loginForm.style.left = "55%";
    resetForm.style.left = "155%";
    loginForm.style.opacity = '1';
    resetForm.style.opacity = '0';
});





/* Form validation */

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');
    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success')
} /* Set message and red border wrong input */

const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');
    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};  /* Set green border validated */

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}   /* Check if valid email */

const emailValidate = (email) => {
    const emailValue = email.value.trim();

    if(emailValue === '')
    {
        setError(email, 'Không thể để trống email!');
    }
    else if(!isValidEmail(emailValue)) 
    {
        setError(email, 'Email không hợp lệ!');
    }
    else{
        setSuccess(email);
    }
};  /* Checking email func */


/* checking valid password, sec para forRpPass have default argument */
const passValidate = (password, forRpPass = "") => {
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Không thể để trống mật khẩu!');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Mật khẩu cần có độ dài từ 8 kí tự!')
    } else if (!/[A-Z]/.test(passwordValue[0])) {
        setError(password, 'Mật khẩu phải bắt đầu bằng chữ cái in hoa!!');
    } else if(!(/\d/.test(passwordValue))) {
        setError(password, 'Mật khẩu phải chứa ít nhất một số!');
    }  else if(forRpPass !== ''){  /* only used when have sec-arg */
        if(forRpPass !== passwordValue){
            setError(password, 'Mật khẩu không khớp!');
        }
        else {
            setSuccess(password);
        }
    }
    else {
        setSuccess(password);
    }
}

/* login-form */
const login = document.getElementById('signin-form');
const emailLogin = document.getElementById('email-sign');
const passwordLogin = document.getElementById('password-sign');

let isFormValid;

login.addEventListener('submit', e => {
    validateLogin();
    if (!isFormValid) {
        e.preventDefault();
    }
});

const validateLogin = () => {
    isFormValid = true;

    emailValidate(emailLogin);
    passValidate(passwordLogin);

    if (emailLogin.parentElement.classList.contains('error') || passwordLogin.parentElement.classList.contains('error')) {
        isFormValid = false;
    }
}

/* Sign up form */

const signup = document.getElementById('signup-form');
const emailSignup = document.getElementById('email-sign-up');
const nameSignup = document.getElementById('name-sign-up');
const passwordSignup = document.getElementById('password-sign-up');
const phoneSignup = document.getElementById('phone-sign-up');
const rpPasswordSignup = document.getElementById('password-sign-up-rp');



signup.addEventListener('submit', e => {
    validateSignup();
    if (!isFormValid) {
        e.preventDefault();
    }
});

const validateSignup = () => {
    isFormValid = true;
    const phoneValue = phoneSignup.value.trim();
    const nameValue = nameSignup.value.trim();

    emailValidate(emailSignup);
    passValidate(passwordSignup);
    passValidate(rpPasswordSignup, passwordSignup.value.trim());

    /* check fullname */
    if(nameValue === '') {
        setError(nameSignup, 'Không thể để trống họ tên!');
    }
    else if((nameValue.length - nameValue.replaceAll(' ', '').length) < 2) { /* must have 3 words for full name */
        setError(nameSignup, 'Vui lòng nhập đầy đủ họ tên!');
    }
    else {
        setSuccess(nameSignup);
    }

    /* check phone number */
    if (phoneValue === '') {
        setError(phoneSignup, 'Không thể để trống mật khẩu!');
    }
    else if (!/(09|03|07|08|05)[0-9]{8}/.test(phoneValue)){
        setError(phoneSignup, 'Số điện thoại không hợp lệ!');
    }
    else {
        setSuccess(phoneSignup);
    }

    if (emailSignup.parentElement.classList.contains('error') || nameSignup.parentElement.classList.contains('error') 
        || passwordSignup.parentElement.classList.contains('error') || phoneSignup.parentElement.classList.contains('error')
        || rpPasswordSignup.parentElement.classList.contains('error')) 
        {
            isFormValid = false;
        }

};


/* reset form */
const resetPassForm = document.getElementById('reset-pass-form');
const resetEmail = document.getElementById('reset-pass-input');

resetPassForm.addEventListener('submit', e => {
    validateReset();
    if (!isFormValid) {
        e.preventDefault();
    }
});

const validateReset = () => {
    isFormValid = true;

    emailValidate(resetEmail);
    if (resetEmail.parentElement.classList.contains('error')) {
        isFormValid = false;
    }
};



/* tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

