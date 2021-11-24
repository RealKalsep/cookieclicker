const running = true;
let cookies, cursors, anonygolds, artayoos;

function getCookie() {
    cookies++;
    update();
}

function buy(item, amount) {
    console.log(`trying to buy ${amount} ${item}`);
    switch(item) {
        case 'cursors':
            if (cookies > 15 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                cookies = cookies - 15 * amount
                cursors += +amount;
                update();
            }
            break;

        case 'anonygolds':
            if (cookies > 100 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                cookies = cookies - 100 * amount
                anonygolds += +amount;
                update();
            }
            break;

        case 'artayoos':
            if (cursors > 100 * amount - 1) {
                console.log(`bought ${amount} ${item}`);
                cursors = cursors - 100 * amount
                artayoos += +amount;
                update();
            }
            break;

    }
    update();
}

function update() {
    document.getElementById("cookies").innerHTML = `Cookies: ${cookies}`;
    document.getElementById("cursors").innerHTML = `Cursors: ${cursors}`;
    document.getElementById("anonygolds").innerHTML = `Anonygolds: ${anonygolds}`;
    document.getElementById("artayoos").innerHTML = `Artayoos: ${artayoos}`;
}

function save() {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cursors", cursors);
    localStorage.setItem("anonygolds", anonygolds);
    localStorage.setItem("artayoos", artayoos);
}

function reset() {
    localStorage.removeItem("cookies");
    localStorage.removeItem("cursors");
    localStorage.removeItem("anonygolds");
    localStorage.removeItem("artayoos");
    [cookies,cursors,anonygolds,artayoos] = [0,0,0,0];
    update();
}

// Load stats after page fully loads
window.onload = function() {
    cookies = 0;
    cursors = 0;
    anonygolds = 0;
    artayoos = 0;
    if (localStorage.getItem("cookies") === null) {
        localStorage.setItem("cookies", 0);
        localStorage.setItem("cursors", 0);
        localStorage.setItem("anonygolds", 0);
        localStorage.setItem("artayoos", 0);
    } else {
        cookies = +localStorage.getItem("cookies");
        cursors = +localStorage.getItem("cursors");
        anonygolds = +localStorage.getItem("anonygolds");
        artayoos = +localStorage.getItem("artayoos");
        update();
    }
};

// Main game loop
setInterval(() => {
    cookies = +cookies + +cursors;
    cookies = +cookies + +(anonygolds * 5);
    cookies = +cookies + +(artayoos * 69);
    update();
}, 1000);

// so we do a little trolling
function touch() {
    window.location.href='https://youtu.be/GSKCITbXNNs?t=134'
}
