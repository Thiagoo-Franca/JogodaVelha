class JogoDaVelha {
    constructor(jogador1, jogador2) {
        this.contador = 0;
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.vencedor = 0;
        this.vez = 1;
    }
    
    jogada(id) {
        
        const posicao = document.getElementById(id);
        const mostrar_vez = document.getElementById("mostra_vez");
        
        if (this.verificarJogadaPossivel(posicao)) {
            this.verificarVez(posicao);
            
            
            if(this.verificarVencedor() && this.contador < 8)
                {
                this.quemGanhou();
            }
            
            else if (this.contador >= 8) {
                alert("A partida empatou");
                this.resetar(0);
                return;
            }
            else {
                this.alternarVez()
            }
            
            this.alterarPlacar(mostrar_vez);
    
            this.contador += 1;
        }
    
        else {
            alert("Essa jogada nao é possivel")
        }
    }

    verificarJogadaPossivel(posicao) {
        if (posicao.textContent.trim() === "") {
            return true;
        }
        return false;
    }

    verificarVez(posicao) {
        if (this.vez === 1) {
            return this.jogadaBola(posicao);
        }
        return this.jogadaX(posicao);
    }
    
    jogadaBola (posicao) {
        posicao.textContent = "O";
    }

    jogadaX (posicao) {
        posicao.textContent = "X";
    }

    verificarVencedor() {
        if (
            (this.checkCels('um','dois','tres')) || (this.checkCels('quatro', 'cinco', 'seis')) || (this.checkCels('sete', 'oito', 'nove')) || 
            (this.checkCels('um','quatro','sete')) || (this.checkCels('dois','cinco','oito')) || (this.checkCels('tres','seis','nove')) ||
            (this.checkCels('um','cinco','nove')) || (this.checkCels ('sete','cinco','tres'))
            
        ){
            return true
        }
        return false
    }
    
    quemGanhou() {
        
        if(this.vez === 1) {
            this.vencedor = 1;
            this.jogador1.incrementarPontuacao();
            var pontuacao1 = document.getElementById("score1")
            pontuacao1.textContent = this.jogador1.pontuacao;
        }

        else {
            this.vencedor = 2;
            this.jogador2.incrementarPontuacao();
            const pontuacao2 = document.getElementById("score2")
            pontuacao2.textContent = this.jogador2.pontuacao;
        }
        
        alert("O jogador " + this.vez + " venceu!")
        this.resetar(this.vencedor);
        return;
    }
    
    alternarVez() {
        if (this.vez === 1) {
            this.vez = 2;
            return;
        }
        this.vez = 1;
        return;
    }
    
    checkCels(c1, c2, c3) {
        const cel1 = document.getElementById(c1).textContent;
        const cel2 = document.getElementById(c2).textContent;
        const cel3 = document.getElementById(c3).textContent;
        
        return ((cel1 === cel2 && cel2 === cel3) && (cel1 !== " " && cel2 !== " " && cel3 !== " "));
    }
    
    alterarPlacar (mostrar_vez) {
        mostrar_vez.textContent = "Vez: Jogador " + this.vez;
    }

    
    resetar(vencedor) {
        const jogador = document.getElementById("mostra_vez");
        const celulas = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis','sete', 'oito', 'nove']
    
        for (let i=0; i<9; i++)  {
            var res1 = document.getElementById(celulas[i]);
            res1.textContent = " ";
        }
       
        this.contador = 0;
    
        this.vencedorDaRodada(vencedor, jogador);
    }
    
    vencedorDaRodada(vencedor, jogador) {
        if (this.vencedor === 1) {
            jogador.textContent = "Vez: Jogador " + vencedor;
            this.vez = vencedor;
        }
        else if (vencedor === 2){
    
            jogador.textContent = "Vez: Jogador " + vencedor;
            this.vez = vencedor;
    
        }
        else if (this.vencedor === 0) {
            this.alternarVez()
            this.alterarPlacar(jogador)
        }    
    }
}

class Jogador {
    constructor() {
        this.nome = "nome"; //falta imprementar
        this.pontuacao = 0;
    }

    trocarNomeTela(id)
    {
        const trocarNome = document.getElementById(id)
        trocarNome.textContent = this.nome;

    }  


    incrementarPontuacao() {
        this.pontuacao += 1;
    }
}


const player1 = new Jogador();
const player2 = new Jogador();
const jogo = new JogoDaVelha(player1, player2);
