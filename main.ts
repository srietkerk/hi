input.onButtonPressed(Button.A, function () {
    if (true) {
        led.plot(0, 0)
    }
})
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.setGroup(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
