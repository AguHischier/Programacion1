
class Scene7 extends Phaser.Scene {
    constructor() {
      super('perder');
    }
    
    create(){
             
            this.add.image(640, 360, 'menuPausa').setScale(.9).setInteractive({cursor: 'context-menu'})
            this.add.image(640, 135, 'tituloNivelPerdido').setScale(1)
            this.add.image(500, 260, 'neneenfermo').setScale(.8)
            this.add.image(640, 260, 'neneenfermo').setScale(.8)
            this.add.image(780, 260, 'neneenfermo').setScale(.8)
            this.add.image(650, 380, 'puntos').setScale(.8)
            scorefinaltext = this.add.text(598, 367, score, { fontSize: '50px', fill: 'yellow', fontFamily: 'Comic Sans MS'});
            Musicagame.stop();   
            perdersonido = this.sound.add("perdersonido", {loop: false});
            perdersonido.play();
            var botonReintentar1 = this.add.image(650, 475, 'botonReintentar1').setScale(.7)
            var botonReintentar2 = this.add.image(650, 475, 'botonReintentar2').setScale(.7)
            botonReintentar2.setVisible(false);
            botonReintentar1.setInteractive()
            botonReintentar1.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();
            this.scene.stop('nivel1');
            this.scene.start('nivel1');
            score = 0;
            mochila = 0;
            contadorMalas = 0;
            contadorBuenas = 0;
            perder = 0;
            ganar = 0;
            totalBuenas = 0;
            nivel = 1;
            tiempoInicial = 30;
    } );
        
        var menuPrincipal = this.add.image(650, 570, 'botonMenuPrincipal2').setScale(.7)
        var menuPrincipal2 = this.add.image(650, 570, 'botonMenuPrincipal1').setScale(.7)
        menuPrincipal2.setVisible(false);
        menuPrincipal.setInteractive()
        menuPrincipal.on('pointerdown', () => { 
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        Musicagame.stop();
            this.scene.stop('nivel1');
            this.scene.start('menu');
            score = 0;
            mochila = 0;
            contadorMalas = 0;
            contadorBuenas = 0;
            perder = 0;
            ganar = 0;
            totalBuenas = 0;
            tiempoInicial = 30;
           
    } );

        botonReintentar1.on('pointerover', function (a) {
        botonReintentar2.setVisible(true)
        });
        botonReintentar1.on('pointerout', function (a){
        botonReintentar2.setVisible(false)
    });

        menuPrincipal.on('pointerover', function (b) {
        menuPrincipal2.setVisible(true)
        });
        menuPrincipal.on('pointerout', function (b){
        menuPrincipal2.setVisible(false)
    });
    }
}