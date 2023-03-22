function maths() {
    let gradePonits = document.getElementById("Ponits").value;
    if(gradePoints > 79){
        alert("Grades A");// any number abive 78 will return A
    } else if(gradePonits > 60) {
        alert("Grade B");// any number above 60 will return B
    } else if(gradePonits > 49) {
        alert("Grade C");// any number above 49 will return C
    } else if(gradePonits > 40) {
        alert("Grade D");// any number above 40 will return D
    }else (
        alert("Grade E");// any number below 40 will return E
    )
}