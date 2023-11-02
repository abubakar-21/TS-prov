// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.
function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

// 2. Ge ett exempel på en funktion med två generiska typer.

function combine<T, U>(a: T, b: U): string {
    return `${a} - ${b}`;
}

// 3. Ge ett exempel på ett interface med en generisk typ.

interface Response<T> {
    success: boolean;
    message: string;
    data: T;
}
