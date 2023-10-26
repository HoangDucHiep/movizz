
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

const navLinks = document.querySelectorAll('.nav-item .nav-link');
  navLinks.forEach(navLink=>{
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
    let selectedTimeCheck = false;
    let selectedSeatsCheck = false;
    let selectedPaymentCheck = false;
    const errorNotice = document.getElementById("errorNotice");

    // Bắt sự kiện khi nút "Thanh toán" được nhấn
    const paymentButton = document.querySelector(".btnAndnote button");
    paymentButton.addEventListener("click", function() {
        
        const timeButtons = document.querySelectorAll(".select_time");
        for (var i = 0; i < timeButtons.length; i++) {
            if (timeButtons[i].classList.contains("select_timeactive")) {
              selectedTimeCheck = true;
              break;
            }
        }

        
        const selectedSeatsButtons = document.querySelectorAll(".btn-payment");
        for (var i = 0; i < selectedSeatsButtons.length; i++) {
            if (selectedSeatsButtons[i].classList.contains("bg-primary")) {
              selectedSeatsCheck = true;
              break;
            }
        }

        
        const paymentOptions = document.querySelectorAll("input[name='payment']");
        for (var i = 0; i < paymentOptions.length; i++) {
            if (paymentOptions[i].checked) {
              selectedPaymentCheck = true;
              break;
            }
        }


        if (selectedTimeCheck ===false && selectedSeatsCheck ===false && selectedPaymentCheck ===false) {
            errorNotice.textContent = "Vui lòng chọn giờ, ghế và phương thức thanh toán.";
        } else if(selectedTimeCheck === true && selectedSeatsCheck ===false && selectedPaymentCheck ===false){
            errorNotice.textContent = "Vui lòng chọn ghế và phương thức thanh toán.";
        } else if(selectedTimeCheck ===false && selectedSeatsCheck ===true && selectedPaymentCheck ===false){
          errorNotice.textContent = "Vui lòng chọn giờ và phương thức thanh toán.";
        } else if(selectedTimeCheck ===false && selectedSeatsCheck ===false && selectedPaymentCheck ===true){
          errorNotice.textContent = "Vui lòng chọn giờ và ghế.";
        } else if(selectedTimeCheck ===true && selectedSeatsCheck ===true && selectedPaymentCheck ===false){
          errorNotice.textContent = "Vui lòng chọn phương thức thanh toán.";
        } else if(selectedTimeCheck ===true && selectedSeatsCheck ===false && selectedPaymentCheck ===true){
          errorNotice.textContent = "Vui lòng chọn ghế.";
        } else if(selectedTimeCheck ===false && selectedSeatsCheck ===true && selectedPaymentCheck ===true){
          errorNotice.textContent = "Vui lòng chọn giờ.";
        } else {
          errorNotice.textContent = "";
        }
    });
});




