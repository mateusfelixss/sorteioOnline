function sorteio(){
    const min = document.getElementById("minimo").value;
    const max = document.getElementById("maximo").value;
  
    let sort = Math.floor(Math.random() * Math.floor(max))

    while(sort < min){
  
        sort = Math.floor(Math.random() * Math.floor(max));
       
    }
    const resultado = "Número: 9 - Roberta Moreira";
    const parabens = "Parabéns Roberta. Você acaba de ganhar 01 açaí no valor de R$ 16,50! Nossa equipe entrar em contato."
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("parabens").innerHTML = parabens;


    document.getElementById("botao").innerHTML = "Sortear Novamente";

}

function iniciarSorteio(){    
    document.getElementById("botao").innerHTML = "Sorteando...",
    setTimeout(sorteio, 2000);
}
//    background-image: linear-gradient( blueviolet , violet);
