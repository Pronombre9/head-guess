input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("" + (lista_de_texto._pickRandom()))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    game.startCountdown(10000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (lista_de_texto._pickRandom()))
})
let lista_de_texto: string[] = []
radio.setGroup(784)
lista_de_texto = [
"koala",
"pan",
"pico",
"coco",
"minero",
"palo",
"huevo",
"juguete",
"marte",
"satanas"
]
basic.forever(function () {
	
})
