/// <reference path='../typings/phaser.d.ts'/>
/// <reference path="gameplay_scene.ts"/>

module MyGameModule {
export class MyGame {
  private game:Phaser.Game;
  public init() {
    let config = {
      type: Phaser.AUTO,
      width: 480,
      height: 640,
      banner: true,
      title: 'My Game',
      url: 'https://127.0.0.1:8080',
      version:'0.1',
      scene: [
        GameplayScene
      ]
    }
    this.game = new Phaser.Game(config);
  }
}
}

window.onload = () => {
  console.log("Initializing game");
  let game:MyGameModule.MyGame = new MyGameModule.MyGame();
  game.init();
}
