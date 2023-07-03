input.onGesture(Gesture.Shake, function () {
    game.setScore(randint(1, 3))
    if (game.score() == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(3000)
        basic.clearScreen()
    } else if (game.score() == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(3000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
