let numeroCartao = document.querySelector('#num-cartao'); // input numero
let nomeCartao = document.querySelector('#nome-cartao'); //input nome
let validadeCartaoMM = document.querySelector('#data-mm'); // ????? input
let validadeCartaoYY = document.querySelector('#data-yy'); // ????? input
let codigoCvv = document.querySelector('#codigo-cvv'); //input cvv

let cardContainerFrente = document.querySelector(".card-container-frente"); //usaddo pra virar cartao
let cardContainerTras = document.querySelector(".card-container-tras");//usaddo pra desvirar cartao


// CARD FLIP!
codigoCvv.addEventListener('focus', () => {
    cardContainerFrente.style.display = 'none';
    cardContainerTras.style.display = 'flex';

});
codigoCvv.addEventListener('focusout', () => {
    cardContainerFrente.style.display = 'flex';
    cardContainerTras.style.display = 'none';
});

// dIGITALIZAÇÃO DO CARD

// NUMERO CARTAO
let campCardNumber = document.querySelector('#camp-card-number');
numeroCartao.addEventListener('input', event => {
    numDigitado = event.target.value;

    // Limita o valor digitado a 16 caracteres
    if (numDigitado.length > 16) {
        numDigitado = numDigitado.slice(0, 16); // Corta o texto após o 16º caractere
      event.target.value = numDigitado; // Atualiza o valor do input para manter os 16 caracteres
    }


    maskedValue = 'XXXX-XXXX-XXXX-XXXX';

    for (let i = 0; i < numDigitado.length; i++) {
        maskedValue = maskedValue.replace('X', numDigitado[i]);
    }
    
    campCardNumber.textContent = maskedValue;
});

// NOME DO CARTAO
let cardHolder = document.querySelector('#cardholder');
nomeCartao.addEventListener('input', event => {
    maskedName = '';
    nameDigitado = event.target.value;

    if(nameDigitado.length > 22){
        nameDigitado = nameDigitado.slice(0, 22)
        event.target.value = nameDigitado
    }

    for (let i = 0; i < nameDigitado.length; i++) {
        console.log(nameDigitado[i]);
        cardHolder.textContent = nameDigitado;
    }
    // cardHolder.textContent = maskedName;
});

// DAATA mm

let dataMM = document.querySelector('#data-mm')
let dataYY = document.querySelector('#data-yy')

let areaMM = document.querySelector('.span-data-mm')
let areaYY = document.querySelector('.span-data-yy')

dataMM.addEventListener('input', event => {
    dataDigitadaMM = event.target.value
    if(dataDigitadaMM.length > 2){
        dataDigitadaMM = dataDigitadaMM.slice(0, 2)
        event.target.value = dataDigitadaMM
    }
    maskedMM = 'XX'
    for(let i = 0; i < dataDigitadaMM.length; i++){
        maskedMM = maskedMM.replace('X', dataDigitadaMM[i])
    }
    areaMM.textContent = maskedMM
})



dataYY.addEventListener('input', event => {
    dataDigitadaYY = event.target.value
    if(dataDigitadaYY.length > 2){
        dataDigitadaYY = dataDigitadaYY.slice(0, 4)
        event.target.value = dataDigitadaYY
    }

    maskedYY = 'XXXX'
    for(let i = 0; i < dataDigitadaYY.length; i++){
        maskedYY = maskedYY.replace('X', dataDigitadaYY[i])
    }
    areaYY.textContent = maskedYY

    console.log(dataDigitadaYY)
})




// CVV


let cvvTras = document.querySelector('#cvv');

codigoCvv.addEventListener('input', event => {
    cvvDigitado = event.target.value
    if(cvvDigitado.length > 3){
        cvvDigitado = cvvDigitado.slice(0, 3)
        event.target.value = cvvDigitado
    }

    maskedCvv = 'XXX'
    for(let i = 0; i < cvvDigitado.length; i++){
        maskedCvv = maskedCvv.replace('X', cvvDigitado[i])
    }
    cvvTras.textContent = maskedCvv
})

