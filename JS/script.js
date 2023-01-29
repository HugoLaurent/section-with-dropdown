function changeImage() {
    document.querySelector(".main-img").setAttribute("src", "./images/image-hero-mobile.png");
};

if (window.matchMedia("(max-width: 999px)").matches) {
    changeImage();
}