let turno = 1;
let game = true;

const casillas = document.querySelectorAll(".casilla"); 
const jugador1 = document.querySelector("#j1");
const jugador2 = document.querySelector("#j2");
const btnReiniciar = document.querySelector("#btnR");
const btnAceptar = document.querySelector("#btnA");
const anuncio = document.querySelector(".ganadorAnuncio");

jugador1.value = "Jugador 1";
jugador2.value = "Jugador 2";

btnReiniciar.addEventListener("click", function(){
    juego.reiniciar();
})

btnAceptar.addEventListener("click", function(){
    if (anuncio.innerText == "")
        {game = true;}
    else{juego.reiniciar();}
})





casillas.forEach(function(casilla) {
  casilla.addEventListener("click", function() {

    if (turno%2 == 1 && casilla.innerText == "" && game)
    {   casilla.innerText = "X";
        const pos = this.dataset.p.split(',').map(Number);
        juego.agregar(pos, "X");
        
        turno++;
        
    }
    else if (casilla.innerText == "" && game)
    {   
        casilla.innerText = "O";
        const pos = this.dataset.p.split(',').map(Number);
        juego.agregar(pos, "O");
        
        turno++;
        
    }
    juego.checkWin("X");
    juego.checkWin("O");
    
  });
});




function crearJuego(nombre)
{
this.nombre = nombre;
let board = [
[0,0,0],
[0,0,0],
[0,0,0]
];

this.mostrarBoard = function mostrarBoard(){
    console.log(board);
}

 this.checkRows = function checkRows(num)
{
    for (let i = 0; i <= 2; i++)
    {   let cumple = true;

        for (let j = 0; j <= 2; j++){
            
            if (board[i][j] != num){cumple = false; break;}
            
        }

         if (cumple){ return true;}
        
        
    }

}






 this.checkColumns = function checkColumns(num)
{
    for (let j = 0; j <= 2; j++)
    {   let cumple = true;

        for (let i = 0; i <= 2; i++){
            
            if (board[i][j] != num){cumple = false; break;}
            
        }

         if (cumple){ return true;}
        
        
    }


}

this.checkDiagonal = function checkDiagonal(num){

    if ((board[0][0] == num && board[1][1] == num && board[2][2] == num) 
        || (board[0][2] == num && board[1][1] == num  && board[2][0] == num))
    {
        return true;
        
    }
}
    this.agregar = function agregar(p,jugador)
    {
        board[p[0]][p[1]] = jugador;
    }

    this.checkWin = function checkWin(num){
       
        this.checkDiagonal(num);
        this.checkRows(num);
        this.checkColumns(num);

        if (this.checkDiagonal(num) || this.checkRows(num) || this.checkColumns(num))
            { turno%2 == 0 ?  anuncio.innerText = `Gana ${jugador1.value}` : anuncio.innerText = `Gana ${jugador2.value}`;
         game = false;}
    }


    this.reiniciar = function reiniciar(){
        casillas.forEach(function(casilla){
        casilla.innerText = ""; 
        turno = 1;
        game = true;   
        anuncio.innerText = "";
        board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
            ];
        })
        }


}
////////////////////////////////////////////////////////////////////////
let juego = new crearJuego("tablerazo");









