function bmi(){
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var bmi = w / (h / 100 * h / 100);
    var total = bmi.toFixed(2);
    document.getElementById('result').innerHTML = "Your BMI is " + total
}
// let note = '';
//     if(bmi < 18.5 ){
//         note = "Underweight";
//         }
//     if(bmi >= 18.5 && bmi < 25){
//          note = "Underweight";
// }
//     if(bmi >= 25 && bmi < 30){
//          note = "Overweight";
//     }
//     if(bmi >= 30){
//         note = "Obese";
//     }


//     document.querySelector('.comment').innerHTML = `Comment: you are <span id = "comment"> ${note} </span>`;
//    // document.getElementById('result').innerHTML = "";

