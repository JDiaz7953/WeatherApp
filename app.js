const action = document.querySelector('button')
const request = document.querySelector('input')
const locationText = document.querySelector('.Weather-Text')
const locationTemp = document.querySelector('.Weather-Temp')
const locationHumidity = document.querySelector('.Weather-humidity')
const locationWind = document.querySelector('.Weather-wind')


function kelvinToFahrenheit(kelvin) {
    if (kelvin < 0) {
        throw new Error("Kelvin cannot be negative.");
    }
    return Math.ceil(((kelvin - 273.15) * 9/5) + 32);
}


let findLocation = async (location) => {
    //this function is going to be called inside the event-listener 
    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=39ccb4d9b8188199743c4c87a9a3e3c1`)
    data = await response.json()
    return data


    //TODO
    /*
    This function is going to be the function that grabs the location the is in the input,
    then update the webpage with the location and forcast of the location that was selected
    */
}

action.addEventListener('click', () => {
    findLocation(request.value).then((data) => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('img').src = iconUrl;
        locationText.innerText = data.name
        locationTemp.innerText = `${kelvinToFahrenheit(data.main.temp)} F`
        console.log(data);
        locationHumidity.innerText = `Humidity: ${data.main.humidity}%`
        //locationWind.innerText = data.wind 
    }).catch(err =>{
        locationText.innerText = "Please Enter a valid Location"
        locationTemp.innerText = ""
        locationHumidity.innerText = ""
    })
})