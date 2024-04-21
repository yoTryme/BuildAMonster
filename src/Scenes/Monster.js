class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;
        
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 40;

        this.leftarmX = this.bodyX - 90;
        this.leftarmY = this.bodyY + 40;

        this.rightarmX = this.bodyX +90;
        this.rightarmY = this.bodyY +40;

        this.leftlegX = this.bodyX - 40;
        this.leftlegY = this.bodyY + 150;

        this.rightlegX = this.bodyX + 40;
        this.rightlegY = this.bodyY + 150;
        
        this.antenna1X = this.bodyX + 10;
        this.antenna1Y = this.bodyY -140;

        this.antenna2X = this.bodyX -11;
        this.antenna2Y = this.bodyY -140;

        this.counter = 0;
        this.smileType = 'Smile';

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        this.load.atlasXML("monsterParts", "body_greenE.png");
        this.load.atlasXML("monsterParts", "arm_redA.png");
        this.load.atlasXML("monsterParts", "leg_redB.png");
        this.load.atlasXML("monsterParts", "mouthH.png");
        this.load.atlasXML("monsterParts", "mouthC.png");
        this.load.atlasXML("monsterParts", "detail_white_antenna_large.png");
        this.load.atlasXML("monsterParts", "eye_cute_light.png");
        this.load.atlasXML("monsterParts", "detail_white_antenna_large.png");
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.



        //left arm
        my.sprite.leftarm = this.add.sprite(this.leftarmX, this.leftarmY, "monsterParts", "arm_redA.png");
        //right arm
        my.sprite.rightarm = this.add.sprite(this.rightarmX, this.rightarmY, "monsterParts", "arm_redA.png");
        my.sprite.leftarm.flipX = true;

        //left leg                                                                                                                                                                                                                  
        my.sprite.leftleg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_redB.png");
        //right leg
        my.sprite.rightleg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_redB.png");
        my.sprite.leftleg.flipX = true;
        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenE.png");
        //eye
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");
        // 2 smile
        my.sprite.smileH = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthH.png");
        my.sprite.smileC = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthC.png");

        my.sprite.smileC.visible = false;
        //right antenna
        my.sprite.antenna1 = this.add.sprite(this.antenna1X, this.antenna1Y, "monsterParts", "detail_white_antenna_large.png");
        //left antenna
        my.sprite.antenna2 = this.add.sprite(this.antenna2X, this.antenna2Y, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.antenna2.flipX = true;


        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        //'S' key to display smile
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
            my.sprite.smileC.visible = false;
            my.sprite.smileH.visible = true;
        }

        //'F' key to display fangs
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F).isDown) {
            my.sprite.smileH.visible = false;
            my.sprite.smileC.visible = true;

        }
        // Movement speed variable
        const speed = 2; 

        // Move monster left
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= speed;
            }
        }

        // Move monster right
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += speed;
            }
        }
    }

}