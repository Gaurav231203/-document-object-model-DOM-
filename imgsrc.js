//how willl i get image src using js
{
/*let img=document.querySelector("img");
console.log(img.getAttribute("src"));*/
}
//one meore way;
{
//console.log(img.src);
}

// what dose setAttribute() do?
document.querySelector("img").setAttribute("src" , "https://images.unsplash.com/photo-1782771116101-0320275aa1b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

{
//we just set the new attribute to the allready given attribute
}
{
// create a new image element with a placeholder source and add it at the top of the div

}
let image= document.createElement("img");
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCdPTR5mXVlGkSvBU69wpgWyUDft8jvAE3LCsbaFO-9zHxPWbYnuezfFG&s=10")

image.classList.add("placeholder");
let div= document.querySelector("div").prepend(image);