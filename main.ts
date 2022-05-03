function GenorateWorld () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index < 50; index++) {
            if (y > randint(4, 10)) {
                tiles.setTileAt(tiles.getTileLocation(x, y), sprites.castle.tilePath2)
                tiles.setTileAt(tiles.getTileLocation(x + 1, y), sprites.castle.tilePath2)
                tiles.setTileAt(tiles.getTileLocation(x, y + 1), sprites.castle.tilePath5)
                tiles.setTileAt(tiles.getTileLocation(x + 1, y + 1), sprites.castle.tilePath2)
            } else {
            	
            }
            x += 2
        }
        x = 0
        y += 1
    }
    y += 1
}
let x = 0
let y = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Chunk1`)
GenorateWorld()
