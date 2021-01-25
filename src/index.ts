import * as Phaser from 'phaser';

import AsteriodsScene from './AsteroidsScene';

import './index.css'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: AsteriodsScene
};

var game = new Phaser.Game(config);
