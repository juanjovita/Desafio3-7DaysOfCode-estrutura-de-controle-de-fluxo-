var resposta1 = prompt('Qual área deseja se especializar?  Digite 1 para FRONT-END ou 2 para BACK-END.')
var opcao1 = ""
var opcao2 = ""

if(resposta1 ==1){
  opcao1 = prompt('Você escolheu FRONT-END. Qual framework deseja se especializar? Digite 1 para REACT ou 2 para VUE.')
}
else if(resposta1 ==2){
opcao2 = prompt('Você escolheu BACK END! Digite 1 para JAVA ou 2 para C# .')
}
else{
  alert('VOCÊ PRECISAR ESCOLHER UMA OPÇÃO!')
}

let msg  = prompt('Tem mais alguma tecnologia que deseja aprender? Digite 1 para SIM e 2 para NÃO.')