input.onButtonPressed(Button.A, function () {
    if (JOJO.get(LedSpriteProperty.X) > 0) {
        JOJO.change(LedSpriteProperty.X, -1)
    }
})
function doSomething () {
    if (Fire == true) {
        Fire = false
        Bullet = game.createSprite(JOJO.get(LedSpriteProperty.X), 4)
        Bullet.set(LedSpriteProperty.Brightness, 80)
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            Bullet.change(LedSpriteProperty.Y, -1)
            if (Bullet.isTouching(FF)) {
                FF_life = false
                FF.delete()
                game.addScore(1)
                Assault = true
                break;
            }
        }
        Bullet.delete()
        Fire = true
    }
}
input.onButtonPressed(Button.AB, function () {
    doSomething()
})
input.onButtonPressed(Button.B, function () {
    if (JOJO.get(LedSpriteProperty.X) < 4) {
        JOJO.change(LedSpriteProperty.X, 1)
    }
})
let FF: game.LedSprite = null
let Bullet: game.LedSprite = null
let FF_life = false
let Fire = false
let Assault = false
let JOJO: game.LedSprite = null
JOJO = game.createSprite(2, 4)
Assault = true
Fire = true
FF_life = true
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    if (Assault == true) {
        FF = game.createSprite(randint(0, 4), 0)
        FF_life = true
        FF.set(LedSpriteProperty.Brightness, 180)
        Assault = false
        for (let index = 0; index < 4; index++) {
            if (FF_life == true) {
                basic.pause(1000)
                FF.change(LedSpriteProperty.Y, 1)
            }
        }
        if (FF.get(LedSpriteProperty.Y) == 4) {
            if (FF_life == true) {
                game.removeLife(1)
                FF.delete()
            }
        }
        Assault = true
    }
})
