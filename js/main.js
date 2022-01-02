const links = document.querySelectorAll(".list");
const toggle = document.querySelector(".toggle");
const navigation =document.querySelector(".navigation");

links.forEach(link=> link.addEventListener("click", addActive));

function addActive(){
   links.forEach(link=> link.classList.remove("active"));
   this.classList.add("active");
}

toggle.onclick = ()=>{
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
}
