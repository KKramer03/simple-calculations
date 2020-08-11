// // var phone = {
// //     name: "Phone",
// //     brand: "Xiaomi",
// //     os: "Android",
// //     sentence: function(){
// //         return "This is my " + this.name + " from " + this.brand + ". It uses " + this.os + ".";
// //     }
// // }
// // console.log(phone.sentence());
// // for(x in phone){
// //     var txt ="";
// //     txt += phone[x];
// //     console.log(txt);
// // }
// var car = {
//     name: "Tesla",
//     color: "Black",
//     horsepower: 1000,
//     sentence: function(){
//         return "This car is a " + this.color + " " + this.name + " with " + this.horsepower + " horsepower." 
//     }
// }
// // console.log(car.sentence());
// // for(x in car){
// //     var txt ="";
// //     txt += car[x] + " ";
// //     console.log(txt);   
// // }
// car.class = "Sedan";
// car.start = function(){
//     return "Start your engine."
// }
// console.log(car.start());

myPenguin = {
    name: 'Frobisher',
    origin: 'Doctor Who Magazine',
    author: 'Steve Parkhouse, John Ridgway'
}
console.log("Hello, I'm a penguin and my name is " + myPenguin.name + "!");
myPenguin.canFly = false;
myPenguin.chirp = function(){
    return "CHIRP CHIRP! Is this what penguins sound like?"
}
myPenguin.sayHello = function(){
    return "Hello, I'm a penguin and my name is " + this.name + "!"
}
console.log(myPenguin.sayHello());
myPenguin.name = "Penguin McPenguinFace"
console.log(myPenguin.sayHello());
myPenguin.fly = function(){
    if(this.canFly == true){
        return "I can fly!"
    }
    else{
        return "No flying for me"
    }
}
console.log(myPenguin.fly());
myPenguin.canFly = true
console.log(myPenguin.fly());
function printKeys(x){
    var keys = Object.keys(x)
    for(i = 0; i < keys.length; i++){
        console.log(keys[i]);
    }
};
console.log(printKeys(myPenguin));
var text = "", x
for(property in myPenguin){
    text += myPenguin[property] + " "
}
console.log(text);

