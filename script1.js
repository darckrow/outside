function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 60 * i);
    })
}
const titulo = document.querySelector('h1')
typeWriter(titulo)

var banners = document.querySelectorAll('.banner');
var currentBanner = 0;

function showBanner() {
    
    for (var i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }


    banners[currentBanner].style.display = 'block';
}

function nextBanner() {
    currentBanner++;
    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }
    showBanner();
}


setInterval(nextBanner, 9000);


showBanner();