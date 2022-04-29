// document.getElementById('test').addEventListener('click', clickButton);
// function clickButton() {
    
    //     getData();
    // }

// load the weather infomation 
getWeather();


async function getWeather() {
    try{
        const locationresponse = await fetch('https://geolocation-db.com/json/1');
        showSpinner();
        if (locationresponse.ok){
            const locationdata = await locationresponse.json();  
            // get the location  from geocation
            const respose = await fetch('https://goweather.herokuapp.com/weather/' + locationdata.city);
            if (respose.ok){
            const weatherData = await respose.json();
            // get the weather information from weather api
            updateWeather(locationdata.city, weatherData.description, weatherData.temperature)
            return weatherData;
            } else {
                throw new Error(respose.statusText);
            }
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error.message);
    }

}

function updateWeather(city, weather, temperature) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    tem = Number(temperature.match(/\d/g).join(''));
    var feeling = "Emmmmmmmmmmmmmmmmm~";
    if (tem && tem > 28){
        feeling = "HOT~!";
    } else if (tem && tem < 16) {
        feeling = "COLD~!";
    } else if (tem) {
        feeling = "not bad.";
    } else {
        feeling = "Oh no, I cant read it."
    }
    var typed = new Typed('.weather', {
        //wait then type
        strings:[
            `Hello. I'm Big Rock...`,
            `Today is ${date}`,
            `${city} is ${weather} today.`,
            `Temperature is ${temperature}`,
            `Feels ${feeling}`,
            `Anything i can help you `,
        ],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
}

export {getWeather} 
