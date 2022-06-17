// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let result = null;
    let _BMI = weight / (height ** 2)
    if (_BMI <= 18.5) {
        result = 'Underweight';
    } else if (_BMI <= 25) {
        result = 'Normal'
    } else if (_BMI <= 30) {
        result = 'Overweight'
    } else result = 'Obese'

    return result;
}