### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.


1. Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng

Typescript är ett programmeringsspråk byggt på Javascript. Det gör det lättare att skriva robust och skalbar kod på grund av att det lägger till statisk typning, detta hjälper en att identifiera fel tidigt i utvecklingsprocessen jämfört med javascript. Typescript kompileras till vanlig JS-kod och detta möjliggör att köra den i alla webbläsare eller node.js-miljöer, och samtidigt ser man errors i kompileringen istället för vid körning.


2. Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng
Typescript fördelerna är att den identifiera fel tidigt i utvecklingsprocessen och nackdel den har är att det är svårare att programmera fel för att type systemet sätter ramar för koden

3. Initiera ett vanilla TS-projekt så att du kan kompilera 
 Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng


mkdir typescript-projekt
cd typescript-projekt
npm init
npm install typescript ts-node --save-dev
npx tsc --init
npx tsc // bygg om .ts => .js
ts-node index.ts // kör ts-filen i node