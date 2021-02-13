var img = document.createElement("img");
var index = 0
var button = document.getElementsByTagName("button");
for (var i = 0; i < button.length; i++) {
    button[i].onclick = changePhoto;
}
showPhoto(index);
function showPhoto(index) {
    img.src = photo[index];
    document.getElementsByClassName("img")[0].append(img);

}

function changePhoto(event) {
    var a = +event.target.id;
    index += a;
    if (index >= photo.length) {
        index = 0;
    } else if (index < 0) {
        index = photo.length - 1;
    }
    showPhoto(index)
}
//window.onload = upPhoto;

