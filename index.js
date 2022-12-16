//slideshow image
var image = document.getElementById("movie");

var img_array = [
    "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png",
    "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/rahul-gandhi.png",
    "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/debbie-barrafato.png",
    "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/paul-kapsner.png"
];
var index = 0;
function slide() {
    image.setAttribute("src", img_array[index]);
    index++;

    if (index >= img_array.length) {
        index = 0;
    }
}
setInterval("slide()", 2000);

