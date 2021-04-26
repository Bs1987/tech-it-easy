# Todo list

SETUP

1. Link CSS & JS

## Opdracht 1a:

Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

- voorraad - verkocht
- formule: originalStock - sold = tv's to sell
- alle original stock bij elkaar optellen (allOriginalStock)
- Alle sold bij elkaar optellen (allSold)
- totaal: allOriginalStock - allSold = alle tv's to sell
- moet ooit nog in een functie komen

Input: `[{}, {}, {}, {}, {}]`;

Output: 48


STEPS:

1. choose strategy:
    - methods: map, find filter, push, sort
    - loops

-> Strat 1:

- Map: `[{}, {}, {}, {}]` -> originalStock - sold -> [3, 4, 9, 11];
- for loop `[3, 4, 9, 11]` -> 27

Strat 2:

- for loop `[{}, {}, {}, {}]` -> 27

Strat 3:

- Google how to add numbers from array objects

2. make todolist

- [x] make a variable to store the total (tvsToSell)
- [X] inventory.map(~ *callback here* ~)
- [] write callback for map
   - [] parameter: television
   - [] log the data we need: televison.sold, television.originalStock
   - [] do math: const tvsToSell = originalStock - sold
   - [] console.log(tvsToSell)
   - [] return value from the callback
- [] expect something like this: `[3, 4, 9, 11]`
- [] Loop over the array of numbers and add them together (maybe google it)


##Opdracht 1b:

Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina