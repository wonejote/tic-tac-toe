let turno = 1;
let jugador = "jugador1"
/* const casillas = document.querySelectorAll(".casilla"); 


casillas.forEach(function(casilla) {
  casilla.addEventListener("click", function() {

    if (turno%2 == 1)
    {   casilla.style.backgroundColor = "red";
        turno++
    }
    else
    {
        casilla.style.backgroundColor = "blue";
        turno++
    }
  });
});*/




function crearJuego(nombre)
{
this.nombre = nombre;
let board = [
[0,"hay","hay"],
[0,0,0],
[0,0,0]
];

this.mostrarBoard = function mostrarBoard(){
    console.log(board);
}

 this.checkRows = function checkGanador(num)
{
    for (let i = 0; i <= 2; i++)
    {   let cumple = true;

        for (let j = 0; j <= 2; j++){
            
            if (board[i][j] != num){cumple = false; break;}
            
        }

         if (cumple){ console.log(`la fila ${i + 1} cumple`);}
        
        
    }

}
this.saludo = function(){console.log(`el nombre del tablero es ${nombre}`);};





 this.checkColumns = function checkGanador(num)
{
    for (let j = 0; j <= 2; j++)
    {   let cumple = true;

        for (let i = 0; i <= 2; i++){
            
            if (board[i][j] != num){cumple = false; break;}
            
        }

         if (cumple){ console.log(`la columna ${j + 1} cumple`);}
        
        
    }


}

this.checkDiagonal = function checkGanador(num){

    if ((board[0][0] == num && board[1][1] == num && board[2][2] == num) 
        || (board[0][2] == num && board[1][1] == num  && board[2][0] == num))
    {
        console.log("hay ganador")
    }
}
    this.agregar = function agregar(p,jugador)
    {
        board[p[0]][p[1]] = jugador;
    }
}
////////////////////////////////////////////////////////////////////////






let juego = new crearJuego("tablerazo");



juego.checkRows("hay");



juego.checkColumns("hay");

juego.checkDiagonal("hay")

juego.mostrarBoard();
let p1 = [0,0];
let p2 = [1,1];
let p3 = [2,2];
juego.agregar(p1,"hay");
juego.agregar(p2,"hay");
juego.agregar(p3,"hay");

juego.mostrarBoard();
juego.checkRows("hay");



juego.checkColumns("hay");

juego.checkDiagonal("hay")



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

const j1 = crearJugador("pepe");
const j2 = crearJugador("pedro");



