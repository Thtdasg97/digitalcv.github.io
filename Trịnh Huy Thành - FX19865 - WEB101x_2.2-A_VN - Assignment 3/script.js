"use strict";
const infortht = document.querySelector(".infortht");
const form = document.querySelector("#form");
const btnsOpenModal = document.querySelector("#button");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnsOpenModal.addEventListener("click", function () {
  if (email.value === "" || !email.value.match(regex)) {
    console.log("Error");
    alert("Sorry, your email is not correct, please try again ^^");
    return false;
  } else infortht.classList.remove("hidden");
  form.classList.add("hidden");
});

const moreText = document.querySelectorAll(".moreText");
const viewMoreBtn = document.querySelectorAll(".view-more-btn");
const arrViewMoreBtn = Array.from(viewMoreBtn);
const arrMoreText = Array.from(moreText);

const viewMoreviewLess = function () {
  for (let i = 0; i < arrViewMoreBtn.length; i++) {
    arrViewMoreBtn[i].addEventListener("click", function () {
      console.log(arrViewMoreBtn[i]);
      if (arrViewMoreBtn[i].innerText === "▼ View More") {
        arrMoreText[i].classList.remove("hidden");
        arrViewMoreBtn[i].innerText = "▲ View Less";
      } else {
        arrViewMoreBtn[i].innerText = "▼ View More";
        arrMoreText[i].classList.add("hidden");
      }
    });
  }
};
viewMoreviewLess();
