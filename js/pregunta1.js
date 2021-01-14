function suma(){
var num1=document.getElementById('text1').value;    
var num2=document.getElementById('text2').value;     
var resu=parseInt(num1)+parseInt(num2);     
document.getElementById('ElResultado').innerHTML =+resu; 
console.log("Sumar: "+resu);
}

function resta(){
    var num1=document.getElementById('text1').value;
    var num2=document.getElementById('text2').value;
    var resu=parseInt(num1)-parseInt(num2);
    document.getElementById('ElResultado').innerHTML =+resu;
    console.log("restar: "+resu);
}
function multiplicar(){
    var num1=document.getElementById('text1').value;
    var num2=document.getElementById('text2').value;
    var resu=parseInt(num1)*parseInt(num2);
    document.getElementById('ElResultado').innerHTML =+resu;
    console.log("multiplicar: "+resu);
}
function dividir(){
    var num1=document.getElementById('text1').value;
    var num2=document.getElementById('text2').value; 
    var resu=parseInt(num1)/parseInt(num2);
    document.getElementById('ElResultado').innerHTML =+resu;
    console.log("dividir: "+resu);
} 

