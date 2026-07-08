scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Hornet.isHittingTile(CollisionDirection.Bottom)) {
        Jump = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jump < Maxjump) {
        Jump += 1
        Hornet.vy = -100
    }
})
let Jump = 0
let Maxjump = 0
let Hornet: Sprite = null
scene.setBackgroundColor(13)
Hornet = sprites.create(assets.image`Hornetright`, SpriteKind.Player)
controller.moveSprite(Hornet, 150, 0)
Hornet.ay = 100
Hornet.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
Maxjump = 2
