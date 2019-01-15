/// <reference path='../typings/phaser.d.ts'/>
module MyGameModule {
export class GameplayScene extends Phaser.Scene {
  private player:MyGameModule.Player;
  private cursors:Phaser.Input.Keyboard.CursorKeys;

  constructor() {
    super({key: 'GameplayScene'});
  }

  preload() {
    this.load.spritesheet(
      'player', 
      'resources/player_64_noborder.png', 
      {
        frameWidth: 64,
        frameHeight: 64
      });
  } 

  create() {
    // Define all the controllers
    this.cursors = this.input.keyboard.createCursorKeys();

    // Define all the animations in the scene.
    this.anims.create({
      key: 'player-idle',
      frames: [{key:'player', frame:0}]
    });
    this.anims.create({
      key: 'player-right',
      frames: [{key:'player', frame:1}]
    });
    this.anims.create({
      key: 'player-left',
      frames: [{key:'player', frame:2}]
    });

    // Instantiate game objects
    this.player = new Player(this, this.cursors);
    this.add.existing(this.player);
    this.player.onCreate();
  }
  
  update() {
    this.player.onUpdate();
  }
}
}
