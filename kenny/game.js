(function () {

    'use strict';

    var map,
        layer,
        game = new Phaser.Game(1400, 1000, Phaser.AUTO, '', {

            preload: function () {

                game.load.tilemap('kenny', 'maps/map.json', null, Phaser.Tilemap.TILED_JSON);

                game.load.image('tiles', 'images/tiles_spritesheet.png');

            },

            create: function () {

                game.stage.backgroundColor = '#C8F6F8';

                map = game.add.tilemap('kenny');

                console.log(map);

                map.addTilesetImage('tiles_spritesheet', 'tiles');

                layer = map.createLayer('Level1');

                layer.resizeWorld();

            }

        });

}());