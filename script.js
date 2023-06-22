function sliderChange(elem) {
  var images = document.querySelector('.images');
  images.style.transform = 'translateX(-' + (elem.value * 33.33) + '%)';
}

var slider = document.querySelector('.slider input[type="range"]');

setInterval(function() {
  if (slider.value == slider.max) {
    slider.value = 0;
  } else {
    slider.value++;
  }
  sliderChange(slider);
}, 3000);


const form = document.getElementById('phone-form');
const notification = document.getElementById('notification');

function push() {
  console.log("Успешно записан номер")  
};




