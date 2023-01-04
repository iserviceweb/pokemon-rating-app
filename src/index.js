//fetching pokemon data
fetch("http://localhost:3000/pokemons")
  .then((response) => response.json())
  .then((data) => console.log(data));


