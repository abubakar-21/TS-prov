"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function printArray(arr) {
    arr.forEach(item => console.log(item));
}
// 2. Ge ett exempel på en funktion med två generiska typer.
function combine(a, b) {
    return `${a.toString()} - ${b.toString()}`;
}
