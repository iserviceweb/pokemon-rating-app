//fetching pokemon data
fetch("http://localhost:3000/pokemons")
  .then((response) => response.json())
  .then((data) => renderPokemonCards(data));

//create variables to render the pokemon data

let pokemonCardDisplay = document.getElementById("pokemon__display");
let pokemonImage = document.querySelector(".image__detail");
let pokemonName = document.querySelector(".name");
let pokemonHP = document.querySelector(".hp");
let pokemonRating = document.getElementById("rating__display");
let pokemonComment = document.getElementById("comment__display");


console.log(pokemonCardDisplay);
console.log(pokemonImage);
console.log(pokemonName);
console.log(pokemonHP);
console.log(pokemonRating);
console.log(pokemonComment);

//create function that iterates throught the array pokemons

function renderPokemonCards(data) {
  for (const obj of data) {
    let image = document.createElement("img");
    image.className = "pokemon__card"
    image.src = obj.image
    pokemonCardDisplay.append(image)

    //create click event, will showcase the pokemon cards
    image.addEventListener("click", function () {
      pokemonImage.src = obj.image;
      pokemonName.innerHTML = obj.name;
      pokemonHP.innerHTML = obj.hp;
      pokemonRating.innerHTML = obj.rating;
      pokemonComment.innerHTML = obj.comment;
    })
  }
}

//create variable from the form
let newPokemonForm = document.getElementById("new__pokemon");
let newPokemonName = document.getElementById("name");
let newPokemonHP = document.getElementById("hp");
let newPokemonImage = document.getElementById("image");
let newPokemonRating = document.getElementById("rating");
let newPokemonComment = document.getElementById("comment");

//create another event listener

newPokemonForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let pokemonArray = [
    {
      name: newPokemonName.value,
      hp: newPokemonHP.value,
      image: newPokemonImage.value,
      rating: newPokemonRating.value,
      comment:newPokemonComment.value,
    },
  ];
  renderPokemonCards(pokemonArray)
})

