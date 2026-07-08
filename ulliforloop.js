// select all li elementsand print there text using a loops

//let list= document.querySelectorAll("li");
/* list.forEach(function(val){
   console.log(val.textContent);

 });*/ 
 //ONE MORE WAY
 //for(i=0;i<list.length;i++){
//    console.log(list[i].textContent);
// }
 //moving thi li to the last of the ul 
    
 let hi=document.querySelector("ul"); 
  let li=document.createElement("li")
  li.textContent="hllo"

 hi.appendChild(li);



