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
    let tvSoldArray = inventory.map((television) => {
        return television.originalStock - television.sold;
    })

    let total = 0;

    for (let i = 0; i < tvSoldArray.length; i++) {
        total += tvSoldArray[i];

    }

    return total;
}

function displayTvToSellCount() {
    const totalCount = calculateTvToSellCount();
    const tvToSellElement = document.createElement("h1");
    tvToSellElement.textContent = `We need to sell: ${totalCount} tvs`;
    tvToSellElement.style.color = 'red';
    document.body.appendChild(tvToSellElement);
}

displayTvToSellCount();

const tvSold = inventory.map((television) => {
    return television.sold;
});
const tvInStock = inventory.map((television) => {
    return television.originalStock;
})
for (let i = 0; i < inventory.length; i++) {
    let tvsLeft = tvSold[i] - tvInStock[i];
    if (tvsLeft === 0) {
    }
}

const tvAmbilight = inventory.map((television) => {
    return television.options.ambiLight;
})

for (let i = 0; i < inventory.length; i++) {
    if (tvAmbilight[i] === true) {
    }
}


const tvsSortedByPrice = inventory.sort((televisionA, televisionB) => {
    return televisionA.price - televisionB.price;
});


let televisionTotalRevenuePerType = [];
let tvTypeRevenue = "";
inventory.map((televisionType) => {
    for (let i = 0; i < inventory.length; i++) {
        tvTypeRevenue = televisionType.originalStock * televisionType.price;
    }
    televisionTotalRevenuePerType.push(tvTypeRevenue);
})

function totalRevenue() {
    let totalRevenue = 0;

    for (let i = 0; i < televisionTotalRevenuePerType.length; i++) {
        totalRevenue += televisionTotalRevenuePerType[i];
    }
    return totalRevenue;
}

function displayTotalExpectedRevenue() {
    const totalCount = totalRevenue();
    const TotalExpectedRevenueElement = document.createElement("h1");
    TotalExpectedRevenueElement.textContent = `We should make this ${totalCount} amount of money`;
    TotalExpectedRevenueElement.style.color = 'blue';
    document.body.appendChild(TotalExpectedRevenueElement);
}

displayTotalExpectedRevenue();


// * **Opdracht 3b:** Hoeveel hebben we tot nu toe verdient?
//     Bereken hoeveel we tot nu toe verdient hebben met
//     het aantal verkochte tv's.' +
// 'Geef dit weer in het **groen** weer op de pagina
//
// - calculate revenue per sold tv per type
// - add all revenue for total revenue
// display in green
let soldTvRevenuePerType = [];
let soldTvRevenue = 0;

inventory.map((televisionType) => {
    for (let i = 0; i < inventory.length; i++) {
        soldTvRevenue = televisionType.sold * televisionType.price;
    }
    soldTvRevenuePerType.push(soldTvRevenue);
})
console.log(soldTvRevenuePerType);

function totalSoldTvRevenue() {
    let totalSoldTvRevenue = 0;

    for (let i = 0; i < soldTvRevenuePerType.length; i++) {
        totalSoldTvRevenue += soldTvRevenuePerType[i];
    }
    return totalSoldTvRevenue;
}