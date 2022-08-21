

export const validateSelects = (genero, grado, td, cole, mun, curso) => {
    if (genero === "0") {
        return {message: 'Por favor selecciona un genero', validate: false};
    }

    if (grado === "0") {
        return {message: 'Por favor selecciona un grado', validate: false};
    }

    if (td === "0") {
        return {message: 'Por favor selecciona un tipo de documento', validate: false};
    }

    if (cole === "0") {
        return {message: 'Por favor selecciona un colegio', validate: false};
    }

    if (mun === "0") {
        return {message: 'Por favor selecciona un municipio', validate: false};
    }

    if (curso === "0") {
        return {message: 'Por favor selecciona un curso', validate: false};
    }

    return {message: 'Done', validate: true};
}
