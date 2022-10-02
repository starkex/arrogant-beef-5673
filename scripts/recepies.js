
// import { navbar, navbar2 } from "../component/navbar.js";
import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";
import { Footer } from "../components/footer.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()
document.getElementById('ft-back').innerHTML = Footer()


// document.getElementById("navbar").innerHTML = navbar();
// document.getElementById("navbar2").innerHTML = navbar2();

// import { footer, bigfooter } from "../component/footer.js";
// document.getElementById("footer").innerHTML = footer();
// document.getElementById("bigfooter").innerHTML = bigfooter();

document.querySelector('.menu>li:nth-child(1)').addEventListener('click',()=>{
    window.location.href = 'index.html'
})
document.querySelector('.menu>li:nth-child(2)').addEventListener('click',()=>{
    window.location.href = 'mealdeals.html'
})
document.querySelector('.menu>li:nth-child(3)').addEventListener('click',()=>{
    window.location.href = 'kindmoments.html'
})
document.querySelector('.menu>li:nth-child(5)').addEventListener('click',()=>{
    window.location.href = 'recepies.html'
})
document.querySelector('.menu>li:nth-child(7)').addEventListener('click',()=>{
    window.location.href = 'article.html'
})
document.querySelector('.menu>li:nth-child(6)').addEventListener('click',()=>{
    window.location.href = 'directory.html'
})
=======
import { navbar, navbar2 } from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar2").innerHTML = navbar2();

import { footer, bigfooter } from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();
document.getElementById("bigfooter").innerHTML = bigfooter();



let usrName = JSON.parse(localStorage.getItem("username"));
if (usrName !== null) {
	document.getElementById("left").innerHTML = null;
	let box = document.createElement("div");
    box.style="display:flex;justify-content:space-between;align-items:center;color:gray"

	let capImg = document.createElement("img");
	capImg.src = "https://www.kindmeal.my/images/icon_notice.png";
	capImg.style = "height:30px";

	let desc = document.createElement("p");
	desc.innerText = "Hi, " + usrName + "!";
    desc.style="padding-top: 15px;font-size:18px"

	box.append(capImg, desc);
	document.getElementById("left").append(box);
}