// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.
type stockM = {
  day: string,
  price: number
};
const getRisingStockDays = (stockMeasurements: stockM[]): any =>
  stockMeasurements.filter((data: stockM) => data.price > 100);

const stockMeasurements: stockM[] = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: any = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
