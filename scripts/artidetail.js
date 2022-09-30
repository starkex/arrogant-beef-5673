let data = JSON.parse(localStorage.getItem("article"));
console.log(data);

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

