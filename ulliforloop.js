// select all li elementsand print there text using a loops

let list= document.querySelectorAll("li");
 list.forEach(function(val){
   console.log(val.textContent);

 });
