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
    const tvToSellElement = document.createElement("h1");
    //add values to element
    tvToSellElement.textContent = `We need to sell: ${totalCount} tvs`;
    tvToSellElement.style.color = 'red';
    //Stick it on the page
    document.body.appendChild(tvToSellElement);
}

//call function to stick element on page
displayTvToSellCount();

//display all tv types
const tvType = inventory.map((television) => {
    return television.type;
})

//find sold out tvs by using array method
//we use the .filter() method because it expects true or false return
const soldOutTvs = inventory.filter((television) => {
    //if originalStock equals sold it means the tv is sold out.
    //This returns true
    return television.originalStock === television.sold
});

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

//make a function for totalRevenue
function totalRevenue() {
    //start a counter at 0
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        // for each loop, multipy the price of the current index with the original stock of the current index
        //and add it tp the previous value
        count += (inventory[i].price * inventory[i].originalStock);
    }
    return count;
}

//make a function to display the amount on the page
function displayTotalExpectedRevenue() {
    //make a new variable to make a new element on the page
    const TotalExpectedRevenueElement = document.createElement("h1");
    //call above function to fill in the amount we have to make
    TotalExpectedRevenueElement.textContent = `We should make €${totalRevenue()},-`;
    TotalExpectedRevenueElement.style.color = 'blue';
    document.body.appendChild(TotalExpectedRevenueElement);
}

//call function to stick it on the page
displayTotalExpectedRevenue();

//make a function to calculate the amount of money we have made with the tvs we have sold so far

function revenueSoFar() {
    //start a counter at 0 to fill
    let count = 0;
    //loop through the entire inventory
    for (let i = 0; i < inventory.length; i++) {
        // for each loop, calculate the amount of money made for the tvs sold, and add tot previous amount
        count += (inventory[i].sold * inventory[i].price);
    }
    return count;
}

function displayRevenueSoFar() {
    //make variable for element on page
    const TotalTvSoldRevenueElement = document.createElement("h1");
    //fill element
    TotalTvSoldRevenueElement.textContent = `We have made €${revenueSoFar()},- so far`;
    TotalTvSoldRevenueElement.style.color = 'green';
    document.body.appendChild(TotalTvSoldRevenueElement);
}

//call function to display on page
displayRevenueSoFar();