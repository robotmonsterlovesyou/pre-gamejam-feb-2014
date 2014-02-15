(function () {

    'use strict';

    var scott,
        kim,
        ramona,
        cursor,
        camera,
        game = new Phaser.Game(800, 284, Phaser.AUTO, '', {

            preload: function () {

                game.load.image('level1', 'images/level1.png');

                game.load.atlasXML('scott_pilgrim', 'images/scott_pilgrim_sprite_atlas_default.png', 'images/scott_pilgrim_sprite_atlas_default.xml');

            },

            create: function () {

                game.world.setBounds(0, 0, 3630, 284);

                game.add.sprite(0, 0, 'level1');

                kim = game.add.sprite(600, 180, 'scott_pilgrim');
                kim.scale.setTo(1.0, 1.0);
                kim.anchor.setTo(0.5, 1);
                kim.body.collideWorldBounds = true;
                kim.body.immovable = true;

                kim.animations.add('victory', Phaser.Animation.generateFrameNames('kim_victory_frame_', 1, 7, '.gif'));

                kim.animations.play('victory', 9, true);

                ramona = game.add.sprite(500, 200, 'scott_pilgrim');
                ramona.scale.setTo(1.0, 1.0);
                ramona.anchor.setTo(0.5, 1);
                ramona.body.collideWorldBounds = true;
                ramona.body.immovable = true;

                ramona.animations.add('victory', Phaser.Animation.generateFrameNames('ramona_victory_frame_', 1, 7, '.gif'));

                ramona.animations.play('victory', 9, true);

                scott = game.add.sprite(100, 200, 'scott_pilgrim');
                scott.scale.setTo(1.0, 1.0);
                scott.anchor.setTo(0.5, 1);
                scott.body.collideWorldBounds = true;

                scott.animations.add('back_attack', Phaser.Animation.generateFrameNames('scott_pilgrim_back_attack_frame_', 1, 6, '.gif'));
                scott.animations.add('callstriker', Phaser.Animation.generateFrameNames('scott_pilgrim_callstriker_frame_', 1, 21, '.gif'));
                scott.animations.add('dash', Phaser.Animation.generateFrameNames('scott_pilgrim_dash_frame_', 1, 8, '.gif'));
                scott.animations.add('guitar', Phaser.Animation.generateFrameNames('scott_pilgrim_guitar_frame_', 1, 6, '.gif'));
                scott.animations.add('idle', Phaser.Animation.generateFrameNames('scott_pilgrim_idle_frame_', 1, 8, '.gif'));
                scott.animations.add('pummel', Phaser.Animation.generateFrameNames('scott_pilgrim_pummel_frame_', 1, 6, '.gif'));
                scott.animations.add('victory', Phaser.Animation.generateFrameNames('scott_pilgrim_victory_frame_', 1, 8, '.gif'));

                scott.animations.play('idle', 9, true);

                scott.body.collideWorldBounds = true;

                cursor = game.input.keyboard.createCursorKeys();

                game.camera.follow(scott);

            },

            update: function () {

                var speed = 300;

                scott.body.velocity.x = 0;
                scott.body.velocity.y = 0;

                game.physics.collide(scott, kim);
                game.physics.collide(scott, ramona);

                if (cursor.right.isDown || cursor.left.isDown || cursor.up.isDown || cursor.down.isDown) {

                    scott.animations.play('dash', 9, true);

                    if (cursor.right.isDown) {

                        scott.body.velocity.x = speed;
                        scott.scale.setTo(1.0, 1.0);

                    } else if (cursor.left.isDown) {

                        scott.body.velocity.x = -speed;
                        scott.scale.setTo(-1.0, 1.0);

                    }

                    if (cursor.up.isDown) {

                        scott.body.velocity.y = -speed;

                    } else if (cursor.down.isDown) {

                        scott.body.velocity.y = speed;

                    }

                } else {

                    scott.animations.play('idle', 9, true);

                }

            }

        });

}());