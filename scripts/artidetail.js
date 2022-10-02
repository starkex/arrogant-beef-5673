import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";
import { Footer } from "../components/footer.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()
document.getElementById('ft-back').innerHTML = Footer()

document.getElementById('web-logo').addEventListener('click',()=>{
	window.location.href = 'index.html'
})

let data = JSON.parse(localStorage.getItem("article"));
console.log(data);

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

let act = document.querySelectorAll('.menu li>a')
// console.log(act)
for(let i=0;i<act.length;i++){
    act[i].onclick = function(){
        let ive = document.querySelector('.menu li.active');
        if(ive) ive.classList.remove('active');
        this.parentNode.classList.add('active');
    };
}
 let append = () => {

    let details = document.getElementById('details');
    details.innerHTML = null;

    let div = document.createElement('div')
    div.id = 'box'

    let img = document.createElement('img');
    img.src = data.urlToImage;
    img.id='poster';

    let author = document.createElement('h2');
    author.textContent = `Author:- ${data.author}`;
    author.id='author';

    let desc = document.createElement('p');
    desc.textContent = `Description:- ${data.description}`;
    desc.id='desc'

    let btn = document.createElement('button');
    btn.textContent = '<< Back To Articles'
    btn.id = 'articlebtn';
    btn.addEventListener("click", () => {
        window.location.href = 'article.html'
    })

    
    div.append(img,author,desc,btn)
    details.append(div);
}
append()

