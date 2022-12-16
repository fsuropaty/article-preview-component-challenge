const btn = document.querySelector("#share-button");
const popup = document.querySelector("#pop-up");

btn.addEventListener("click", sharePopup);

function sharePopup() {
  btn.classList.toggle("active");
  popup.classList.toggle("pop-up-active");
}
