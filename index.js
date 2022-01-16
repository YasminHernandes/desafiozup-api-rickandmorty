const card = document.querySelectorAll(".card");
const img = document.querySelectorAll(".card img");
const characterName = document.querySelectorAll(".card #name");
const specie = document.querySelectorAll(".card #specie");
const condition = document.querySelectorAll(".card #status");
const button = document.querySelector("button");

randomValue = () => {
  return Math.floor(Math.random() * 671);
};

getCharacter = (i) => {
  let randomNumber = randomValue();
  let urlCode = `https://rickandmortyapi.com/api/character/${randomNumber}`;

  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  return fetch(urlCode, { method: "GET", headers })
    .then((response) => response.json())
    .then((data) => {
      img[i].src = data.image;
      img[i].alt = data.name;
      characterName[i].innerHTML = data.name;
      specie[i].innerHTML = data.species;
      condition[i].innerHTML = data.status;
    });
};

getCharacters = () => {
  for (let i in card) {
    getCharacter(i);
  }
};

button.onclick = getCharacters;