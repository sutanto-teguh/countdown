for (let index = 0; index <= 2; index++) {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - index)
}
basic.showString("Go!")
