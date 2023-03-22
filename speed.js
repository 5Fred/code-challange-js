// Solution is here
function challenge() {
    let speed =document.getElementById("first").value;
    if (speed <= 70){
        document.getElementById("result").innerHTML = "Ok";//will retun ok
    } else {
        const demerit = Math.floor((speed - 70) / 5);//numbers above 150 will retuen the licence is suspended
        if (demerit > 12) {  //number above 12 will be suspende
            document.getElementById("result").innerHTML = "License is suspended.";
        } else  {
            document.getElementById("result").innerHTML ='Points: ${demerit}.':
        }

}