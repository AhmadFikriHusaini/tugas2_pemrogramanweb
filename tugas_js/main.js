let lambo = document.querySelector('#lambo');
const jmllambo = document.querySelector('#jmllambo');

let buga = document.querySelector('#bugatti');
const jmlbuga = document.querySelector('#jmlbugatti');

let ferra = document.querySelector('#ferrari');
const jmlferra = document.querySelector('#jmlferrari');

const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {

    if (buga.checked === false && lambo.checked === false && ferra.checked === false) {
        alert('Check Mobil Yang Ingin Di Ambil');
    }

    let hargaLambo = 1200000;
    if (lambo.checked === true) {
        document.getElementById("jmllambo").disabled = false;
        hargaLambo *= jmllambo.value;
        document.getElementById("total").innerHTML = hargaLambo;
    }

    let hargabuga = 5000000;
    if (buga.checked === true) {
        hargabuga *= jmlbuga.value;
        document.getElementById("total").innerHTML = hargabuga;
    }

    let hargaferra = 3000000;
    if (ferra.checked === true) {
        hargaferra *= jmlferra.value;
        document.getElementById("total").innerHTML = hargaferra;
    }

    if (lambo.checked === true && buga.checked === true && ferra.checked === true) {
        document.getElementById("total").innerHTML = hargaLambo + hargabuga + hargaferra;

    } else if (buga.checked === true && lambo.checked === true) {
        document.getElementById("total").innerHTML = hargabuga + hargaLambo;

    } else if (lambo.checked === true && ferra.checked === true) {
        document.getElementById("total").innerHTML = hargaLambo + hargaferra;

    } else if (buga.checked === true && ferra.checked === true) {
        hasil.value = hargabuga + hargaferra;
    }
});