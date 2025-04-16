var student = {
    name:"",
    type: "student"
};

document.addEventListener("DOMContentLoaded", contentLoaded);
function contentLoaded(event){
    console.log("DOM fully loaded and parsed");
    document.getElementById('name').addEventListener("keyup", keyUp);
}
function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').value;
    var numericOutput = 0;
    for (var i = 0; i < student.name.length; i++){
        numericOutput += student.name.charCodeAt(i);
    }
    
    var output = "Total Numeric value of person name is "+numericOutput;
    document.getElementById('output').innerText = output;
    console.log(output);
}