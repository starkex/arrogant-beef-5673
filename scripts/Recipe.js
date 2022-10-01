

const myData = async()=>
{
   try
   {
     let data = await fetch (`https://food-api-1o1.herokuapp.com/elements/Items`);
     
     let actual_data =await data.json();
   //   console.log(actual_data);
     appendData(actual_data);
   } 
   catch (error)
   {
      console.log(error);
   }
};

myData();

// href = " https://www.kindmeal.my/photos/member/28/28122-s.jpg "
// href =  " https://www.kindmeal.my/photos/member/14/14169-s.jpg "

const appendData = (Data)=>
{
   let main = document.getElementById("main");
   let slide_1 = document.getElementById("slide-1");
   let   container = document.getElementsByClassName("container");
let row = document.getElementsByClassName("row");
row.innerHTML=null;
  Data.forEach((ele)=>
  {
      //
      // let row = document.getElementsByClassName("row");
      let singleBloc = document.createElement("div");
      singleBloc.setAttribute("class","singleBlock");
      let upperDiv = document.createElement("div");
      let upperimg = document.createElement("img");
      upperimg.src= "https://www.kindmeal.my/photos/member/28/28122-s.jpg"
      let upperSpan = document.createElement("span");
      upperSpan.innerText="KindMealChef";
      let butTon = document.createElement("button");
      butTon.innerText=ele["btn 2"];
      upperDiv.append(upperimg,upperSpan,butTon);
      let middleDiv = document.createElement("div");
      let middleImg = document.createElement("img");
      middleImg.src= ele["img-responsive src"];
      let p_tag = document.createElement("p");
      p_tag.innerText=ele["ng-binding 3"];
      middleDiv.append(middleImg,p_tag);
      let bottomDiv = document.createElement("div");
      let bottom_img_1 = document.createElement("img");
      bottom_img_1.src= "https://www.kindmeal.my/images/icon_time_small.png";
      let bottom_span_1 = document.createElement("span");
      bottom_span_1.innerText="45 Mins";
      let bottom_img_2 = document.createElement("img");
      bottom_img_2.src= "https://www.kindmeal.my/images/icon_heart_small.png";
      let bottom_span_2 = document.createElement("span");
      bottom_span_2.innerText="45 Mins";
      let bottom_img_3 = document.createElement("img");
      bottom_img_3.src= "https://www.kindmeal.my/images/icon_heart_small.png";
      let bottom_span_3 = document.createElement("span");
      bottom_span_3.innerText="45 Mins";
      bottomDiv.append(bottom_img_1,bottom_span_1,bottom_img_2,bottom_span_2,bottom_img_3,bottom_span_3);
      singleBloc.append(upperDiv,middleDiv,bottomDiv);
      row.append(singleBloc);
      container.append(row);
      slide_1.append(container);
      main.append(slide_1);
   //   console.log(ele)
   //   console.log(ele["img-responsive src"])--Img Url
   //   console.log(ele["btn 2"]) -->button
   //   console.log(ele["ng-binding 3"])-->Name
  });
}


// import { NavBar } from "../components/navbar";
// import {NavMenu} from "../components/navmenu";
// import { Footer } from "../components/footer";



// document.getElementById("navbar").innerHTML = NavBar();
// document.getElementById("navmenu").innerHTML = NavMenu();
// document.getElementById("footer").innerHTML = Footer();