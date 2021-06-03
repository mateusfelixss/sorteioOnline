function sorteio(){
    const min = document.getElementById("minimo").value;
    const max = document.getElementById("maximo").value;
  
    let sort = Math.floor(Math.random() * Math.floor(max))

    while(sort < min){
  
        sort = Math.floor(Math.random() * Math.floor(max));
       
    }
    //const resultado = "Número: 9 - Roberta Moreira";
    //const parabens = "Parabéns"
    document.getElementById("resultado").innerHTML = sort;
    //document.getElementById("parabens").innerHTML = parabens;


    document.getElementById("botao").innerHTML = "Sortear Novamente";

}

function iniciarSorteio(){    
    document.getElementById("botao").innerHTML = "Sorteando...",
    setTimeout(sorteio, 2000);
}
