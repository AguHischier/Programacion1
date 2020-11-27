class Scene5 extends Phaser.Scene {
    constructor() {
      super('pausa');
    }

create() {
    
    var menuPausa = this.add.image(640, 350, 'interfaz').setScale(1.3)
    //var tituloPausa = this.add.image(640, 190, 'tituloPausa').setScale(0.8)
   
   // this.add.image(640, 90, 'botonAyuda1').setScale(.9)
    
   var reanudarPausa = this.add.image(644, 520, 'reanudarPausa').setScale(.5)
   var reanudarPausa2 = this.add.image(644, 520, 'reanudarPausa2').setScale(.5)
   reanudarPausa2.setVisible(false)
            reanudarPausa.setInteractive()
            reanudarPausa.on('pointerdown', () => {
                BotonSonido = this.sound.add("botonsonido" , {loop: false});
                BotonSonido.play();
                 
                this.scene.resume('nivel1');
                target.x = jugador.x;
                target.y = jugador.y;
                reanudarPausa.destroy ();
                //tituloPausa.destroy();
                menuPausa.destroy ();
                menuPrincipal.destroy ();
                this.scene.stop();
                
            } );
            var menuPrincipal =  this.add.image(644, 578, 'botonMenuPrincipal2').setScale(.5)
            var menuPrincipal2 =  this.add.image(644, 578, 'botonMenuPrincipal1').setScale(.5)
            menuPrincipal2.setVisible(false)
                menuPrincipal.setInteractive()
                menuPrincipal.on('pointerdown', () => {
                    BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();
            Musicagame.stop();
                    this.scene.stop('nivel1');
                    this.scene.start('menu');
        score = 0;
        nivel = 1;
        mochila = 0;
        contadorMalas = 0;
        contadorBuenas = 0;
        perder = 0;
        ganar = 0;
        totalBuenas = 0;
        
        

                    

        } );   
        reanudarPausa.on('pointerover', function (a) {
            reanudarPausa2.setVisible(true)
       });
       reanudarPausa.on('pointerout', function (a){
           reanudarPausa2.setVisible(false)
       });
        menuPrincipal.on('pointerover', function (b) {
            menuPrincipal2.setVisible(true)
       });
       menuPrincipal.on('pointerout', function (b){
           menuPrincipal2.setVisible(false)
       });
}





}