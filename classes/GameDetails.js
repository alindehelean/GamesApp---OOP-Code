function GameDetails(id, title, description, image, fetchObj, genre, publisher, release){
    Game.call(this,id, title, description, image, fetchObj)
    this.genre = genre;
    this.publisher = publisher;
    this.release = release;
}

GameDetails.prototype = Object.create(Game.prototype);

GameDetails.prototype.getValuesFromForm = function () {
    const valuesFromForm = {
        gameTitle: document.getElementById("gameTitle"),
        gameDescription: document.getElementById("gameDescription"),
        gameGenre: document.getElementById("gameGenre"),
        gamePublisher: document.getElementById("gamePublisher"),
        gameImageUrl: document.getElementById("gameImageUrl"),
        gameRelease: document.getElementById("gameRelease")
    }

    return valuesFromForm;
}

GameDetails.prototype.validateInputs = function (valuesFromForm){
    validator.validateFormElement(valuesFromForm.gameTitle, "The title is required!");
    validator.validateFormElement(valuesFromForm.genre, "The genre is required!");
    validator.validateFormElement(valuesFromForm.gameImageUrl, "The image URL is required!");
    validator.validateFormElement(valuesFromForm.gameRelease, "The release date is required!");
    validator.validateReleaseTimestampElement(valuesFromForm.gameRelease, "The release date you provided is not a valid timestamp!");
}

GameDetails.prototype.createGame = async function (){
        this.getValuesFromForm();
        this.validateInputs();
        if(valuesFromForm.gameTitle.value !== "" &&
            valuesFromForm.gameGenre.value !== "" &&
            valuesFromForm.gameImageUrl !== "" &&
            valuesFromForm.gameRelease.value !== ""){
                const urlencoded = new URLSearchParams();
                    urlencoded.append("title", valuesFromForm.gameTitle.value);
                    urlencoded.append("releaseDate", valuesFromForm.gameRelease.value);
                    urlencoded.append("genre", valuesFromForm.gameGenre.value);
                    urlencoded.append("publisher", valuesFromForm.gamePublisher.value);
                    urlencoded.append("imageUrl", valuesFromForm.gameImageUrl);
                    urlencoded.append("description", valuesFromForm.gameDescription.value);
            }
                try{
                    const createGame = await fetchApi.createGameRequest(urlencoded);
                    console.log(createGame);
                    this.createDomElement();
                
                }catch {
                    console.log("error");
                }

}

GameDetails.prototype.initCreateGame = function(){
    document.querySelector(".submitBtn").addEventListener("click", function(event){
        event.preventDefault();
        this.createGame();
    })
}

