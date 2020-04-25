function Games(id, title, description,image){
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;

}



Games.prototype.createDomElement = function(){
    const gameELement = document.createElement("div");
    gameELement.setAttribute("id", `${this.id}`)
    gameELement.innerHTML = `<h1>${this.title}</h1> 
                            <img src="${this.image}" />
                            <p>${this.description}</p> 
                            <button class="delete-btn">Delete Game</button>
                            <button class="update-btn">Edit Game</button>`; 
                         
    return gameELement;   
                             
}

Games.prototype.removeDeletedElementFromDOM = function(domElement){
    domElement.remove();
}


