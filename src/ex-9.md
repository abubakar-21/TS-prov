### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Generics i TypeScript är ett verktyg som möjliggör skapandet av återanvändbara komponenter och funktioner samtidigt som man behåller typsäkerhet. Generics tillåter dig att skapa komponenter, klasser eller funktioner som kan arbeta med olika datatyper medan typsäkerheten bibehålls.

Generics är användbara av flera skäl:

Återanvändbarhet: Genom att använda generics kan du skapa flexibla komponenter och funktioner som fungerar med olika datatyper utan att behöva skriva separat kod för varje typ.

Typsäkerhet: Generics tillåter dig att behålla typsäkerheten, vilket innebär att du kan specificera vilka typer som kan användas medan du skapar återanvändbara komponenter eller funktioner.

Att använda "any" i TypeScript är ett alternativ till att använda generics, men det innebär förlust av typsäkerheten. När du använder "any" tillåts variabler av vilken typ som helst vilket innebär att TypeScript inte längre kan göra typkontroller eller ge dig kompileringstidens fördelar som typsäkerhet och autokomplettering.

Skillnaden mellan generics och att använda "any" är huvudsakligen typsäkerheten. Generics låter dig behålla typsäkerheten samtidigt som du skapar flexibla och återanvändbara komponenter eller funktioner genom att arbeta med olika typer, medan användningen av "any" gör koden mindre säker och ökar risken för fel vid körningstid eftersom TypeScript inte kan göra typkontroller för "any"-typer.