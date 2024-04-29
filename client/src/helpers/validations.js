export function validar(input) {
    const errors = {};
    const regNombre = /^[A-Z]+$/i;
    const regUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    const regFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    const regRating = /^[0-9]+([.][0-9]+)?$/;


    if(!regNombre.test(input.name)){
        errors.name = "Cannot contain symbols";
    }

    if(input.name.length < 3 || input.name.length > 15 ){
        errors.name = "The name must be between 3 and 15 characters";
    }

    if (!regUrl.test(input.background_image)) {
        errors.background_image = "The text must be of type URL";
    }

    if (input.description.length < 50){
        errors.description = "Must be greater than 50 characters";
    }
    
    if(!regFecha.test(input.released)){
        errors.released = "Must be completed with a date";
    }

    if(!regRating.test(input.rating)){
        errors.rating = "It must be a rating with a point (Ex: 7.8)"
    }

    if(input.rating > 10 || input.rating < 1){
        errors.rating = "It must be a rating between 1 and 10"
    }

    if(!regNombre.test(input.platforms)){
        errors.platforms = "Cannot contain symbols";
    }

    if(input.platforms.length < 3 || input.platforms.length > 15 ){
        errors.platforms = "The platform must be between 3 and 15 characters";
    }


    return errors;
  }