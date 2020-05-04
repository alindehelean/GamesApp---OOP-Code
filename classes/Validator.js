const validator = {
    validateFormElement: function (inputElement, errorMessage){
        if(inputElement.value === "") {
            if(!document.querySelector('[rel="' + inputElement.id + '"]')){
                buildErrorMessage(inputElement, errorMessage);
            }
        } else {
            if(document.querySelector('[rel="' + inputElement.id + '"]')){
                console.log("the error is erased!");
                document.querySelector('[rel="' + inputElement.id + '"]').remove();
                inputElement.classList.remove("inputError");
            }
        }
    },

    validateReleaseTimestampElement: function (inputElement, errorMessage){
        if(isNaN(inputElement.value) && inputElement.value !== "") {
            buildErrorMessage(inputElement, errorMessage);
        }
    },

    buildErrorMessage: function (inputEl, errosMsg){
        inputEl.classList.add("inputError");
        const errorMsgElement = document.createElement("span");
        errorMsgElement.setAttribute("rel", inputEl.id);
        errorMsgElement.classList.add("errorMsg");
        errorMsgElement.innerHTML = errosMsg;
        inputEl.after(errorMsgElement);
    }
}