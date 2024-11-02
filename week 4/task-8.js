function greet(language) {
    switch (language) {
        case 'en':
            console.log("Hello!");
            break;
        case 'fr':
            console.log("Bonjour!");
            break;
        case 'es':
            console.log("¡Hola!");
            break;
        default:
            console.log("Language not supported.");
    }
}

greet('fr');