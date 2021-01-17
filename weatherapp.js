//After the page load we can use this to get the location
window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let loc = document.querySelector('.location-name');
    let des = document.querySelector('.temp-description');
    let icnn = document.getElementById('temp-icon');
    //let iicons;


//Gets current location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;
           console.log(position);
//Weather data accesspoint & proxy 
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=989f49a954c6f2ca5ba077928ca6f145`;

            fetch(api)
                .then(response => {
                return response.json();
            })
            .then(data => {
            console.log(data);

            const {name} = data;  
            const {temp} = data.main;
            const {id,main} = data.weather[0];
          

    
            // set DOM elements from the API
            temperatureDegree.textContent = Math.round (temp-273);
            loc.textContent = name;
            des.textContent = main;
            

       //Icon settings
        if (id < 250) {
            icnn.src = './iicons/Storm.png'
        }
        else if (id < 350) {
            icnn.src = './iicons/drizzle.png'
        }
        else if (id < 550) {
            icnn.src = './iicons/Rain.png'
        }
        else if (id < 650) {
            icnn.src = './iicons/Snow.png'
        }
        else if (id < 800) {
            icnn.src = './iicons/atmos.png'
        }
        else if (id === 800) {
            icnn.src = './iicons/ClearSkys.png'
        }
        else if (id > 800) {
            icnn.src = './iicons/cloudy.png'
        }
        console.log(data);
               
            })
        })     
    }
    
})