const button_del = document.querySelector('.services-button-del');
const button_gar = document.querySelector('.services-button-gar');
const button_cred = document.querySelector('.services-button-cred');
const wrap_del = document.querySelector('.service-delivery');
const wrap_gar = document.querySelector('.service-guarantee');
const wrap_cred = document.querySelector('.service-credit');

button_del.addEventListener('click',function(){
  wrap_del.classList.remove("visually-hidden");
  wrap_gar.classList.add("visually-hidden");
  wrap_cred.classList.add("visually-hidden");
  button_del.classList.add("services-button-current");
  button_gar.classList.remove("services-button-current");
  button_cred.classList.remove("services-button-current");
});

button_gar.addEventListener('click',function(){
  wrap_del.classList.add("visually-hidden");
  wrap_gar.classList.remove("visually-hidden");
  wrap_cred.classList.add("visually-hidden");
  button_del.classList.remove("services-button-current");
  button_gar.classList.add("services-button-current");
  button_cred.classList.remove("services-button-current");
});

button_cred.addEventListener('click',function(){
  wrap_del.classList.add("visually-hidden");
  wrap_gar.classList.add("visually-hidden");
  wrap_cred.classList.remove("visually-hidden");
  button_del.classList.remove("services-button-current");
  button_gar.classList.remove("services-button-current");
  button_cred.classList.add("services-button-current");
});
