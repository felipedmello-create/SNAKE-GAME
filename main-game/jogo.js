const COLUNAS = 20;
const LINHAS = 20;
const pontos_por_comida = 10;

const velocidade = parseInt(localStorage.getItem('snake_velocidade')) || 130;

let cobra = [];
let direcao = {x:1, y: 0};
let proximaDirecao = {x: 1, y: 0};
let comida = {x: 0, y: 0};
let ponntuacao = 0;
let recorde = parseInt(localStorage.getItem('snake_recorde')) || 0;
let intervalo = null;
let emJogo = false;

//GRADE
const grade = document.getElementById('grade');
let celulas = [];

//<---Criar Grade--->

function criarGrade() {
    grade.innerHTML = '';
    celulas = [];

    for (let y = 0; y < LINHAS; y++) {
        const linha = [];

        for (let x = 0; x < COLUNAS; x++) {
            const celula = document.createElement('div');
            celula.className = 'celula';
            grade.appendChild(celula);
            linha.push(celula);
        }
        celulas.push(linha);
    }
}

function limparGrade() {
    for (let y = 0; y < LINHAS; y++) {
        for (let x = 0; x < LINHAS; x++) {
            celulas[y][x].className = 'celula'
        }
    }
}

function renderizar() {
    limparGrade();

    //Desenhar comida
    celulas[comida.y][comida.x].classList.add('comida');

    for (let i = 1; i < cobra.length; i++) {
        celulas[cobra[i].y][cobra[i].x].classList.add('cobra');
    }
}