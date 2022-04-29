getFoodData();

async function getFoodData() {
    try {
        const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (mealResponse.ok) {
            const mealData = await mealResponse.json();
            displayMeal(mealData);
        } else {
            throw new Error (mealData.statusText);
        }
    } catch (error) {
        console.log(error.message);
    }
}


function displayMeal(data) {

    const meal = data.meals[0];
    const mealDiv = document.getElementById("meal");

    const mealName = meal.strMeal;
    const heading = document.createElement("h1");
    heading.innerHTML = mealName;
    mealDiv.appendChild(heading);

    const mealImg = document.createElement("img");
    mealImg.src = meal.strMealThumb;
    mealDiv.appendChild(mealImg);
    document.body.style.backgroundImage = "url('" + meal.strMealThumb + "')";

    const mealIngredients = document.createElement("ul");
    document.getElementById("meal").appendChild(mealIngredients);

    const getIngredients = Object.keys(meal)
    .filter(function (ingredient) {
    return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
    if (meal[ingredient] != null) {
    ingredients[ingredient] = meal[ingredient];
    }
    return ingredients;
    }, {});

    for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    mealIngredients.appendChild(listItem);
    }

}

