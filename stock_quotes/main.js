
// all of the available symbols from the given js file in an array

let stockSymbolsArray = Object.keys(quotes);


// prints out every stock option in the stock option container

let stockOptions = () => {
    
    let stockOptionContainer = document.getElementById('stock-option-container');

    for (i = 0; i < stockSymbolsArray.length; i++) {

        let stockSymbol = 
            `
            <li>${stockSymbolsArray[i]}</li>
            `;

        stockOptionContainer.insertAdjacentHTML('beforeend', stockSymbol);
    }
}

stockOptions();


    
let selectionButton = document.getElementById('selection-button');

let stockQuoteContainer = document.getElementById('stock-quote');

let selection = document.getElementById('selection');

// interval placeholder
let interval

// the button to click that reveals the information and begins the time interval
selectionButton.addEventListener("click", function() {



    let stockSymbol = selection.value.toUpperCase();
    
    clearInterval(interval)
    interval = setInterval(function() { 



        getStockQuote(stockSymbol);
        

        let stockInformation =
        `
        <div>Stock: ${quotes[stockSymbol].name}</div>
        <div>Price: $${quotes[stockSymbol].price}
        `;
            
    
    stockQuoteContainer.innerHTML = stockInformation;
            
    

        // the display format for the quote

        
    }, 1000);  
    

});


