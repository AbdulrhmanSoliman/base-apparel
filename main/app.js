let em = document.querySelector("[type = email]");
let btn = document.querySelector(".submit");
let error = document.querySelectorAll("img")[1];
let myP = document.querySelector(".hidden__p");

btn.onclick = function (e) {
  if (!em.value.includes("@")) {
    e.preventDefault();
    em.style.border = "2px solid #F96464";
    error.style.display = "block";
    myP.style.display = "block";
  }
};

em.onclick = function () {
  em.style.border = "1px solid #eadee1";
  error.style.display = "none";
  myP.style.display = "none";
};
