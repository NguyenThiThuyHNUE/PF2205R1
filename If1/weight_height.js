function check() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (Math.pow(height,2))
    let result = "";
    console.log(bmi);
    if ( bmi < 16) {
        result = "gay cap do 3";
    } else if(bmi < 17) {
        result = "gay cap do 2";
    } else if (bmi < 18.5) {
        result = "gay cap do 1";
    } else {
        result = "Beo phi";
    }
document.getElementById("result").innerHTML = result;
    
}

