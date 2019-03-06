
window.addEventListener('load',()=>{

// longitude
 let long;
// the latidude
 let lat

 if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition
     (position =>{
         long =position.coords.longitude;
         lat =position.coords.latitude;
     })

 }
  else{
      h1.textContent="Hey, dis app is not working: you have to let the app know your location"
  }

})