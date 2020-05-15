let host_ip_address = "172.14.3.219";
let network_mask = "255.255.0.0";

// Step 1: Translate Host IP address and network mask into binary notation.
function convertIpAndMaskToBinary(ip, mask) {
    let ip_binary = ip.split('.');
    let mask_binary = mask.split('.');

    // Convert each octect to binary.
    for (let index = 0; index < 4; index++) {
        ip_binary.splice(index, 1, parseInt(ip_binary[index]).toString(2).toString());
        mask_binary.splice(index, 1, parseInt(mask_binary[index]).toString(2).toString());
    }

    // Make sure all is 8-bit long by filling them with 0's.
    ip_binary = fillWithZeros(ip_binary);
    mask_binary = fillWithZeros(mask_binary);

    return [ip_binary, mask_binary];
}

// Step 2: Determine the network address.
function getNetworkAddress(ip, mask) {
    let network_address = new Array();
    let octet = '';
    
    // Make the ANDing operation.
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            octet += (parseInt(ip[i][j]) && parseInt(mask[i][j])).toString();
        }
        network_address.push(octet);
        octet = '';
    }

    return network_address;
}

// Step 3: Determine the broadcast address for the network address.
function getBroadcastAddress(host_ip_address, network_mask) {
    let broadcast = ['0', '0', '0', '0'];
    let ip_class = host_ip_address.split('.');
    let mask = network_mask.split('.');

    // Verify wich class belongs the IP.
    if (parseInt(ip_class[0]) >= 1 && parseInt(ip_class[0]) < 127) { // Class A
        broadcast.splice(0, 1, parseInt(ip_class[0]).toString(2).toString());
        (parseInt(mask[1]) == 0) ? broadcast.splice(1, 1, '11111111') : broadcast.splice(1, 1, parseInt(ip_class[2]).toString(2).toString());
        (parseInt(mask[2]) == 0) ? broadcast.splice(2, 1, '11111111') : broadcast.splice(2, 1, parseInt(ip_class[2]).toString(2).toString());
        (parseInt(mask[3]) == 0) ? broadcast.splice(3, 1, '11111111') : broadcast.splice(3, 1, parseInt(ip_class[3]).toString(2).toString());
    }
    if (parseInt(ip_class[0]) >= 127 && parseInt(ip_class[0]) < 192) { // Class B

        broadcast.splice(0, 1, parseInt(ip_class[0]).toString(2).toString());
        broadcast.splice(1, 1, parseInt(ip_class[1]).toString(2).toString());
        (parseInt(mask[2]) == 0) ? broadcast.splice(2, 1, '11111111') : broadcast.splice(2, 1, parseInt(ip_class[2]).toString(2).toString());
        (parseInt(mask[3]) == 0) ? broadcast.splice(3, 1, '11111111') : broadcast.splice(3, 1, parseInt(ip_class[3]).toString(2).toString());
    }
    if (parseInt(ip_class[0]) >= 192 && parseInt(ip_class[0]) < 224) { // Class C
        broadcast.splice(0, 1, parseInt(ip_class[0]).toString(2).toString());
        broadcast.splice(1, 1, parseInt(ip_class[1]).toString(2).toString());
        broadcast.splice(2, 1, parseInt(ip_class[2]).toString(2).toString());
        (parseInt(mask[3]) == 0) ? broadcast.splice(3, 1, '11111111') : broadcast.splice(3, 1, parseInt(ip_class[3]).toString(2).toString());
    }

    return fillWithZeros(broadcast);
}

function getNumberOfHosts(host_ip_address) {
    let ip_class = host_ip_address.split('.');
    let number_of_hosts = 0;
    let bits = 0;
    // Verify wich class belongs the IP.
    if (parseInt(ip_class[0]) >= 1 && parseInt(ip_class[0]) < 127) { // Class A
        number_of_hosts = Math.pow(2, 24);
        bits = 24;
    }
    if (parseInt(ip_class[0]) >= 127 && parseInt(ip_class[0]) < 192) { // Class B
        number_of_hosts = Math.pow(2, 16);
        bits = 16;
    }
    if (parseInt(ip_class[0]) >= 192 && parseInt(ip_class[0]) < 224) { // Class C
        number_of_hosts = Math.pow(2, 16);
        bits = 16;
    }

    return [bits, number_of_hosts];
}

// Fill with zeros.
function fillWithZeros(address) {
    let filled = '';

    for (let index = 0; index < address.length; index++) {
        filled = address[index].split("");
        //console.log(filled);
        while (filled.length-1 < 7) {
            filled.unshift('0');
        }
        address.splice(index, 1, filled.join(""));
        filled = '';
    }

    return address;
}

function convertToAddress(address) {
    for (let index = 0; index < 4; index++) {
        address.splice(index, 1, parseInt(address[index], 2));
    }
    return address.join(".");
}

// GET RESULTS

let addresses = convertIpAndMaskToBinary(host_ip_address, network_mask);
let network_address = getNetworkAddress(addresses[0], addresses[1]);
let broadcast = getBroadcastAddress(host_ip_address, network_mask);
let hosts = getNumberOfHosts(host_ip_address);

// PRINT RESULTS

console.log('IP: ' + convertToAddress(addresses[0]));
console.log("");

console.log('MASK: ' + convertToAddress(addresses[1]));
console.log("");

console.log('NETWORK ADDRESS: ' + convertToAddress(network_address));
console.log("");

console.log('BROADCAST: ' + convertToAddress(broadcast));
console.log("");

console.log('HOSTS BITS: ' + hosts[0].toString());
console.log("");

console.log('TOTAL HOSTS: ' + (hosts[1]-2).toString());