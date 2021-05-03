input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    RingbitCar.brake()
})
basic.forever(function () {
	
})
