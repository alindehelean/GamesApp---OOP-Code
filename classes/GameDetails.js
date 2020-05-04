function GameDetails(genre,publisher,release){
    Game.call(this,genre,publisher,release)
}

GameDetails.prototype = Object.create(Game.prototype);


