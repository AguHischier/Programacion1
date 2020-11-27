class Scene2 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    create() {

      this.add.image(650, 350, 'menu').setScale(0.7)
     
      var botonNuevoJuego = this.add.image(670, 690, 'botonNuevoJuego').setScale(0.65)
      var botonNuevoJuego2 = this.add.image(670, 690, 'botonNuevoJuego2').setScale(0.65) 
      botonNuevoJuego2.setVisible(false);
        botonNuevoJuego.setInteractive()
        botonNuevoJuego.on('pointerdown', () => {
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();
          Musicamenu.stop();
                                       this.scene.start('cinematica');
                                       } );
      
      var botonInfo = this.add.image(825, 690, 'botonInfo').setScale(0.65)
      var botonInfo2 = this.add.image(825, 690, 'botonInfo2').setScale(0.65)  
      botonInfo2.setVisible(false);
      botonInfo.setInteractive()
      botonInfo.on('pointerdown', () => {
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
                                     this.scene.start('info');
                                     } );                                
      var botonCreditos = this.add.image(950, 691, 'botonCreditos').setScale(0.65) 
      var botonCreditos2 = this.add.image(950, 691, 'botonCreditos2').setScale(0.65)
      botonCreditos2.setVisible(false);  
      botonCreditos.setInteractive()
      botonCreditos.on('pointerdown', () => {  
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        
                                       this.scene.start('creditos'); } );
      
      var botonsalirDelJuego = this.add.image(1140, 690, 'botonsalirDelJuego').setScale(0.65) 
      var botonsalirDelJuego2 = this.add.image(1140, 690, 'botonsalirDelJuego2').setScale(0.65) 
      botonsalirDelJuego2.setVisible(false);
      botonsalirDelJuego.setInteractive()
      botonsalirDelJuego.on('pointerdown', () => {  
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        Musicamenu.stop();
                                       this.scene.start('logo'); } );   

      Musicamenu= this.sound.add("musicamenu", {loop: true});
      Musicamenu.play();


                                
      botonNuevoJuego.on('pointerover', function (c) {
        botonNuevoJuego2.setVisible(true)
      });
      botonNuevoJuego.on('pointerout', function (c){
        botonNuevoJuego2.setVisible(false)
    });
      botonInfo.on('pointerover', function (d) {
        botonInfo2.setVisible(true)
    });
      botonInfo.on('pointerout', function (d) {
        botonInfo2.setVisible(false)
      });
      botonCreditos.on('pointerover', function (f) {
      botonCreditos2.setVisible(true)
     });
      botonCreditos.on('pointerout', function (f) {
      botonCreditos2.setVisible(false)
      });
      botonsalirDelJuego.on('pointerover', function (f) {
        botonsalirDelJuego2.setVisible(true)
       });
       botonsalirDelJuego.on('pointerout', function (f) {
        botonsalirDelJuego2.setVisible(false)
        });
    }
    
}