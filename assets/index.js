
var upload = document.querySelector(".upload");

var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = ".jpeg,.png,.gif";

document.querySelectorAll(".input_holder").forEach((element) => {

    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })

});

upload.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (event) => {

    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");

    upload.removeAttribute("selected")

    var file = imageInput.files[0];
    var data = new FormData();
    data.append("image", file);

    fetch('	https://api.imgur.com/3/image' ,{
        method: 'POST',
        headers: {
            'Authorization': 'Client-ID 4ecc257cbb25ccc'
        },
        body: data
    })
    .then(result => result.json())
    .then(response => {
        
        var url = response.data.link;
        upload.classList.remove("error_shown")
        upload.setAttribute("selected", url);
        upload.classList.add("upload_loaded");
        upload.classList.remove("upload_loading");
        upload.querySelector(".upload_uploaded").src = url;

    })

})

document.querySelector(".go").addEventListener('click', () => {

    var empty = [];

    var params = new URLSearchParams();

    if (!upload.hasAttribute("selected")){
        empty.push(upload);
        upload.classList.add("error_shown")
    }else{
        params.append("image", upload.getAttribute("selected"));
    }

    document.querySelectorAll(".input_holder").forEach((element) => {

        var input = element.querySelector(".input");
        params.append(input.id, input.value);

        if (isEmpty(input.value)){
            empty.push(element);
            element.classList.add("error_shown");
        }

    })

    if (empty.length != 0){
        empty[0].scrollIntoView();
    }else{
        forwardToId(params);
    }

});

function isEmpty(value){

    let pattern = /^\s*$/
    return pattern.test(value);

}

function forwardToId(params){

    location.href = "/yObywatel/id?" + params

}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})