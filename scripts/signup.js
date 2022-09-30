import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()


document.getElementById('web-logo').addEventListener('click',()=>{
	window.location.href = 'index.html'
})
let act = document.querySelectorAll('.menu li>a')
// console.log(act)
for(let i=0;i<act.length;i++){
    act[i].onclick = function(){
        let ive = document.querySelector('.menu li.active');
        if(ive) ive.classList.remove('active');
        this.parentNode.classList.add('active');
    };
}
document.querySelector('.menu>li:nth-child(7)').addEventListener('click',()=>{
    window.location.href = 'article.html'
})
document.querySelector('.menu>li:nth-child(1)').addEventListener('click',()=>{
    window.location.href = 'index.html'
})
document.querySelector('.menu>li:nth-child(6)').addEventListener('click',()=>{
    window.location.href = 'directory.html'
})
document.getElementById("signUpButton").addEventListener("click", () => {
	let details = JSON.parse(localStorage.getItem("UserDetails")) || [];

	function User(Name, Email, Pass) {
		this.UserName = Name;
		this.UserEmail = Email;
		this.UserPass = Pass;
	}

	let UserfName = document.getElementById("firstName").value;
	let Useremail = document.getElementById("SignUpemail").value;
	let Userpass = document.getElementById("SignUppass").value;

	let obj = new User(UserfName, Useremail, Userpass);

	details.push(obj);

	localStorage.setItem("UserDetails", JSON.stringify(details));

	alert(`Hello ${UserfName}, Signup successful!`);

	// window.location.href = "index.html";
});