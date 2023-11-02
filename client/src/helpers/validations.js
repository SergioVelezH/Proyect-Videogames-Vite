export function validar(input) {
    const errors = {};
    const regNombre = /^[A-Z]+$/i;
    const regUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    const regFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    const regRating = /^[0-9]+([,][0-9]+)?$/;


    if(!regNombre.test(input.name)){
        errors.name = "No puede contener simbolos";
    }

    if(input.name.length < 3 || input.name.length > 15 ){
        errors.name = "El nombre debe tener entre 3 y 15 caractres";
    }

    if (!regUrl.test(input.background_image)) {
        errors.background_image = "El texto debe ser de tipo URL";
    }

    if (input.description.length < 50){
        errors.description = "Debe ser mayor a los 50 caracteres";
    }
    
    if(!regFecha.test(input.released)){
        errors.released = "Debe ser completado con una fecha";
    }

    // if(!regRating.test(input.rating)){
    //     errors.rating = "Debe ser un numero decimal"
    // }

    if(!regNombre.test(input.platforms)){
        errors.platforms = "No puede contener simbolos";
    }

    if(input.platforms.length < 3 || input.platforms.length > 15 ){
        errors.platforms = "La platafprma debe tener entre 3 y 15 caractres";
    }


    return errors;
  }