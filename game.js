var config = {
    type: Phaser.AUTO,
     scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }

    },
    scene: [Scene1,prueba, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9]
 
    
};


var game = new Phaser.Game(config);
var cont = 1;
var nivel = 1;
var tiempoInicial = 0;
var timedEvent;
var  hamburgesas;
var hamburguesa1;
var hamburguesa2;
var hamburguesa3;
var hamburguesa4;
var hamburguesa5;
var hamburguesa6;
var hamburguesa7;
var hamburguesa8;
var hamburguesa9;
var puntuacion;
var juegoTerminado;
var jugador;
var hamburguesa;
var mozos;
var score = 0;
var puntajeMasAlto = 0;
var scoreText;
var tiempoText;
var cooldown;
var tiempoCoolDown = 10;
var cantMochila;
var scorefinaltext;
var ganar;
var perder;
var arte1;
var arte2;
var arte3;
var hamExtra;
var map;
var bateria;
var lentes;
var gafas;
var lentesBob;
//variables para sonidos
var Musicagame;
var Musicamenu;
var Musicacinematica;
var BotonSonido;
var cambioHsonido;
var ganarsonido;
var perdersonido;
var sonando;
var hoja;


//hamburguesas
var colores = [0x800a0c, 0x1998ff];
var ham1;
var ham2;
var ham3;
var ham4;
var ham5;
var ham6;
var ham7;
var ham8;
var ham9;
var contadorBuenas = 0;
var contadorMalas = 0;
var mochila =  0;