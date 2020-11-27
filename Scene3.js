var tip;
var areajuego;
var boblentes;
var clic;
var totalBuenas;
var target = new Phaser.Math.Vector2();
class Scene3 extends Phaser.Scene {
    constructor() {
      super('nivel1');
    }

    create() {
        
        map = this.make.tilemap({ key: 'map' });
        var groundTiles = map.addTilesetImage('fondo');
        var groundLayer  = map.createDynamicLayer('fondo', groundTiles, 0, 0);
       
        this.add.image(638, 110, 'casitaFondo').setScale(0.6, 0.7)
        
        this.add.image(640, 110, 'casita').setScale(0.6, 0.7)
        
        

        
        //aca estan las colisiones estaticas
        var  cajaDeColision = this.physics.add.staticGroup();
        //pared abajo
        cajaDeColision.create(610, 730, 'barraTransparente');
        //pared arriba
        cajaDeColision.create(610, -10, 'barraTransparente');
        //cocina
        cajaDeColision.create(430, 25, 'DerIzqInvisible');
        cajaDeColision.create(530, 25, 'DerIzqInvisible');
        cajaDeColision.create(630, 25, 'DerIzqInvisible');
        cajaDeColision.create(730, 25, 'DerIzqInvisible');
        cajaDeColision.create(850, 25, 'DerIzqInvisible');
        //pared izquierda
        cajaDeColision.create(-10, 320, 'barraTransparenteVertical');
        //pared derecha
        cajaDeColision.create(1290, 320, 'barraTransparenteVertical');
        //mesa izquierda
        cajaDeColision.create(50, 430, 'DerIzqInvisible');//para que no pisen a los niños
        cajaDeColision.create(150, 430, 'DerIzqInvisible');//para que no pisen a los niños
        cajaDeColision.create(250, 430, 'DerIzqInvisible');//para que no pisen a los niños
        //mesa derecha
        cajaDeColision.create(1000, 430, 'DerIzqInvisible');//para que no pisen a los niños
        cajaDeColision.create(1100, 430, 'DerIzqInvisible');//para que no pisen a los niños
        cajaDeColision.create(1200, 430, 'DerIzqInvisible');//para que no pisen a los niños
        
        var uiMochila = this.add.image(450, 110, 'uiMochila').setScale(.5)
        
        

        if (nivel === 1){
                                // Mesa izquierda
            //nena del medio
            this.add.image(170, 550, 'nena1').setScale(.7)
            //nena de la derecha
            this.add.image(300, 570, 'nena2').setScale(.7)
            //nene de la izquierda
            this.add.image(45, 570, 'nene2').setScale(.7)
            this.add.image(170, 600, 'mesa').setScale(1.1, 0.8)
                            // Mesa derecha
            //nene izquierda
            this.add.image(995, 570, 'nene2').setScale(.7)
            //nene derecha
            this.add.image(1250, 570, 'nene1').setScale(.7)
            //nene medio
            this.add.image(1120, 550, 'nene3').setScale(.7)
            this.add.image(1120, 600, 'mesa').setScale(1.1 , 0.8)

            
            
            
        }else{
            
                            // Mesa abajo izquierda
            //nena del medio
            this.add.image(170, 550, 'nena1').setScale(.7)
            //nena de la derecha
            this.add.image(300, 570, 'nena2').setScale(.7)
            //nene de la izquierda
            this.add.image(45, 570, 'nene2').setScale(.7)
            this.add.image(170, 600, 'mesa').setScale(1.1, 0.8)
                            // Mesa abajo derecha
            //nene izquierda
            this.add.image(995, 570, 'nene2').setScale(.7)
            //nene derecha
            this.add.image(1250, 570, 'nene1').setScale(.7)
            //nene medio
            this.add.image(1120, 550, 'nene3').setScale(.7)
            this.add.image(1120, 600, 'mesa').setScale(1.1 , 0.8)

                            //mesa arriba derecha
            //nene izquierda
            this.add.image(965, 110, 'nene2').setScale(.7)
            //nene derecha
            this.add.image(1220, 110, 'nene1').setScale(.7)
            //nene medio
            this.add.image(1090, 90, 'nene3').setScale(.7)
            this.add.image(1090, 140, 'mesa').setScale(1.1 , 0.8)

        }
        
        
    
        

        // Grupo de hamburguesas
         //// aleatoridad de variables
        hamburguesa1 = colores[Phaser.Math.Between(0,1)];
         if(hamburguesa1===colores[0]){
            hamburguesa2 = colores[1];
         }else{hamburguesa2 = colores[0]};

        hamburguesa3 = colores[Phaser.Math.Between(0,1)];
        hamburguesa4 = colores[Phaser.Math.Between(0,1)];

         if(hamburguesa4===colores[0]){
            hamburguesa5 = colores[1];
            }else{hamburguesa5 = colores[0]};

        hamburguesa6 = colores[Phaser.Math.Between(0,1)];
        hamburguesa7 = colores[Phaser.Math.Between(0,1)];

        if(hamburguesa7===colores[0]){
            hamburguesa8 = colores[1];
         }else{hamburguesa8 = colores[0]};
        
        hamburguesa9 = colores[Phaser.Math.Between(0,1)];
         
        ////Creacion de hamburguesas 
          hamburgesas = this.physics.add.staticGroup();

         

         if (nivel === 1){
                                        //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 560, 'hamb').setScale(1.5).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 560, 'hamb').setScale(1.5).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 560, 'hamb').setScale(1.5).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 560, 'hamb').setScale(1.5).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 560, 'hamb').setScale(1.5).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 560, 'hamb').setScale(1.5).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
            tiempoInicial = 0;

         }else{
                                        //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 560, 'hamb').setScale(1.5).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 560, 'hamb').setScale(1.5).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 560, 'hamb').setScale(1.5).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 560, 'hamb').setScale(1.5).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 560, 'hamb').setScale(1.5).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 560, 'hamb').setScale(1.5).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
                                        //mesa arriba derecha
            //izquierda
            ham7 = hamburgesas.create(1010, 100, 'hamb').setScale(1.5).setTint(hamburguesa7).setInteractive({ cursor: 'pointer' })
            //medio
            ham8 = hamburgesas.create(1090, 100, 'hamb').setScale(1.5).setTint(hamburguesa8).setInteractive({ cursor: 'pointer' })
            //derecha
            ham9 = hamburgesas.create(1170, 100, 'hamb').setScale(1.5).setTint(hamburguesa9).setInteractive({ cursor: 'pointer' })
            //hamburguesa extra en la cocina
            hamExtra = hamburgesas.create(640, 142, 'hamb').setScale(1.5).setInteractive({ cursor: 'pointer' }).disableBody(true, true)
            lentes = hamburgesas.create(450, 165, 'lentes').setScale(0.5).setInteractive({ cursor: 'pointer' }).setVisible(true)
            lentes.alpha = 0.5
            lentes.disableInteractive();
            tiempoInicial = 0;
         }
         
        
        // Creamos el jugador
        jugador = this.physics.add.sprite(640, 480, 'bobFrenteReposo').setScale(0.7);
        boblentes = this.physics.add.sprite(640, 480, 'bobFrenteLentes').setScale(0.7);
        gafas = this.physics.add.sprite(jugador.x, jugador.y - 62, 'lentes').setScale(0.7).setVisible(false);

        jugador.setBounce(0);
        jugador.setCollideWorldBounds(true);
        perder = 0;
        ganar = 0;
       
        
        
        // Animaciones
        this.anims.create({
            key: 'Derecha',
            frames: this.anims.generateFrameNumbers('BobDerecha', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 
        this.anims.create({
            key: 'Izquierda',
            frames: this.anims.generateFrameNumbers('BobIzquierda', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 
        this.anims.create({
            key: 'Quieto',
            frames: [ { key: 'bobFrenteReposo', frame: 1 } ],
            frameRate: 20,
        }); 

        // Collisiones + funcion para que el jugador se frene cuando choca
        this.physics.add.collider(jugador, cajaDeColision, ()=> {   target.x = jugador.x;
                                                                    target.y = jugador.y;
                                                                    jugador.body.reset(target.x, target.y);
                                                                    });

        // Ponemos el puntaje en pantalla
        var scoreimage = this.add.image(640, 26, 'puntaje').setScale(0.7)
        scoreText = this.add.text(645, 11, score, { fontSize: '26px', fill: 'purple', fontFamily: 'Comic Sans MS'});
        tiempoText = this.add.text(600, 220, 'Tiempo: ' + tiempoInicial, { fontSize: '26px', fill: 'purple', fontFamily: 'Comic Sans MS'});
        
        //mochila
       // this.add.image(460, 120, 'puntos').setScale(0.3,0.5)

        //tip
        tip = this.add.image(650, 320, 'tip')
        
        // Botones interactivos
        var configMenuJuego = this.add.image(830, 50, 'configMenuJuego').setScale(0.5);
        configMenuJuego.setInteractive()
        configMenuJuego.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();
            target.x = jugador.x;
            target.y = jugador.y;
            this.scene.pause();
            this.scene.launch('pausa')
            
            
        
        
        //this.physics.add.collider(jugador, escalera);
    } );

     // Evento para cambiar el color de las hamburguesas
     
    this.time.delayedCall(5000, carteltiempo, [], this); 
    this.time.delayedCall(3500, cambiotiempo, [], this);

    // Tiempo nivel
    
    timedEvent = this.time.addEvent({ delay: 1000, callback: tiempoNivel, callbackScope: this, loop: true });
    cooldown = this.time.addEvent({ delay: 1000, callback: coolDown, callbackScope: this, loop: true });
     
    Musicagame= this.sound.add("musicagame", {loop: true});
    Musicagame.play();
    
    
    // Contamos la cantidad de hamburguesas buenas y malas que aparecen
    if(nivel === 1){
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    }else{
        score = score;
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa7 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa8 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa9 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        
    }
   
    if (nivel === 1){
        mochila = contadorMalas + 1;
    }else{
        mochila = contadorMalas + 2;
    }
    


    totalBuenas = contadorBuenas;
    cantMochila = this.add.text(450, 95, mochila, { fontSize: '26px', fill: 'purple', fontFamily: 'Comic Sans MS'});
    

    }

    
    update(){
        
        
        // Tiempo y contador mochila
        tiempoText.setText('Tiempo: ' + tiempoInicial);
        cantMochila.setText(mochila);

        if (tiempoInicial <= 0){
            tiempoInicial = 0;
        }

       

        // Spawn hamburguesa extra
        if(contadorMalas === 2 && mochila === 1 && cont === 1 && nivel === 2){
            hamExtra.setVisible(true);
            //agarrarExtra();
            cont++;       
        }

        //Puntaje Alto
        if (score > puntajeMasAlto){
            puntajeMasAlto = score;
        }

        if(nivel === 2)
        {lentes.on('pointerdown', function (quieto) {

            
            quieto.x = target.x;
            quieto.y = target.y;
            
            gafas.setVisible(true);
            gafas.setPosition(jugador.x, jugador.y - 62);
            ponerLentes();
            this.input.on('pointerdown', function(){
                target.x = jugador.x;
                target.y = jugador.y;
            })
            this.time.delayedCall(3500, cambiotiempo, [], this);
           
        }, this);}
       
        // Calcula la distancia entre el jugador y el "click"

        if(nivel === 1){
        var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
        var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
        var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
        var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
        var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
        var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
        var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
        }else{
        var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
        var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
        var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
        var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
        var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
        var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
        var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
        var distancia8 = Phaser.Math.Distance.Between(ham7.x, ham7.y, target.x, target.y);
        var distancia9 = Phaser.Math.Distance.Between(ham8.x, ham8.y, target.x, target.y);
        var distancia10 = Phaser.Math.Distance.Between(ham9.x, ham9.y, target.x, target.y);
        var distancia11 = Phaser.Math.Distance.Between(hamExtra.x, hamExtra.y, target.x, target.y);
        
        }
        

        if (distancia2 < 9)
        {          
            if(hamburguesa1 === colores[0] ){
                this.physics.add.overlap(jugador, ham1, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham1, agarrarmala, null, this);
            }
            
        }
        if (distancia3 < 9)
        {
            if(hamburguesa2 === colores[0] ){
                this.physics.add.overlap(jugador, ham2, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham2, agarrarmala, null, this);
            }
           
        }
        if (distancia4 < 9)
        {          
            if(hamburguesa3 === colores[0] ){
                this.physics.add.overlap(jugador, ham3, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham3, agarrarmala, null, this);
            }
        }
        if (distancia5 < 9)
        {          
            if(hamburguesa4 === colores[0] ){
                this.physics.add.overlap(jugador, ham4, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham4, agarrarmala, null, this);
            }
        }
        if (distancia6 < 9)
        {
            if(hamburguesa5 === colores[0] ){
                this.physics.add.overlap(jugador, ham5, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham5, agarrarmala, null, this);
            }
        }
        if (distancia7 < 9)
        {
            if(hamburguesa6 === colores[0] ){
                this.physics.add.overlap(jugador, ham6, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham6, agarrarmala, null, this);
            }
        }

        if (distancia8 < 9)
        {
            if(hamburguesa7 === colores[0] ){
                this.physics.add.overlap(jugador, ham7, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham7, agarrarmala, null, this);
            }
        }

        if (distancia9 < 9)
        {
            if(hamburguesa8 === colores[0] ){
                this.physics.add.overlap(jugador, ham8, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham8, agarrarmala, null, this);
            }
        }

        if (distancia10 < 9)
        {
            if(hamburguesa9 === colores[0] ){
                this.physics.add.overlap(jugador, ham9, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham9, agarrarmala, null, this);
            }
        }

        if (distancia11 < 9)
        {
            this.physics.add.overlap(jugador, hamExtra, agarrarExtra(jugador, hamExtra), null, this);
            
        }

        

        //console.log(distance)

        if (contadorMalas === 0 || (mochila === 0 && contadorMalas === 0))
        {
            this.scene.pause();
            nivel++;
            this.scene.launch('ganar')
          
        
        }else{
            if (perder === totalBuenas || (mochila === 0 && contadorMalas > 0 ))
        {
                this.scene.pause();
                this.scene.launch('perder')
                
                       
        }
        }

        
        
    
        // Activa las animaciones derecha o izquierda
        if (jugador.body.speed > 0)
        {
               if (jugador.x < target.x){
            jugador.anims.play('Derecha', true);
             }
              if (jugador.x > target.x){
            jugador.anims.play('Izquierda', true);
              }
    
            //  4 is our distance tolerance, i.e. how close the source can get to the target
            //  before it is considered as being there. The faster it moves, the more tolerance is required.
            if (distance < 6)
            {
                jugador.body.reset(target.x, target.y);
            }
        }
        
        else{
            jugador.anims.play('Quieto', true);
            
        }
        
    }
  
}

function carteltiempo(){
    tip.destroy();
    tip = null;
    tiempoInicial = 30;
}
function cambiotiempo(){
    if( nivel === 1){
        ham1.setTint();
        ham2.setTint();
        ham3.setTint();
        ham4.setTint();
        ham5.setTint();
        ham6.setTint();
        boblentes.destroy();
        boblentes = null;
    }else{
        ham1.setTint();
        ham2.setTint();
        ham3.setTint();
        ham4.setTint();
        ham5.setTint();
        ham6.setTint();
        ham7.setTint();
        ham8.setTint();
        ham9.setTint();
        if(tiempoInicial < 30 && tiempoInicial > 0){
            gafas.setVisible(false);
                        
        }else {
            boblentes.setVisible(false);
            boblentes = null;
        }
        
    }
        

        
        clic = this.input.on('pointerdown', function (pointer) {

        
            target.x = pointer.x;
            target.y = pointer.y;
            
            
            // Mov at 250 px/s:
            this.physics.moveToObject(jugador, target, 250);
    
        }, this);
    
    return false;
    
}

function ponerLentes(){
    ham1.setTint(hamburguesa1);
    ham2.setTint(hamburguesa2);
    ham3.setTint(hamburguesa3);
    ham4.setTint(hamburguesa4);
    ham5.setTint(hamburguesa5);
    ham6.setTint(hamburguesa6);
    ham7.setTint(hamburguesa7);
    ham8.setTint(hamburguesa8);
    ham9.setTint(hamburguesa9);
    lentes.alpha = 0.5;
    lentes.disableInteractive();
    
}

function agarrarmala(bob, malarda){
    cambioHsonido = this.sound.add("cambiohamburguesa10" , {loop: false});
    cambioHsonido.play();
    target.x = jugador.x;
    target.y = jugador.y;
    malarda.disableBody(true,true);
    score += 100;
    scoreText.setText(score);
    cantMochila.setText(mochila);
    ganar += 1;
    mochila--;
    contadorMalas--;

}

function agarrarbuena(bob, buena){
    cambioHsonido = this.sound.add("cambiohamburguesa10" , {loop: false});
    cambioHsonido.play();
    
    target.x = jugador.x;
    target.y = jugador.y;
    buena.disableBody(true,true);
    score -= 50;
    scoreText.setText(score);
    cantMochila.setText(mochila);
    perder += 1;
    mochila--;
    contadorBuenas--;
}

function agarrarExtra(bob, extra){    
    target.x = jugador.x;
    target.y = jugador.y;
    hamExtra.disableBody(true,true);
    //extra.setVisible(false);
    mochila++;
    cont = 1;
}

function tiempoNivel() {
    tiempoInicial = tiempoInicial - 1;
    //textoTiempo.setText();
    if (tiempoInicial == 0){
        this.scene.launch('perder')
       
    }
}

function coolDown(){
    tiempoCoolDown--;
    if(tiempoInicial === 20 || tiempoInicial === 10)
    {
        if (nivel === 2)
        {//lentes.setVisible(true);
        lentes.alpha = 1
        lentes.setInteractive();}
    }
    if (tiempoCoolDown === 0){
        tiempoCoolDown = 10;
    }
    
}