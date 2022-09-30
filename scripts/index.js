import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";
import { Footer } from "../components/footer.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()
document.getElementById('ft-back').innerHTML = Footer()

document.getElementById('web-logo').addEventListener('click',()=>{
	window.location.href = 'index.html'
})

let act = document.querySelectorAll('.menu li>a')
for(let i=0;i<act.length;i++){
    act[i].onclick = function(){
        let ive = document.querySelector('.menu li.active');
        if(ive) ive.classList.remove('active');
        this.parentNode.classList.add('active');
    };
}

document.querySelector('.menu>li:nth-child(1)').addEventListener('click',()=>{
    window.location.href = 'index.html'
})
document.querySelector('.menu>li:nth-child(7)').addEventListener('click',()=>{
    window.location.href = 'article.html'
})
document.querySelector('.menu>li:nth-child(6)').addEventListener('click',()=>{
    window.location.href = 'directory.html'
})


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
    // console.log(newsdata)
    // Displaynews(newsdata)
}
News()

const Desert = async ()=>{
    let res = await fetch(`https://desert-api.herokuapp.com/elements/Deserts`)
    let desdata = await res.json();
    // let newsimg=''
    for(let i=0;i<5;i++){
        let desimg  = desdata[i]['card_img-src']
        let destitle  = desdata[i]['card__title']
        let img  = document.createElement('img')
        img.src = desimg;
        
        let title = document.createElement('p')
        title.innerText = destitle;

        let blockdiv = document.createElement('div')
        blockdiv.setAttribute('id','bdiv2')
        blockdiv.append(img,title)

        document.getElementById('blocks2').append(blockdiv)
    }
    // console.log(desdata)
}
Desert()

const Veg = async ()=>{
    let res = await fetch(`https://food-api-1o1.herokuapp.com/elements/Items`)
    let desdata = await res.json();
    // let newsimg=''
    for(let i=0;i<5;i++){
        let desimg  = desdata[i]['img-responsive src']
        let destitle  = desdata[i]['ng-binding 3']
        let img  = document.createElement('img')
        img.src = desimg;
        
        let title = document.createElement('p')
        title.innerText = destitle;

        let blockdiv = document.createElement('div')
        blockdiv.setAttribute('id','bdiv3')
        blockdiv.append(img,title)

        document.getElementById('blocks3').append(blockdiv)
    }
    // console.log(desdata)
}
Veg()
// function Displaynews(data){
    
//     data.forEach((el) => {
//             console.log(el['card__img src'])
//     });
// }


document.getElementById("signup-modal").addEventListener("click",()=>{
    document.getElementById('id01').style.display='block'
})

document.getElementById('signup-redirect').addEventListener('click',()=>{
    window.location.href='signup.html'
})