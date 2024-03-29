function appendToDisplay(input){
    document.getElementById("display").value += input;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calc(){
    let result;
    try{
        result = new Function('return ' + document.getElementById("display").value)();        
    }
    catch(error){
        result = "Error";
    }
    document.getElementById("display").value = result;
}

function validateNumericInput(event) {
    let keyCode = event.which || event.keyCode;
    // console.log(keyCode)
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 37 && keyCode <= 40) || keyCode === 8 || keyCode == 43 || keyCode == 46 || keyCode == 42 || keyCode == 47 || keyCode == 45) {
        return true;
    } 
    else if(keyCode === 13){
        calc();
    }
    else{
        event.preventDefault();
        return false;
    }
}