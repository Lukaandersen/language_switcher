"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// eller console.log(texts["da"]);

document.querySelectorAll("option").forEach((sprog) => {
  addEventListener("click", klik);
});
function klik(switchlanguage) {
  let locale = switchlanguage.target.value;
  texts[locale].texts.forEach((textObj) => {
    console.log(textObj.text);
    console.log(textObj.location);
    document.querySelector(textObj.location).textContent = textObj.text;
  });
}

/* function changeLanguage() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
 */
/*
function danskTekst() {
  document.querySelector(location).textContent = texts.da.texts.text;
}*/
