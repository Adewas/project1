input.onButtonPressed(Button.A, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
