import { NavBar } from "../components/navbar.js";
import NavMenu from "../components/navmenu.js";
import { Footer } from "../components/footer.js";

document.getElementById('navbar').innerHTML = NavBar()
document.getElementById('nav-menu').innerHTML = NavMenu()
document.getElementById('ft-back').innerHTML = Footer()

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

document.querySelector('.menu>li:nth-child(5)').addEventListener('click',()=>{
    window.location.href = 'Recipe.html'
})
document.querySelector('.menu>li:nth-child(8)').addEventListener('click',()=>{
    window.location.href = 'help.html'
})