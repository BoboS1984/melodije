input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 G B A F A C5 B ", 300)
    }
})
