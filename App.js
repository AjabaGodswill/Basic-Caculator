function insert(num){
    document.form.calculatorInput.value=document.form.calculatorInput.value+num
}

function equal(){
    var exp =  document.form.calculatorInput.value;        
    if(exp){
       document.form.calculatorInput.value = eval(exp)
    }
}

function clean(){
    document.form.calculatorScreen.value="";
}