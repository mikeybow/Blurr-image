const numb = document.querySelector(".loading-text");
let counter = 0;

setInterval(() => {
    if(counter === 100) {
    clearInterval();
    } else {
        counter+=1;
        numb.textContent = counter + "%";
    }
}, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
 };