/// <reference path='../typings/phaser.d.ts'/>

module MyGameModule {
export class Player extends Phaser.GameObjects.Sprite {
  private cursors:Phaser.Input.Keyboard.CursorKeys;
  private speed : number;

  constructor(
      scene:Phaser.Scene, 
      cursors:Phaser.Input.Keyboard.CursorKeys) {
    let width:number = scene.game.canvas.width;
    let height:number = scene.game.canvas.height;
    
    super(scene, width/2, 3 * height / 4, 'player', 0);
    this.cursors = cursors;
    this.speed = 5.5;
  }

  onCreate() {
    this.anims.play('player-idle');
  }

  onUpdate() {
    var cursors = this.cursors;
    var camera = this.scene.cameras.main;

    var dx : number = 0;
    var dy : number = 0;
    if (cursors.left.isDown)
    {
        this.anims.play('player-left');
        dx = -1;
    }
    else if(cursors.right.isDown)
    {
        this.anims.play('player-right');
        dx = +1;
    }
    else
    {
        this.anims.play('player-idle');
    }
    if(cursors.up.isDown)
        dy = -1;
    else if(cursors.down.isDown)
        dy = +1;
    
    this.x += dx * this.speed;
    this.y += dy * this.speed;

    if (this.x < 0)
        this.x = 0;
    else if(this.x > camera.width)
        this.x = camera.width;

    if(this.y < 0 + this.height)
        this.y = this.frame.height/2;
    else if(this.y > camera.height)
        this.y = camera.height - this.frame.height/2;
  }
}
}