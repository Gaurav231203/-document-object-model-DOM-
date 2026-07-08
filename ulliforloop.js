// select all li elementsand print there text using a loops

//let list= document.querySelectorAll("li");
/* list.forEach(function(val){
   console.log(val.textContent);

 });*/ 
 //ONE MORE WAY
 //for(i=0;i<list.length;i++){
//    console.log(list[i].textContent);
// }
 
    {
 let hi=document.querySelector("ul"); 
  let li=document.createElement("li")
  li.textContent="hllo"

 hi.appendChild(li);
    }//moving thi li to the last of the ul 

    {//now we have to select  first element from the list and delete it from dom
      }

      let del=document.querySelectorAll("li");
      del[3].remove();
      console.log(del);



