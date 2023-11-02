"use strict";
const getRisingStockDays = (stockMeasurements) => stockMeasurements.filter((data) => data.price > 100);
const stockMeasurements = [
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
const profitableDays = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
