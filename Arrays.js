// function lastArray(){
//     return test[test.length - 1]
// }
// var test = [42, "String", true, undefined, null]
// test.unshift("first")
//     console.log(test.length)
//     console.log(lastArray())
var artist = [1, 2, 3, 4, 5], i = 0
while(i < artist.length){
    console.log(artist[i])
    i++
    }
artist.splice(0, 1)
artist.splice(1, 1)
artist.push("Kevin Kramer")
artist.unshift(6, 7)
// artist.pop()
console.log(artist)



