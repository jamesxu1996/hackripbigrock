import {getWeather} from './weather.js'

function getCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(cocktailData => {
      console.log(cocktailData); // drinks array 
      getWeather().then(weatherData => {
        // const { temperature, description } = weatherData;
        displayCocktail(weatherData, cocktailData)
      });
    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }

  getCocktail()
  
  function getDateAndTime() {
    const d = new Date();
    let index = d.getDay();
    let daysOfTheWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    let day = (daysOfTheWeek[index]);
    document.getElementById('today').innerHTML = `
    <div>It's ${day}!</div>`
  }

  function displayCocktail(weatherData, cocktailData) {
    const cocktail = cocktailData.drinks[0];
      const cocktailDiv = document.getElementById("cocktail");
      const cocktailName = cocktail.strDrink;
      const heading = document.createElement("h1");
      heading.innerHTML = cocktailName;
      cocktailDiv.appendChild(heading);
      const cocktailImg = document.createElement("img");
      cocktailImg.src = cocktail.strDrinkThumb;
      cocktailDiv.appendChild(cocktailImg);
     document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
    
      const cocktailIngredients = document.createElement("ul");
      cocktailDiv.appendChild(cocktailIngredients);  
    
      const getIngredients = Object.keys(cocktail)
        .filter(function (ingredient) {
          return ingredient.indexOf("strIngredient") == 0;
      })
      .reduce(function (ingredients, ingredient) {
        if (cocktail[ingredient] != null) {
          ingredients[ingredient] = cocktail[ingredient];
        }
        return ingredients;
      }, {});

    for (let key in getIngredients) {
      let value = getIngredients[key];
      listItem = document.createElement("li");
      listItem.innerHTML = value;
      cocktailIngredients.appendChild(listItem);
  }
  }
  
  // getDateAndTime()



