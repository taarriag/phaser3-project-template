/// <reference path='../typings/phaser.d.ts'/>
module MyGameModule {
export class GameplayScene extends Phaser.Scene {
  private player:Phaser.GameObjects.Sprite;
  constructor() {
    super({key: 'GameplayScene'});
  }

  preload() {
    this.load.spritesheet(
      'player', 
      'resources/player_64.png', 
      {
        frameWidth: 64,
        frameHeight: 64
      });
  } 

  create() {
    let width:number = this.game.canvas.width;
    let height:number = this.game.canvas.height;
    this.player = this.add.sprite(width/2, 3 * height / 4, 'player', 0);
    this.anims.create({
      key: "idle",
      frames: [{key:'player', frame:0}]
    });
    this.player.anims.play('idle');
  }

  update() {

  }
}
}
