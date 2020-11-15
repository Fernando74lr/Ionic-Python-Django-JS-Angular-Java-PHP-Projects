// Elements. 
let title = $('#title');
let description = $('#description');
let img_1 = $('#img_1');
let img_2 = $('#img_2');
let img_3 = $('#img_3');
let carousel = $('#carousel');
let camera = $('#camera');

// BAR READER FUNCTIONALITY

// Initialization of Quagga library.
Quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
        constraints: {
            width: 640,
            height: 240,
        },
        target: document.querySelector('#camera')
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
    // Stop camera.
    Quagga.stop()
    
    // Hide elements.
    camera.addClass('hide');
    carousel.removeClass('hide');

    // Manage data.
    ITEMS.forEach(item => {
        if (item.code == data) {
            title.html(`${item.code}`);
            description.html(`${item.description}`);
            img_1.attr('src', `${item.examples[0]}`);
            img_2.attr('src', `${item.examples[1]}`);
            img_3.attr('src', `${item.examples[2]}`);
        }
    });
}
