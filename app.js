
window.addEventListener('load',()=>{

// longitude
 let long;
// the latidude
 let lat
;

 let temperatureDegree = document.querySelector(".temperature-degree");

 let temperatureDescri = document.querySelector(".temperatureD");
 let locationTimezone = document.querySelector(".location-timezone");

 let temperatureSection = document.querySelector(".temperature");

 const temperatureSpan = document.querySelector('.temperature span')

 if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition
     (position =>{
         long =position.coords.longitude;
         lat =position.coords.latitude;
         

         const proxy="https://cors-anywhere.herokuapp.com/"
         const api = `${proxy}https://api.darksky.net/forecast/af501106f0fd443428420833e42cd47f/${lat},${long}`
         fetch(api)
         .then(response =>{
             return response.json();
         })
         .then(data =>{
             const{temperature,summary,icon} = data.currently;
             // Set DOM Elements from the api
              temperatureDegree.textContent=temperature;
             
              temperatureDescri.textContent=summary;
           
              locationTimezone.textContent=data.timezone;

               // set Icons

               setIcons(icon,document.querySelector('.icon'));


               //change temperature to cel
               
               temperatureSection.addEventListener('click',() =>{
                   if(temperatureSpan.textContent ==="F"){
                       temperatureSpan.textContent = "C";
                   }
                   else{
                       temperatureSpan.textContent="F"
                   }
               })
           
         })
     });
    }
    else{
        alert("allow the geolocation to be able to track")
    }
// This set the icons
function setIcons(icon,iconID){
    const skycons = new Skycons({color:'white'});
    const currentIcon =icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
 }



});