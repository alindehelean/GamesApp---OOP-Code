const apiUrl = "https://games-app-siit.herokuapp.com";

const fetchApi = new FetchApi(apiUrl);

async function startApp(){
    const arrayOfGames = await fetchApi.getGamesList();
    const container1 = document.querySelector('.container');

    for (let i = 0; i < arrayOfGames.length; i++) {
        let games = new Games(arrayOfGames[i]._id, arrayOfGames[i].title, arrayOfGames[i].description, arrayOfGames[i].imageUrl)
        let gameObj = games.createDomElement();
        container1.appendChild(gameObj);
        
    }

}

startApp();









    
