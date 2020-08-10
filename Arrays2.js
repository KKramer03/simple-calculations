var colors = ["Blue", "Green", "Orange", "Purple", "Red"]
console.log(colors[0])
console.log(colors[2])
colors.splice(4, 1, "Ultraviolet")
var fourthColor = colors[3]
colors.push("Pink")
colors.unshift("Yellow")
console.log(colors.length)
colors.pop()
console.log(colors.length)
for(i = 0; i < colors.length; i++){
    console.log(colors[i])
}
for(i = 0; i < colors.length; i++){
    console.log(i + ", " + colors[i])
}
var lastColor = colors[colors.length - 1]
