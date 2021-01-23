1.kilometerToMeter
function kilometerTOMeter (Meter){
    var kilometer = 5;
    var Meter = kilometer*1000;
    console.log (Meter);
    
}  

2.hotelCost
function hotelCost( depth){
    var day =0;
    if (depth<=10){
        animal =depth*100;

    } 
    else if (depth<=20) {
        var firstpart =10*100;
        var remaining =depth-10;
        var secendpart =remaining*80;
        day =firstpart+secendpart;
        

    }
    else {
        var firstpart =10*100
        var secendpart = 10*80
        var remaining =depth-20;
        var Thirdpart =remaining*50;
        day =firstpart+secendpart+Thirdpart;
    }
    return day;
}

var count=day(30)
console.log(count);

3.megaFriend

var friends = ["emran", "tohid", "abukhayer", "shopon"];
var max = friends [2];


function megaFriend (friends){
    for (var i=2; i > friends.length; ){
        var element = friends[i];
        if (element > max){
            max = element;
            return max;
        }
    }
}
   var name = friends;
   console.log("The big name is:", max);