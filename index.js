
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var image = document.querySelector(".image");

    
    var borndate = document.querySelector(".borndate");
    var pesel = document.querySelector(".pesel");

    var params = new URLSearchParams();

    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    
    params.set("borndate", borndate.value);
    params.set("pesel", pesel.value);

    location.href = "/yObywatel/id?" + params;
});