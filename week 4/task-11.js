let globalVar = "I am global";

function scopeExample() {
    let localVar = "I am local";
    console.log(globalVar); 
    console.log(localVar);
}
scopeExample();