import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()

let act = document.querySelectorAll('.menu li>a')
console.log(act)
for(let i=0;i<act.length;i++){
    console.log(act)
    act[i].onclick = function(){
        let ive = document.querySelector('.menu li.active');
        if(ive) ive.classList.remove('active');
        this.parentNode.classList.add('active');
    };
}