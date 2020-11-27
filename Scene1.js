class Scene1 extends Phaser.Scene {
    constructor() {
      super('logo');
    }

    preload ()
    {
      // Cargamos los assets
      
      // Scene1
      this.load.image('logo', 'assets/Logo.png');
      
      this.load.image('barandaEscalera' , 'assets/barandaescalera.png ');
      this.load.image('bobFrenteReposo' , 'assets/BobFrenteReposo.png ');
     // this.load.image('escalera' , 'assets/escalera.png ');
      //this.load.image('escenario' , 'assets/escenario.png ');
      this.load.image('lentes' , 'assets/lentes2.png ');
      this.load.image('nena1' , 'assets/nena1.png ');
      this.load.image('nena2' , 'assets/nena2.png ');
      this.load.image('nene1' , 'assets/nene1.png ');
      this.load.image('nene2' , 'assets/nene2.png ');
      this.load.image('nene3' , 'assets/nene3.png ');
      this.load.image('fondo', 'assets/Mosaico.png');
      this.load.tilemapTiledJSON('map', 'assets/superb.json');
      this.load.image('casita', 'assets/casita.png');
      this.load.image('casitaFondo', 'assets/casitaFondo.png');
      this.load.image('hambCocina', 'assets/hambCocina.png');
      
      // Scene2
      this.load.image('menu', 'assets/Menu.png');
      this.load.image('botonNuevoJuego' , 'assets/btn-nuevojuego1.png ');
      this.load.image('botonInfo' , 'assets/btn-info1.png ');
      this.load.image('botonCreditos' , 'assets/btn-creditos1.png ');
      this.load.image('botonsalirDelJuego' , 'assets/btn-salir1.png ');
      this.load.image('botonNuevoJuego2' , 'assets/btn-nuevojuego2.png ');
      this.load.image('botonInfo2' , 'assets/btn-info2.png ');
      this.load.image('botonCreditos2' , 'assets/btn-creditos2.png ');
      this.load.image('botonsalirDelJuego2' , 'assets/btn-salir2.png ');
  
      // cargar sonidos
      this.load.audio("musicagame" , "assets/musicaysonidos/Musicajuego.mp3");
      this.load.audio("botonsonido" , "assets/musicaysonidos/BotonSonido.mp3");
      this.load.audio("cambiohamburguesa10" , "assets/musicaysonidos/cambioH.mp3");
      this.load.audio("musicamenu" , "assets/musicaysonidos/MusicaMenu.mp3");
      this.load.audio("ganarsonido" , "assets/musicaysonidos/Ganar1.mp3");
      this.load.audio("perdersonido", "assets/musicaysonidos/Vomito.mp3");
      this.load.audio("cinematica", "assets/musicaysonidos/Cinematica.mp3");
      this.load.audio("pasarhoja", "assets/musicaysonidos/Pageskip.mp3");
  
      
      this.load.image('bobFrenteLentes' , 'assets/BobFrenteLentes.png ');     
     // this.load.image('area' , 'assets/escenariojugable.png ');      
      this.load.image('configMenuJuego' , 'assets/configmenu.png ');  
      this.load.spritesheet('BobAtras', 'assets/BobAtrasSS.png', { frameWidth: 180, frameHeight: 275 }); 
      this.load.spritesheet('BobDerecha', 'assets/BobDerechaSS.png', { frameWidth: 155, frameHeight: 255 });
      this.load.spritesheet('BobFrente', 'assets/BobFrenteSS.png', { frameWidth: 180, frameHeight: 275 });
      this.load.spritesheet('BobIzquierda', 'assets/BobIzquierdaSS.png', { frameWidth: 150, frameHeight: 255 });
      this.load.spritesheet('BobRecoge', 'assets/Bobrecogiendo.png', { frameWidth: 150, frameHeight: 255 });
      this.load.image('medioInvisible' , 'assets/medioInvisible.png ');
      this.load.image('DerIzqInvisible' , 'assets/DerIzqInvisible.png ');
      this.load.image('cajaInvisible' , 'assets/cajaInvisible.png ');
      this.load.image('barraTransparente' , 'assets/barraTransparente.png ');
      this.load.image('barraTransparenteVertical' , 'assets/barraTransparenteVertical.png ');
      this.load.image('mesa' , 'assets/mesa.png ');
      this.load.image('hamb' , 'assets/hamb.png ');
      this.load.image('tip' , 'assets/tip.png');
      this.load.image('puntaje' , 'assets/Puntaje.png');
      this.load.image('creditos' , 'assets/creditos.jpg ');
      this.load.image('botonMenuPrincipal1' , 'assets/botonMenuPrincipal1.png ');
      this.load.image('botonMenuPrincipal2' , 'assets/botonMenuPrincipal2.png ');
      this.load.image('menuPausa' , 'assets/fondoCapa.png ');
      this.load.image('reanudarPausa' , 'assets/botonReanudar1.png ');
      this.load.image('reanudarPausa2' , 'assets/botonReanudar2.png ');
      this.load.image('tituloPausa' , 'assets/tituloPausa.png ');
      this.load.image('botonAyuda1' , 'assets/botonAyuda1.png ');
      this.load.image('botonPausaMusica1' , 'assets/botonPausaMusica1.png ');
      this.load.image('botonPausaSonido1' , 'assets/botonPausaSonido1.png '); 
      this.load.image('hambur', 'assets/hamburguesa.png');
      this.load.image('puntos', 'assets/Puntos.png');
      this.load.image('interfaz', 'assets/interfaz.jpg');
      this.load.image('uiMochila', 'assets/ui_mochila.png');
      
      //ganaste o perdiste
      this.load.image('tituloGanaste' , 'assets/tituloGanaste.png ');
      this.load.image('botonReiniciar1' , 'assets/botonReiniciar1.png ');
      this.load.image('botonReiniciar2' , 'assets/botonReiniciar2.png ');
      
      //no reutilizables
      this.load.image('tituloNivelPerdido' , 'assets/tituloNivelPerdido.png ');
      this.load.image('botonReintentar1' , 'assets/botonReintentar1.png ');
      this.load.image('neneenfermo' , 'assets/nenemalo.png')
      this.load.image('botonReintentar2' , 'assets/botonReintentar2.png ');
      this.load.image('parte1' , 'assets/cinematica-1.jpg ');
      this.load.image('parte2' , 'assets/cinematica-2.jpg ');
      this.load.image('parte3' , 'assets/cinematica-3.jpg ');
      this.load.image('informacion', 'assets/Pantallainfo.jpg');
   
    }

    create() {
 
      var logo = this.add.image(600, 400, 'logo').setScale(0.8)
      
      
      // () =>
      // funciones flecha
      
      logo.setInteractive()
      logo.on('pointerdown', () => {  
                                      this.scene.start('menu');
                                    } );

      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }
}