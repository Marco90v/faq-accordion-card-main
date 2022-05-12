const ul = document.querySelector("ul");

function handlerClick({target}){
    if(target.tagName === "H2"){
        target.classList.toggle("active");
    }else if(target.tagName === "IMG"){
        target.parentElement.classList.toggle("active");
    }
}

ul.addEventListener("click",handlerClick);