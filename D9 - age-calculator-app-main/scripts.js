//pegando o que o usuario digitar no elemento input
// e selecioando o elemento span para futuras alteraçoes.
const day = document.querySelector('#day');
const daySpan = document.querySelector('.days span');

const month = document.querySelector('#month');
const monthSpan = document.querySelector(".months span");

const year = document.querySelector('#year');
const yearSpan = document.querySelector('.years span');

//pegando a data atual
let agora = new Date;
const meseAtual = agora.getMonth() + 1;
const anoAtual = agora.getFullYear();
const diaAtual = agora.getDate();

function ageCalculator() {
    let years = quantosAnos(year.value);
    yearSpan.textContent = years;
    let meses = mesesVivos(month.value);
    monthSpan.textContent = meses;
    let dias = diasVivos(day.value);
    daySpan.textContent = dias
}

function quantosAnos(AnoDenascimento) {
    let idade = anoAtual - AnoDenascimento;

    if (month.value > meseAtual) {
        idade -= 1;
        return idade;
    }
    else {
        return idade
    }
}
function mesesVivos(mesDeNascimento) {
    let meses = meseAtual - mesDeNascimento;
    if (meses <= 0) {
        meses += 12;
        return meses;
    }
    else {
        return meses;
    }

}
function diasVivos(DiaDeNascimento) {
    let dia = diaAtual - DiaDeNascimento;
    if (dia <= 0) {
        dia = dia + 30;
        return dia;
    }
    else {
        return dia;
    }

}