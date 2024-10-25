let contador = 0;
let p1 = 0;
let p2 = 0;
let vencedor = -1; //0 ou 1
let vez = 0; // 0 ou 1

function jogada(id) {

    var posicao = document.getElementById(id);
    var mostrar_vez = document.getElementById("mostra_vez");

    
    //é possivel jogar nessa posicao
    if (posicao.textContent.trim() === ""){
        if(vez === 0) {
            posicao.textContent = "O"
        }
        else {
            posicao.textContent = "X"
            }
        if(verificarVencedor() && contador < 8)
        {
            if(vez === 0) {
                vencedor = 0;
                p1 += 1
                var pontuacao1 = document.getElementById("score1")
                pontuacao1.textContent = p1
            }
            else {
                    vencedor = 1;
                    p2 += 1
                    var pontuacao2 = document.getElementById("score2")
                    pontuacao2.textContent = p2
            }
            alert("O jogador " + vez + " venceu!")
            return resetar(vencedor)
        }
        else if (contador >= 8) {
            alert("A partida empatou")
            return resetar(-1)
            
        }
        else {
        
        if (vez === 0) {
            vez = 1;
        }
        else {
            vez = 0;
        }}
        
        mostrar_vez.textContent = "Vez: Jogador " + vez;
        contador += 1;
    
    }
    else {
        alert("Essa jogada nao é possivel")
    }
}

    

function resetar(vencedor) {
    var jogador = document.getElementById("mostra_vez");


    //limpar o campo
    var res1 = document.getElementById('um');
    res1.textContent = " ";

    var res1 = document.getElementById('dois');
    res1.textContent = " ";
    
    var res1 = document.getElementById('tres');
    res1.textContent = " ";
    
    var res1 = document.getElementById('quatro');
    res1.textContent = " ";
    
    var res1 = document.getElementById('cinco');
    res1.textContent = " ";
    
    var res1 = document.getElementById('seis');
    res1.textContent = " ";
    
    var res1 = document.getElementById('sete');
    res1.textContent = " ";
    
    var res1 = document.getElementById('oito');
    res1.textContent = " ";
    
    var res1 = document.getElementById('nove');
    res1.textContent = " ";
    
    contador = 0;

    if (vencedor === 0) {
        jogador.textContent = "Vez: Jogador " + vencedor;
        vez = vencedor
    }
    else if (vencedor === 1){

        jogador.textContent = "Vez: Jogador " + vencedor;
        vez = vencedor

    }
    else if (vencedor === -1) {
        if (vez === 0) {
            vez = 1;
        }
        else {
            vez = 0;
        }
        jogador.textContent = "Vez: Jogador: " + vez;
    }

}




function verificarVencedor() {
    if (
        (checkCels('um','dois','tres')) || (checkCels('quatro', 'cinco', 'seis')) || (checkCels('sete', 'oito', 'nove')) || 
        (checkCels('um','quatro','sete')) || (checkCels('dois','cinco','oito')) || (checkCels('tres','seis','nove')) ||
        (checkCels('um','cinco','nove')) || (checkCels ('sete','cinco','tres'))
        
    ) {
        return true
    }
    return false
    
}

function checkCels(c1, c2, c3) {
    const cel1 = document.getElementById(c1).textContent;
    const cel2 = document.getElementById(c2).textContent;
    const cel3 = document.getElementById(c3).textContent;

    return ((cel1 === cel2 && cel2 === cel3) && (cel1 !== " " && cel2 !== " " && cel3 !== " "));
}
