const numberTab76 = function () {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i <= 76; i++) {
    const numberBox = document.createElement("div");
    numberBox.innerText = i;
    tabellone.appendChild(numberBox);
  }
};
numberTab76();

const randomNum = function () {
  const estrazioneN = Math.floor(Math.random() * 77);
  const divNumeri = document.querySelectorAll("#tabellone div");

  const singoloElementoTabellone = divNumeri[estrazioneN];
  singoloElementoTabellone.style.backgroundColor = "#BADFD7";

  const divNumeri2 = document.querySelectorAll("#cartelle .numeretto");
  for (let i = 0; i < divNumeri2.length; i++) {
    if (parseInt(divNumeri2[i].innerText) - 1 === estrazioneN) {
      divNumeri2[i].style.backgroundColor = "#BADFD7";
    }
  }
};

const cartelleUtente = function () {
  const cartelle = document.getElementById("cartelle");
  const cartella = document.createElement("div");
  cartella.style.marginBottom = "20px";
  for (let i = 1; i <= 24; i++) {
    const numberBoxU = document.createElement("div");
    numberBoxU.classList.add("numeretto");
    numberBoxU.innerText = Math.floor(Math.random() * 77);
    cartella.appendChild(numberBoxU);
  }
  cartelle.appendChild(cartella);
};
