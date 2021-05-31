console.log('%c HI', 'color: firebrick')

function fetched(){
  
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(recevied){
    return recevied.json();
  })
  .then(function(json){
    
  })
}

window.addEventListener("load",fetched())
