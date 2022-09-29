import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()

let act = document.querySelectorAll('.menu li>a')
// console.log(act)
for(let i=0;i<act.length;i++){
    act[i].onclick = function(){
        let ive = document.querySelector('.menu li.active');
        if(ive) ive.classList.remove('active');
        this.parentNode.classList.add('active');
    };
}

const News = async ()=>{
    let res = await fetch(`https://snacks-api1o1.herokuapp.com/elements/Snacks`)
    let newsdata = await res.json();
    // let newsimg=''
    for(let i=0;i<5;i++){
        let newsimg  = newsdata[i]['card__img src']
        let newstitle  = newsdata[i]['card__title-text']
        let img  = document.createElement('img')
        img.src = newsimg;
        
        let title = document.createElement('p')
        title.innerText = newstitle;

        let blockdiv = document.createElement('div')
        blockdiv.setAttribute('id','bdiv')
        blockdiv.append(img,title)

        document.getElementById('blocks').append(blockdiv)
    }
    console.log(newsdata)
    // Displaynews(newsdata)
}
News()

function Displaynews(data){
    
    data.forEach((el) => {
            console.log(el['card__img src'])
    });
}
