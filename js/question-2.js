const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b5350ec8392042dabf67dca0cb915e15"

const gameContainer = document.querySelector(".game-container");

async function getGameApi() {
      try{ const response = await fetch(url);
       const results = await response.json();
       const facts = results.results;

       gameContainer.innerHTML = "";
            
       for(let i = 0; i < facts.length; i++) {
         if (i === 8) {
           break;
         }
         
         gameContainer.innerHTML += `<div class="text"><p>${facts[i].name}</p>Rating: ${facts[i].rating} - Tags: ${facts[i].tags.length}</div>`;
       }
      }catch (error) {
        gameContainer.innerHTML = "Unable to connect to the API";
    }
}

getGameApi()
