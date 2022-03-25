input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . #
        # # # # #
        # . # . #
        # . # . .
        # . # . .
        `)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # # #
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . #
            # . # # #
            # . # . #
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setVolume(300)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
