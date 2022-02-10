input.onButtonPressed(Button.A, function () {
    run = 1
    code = code * 10 + randint(1, 3)
    for (let index = 0; index < level + 1; index++) {
        if (convertToText(code).substr(run, 1) == convertToText(1)) {
            led.plot(0, 2)
        } else if (convertToText(code).substr(run, 1) == convertToText(2)) {
            led.plot(4, 2)
        } else if (convertToText(code).substr(run, 1) == convertToText(3)) {
            led.plot(0, 2)
            led.plot(4, 2)
        }
        basic.pause(500)
        led.unplot(0, 2)
        led.unplot(4, 2)
        basic.pause(100)
        run += 1
    }
    level += 1
})
let run = 0
let code = 0
let level = 0
level = 0
code = 0
