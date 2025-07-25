let turno = 1;
let jugador = "jugador1"
const casillas = document.querySelectorAll(".casilla"); 


casillas.forEach(function(casilla) {
  casilla.addEventListener("click", function() {

    if (turno%2 == 1 && casilla.innerText == "")
    {   casilla.innerText = "X";
        const pos = this.dataset.p.split(',').map(Number);
        juego.agregar(pos, "X");
        juego.checkWin("X");
        turno++;
    }
    else if (casilla.innerText == "")
    {   
        casilla.innerText = "O";
        const pos = this.dataset.p.split(',').map(Number);
        juego.agregar(pos, "O");
        juego.checkWin("O");
        turno++;
    }
    
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

         if (cumple){ console.log(`la fila ${i + 1} cumple`); alert(`ganan las ${num}`)}
        
        
    }

}
this.saludo = function(){console.log(`el nombre del tablero es ${nombre}`);};





 this.checkColumns = function checkColumns(num)
{
    for (let j = 0; j <= 2; j++)
    {   let cumple = true;

        for (let i = 0; i <= 2; i++){
            
            if (board[i][j] != num){cumple = false; break;}
            
        }

         if (cumple){ console.log(`la columna ${j + 1} cumple`);alert(`ganan las ${num}`)}
        
        
    }


}

this.checkDiagonal = function checkDiagonal(num){

    if ((board[0][0] == num && board[1][1] == num && board[2][2] == num) 
        || (board[0][2] == num && board[1][1] == num  && board[2][0] == num))
    {
        console.log("hay ganador");
        alert(`ganan las ${num}`);
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
    }
}
////////////////////////////////////////////////////////////////////////






let juego = new crearJuego("tablerazo");







function crearJugador(jugador)
{

    return{
        jugador,
        ganador(){
            console.log(`gana el jugador ${jugador}`);   
        },
        saludar(){console.log(`hola, soy  ${jugador}`); }
    };

}


juego.checkRows("hay");



juego.checkColumns("hay");

juego.checkDiagonal("hay")

juego.mostrarBoard();
const j1 = crearJugador("pepe");
const j2 = crearJugador("pedro");



