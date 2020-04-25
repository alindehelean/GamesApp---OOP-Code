function NewGameForm(title, description, genre, publisher, imageUrl,releaseDate ){
    this.title = title;
    this.description = description;
    this.genre =genre;
    this.publisher = publisher;
    this.imageUrl = imageUrl;
    this.releaseDate =releaseDate
}

NewGameForm.prototype.validateFormElement = function(inputElement, errorMessage){
    if(inputElement.value === "") {
        if(!document.querySelector('[rel="' + inputElement.id + '"]')){
            NewGameForm.prototype.buildErrorMessage(inputElement, errorMessage);
        }
    }else {
        if (document.querySelector('[rel="' + inputElement.id + '"]')){
            console.log("the error is erased!");
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}

NewGameForm.prototype.validateReleaseTimestampElement = function(inputElement, errorMessage){
    if(isNaN(inputElement.value) && inputElement.value !== "") {
        NewGameForm.prototype.buildErrorMessage(inputElement, errorMessage);
    }
}

