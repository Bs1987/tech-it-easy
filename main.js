// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

function calculateTvToSellCount() {
    // calculate how many tvs to sell by mapping originalstock and sold and substracting them
    let tvSoldArray = inventory.map((television) => {
        return television.originalStock - television.sold;
    })
//start with empty counter "total"
    let total = 0;

    for (let i = 0; i < tvSoldArray.length; i++) {
        total += tvSoldArray[i];
// through each loop, add the the amount of tvs left in stock to the total counter
    }
//return total to call later on
    return total;
}

function displayTvToSellCount() {
    //make a new variable "totalCount" and use the previous function to give it value
    const totalCount = calculateTvToSellCount();
    //make a new variable "tvToSellElement to create an element on the page"
    const tvToSellElement = document.createElement("tvs-to-sell");
    //add values to element
    tvToSellElement.textContent = `We need to sell: ${totalCount} tvs`;
    tvToSellElement.style.color = 'red';
    //Stick it on the page
    document.body.appendChild(tvToSellElement);
}

//call function to stick element on page
displayTvToSellCount();

//make a variable for the amount of sold tvs to use later on
const tvSold = inventory.map((television) => {
    return television.sold;
});
//make a variable for the amount of tvs in stock to use later on
const tvInStock = inventory.map((television) => {
    return television.originalStock;
})
//loop through the whole inventory and calculate the amount of tvs left for each tv
for (let i = 0; i < inventory.length; i++) {
    let tvsLeft = tvSold[i] - tvInStock[i];
    //if the tvsold - tvinstock = 0, tvs are sold out
    if (tvsLeft === 0) {
    }
}

//map which tvs have the function "Ambilight"
const tvAmbilight = inventory.map((television) => {
    return television.options.ambiLight;
})
for (let i = 0; i < inventory.length; i++) {
    if (tvAmbilight[i] === true) {
    }
}

//sort all the tvs by price by using the .sort() method.
inventory.sort((televisionA, televisionB) => {
    return televisionA.price - televisionB.price;
});
//make an empty array to start
let televisionTotalRevenuePerType = [];

//make an empty variable tvTypeRevenue to fill later on
let tvTypeRevenue = "";
inventory.map((televisionType) => {
    //in a loop, calculate the total revenue by calling the original stock and multiplying it by the tv type price
    for (let i = 0; i < inventory.length; i++) {
        tvTypeRevenue = televisionType.originalStock * televisionType.price;
    }
    //for each loop, push the value in the empty array
    televisionTotalRevenuePerType.push(tvTypeRevenue);
})

//make a function to add all revenues together
function totalRevenue() {
    let totalRevenue = 0;
// for the length of the tvTypeRevenue array, add all values together to create the total revenue variable
    for (let i = 0; i < televisionTotalRevenuePerType.length; i++) {
        totalRevenue += televisionTotalRevenuePerType[i];
    }
    return totalRevenue;
}

//make a function to display the amount on the page
function displayTotalExpectedRevenue() {
    //make a variable and use to function totalRevenue() to fill it with a value
    const totalCount = totalRevenue();
    //make a new variable to make a new element on the page
    const TotalExpectedRevenueElement = document.createElement("total-revenue");
    TotalExpectedRevenueElement.textContent = `We should make this ${totalCount} amount of money`;
    TotalExpectedRevenueElement.style.color = 'blue';
    document.body.appendChild(TotalExpectedRevenueElement);
}

//call function to stick it on the page
displayTotalExpectedRevenue();

//make empty variablese to fill later on
let soldTvRevenuePerType = [];
let soldTvRevenue = 0;
//map the televisions and calculate the revenue from every sold tv
inventory.map((televisionType) => {
    for (let i = 0; i < inventory.length; i++) {
        //for each loop, calculate the amount of money made by selling tv types
        soldTvRevenue = televisionType.sold * televisionType.price;
    }
    //for each loop, push the value in the empty array
    soldTvRevenuePerType.push(soldTvRevenue);
})

//make a function to add all previously calculated values
function totalSoldTvRevenue() {
    let totalSoldTvRevenue = 0;
//for each loop, add the value of soldTvRevenuePerType to the previous one
    for (let i = 0; i < soldTvRevenuePerType.length; i++) {
        totalSoldTvRevenue += soldTvRevenuePerType[i];
    }
    return totalSoldTvRevenue;
}

//make a function to display calculated values on the page
function displayTSoldTvRevenue() {
    //make variable to hold value from previous function
    const totalCount = totalSoldTvRevenue();
    //make variable to create element to put on page
    const TotalTvSoldRevenueElement = document.createElement("tv-sold-revenue");
    //fill element
    TotalTvSoldRevenueElement.textContent = `We have made this ${totalCount} amount of money`;
    TotalTvSoldRevenueElement.style.color = 'green';
    document.body.appendChild(TotalTvSoldRevenueElement);
}
//call function to display on page
displayTSoldTvRevenue();