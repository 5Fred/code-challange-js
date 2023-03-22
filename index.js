/*1.ask user for the input
2.verify the input is between 0-100
3.if not within the range display error
4.if it is,it grades it accordingly
5.A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40

*/
//question 1

var input=propmt("what is your grade")
validateInput(input)

function validateInput(input){
    if (input>0 && input <100){
        displayGrade(input)

    }else {
        alert("Number not within the range")
    }}

function displayGrade(grade){
    if (grade>79 && grade<100 ){
        alert("Your grade is an A")
}   else if (grade>=60 && grade<=79){
    alert("Your grade is an B")
}
}
else {
    alert("Your grade is an E ")
}



//question 2