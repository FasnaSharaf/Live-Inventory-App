
const findMyLocation = () =>{
    const status = document.querySelector('.status');
 
 
   const success = (position) =>{
     console.log(position)
   }
 
   const error = () =>{
     console.log("unable to get location")
   }
 
   navigator.geolocation.getCurrentPosition(success, error);
 }
 
 document.querySelector('.btn').addEventListener('click', findMyLocation);