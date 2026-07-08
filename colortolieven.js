//add a highlit class to ever even  item in a lsit
 let even =document.querySelectorAll(" ul li:nth-child(even)");

 even.forEach(function(element){
    element.classList.add("highlight");

 });

 let p= document.querySelectorAll("p");
  
 p.forEach(function(elem){
    elem.style.fontSize="20px";
 })


