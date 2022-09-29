let data = JSON.parse(localStorage.getItem("article"));
console.log(data);

 let append = () => {

    let details = document.getElementById('details');
    details.innerHTML = null;

    let div = document.createElement('div')
    div.id = 'box'

    let box1 = document.createElement('div');
    box1.id = 'box1';

    let box2 = document.createElement('div');
    box2.id = 'box2'

    let img = document.createElement('img');
    img.src = data.urlToImage;
    img.id='poster';

    let author = document.createElement('h1');
    author.textContent = `Author:- ${data.author}`;
    author.id='author';

    let desc = document.createElement('h1');
    desc.textContent = `Description:- ${data.description}`;
    desc.id='desc'

    let url = document.createElement('h2');
    url.textContent = data.title;
    url.id='title';

    let content = document.createElement('h2');
    content.textContent = data.content;
    content.id='content';
    
    box2.append(author,desc,url,content)
    box1.append(img,)
    div.append(box1,box2)
    details.append(div);
}
append()

