const slide = document.querySelectorAll(".slide");
var counter = 0;
slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

const goNext = () => {
    if (counter === 19) {
        counter = 0;
    }
    counter++;
    slideImag();
}
const goPre = () => {
    if (counter === 0) {
        counter = 19;
    }
    counter--;
    slideImag();
}

const slideImag = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}