
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var image = document.querySelector(".image");

    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    location.href = "/yObywatel/id?" + params;
});