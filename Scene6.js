class Scene6 extends Phaser.Scene {
    constructor() {
      super('ganar');
    }
    
    create(){
        
        this.add.image(640, 360, 'menuPausa').setScale(.9).setInteractive({cursor: 'context-menu'})
        this.add.image(640, 135, 'tituloGanaste').setScale(1)
        if (perder === 0){
            this.add.image(550, 295, 'hambur').setScale(1.5)
            this.add.image(650, 250, 'hambur').setScale(2.1)
            this.add.image(750, 295, 'hambur').setScale(1.5)
        }
        if (perder === 1){
            this.add.image(550, 295, 'hambur').setScale(1.5)
            this.add.image(650, 250, 'hambur').setScale(2.1)
            this.add.image(750, 295, 'hambur').setScale(1.5).setTint(0x000000)
        }
        if (perder === 2){
            this.add.image(550, 295, 'hambur').setScale(1.5).setTint(0x000000)
            this.add.image(650, 250, 'hambur').setScale(2.1)
            this.add.image(750, 295, 'hambur').setScale(1.5).setTint(0x000000)
        }
        this.add.image(650, 380, 'puntos').setScale(.8)
        scorefinaltext = this.add.text(600, 365, score, { fontSize: '50px', fill: 'yellow', fontFamily: 'Comic Sans MS'});
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        ganarsonido.play();   
        var botonReiniciar1 = this.add.image(650, 475, 'botonReiniciar1').setScale(.7)
        var botonReiniciar2 = this.add.image(650, 475, 'botonReiniciar2').setScale(.7)
        botonReiniciar2.setVisible(false)
        botonReiniciar1.setInteractive()
        botonReiniciar1.on('pointerdown', () => {
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        //ganarsonido.destroy();

    
        this.scene.stop('nivel1');
        
        this.scene.start('nivel1');
        
        mochila = 0;
        contadorMalas = 0;
        contadorBuenas = 0;
        perder = 0;
        ganar = 0;
        totalBuenas = 0;
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
        //ganarsonido.destroy();
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

        botonReiniciar1.on('pointerover', function (a) {
        botonReiniciar2.setVisible(true)
        });
        botonReiniciar1.on('pointerout', function (a){
        botonReiniciar2.setVisible(false)
    });

        menuPrincipal.on('pointerover', function (b) {
        menuPrincipal2.setVisible(true)
        });
        menuPrincipal.on('pointerout', function (b){
        menuPrincipal2.setVisible(false)
    });

    
    }
}