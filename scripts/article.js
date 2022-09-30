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
// console.log(act)
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
document.querySelector('.menu>li:nth-child(2)').addEventListener('click',()=>{
    window.location.href = 'mealdeals.html'
})
document.querySelector('.menu>li:nth-child(3)').addEventListener('click',()=>{
    window.location.href = 'kindmoments.html'
})
document.querySelector('.menu>li:nth-child(7)').addEventListener('click',()=>{
    window.location.href = 'article.html'
})
document.querySelector('.menu>li:nth-child(6)').addEventListener('click',()=>{
    window.location.href = 'directory.html'
})
let fnews = async () => {

    let res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
    let data = await res.json();
    console.log("data:", data.articles)
    appendedData(data.articles)
}
let data;
// fnews()
//   api link :- 
//  https:newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=8b0c0c94b64d45cea6030a5bcdeb5322
//  news api key :- 8b0c0c94b64d45cea6030a5bcdeb5322


let currentpage;
let pages;
let perpage;

let appendedData = (data) => {
    let pagination = document.getElementById("pagination");
    currentpage = 1;
    perpage = 10;
    pages = Math.ceil(data.length / perpage);
    console.log(data.length)


    let container = document.getElementById('container');
    container.innerHtml = null;
    data.forEach(({ description, urlToImage, title }, index) => {
        let box = document.createElement('div');
        box.id = 'box';

        let box1 = document.createElement('div');
        box1.id = 'box1';

        let box2 = document.createElement('div');
        box2.id = 'box2'

        let img = document.createElement('img');
        img.src = urlToImage;
        img.id = 'poster';


        let name = document.createElement('h2');
        name.innerHTML = title;
        name.id = 'title';

        let desc = document.createElement('p');
        desc.innerHTML = description;
        desc.id = 'desc';

        let btn = document.createElement('button');
        btn.textContent = "View Article"
        btn.id = 'view'
        btn.addEventListener("click", () => {
            localStorage.setItem('article', JSON.stringify(data[index]))
            window.location.href = 'artidetail.html'
        })



        box2.append(name, desc, btn)
        box1.append(img)
        box.append(box1, box2)
        container.append(box)
    })

    function renderpagination(pages) {
        for (let i = 1; i <= pages; i++) {
            let btn = document.createElement("button");
            btn.textContent = i;
            btn.addEventListener("click", function () {
                currentpage = i;

                paginatedTable(data.articles, currentpage, perpage);
            });
            pagination.append(btn);
        }
    }
    renderpagination(pages);
}
fnews()


// function paginatedTable(data, page, onepage) {
//     let start = onepage * (page - 1);
//     let end = onepage * page;
//     let splited = data.slice(start, end);
//     appendedData(splited)
// }

// paginatedTable(data, currentpage, perpage);
