//add a highlit class to ever even  item in a lsit
 let even =document.querySelectorAll(" ul li:nth-child(2n");

 even.forEach(function(element){
    element.classList.add("highlight");

 });