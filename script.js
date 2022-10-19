function calcularVelocidade() {
  //Cria referência aos elementos da página
  let inVelocidadeP = document.getElementById('inVelocidadeP')
  let inVelocidadeC = document.getElementById('inVelocidadeC')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdos dos campos de entrada
  let velP = Number(inVelocidadeP.value)
  let velC = Number(inVelocidadeC.value)
  let res = 20 / 100 * velP
  
  //Se velocidade permitida e do condutor for 0 ou NaN
  if (velP == 0 && velC == 0 || isNaN(velP + velC)) {
    alert('Digite uma velocidade válida')
    velP.focus()
    return
  }
  //Se a velocidade do condutor for menor/igual à velocidade permitida
  if (velC <= velP) {
    outResposta.textContent = 'Sem multa'
  }
  //Se a velocidade do condutor for maior e menor/igual a 20%
  if (velC > velP && velC <= res) {
    outResposta.textContent = 'Multa leve'
  }
  //Se a velocidade do condutor for maior que a permitida e maior que 20% da permitida
  if (velC > velP && velC >= res) {
    outResposta.textContent = 'Multa grave'
  }
}
  
//Cria referência ao elemento btVerificar e associa a função ao click
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', calcularVelocidade)