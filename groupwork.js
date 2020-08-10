// for(i=29; i>0; i-=2){
//     console.log(i)
// }
var yellow = "Reduce speed.", green = "Continue onwards.", red = "Stop.";
for(i = 0; i <=2; i++){
    if(i == 0){
        console.log(green)
    }
    else if (i == 1){
        console.log(yellow)
    }
    else if (i == 2){
        console.log(red)
    }
    else{
        console.log("Light is out.")
    }
}
function trafficlights()