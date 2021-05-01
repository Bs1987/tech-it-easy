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
- [x] write callback for map
   - [x] parameter: television
   - [x] log the data we need: televison.sold, television.originalStock
   - [x] do math: const tvsToSell = originalStock - sold
   - [x] console.log(tvsToSell)
   - [x] return value from the callback
- [x] expect something like this: `[3, 4, 9, 11]`
- [x] Loop over the array of numbers and add them together (maybe google it)

3. Do programming (and check each step)
4. Cleanup (refactor)

Red (werkt niet) -> Green (werkt wel, maar slordig) -> Refactor (opschonen)


##Opdracht 1b:

Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

1. Choose strategy
   
   - create an element
    
2. Make todolist
   
    - [x] make a variable for the new element
    - [x] create an element (document.createElement)
    - [x] set content by changing elements: element.textContent = total
    - [x] appenChild (stick it on the page)
    
3. Do programming

#### Opdracht 2
* **Opdracht 2a:** Gebruik een array-methode om een array te maken met alle tv-type namen.
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

-> Strategy:

- Map: `[{}, {}, {}, {}]` -> type -> [43PUS6504/12', 43PUS6504/12', 43PUS6504/12', 43PUS6504/12', etc];
- for loop `[43PUS6504/12', 43PUS6504/12', 43PUS6504/12', 43PUS6504/12', etc]` -> tvTypes behind each other


2. make todolist

- [] make a variable to store the total (tvTypes)
- [] inventory.map(~ *callback here* ~)
- [] write callback for map
    - [] parameter: television
    - [] log the data we need: televison.type
    - [] console.log(televison.type)
    - [] return value from the callback
- [] expect something like this: `[43PUS6504/12', 43PUS6504/12', 43PUS6504/12', 43PUS6504/12', etc]`
- [] Loop over the array of types and return them after each other (maybe google it)

3. Do programming (and check each step)
4. Cleanup (refactor)

Red (werkt niet) -> Green (werkt wel, maar slordig) -> Refactor (opschonen)



* **Opdracht 2b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
* **Opdracht 2c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
* **Opdracht 2d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
