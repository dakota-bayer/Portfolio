function keyPress(key){
    if(typeof key == "number"){
        concatenate(key);
    }
    else{
        if(key == '.' && !document.getElementById("result").value.includes(".") ){
            concatenate(key);
        }
        else if(key == 'C'){
            document.getElementById("result").value = 0;
            localStorage.clear();
        }
        else if(key == '='){
            //sum
        }
        else{
            //save num
            saveNum(document.getElementById("result").value);
        }
    }
}

function concatenate(key){
    var currentlyDisplayed = document.getElementById("result").value;
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

    document.getElementById("result").value = result;
}

function saveNum(num){
    localStorage.setItem(localStorage.length + 1, num);
    document.getElementById("result").value = 0;    
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