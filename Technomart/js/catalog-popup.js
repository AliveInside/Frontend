const popup = document.querySelector(".popup-catalog");
const popupbutton = document.querySelectorAll(".product-popup-buy");
const popupclosebutton = popup.querySelector(".form-button-close");
const popupclosecontinuebutton = popup.querySelector(".continue-form-button");

for (var i = 0; i < popupbutton.length; i++) {
  popupbutton[i].addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
  });
}

popupclosecontinuebutton.addEventListener("click",function(){
  popup.classList.add("visually-hidden");
});

popupclosebutton.addEventListener("click",function(){
  popup.classList.add("visually-hidden");
});
