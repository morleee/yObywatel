
var time = document.querySelector(".time_text");
var params = new URLSearchParams(window.location.search);

var firstname = params.get("firstname");
var surname = params.get("surname");
var image = params.get("image");

function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  
launchFullScreen(document.documentElement);

document.querySelector(".surname").innerHTML = surname.toUpperCase();
document.querySelector(".firstname").innerHTML = firstname.toUpperCase();
document.querySelector(".id_own_image").style.backgroundImage = "url('" + image + "')";

var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
var date = new Date();
document.querySelector(".bottom_update_value").innerHTML = date.toLocaleDateString("pl-PL", options);

setClock();
function setClock(){
    date = new Date();
    time.innerHTML = "Czas: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.toLocaleDateString("pl-PL", options);    
    delay(1000).then(() => {
        setClock();
    })
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}