const popup = document.querySelector(".form-popup");
const popupbutton = document.querySelector(".popup-open-button");
const popupclosebutton = popup.querySelector(".form-button-close");

popupbutton.addEventListener("click",function(evt){
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
});

popupclosebutton.addEventListener("click",function(){
  popup.classList.add("visually-hidden");
});
