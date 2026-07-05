//1. element create kro
// element ko append ya prepend kro mtlb aage ya peeche kro jaha bhi chye 
// or removechild mtlb elemnt ya tag ko hatana 

/*let h2=document.createElement("h2");
//console.dir(h2);
h2.textContent="dhyan de";
//document.querySelector("body").prepend(h2);
document.body.prepend(h2)*/
/*let remove= document.querySelector("h1");
remove.remove();*/
let h1= document.createElement("h1");
h1.textContent="bahr wal hu is liye koi pyyar ni krta"
let div=document.querySelector("div")//.append(h1);
div.append(h1);
div.style.color="purple";
