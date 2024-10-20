

var time = document.querySelector(".time_text");
var params = new URLSearchParams(window.location.search);

document.addEventListener('click', () => {
  document.querySelector("body").requestFullscreen();
})

var firstname = params.get("firstname");
var surname = params.get("surname");
var image = params.get("image");

function hideAddressBar(){
  if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
    document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
  setTimeout(window.scrollTo(1,1),0);
}
window.addEventListener("load",function(){hideAddressBar();});
window.addEventListener("orientationchange",function(){hideAddressBar();});

let webManifest = {
  "name": "",
  "short_name": "",
  "theme_color": "#f5f6fb",
  "background_color": "#f5f6fb",
  "display": "standalone"
};

window.addEventListener(
    "touchmove",
    function (event) {
      if (event.scale !== 1) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    { passive: false }
  );

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);


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