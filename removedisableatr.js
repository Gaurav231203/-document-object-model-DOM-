//remove disableatribute from a  button
let btns= document.querySelectorAll(".buy-now");
btns.forEach(function(btn){
    btn.removeAttribute("disabled");
});// is for all buttons to remove disabled 
