function keyPress(key){
    if(typeof key == "number"){
        concatenate(key);
    }
    else{
        if(key == '.'){
            if(document.getElementById("display").value.includes(".")){
                // already have one decimal in input, ignore this one
            }
            else{
                concatenate(key);
            }
        }
        else if(key == 'C'){
            document.getElementById("display").value = 0;
            localStorage.clear();
        }
        else if(key == '='){
            //calculate 
        }
        else{
            //save num
            saveNum(document.getElementById("display").value);
        }
    }
}

function concatenate(key){
    var currentlyDisplayed = document.getElementById("display").value;
    var result;

    if(currentlyDisplayed == '0'){
        if(key == '.'){
            result = currentlyDisplayed + key;
        }
        else{
            result = key;
        }
    }
    else{
        result = currentlyDisplayed + key;
    }

    document.getElementById("display").value = result;
}

function saveNum(num){
    localStorage.setItem(localStorage.length + 1, num);
    document.getElementById("display").value = 0;    
}

function caculate(num1, num2, operand){
    var result = 0;
    switch(operand){
        case "/":{
            result = num1 / num2;
            break;
        }
        case "*":{
            result = num1 * num2;
            break;
        }
        case "+":{
            result = num1 + num2;
            break;
        }
        case "-": {
            result = num1 - num2;
            break;
        }
    }
    return result;
}