function insert(num){
    document.form.calculatorScreen.value=document.form.calculatorScreen.value+num
}

function equal(){
    var exp =  document.form.calculatorScreen.value;        
    if(exp){
       document.form.calculatorScreen.value = eval(exp)
    }
}

function clean(){
    document.form.calculatorScreen.value="";
}