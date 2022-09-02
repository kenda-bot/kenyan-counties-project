let searchBtn = document.getElementById("search-btn");
let countyInput = document.getElementById("county-input");
let result =document.getElementById("result");
let title = document.getElementsByClassName("county-title")
searchBtn.addEventListener("click", () => {
  let countyName = countyInput.value;
  let finalURL = `http://localhost:3000/counties`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((counties) => {
      let countyArray=counties.find(element=>element.name == countyInput.value)
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
    })
        .catch(() => {
          if (countyName.length === 0) {
            result.innerHTML = `<h3>The input field cannot be empty!</h3>`;
          } else {
            result.innerHTML = `<h3>Please enter a valid county name.</h3>`;
          }
        });
    });