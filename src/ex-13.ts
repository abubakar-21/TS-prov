// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod. 
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.

// Obs! Detta ska vara en Node-applikation, så använd lämplig "fetch", axios eller liknande för att hämta data från API:et.
// Utifrån Zod-schemat ska du också skapa en typ för Pokemon (använd lämplig Zod-metod för detta). Du ska använda dig 
// av den härlädda Pokemontypen i din kod. / Poäng: 8 poäng


// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/


import { z } from "zod"

// Skapa Zod-schema för Pokemon-data
const pokemonSchema = z.object({
    name: z.string(),
    height: z.number(),
    weight: z.number(),
});

// Skapa en typ för Pokemon med Zod
type Pokemon = z.infer<typeof pokemonSchema>;

// Funktion för att hämta data från Pokemon API
async function fetchPokemonData(pokemonName: string): Promise<Pokemon | undefined> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();

        // Validera datan med Zod-schema
        const validatedData = pokemonSchema.parse(data);

        return validatedData;
    } catch (error) {
        console.error('Error fetching or validating data:', error);
        return undefined; // or throw error if preferred
    }
}

// Funktion för att beräkna BMI för en Pokemon
function calculateBMI(pokemon: Pokemon) {
    const weightInKg = pokemon.weight / 10;
    const heightInM = pokemon.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);
    return bmi;
}

// Välj en Pokemon och hämta dess data
const chosenPokemon = 'pikachu'; // Byt ut 'pikachu' mot valfri Pokemon

fetchPokemonData(chosenPokemon)
    .then((pokemon: any) => {
        console.log(`Data for ${chosenPokemon}:`, pokemon);
        // räkna bmi
        const bmi = calculateBMI(pokemon);
        console.log(`BMI for ${chosenPokemon}:`, bmi);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

