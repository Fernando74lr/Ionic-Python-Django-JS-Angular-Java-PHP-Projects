// Elements.
let title = document.getElementById('title');
let description = document.getElementById('description');

// Initialization of Quagga library.
Quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
        constraints: {
            width: 640,
            height: 240,
        },
        target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
        decoder : {
        readers : [
            "code_128_reader",
            /*"ean_reader", 
            "ean_8_reader", 
            "code_39_reader", 
            "code_39_vin_reader", 
            "codabar_reader", 
            "upc_reader", 
            "upc_e_reader", 
            "i2of5_reader", 
            "2of5_reader", 
            "code_93_reader"*/
        ]
    }
}, function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

// Code execution when we have the barcode already readed.
Quagga.onDetected(data => readItem(data.codeResult.code));

function readItem(data) {
    ITEMS.forEach(item => {
        if (item.code == data) {
            title.innerHTML = `${item.code}`;
            description.innerHTML = `${item.description}`;
        }
    });
}