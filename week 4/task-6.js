function checkAge(age) {
    if (age < 13) {
        console.log("Child");
    } else if (age < 20) {
        console.log("Teen");
    } else if (age < 65) {
        console.log("Adult");
    } else {
        console.log("Senior");
    }
}

checkAge(19);