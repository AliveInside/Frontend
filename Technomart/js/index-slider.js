const slider = document.querySelector(".slider");
const slider_button_first = slider.querySelector(".first-button");
const slider_button_second = slider.querySelector(".second-button");
const slider_first = slider.querySelector(".slider-first");
const slider_second = slider.querySelector(".slider-second");
const slider_button_left = slider.querySelector(".slider-buttons-side-left");
const slider_button_right = slider.querySelector(".slider-buttons-side-right");

slider_button_first.addEventListener('click', function() {
  if (!slider_button_first.classList.contains("slider-button-current")){
    slider_button_second.classList.remove("slider-button-current");
    slider_button_first.classList.add("slider-button-current");
    if (slider_first.classList.contains("visually-hidden")) {
      slider_first.classList.remove("visually-hidden");
      slider_second.classList.add("visually-hidden");
    } else {
      slider_second.classList.remove("visually-hidden");
      slider_first.classList.add("visually-hidden");
    }
  }
});

slider_button_second.addEventListener('click', function() {
if (!slider_button_second.classList.contains("slider-button-current")) {
  slider_button_first.classList.remove("slider-button-current");
  slider_button_second.classList.add("slider-button-current");
  if (slider_first.classList.contains("visually-hidden")) {
    slider_first.classList.remove("visually-hidden");
    slider_second.classList.add("visually-hidden");
  } else {
    slider_second.classList.remove("visually-hidden");
    slider_first.classList.add("visually-hidden");
  }
}
});

slider_button_left.addEventListener('click', function() {
  if(slider_first.classList.contains("visually-hidden")){
    slider_first.classList.remove("visually-hidden");
    slider_second.classList.add("visually-hidden");
    slider_button_second.classList.remove("slider-button-current");
    slider_button_first.classList.add("slider-button-current");
};
});

slider_button_right.addEventListener('click', function() {
  if(slider_second.classList.contains("visually-hidden")){
    slider_second.classList.remove("visually-hidden");
    slider_first.classList.add("visually-hidden");
    slider_button_first.classList.remove("slider-button-current");
    slider_button_second.classList.add("slider-button-current");
};
});
