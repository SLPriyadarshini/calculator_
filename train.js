var sum_val=0;
var symbl;
function calc(ele){
    console.log(ele);
    document.getElementById('disp').value+=ele
}

function evalfun(){
    var x=eval(document.getElementById('disp').value);
    
    document.getElementById('disp').value=x;
    console.log(x);
}
function clearfun(){
    document.getElementById('disp').value = "";
}
