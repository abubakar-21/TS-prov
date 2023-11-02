###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Skillnader mellan types och interfaces:

Union och intersection: "type" har inbyggt stöd för union (`|`) och intersection (`&`) types medan interface har inte det.
exempel:
type Combined = PointType & { z: number };

Typalias: "type" kan skapa en alias för en annan typ, inklusive primitiva typer, unioner och tupler, vilket interface inte kan. Exempelvis:
type Age = number;
type Coordinates = [number, number];
