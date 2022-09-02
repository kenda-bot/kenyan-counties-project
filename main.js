window.addEventListener('DOMContentLoaded',(event) => {

let searchBtn = document.getElementById("search-btn");
let countyInput = document.getElementById("county-input");
let result =document.getElementById("result");
let title = document.getElementsByClassName("county-title")
let nextBtn=document.getElementById("Next")
let clearBtn=document.getElementById("clear")
searchBtn.addEventListener("click", () => {
  let countyName = countyInput.value;
  if(countyName !==""){
  let changedInput = countyName[0].toUpperCase() + countyName.substring(1)
  let finalURL = `https://kenda-bot.github.io/jsonapi/db.json`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((counties) => {
      let countyArray=counties.find(element=>element.name === changedInput);
      console.log(countyArray);
    
        result.innerHTML= `<h2>${countyArray.name} </h2>
        <img src="${countyArray.flag}" class="flag-img">
        <h4>Capital:</h4>
        <span>${countyArray.capital}</span> <br>
        <h4>Code:</h4>
        <span>${countyArray.code}</span> <br>
        <h4>sub_counties:</h4>
        <span>${Object.values(countyArray.sub_counties)
          .toString()
          .split(",")
          .join(", ")}</span>
        `;
  }

    )}
})
 clearBtn.addEventListener('click',()=>{
result.innerText=""
document.getElementById("county-input").value=""
document.getElementById("county-input").placeholder="Enter a county name"
 })
 
});
