function calcularVelocidade() {
  //Cria referência aos elementos da página
  let inVelocidadeP = document.getElementById('inVelocidadeP')
  let inVelocidadeC = document.getElementById('inVelocidadeC')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdos dos campos de entrada
  let velP = Number(inVelocidadeP.value)
  let velC = Number(inVelocidadeC.value)
  let res = 20 / 100 * velP
  
  if (velP == 0 && velC == 0 || isNaN(velP + velC)) {
    alert('Digite uma velocidade válida')
    velP.focus()
    return
  }

  if (velC <= velP) {
    outResposta.textContent = 'Sem multa'
  }

  if (velC > velP && velC <= res) {
    outResposta.textContent = 'Multa leve'
  }

  if (velC > velP && velC > res) {
    outResposta.textContent = 'Multa grave'
  }
  
}
//Cria referência ao elemento btVerificar e associa a função ao click
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', calcularVelocidade)