

var time = document.querySelector(".time_text");
var params = new URLSearchParams(window.location.search);

let webManifest = {
  "name": "",
  "short_name": "",
  "theme_color": "#f5f6fb",
  "background_color": "#f5f6fb",
  "display": "standalone"
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);

var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
var date = new Date();

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

var unfold = document.querySelector(".info_holder");
unfold.addEventListener('click', () => {

  if (unfold.classList.contains("unfolded")){
    unfold.classList.remove("unfolded");
  }else{
    unfold.classList.add("unfolded");
  }

})

document.querySelector(".id_own_image").style.backgroundImage = `url(${params.get("image")})`;

var birthday = params.get("birthday");
var sex = params.get("sex");

setData("name", params.get("name").toUpperCase());
setData("surname", params.get("surname").toUpperCase());
setData("nationality", params.get("nationality").toUpperCase());
setData("birthday", birthday);
setData("familyName", params.get("familyName"));
setData("sex", sex);
setData("fathersFamilyName", params.get("fathersFamilyName"));
setData("mothersFamilyName", params.get("mothersFamilyName"));
setData("birthPlace", params.get("birthPlace"));
setData("countryOfBirth", params.get("countryOfBirth"));
setData("adress", "ul. " + params.get("adress1") + "<br>" + params.get("adress2") + " " + params.get("city"));
setData("checkInDate", params.get("checkInDate"));

var birthdaySplit = birthday.split(".");
var day = birthdaySplit[0];
var month = birthdaySplit[1];
var year = birthdaySplit[2];

if (parseInt(year) >= 2000){
  month = 20 + parseInt(month);
}

var later;

if (sex.toLowerCase() === "mężczyzna"){
  later = "0295"
}else{
  later = "0382"
}

var pesel = year.substring(2) + month + day + later + "7";
setData("pesel", pesel)

function setData(id, value){

  document.getElementById(id).innerHTML = value;

}

