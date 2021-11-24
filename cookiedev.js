const running = true;
let cookies = 0;

function getCookie() {
    cookies++;
    update();
}

// Define upgrades
let cursors = {
    amount: 0,
    cps: 1,
    value: 15,
};
let anonygolds = {
    amount: 0,
    cps: 10,
    value: 100,
};
let artayoos = {
    amount: 0,
    cps: 69,
    value: 100,
};

function buy(item, amount) {
    console.log(`trying to buy ${amount} ${item}`);
    switch(item) {
        case 'default':
            console.log("this item does not exist");
            break;

        case 'cursors':
            if (cookies > 15 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                cookies = +cookies - 15 * amount
                cursors.amount += +amount;
                update();
            }
            break;

        case 'anonygolds':
            if (cookies > 100 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                cookies = +cookies - 100 * amount
                anonygolds.amount += +amount;
                update();
            }
            break;

        case 'artayoos':
            if (anonygolds.amount > 100 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                anonygolds.amount = +anonygolds.amount - 100 * amount
                artayoos.amount += +amount;
                update();
            }
            break;

    }
    update();
}

function update() {
    document.getElementById("cookies").innerHTML = `Cookies: ${cookies}`;
    document.getElementById("cursors").innerHTML = `Cursors: ${cursors.amount}`;
    document.getElementById("anonygolds").innerHTML = `Anonygolds: ${anonygolds.amount}`;
    document.getElementById("artayoos").innerHTML = `Artayoos: ${artayoos.amount}`;
}

function save() {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cursors", cursors.amount);
    localStorage.setItem("anonygolds", anonygolds.amount);
    localStorage.setItem("artayoos", artayoos.amount);
}

function reset() {
    localStorage.removeItem("cookies");
    localStorage.removeItem("cursors");
    localStorage.removeItem("anonygolds");
    localStorage.removeItem("artayoos");
    [cookies,cursors.amount,anonygolds.amount,artayoos.amount] = [0,0,0,0];
    update();
}

// Load stats after page fully loads
window.onload = function() {
    cookies = 0;
    cursors.amount = 0;
    anonygolds.amount = 0;
    artayoos.amount = 0;
    if (localStorage.getItem("cookies") === null) {
        localStorage.setItem("cookies", 0);
        localStorage.setItem("cursors", 0);
        localStorage.setItem("anonygolds", 0);
        localStorage.setItem("artayoos", 0);
    } else {
        cookies = +localStorage.getItem("cookies");
        cursors.amount = +localStorage.getItem("cursors");
        anonygolds.amount = +localStorage.getItem("anonygolds");
        artayoos.amount = +localStorage.getItem("artayoos");
        update();
    }
};

// Main game loop
setInterval(() => {
    cookies = +cookies + +(cursors.amount * cursors.cps);
    cookies = +cookies + +(anonygolds.amount * anonygolds.cps);
    cookies = +cookies + +(artayoos.amount * artayoos.cps);
    update();
}, 1000);

// so we do a little trolling
function touch() {
    window.location.href='https://youtu.be/GSKCITbXNNs?t=134'
}
