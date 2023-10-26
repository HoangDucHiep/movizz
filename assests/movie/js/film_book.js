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


login.addEventListener('submit', e => {
    e.preventDefault();
    validateLogin();
});

const validateLogin = () => {
    emailValidate(emailLogin);
    passValidate(passwordLogin);
}

/* Sign up form */

const signup = document.getElementById('signup-form');
const emailSignup = document.getElementById('email-sign-up');
const nameSignup = document.getElementById('name-sign-up');
const passwordSignup = document.getElementById('password-sign-up');
const phoneSignup = document.getElementById('phone-sign-up');
const rpPasswordSignup = document.getElementById('password-sign-up-rp');


signup.addEventListener('submit', e => {
    e.preventDefault();
    validateSignup();
});

const validateSignup = () => {
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
};


/* reset form */
const resetPassForm = document.getElementById('reset-pass-form');
const resetEmail = document.getElementById('reset-pass-input');

resetPassForm.addEventListener('submit', e => {
    e.preventDefault();
    validateReset();
});

const validateReset = () => {
    emailValidate(resetEmail);
};


/* tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})



// đổi màu nút khi chon giờ
document.addEventListener('DOMContentLoaded', function() {
  const TabButtons = Array.from(document.getElementsByClassName('btn-tab'));
  for (let i = 0; i < TabButtons.length; i++) {    
        TabButtons[i].addEventListener('click', function() {
          TabButtons.forEach(button => button.classList.remove('select_timeactive'));
          this.classList.toggle('select_timeactive');
      }); 
  }
  });


//  đổi màu nút ghế khi click chọn
document.addEventListener('DOMContentLoaded', function() {
  const myButtons = Array.from(document.getElementsByClassName('btn-cus'));
  for (let i = 0; i < myButtons.length; i++) {
      if (!myButtons[i].disabled) {
          myButtons[i].addEventListener('click', function() {
              this.classList.toggle('bg-primary');
          });
      }
  }
});

let selectedDoubleseats = ''

document.addEventListener('DOMContentLoaded', function() {
const MyButtons = Array.from(document.getElementsByClassName('btn-double'));
for (let i = 0; i < MyButtons.length; i++) {
  if (!MyButtons[i].disabled) {
    MyButtons[i].addEventListener('click', function() {
      
      updateDoubleseats(i)
      toggleButtonColor(i)
    });       
  }
}
function toggleButtonColor(index) {
  if (index % 2 === 0) {
    MyButtons[index].classList.toggle('bg-primary');
    if (index + 1 < MyButtons.length) {
      MyButtons[index + 1].classList.toggle('bg-primary');
    }
  } else {
    MyButtons[index].classList.toggle('bg-primary');
    if (index - 1 >= 0) {
      MyButtons[index - 1].classList.toggle('bg-primary');
    }
  }
}  

function updateDoubleseats(index) {
  if(MyButtons[index].classList.contains('bg-primary')){
    if (index % 2 === 0) {
      selectedDoubleseats=selectedDoubleseats.replace(MyButtons[index].textContent,'')
      if (index + 1 < MyButtons.length) {
        selectedDoubleseats=selectedDoubleseats.replace(MyButtons[index+1].textContent,'')
      }
    } else {   
      selectedDoubleseats=selectedDoubleseats.replace(MyButtons[index].textContent,'')
      if (index - 1 >= 0) {
        selectedDoubleseats=selectedDoubleseats.replace(MyButtons[index-1].textContent,'')
      }
    }
    
  }else{
    if (index % 2 === 0) {     
      selectedDoubleseats=selectedDoubleseats+MyButtons[index].textContent+' '
      if (index + 1 < MyButtons.length) {     
        selectedDoubleseats=selectedDoubleseats+MyButtons[index+1].textContent+' '
      }
    } else {    
      selectedDoubleseats=selectedDoubleseats+MyButtons[index].textContent+' '
      if (index - 1 >= 0) {
        selectedDoubleseats=selectedDoubleseats+MyButtons[index-1].textContent+' '
      }
    }
    
  }
  selectedSeats.textContent = selectedseats + selectedDoubleseats;
}    
});


// tăng tiền và số lượng mỗi loại vé sau khi chọn nút

const seats = document.querySelectorAll('.btn-payment');
const normalTicketQuantity = document.getElementById('normal-quantity') ;
const vipTicketQuantity = document.getElementById('vip-quantity') ;
const doubleTicketQuantity = document.getElementById('double-quantity') ;
const normalTicketMoney = document.getElementById('normal-money') ;
const vipTicketMoney = document.getElementById('vip-money') ;
const doubleTicketMoney = document.getElementById('double-money') ;
const totalTicketMoney = document.getElementById('total-money') ;
const totalTicketFee = document.getElementById('total-fee') ;
const totalTicketPayment = document.getElementById('total-payment') ;
const selectedSeats = document.getElementById('selected-seats')


let normalquantity =0
let vipquantity =0
let doublequantity =0
let normalmoney = 0
let vipmoney = 0
let doublemoney = 0
let totalmoney = 0
let totalfee = 0
let totalpayment = 0
let selectedseats = ''


seats.forEach(seat => {
seat.addEventListener('click', () => {

  if(seat.classList.contains('bg-primary')) {
    
    if(seat.classList.contains('btn-warning')){
      selectedseats=selectedseats.replace(seat.textContent ,'');
    vipmoney-=  75000 
    vipquantity-=1
    }else if(seat.classList.contains('btn-danger')){
    doublemoney-=  160000
    doublequantity-=1
    }else{
      selectedseats=selectedseats.replace(seat.textContent ,'');
    normalmoney -=  70000
    normalquantity-=1
    }
  } else {
    
    if(seat.classList.contains('btn-warning')){
      selectedseats=selectedseats+seat.textContent +' '
    vipmoney +=  75000 
    vipquantity+=1
    }else if(seat.classList.contains('btn-danger')){
    doublemoney+=  160000
    doublequantity+=1
    }else{
      selectedseats=selectedseats+seat.textContent +' '
    normalmoney+=  70000
    normalquantity+=1
    }
  }

  totalmoney=normalmoney+vipmoney+doublemoney
  totalfee= totalmoney*5/100
  totalpayment=totalmoney+totalfee
  
  normalTicketMoney.textContent=normalmoney;
  vipTicketMoney.textContent=vipmoney;
  doubleTicketMoney.textContent=doublemoney;
  normalTicketQuantity.textContent = normalquantity;
  vipTicketQuantity.textContent = vipquantity;
  doubleTicketQuantity.textContent = doublequantity;
  totalTicketMoney.textContent = totalmoney;
  totalTicketFee.textContent = totalfee;
  totalTicketPayment.textContent = totalpayment;
  selectedSeats.textContent = selectedseats+selectedDoubleseats;
  
});
});


// cập nhật tên phim

const movieName = document.querySelector('.film_name');
const spanFilmName = document.querySelector('#movie-name'); 
spanFilmName.textContent = movieName.textContent;

// cập nhâtk ngày chiếu phim khi chọn button ngày

const navLinkS = document.querySelectorAll('.nav-item .nav-link');
  navLinkS.forEach(navLink=>{
  navLink.addEventListener('click',()=>{
  const activeDay= document.querySelector('.nav-item .active');
  const movieDay = document.getElementById('movie-day');
  movieDay.textContent=activeDay.textContent;
  })

})


// cập nhật giờ chiếu phim khi chọn button giờ
const movieTime = document.getElementById('movie-time');
const chonGios = document.querySelectorAll('.time');
chonGios.forEach(chonGio => {
  chonGio.addEventListener('click', () => {  
    const activeTime = chonGio;   
    movieTime.textContent = activeTime.textContent;
  });
});



// close the tap

var close= document.getElementById("trailer")
var close2= document.getElementById("trailer2")
close.addEventListener('click',()=>{
  closetrailer.setAttribute('src',' ' );
})

close.addEventListener('click',()=>{
  closetrailer.setAttribute('src','https://www.youtube.com/embed/JfVOs4VSpmA?si=hFrLzYO7cUCiPCtw' );
})

close2.addEventListener('click',()=>{
  closetrailer.setAttribute('src',' ' );
})

close2.addEventListener('click',()=>{
  closetrailer.setAttribute('src','https://www.youtube.com/embed/JfVOs4VSpmA?si=hFrLzYO7cUCiPCtw' );
})


// 

var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')
                
feild.onfocus = function(){
  this.setAttribute('placeholder', '');
  this.style.borderColor = '#333';
  btn.style.display = 'block'
}
                
feild.onblur = function(){
  this.setAttribute('placeholder',backUp);
  this.style.borderColor = '#aaa'
}
                
clear.onclick = function(){
  btn.style.display = 'none';
  feild.value = '';
}


// tránh tự động load lại trang

document.addEventListener("DOMContentLoaded", function() {
    var commentForm = document.getElementById("commentForm");
    var commentButton = document.getElementById("commentButton");
    var clearButton = document.getElementById("clear");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var commentText = document.querySelector(".cmtbox").value;
        var rating = document.querySelector("input[name='rate']:checked").value;

        
    });

    clearButton.addEventListener("click", function(event) {
        event.preventDefault(); 
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử trên trang
    var selectedTime = null;
    var selectedSeats = [];
    var selectedPayment = null;
    var errorNotice = document.getElementById("errorNotice");

    // Bắt sự kiện khi nút "Thanh toán" được nhấn
    var paymentButton = document.querySelector(".btnAndnote button");
    paymentButton.addEventListener("click", function() {
        // Kiểm tra xem người dùng đã chọn giờ
        var timeButtons = document.querySelectorAll(".select_time");
        for (var i = 0; i < timeButtons.length; i++) {
            if (timeButtons[i].classList.contains("active")) {
                selectedTime = timeButtons[i].textContent;
                break;
            }
        }

        // Kiểm tra xem người dùng đã chọn ghế
        var selectedSeatsButtons = document.querySelectorAll(".btn-payment");
        selectedSeats = [];
        for (var i = 0; i < selectedSeatsButtons.length; i++) {
            if (selectedSeatsButtons[i].classList.contains("btn-success")) {
                selectedSeats.push(selectedSeatsButtons[i].textContent);
            }
        }

        // Kiểm tra phương thức thanh toán
        var paymentOptions = document.querySelectorAll("input[name='payment']");
        for (var i = 0; i < paymentOptions.length; i++) {
            if (paymentOptions[i].checked) {
                selectedPayment = paymentOptions[i].value;
                break;
            }
        }

        // Kiểm tra các điều kiện và hiển thị thông báo tương ứng
        if (selectedTime && selectedSeats.length > 0 && selectedPayment) {
            errorNotice.textContent = "Thanh toán thành công!";
        } else {
            errorNotice.textContent = "Vui lòng chọn giờ, ghế và phương thức thanh toán trước khi thanh toán.";
        }
    });
});




