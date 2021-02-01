
const para = document.querySelector('.para');
let content = "";
const xhr = new XMLHttpRequest() ;
const apiKey = "7c361038835041e2a81616fb35e029a9";
// const category = "science";
function data(category)
{
xhr.open('GET',`//newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`,true) ;

xhr.onprogress = function ()
{
  console.log('In process');
}

xhr.onload = function ()
{
  if(this.status === 200)
  {
    let json = JSON.parse(this.responseText);
    let articles = json.articles ;
    // console.log(articles);
    articles.forEach((element,index)=>
      {
        if (element.content == null)
        {
          content += `<div class='news'>
                     <div class="newsImgContainer">
                     <img src="${element.urlToImage}" class='newsImg'>
                     </div>
                     <div class="contentContainer">
                     <h2 class='newsTitle'>${element.title}</h2>
                     <p class='newsContent'>${element.description}</p>
                     <button class='moreNews'><a href="${element.url}" target="_blank">Read More</a></button>
                     </div>
                     </div>
                    ` ;
        }
        else if(element.urlToImage == null)
        {
          console.log("true");
          content += `<div class='news'>
          <div class="newsImgContainer">
          <img src="./images/img1.jpg" class='newsImg'>
          </div>
          <div class="contentContainer">
          <h2 class='newsTitle'>${element.title}</h2>
          <p class='newsContent'>${element.content}</p>
          <button class='moreNews'><a href="${element.url}" target="_blank">Read More</a></button>
          </div>
          </div>
         ` ;
        }
        else if(element.urlToImage == null && element.content == null && element.description == null)
        {
          console.log('true');
          content += `<div class='news'>
                     <div class="newsImgContainer">
                     <img src="./images/img2.jpg" class='newsImg'>
                     </div>
                     <div class="contentContainer">
                     <h2 class='newsTitle'>${element.title}</h2>
                     <p class='newsContent'>The content are missing</p>
                     <button class='moreNews'><a href="${element.url}" target="_blank">Read More</a></button>
                     </div>
                     </div>
                    ` ;

        }
        else
        {
         content += `<div class='news'>
                     <div class="newsImgContainer">
                     <img src="${element.urlToImage}" class='newsImg'>
                     </div>
                     <div class="contentContainer">
                     <h2 class='newsTitle'>${element.title}</h2>
                     <p class='newsContent'>${element.content}</p>
                     <button class='moreNews'><a href="${element.url}" target="_blank">Read More</a></button>
                     </div>
                     </div>
                    ` ;
            }
          });
    para.innerHTML = content;
    content = "";
    // console.log(json.articles);
  }
  else
  {
    console.log("Some error occured");
  }
}
xhr.send();
}
data('technology');

const cata = document.querySelectorAll('.cata');

cata.forEach(function(element)
{
     element.addEventListener("click",function ()
     {
      //  console.log(element.value);
      data(element.value);
     })


});

const link = document.querySelector('.links');
const bar  = document.querySelector('.bars');
const closeside = document.querySelector('.fa-times');

bar.addEventListener("click",function ()
{
   link.classList.remove('toggle');
});
closeside.addEventListener("click",function ()
{
   link.classList.add('toggle');
});

const pageScr = document.querySelector('.pageScroll');

pageScr.addEventListener("click",function ()
{
  window.scroll({
    top: 660,
    left:0,
    behavior: 'smooth'
  });

});

const pageup = document.querySelector('.downtotop');
window.onscroll = function() {
  console.log(document.body.scrollTop);
  if (document.body.scrollTop == 660 || document.body.scrollTop > 660)
  {
    pageup.classList.remove('displayProp');
  }
  else
  {
    pageup.classList.add('displayProp');
  }
};

pageup.addEventListener("click",function(){
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  })
});








  
