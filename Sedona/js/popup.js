 const popup = document.querySelector('.form');
 const datestart = popup.querySelector("[name = date-start]");
 const popupbutton = document.querySelector('.button-main');
 const buttonPlusAdults = popup.querySelector("#buttonPlusAdults");
 const buttonMinusAdults = popup.querySelector("#buttonMinusAdults");
 const buttonPlusKids = popup.querySelector("#buttonPlusKids");
 const buttonMinusKids = popup.querySelector("#buttonMinusKids");
 let inputAdults = popup.querySelector("#number-adults");
 let inputKids = popup.querySelector("#number-kids");



 popupbutton.addEventListener('click',function(){
   datestart.focus();
   popup.classList.toggle("visually-hidden");
 });


buttonPlusAdults.addEventListener('click',function(){
  inputAdults.value = parseInt(inputAdults.value)+1;
});


buttonMinusAdults.addEventListener('click',function(){
  if(parseInt(inputAdults.value) >= 1) {
    inputAdults.value = parseInt(inputAdults.value)-1;
  }
});



buttonPlusKids.addEventListener('click',function(){
  inputKids.value = parseInt(inputKids.value)+1;
});



buttonMinusKids.addEventListener('click',function(){
  if(parseInt(inputKids.value) >= 1) {
    inputKids.value = parseInt(inputKids.value)-1;
    }
});
