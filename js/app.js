var operandoa;
var operandob;
var operacion;

function init(){
	
var display = document.getElementById("display");
var borrar = document.getElementById("on");
var sign = document.getElementById("sign");
var dividido = document.getElementById("dividido");
var multiplicacion = document.getElementById("por");
var resta = document.getElementById("menos");
var punto = document.getElementById("punto");
var igualda = document.getElementById("igual");
var suma = document.getElementById("mas");			
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");	
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");	
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");	
var cero = document.getElementById("0");

display.textContent = "0"	

uno.onclick = function(event){
	
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "1";
display.textContent = display.textContent.substring(0, 8);
}
			
dos.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "2";
display.textContent = display.textContent.substring(0, 8);
	}
	
tres.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "3";
display.textContent = display.textContent.substring(0, 8);
	}
	
cuatro.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "4";
display.textContent = display.textContent.substring(0, 8);
	}
	
cinco.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "5";
display.textContent = display.textContent.substring(0, 8);
	}
	
seis.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "6";
display.textContent = display.textContent.substring(0, 8);
	}
	
siete.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "7";
display.textContent = display.textContent.substring(0, 8);
	}
	
ocho.onclick = function(event){
	if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "8";
display.textContent = display.textContent.substring(0, 8);
	}
	
nueve.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "9";
display.textContent = display.textContent.substring(0, 8);
	}
	
cero.onclick = function(event){
if (display.textContent == "0") {
display.textContent = "";
}
display.textContent += "0";
display.textContent = display.textContent.substring(0, 8);
	}
	
punto.onclick = function (event) {
if (display.textContent.indexOf(".") == -1){
if (display.textContent == "0")
display.textContent = "0.";
else
display.textContent += ".";
}
}	

sign.onclick = function (event) {
    display.innerHTML = parseFloat(display.innerHTML ) * -1;
}	
	
borrar.onclick = function(event){
	resetear();
	}
	
suma.onclick = function(event){
	operandoa = display.textContent;
	operacion = "+";
	limpiar();
	}
	
resta.onclick = function(event){
	operandoa = display.textContent;
	operacion = "-";
	limpiar();
	}
	
multiplicacion.onclick = function(event){
	operandoa = display.textContent;
	operacion = "*";
	limpiar();
	}
	
dividido.onclick = function(event){
	operandoa = display.textContent;
	operacion = "/";
	limpiar();
	}
	
igualda.onclick = function(event){
	operandob = display.textContent;
	resolver();
	}
		
function limpiar(){
display.textContent= "";
	
	}
	
function resetear(){
display.textContent="";
operandoa = 0;
operandob = 0;
operacion = "";	
}

function resolver(){
	var res = 0;
	switch(operacion){
	case "+":
    res = parseFloat(operandoa) + parseFloat(operandob);	
	break;
	
	case "-":
    res = parseFloat(operandoa) - parseFloat(operandob);	
	break;
	
	case "*":
    res = parseFloat(operandoa) * parseFloat(operandob);	
	break;
	
	case "/":
    res = parseFloat(operandoa) / parseFloat(operandob);	
	break;
}
resetear();
display.textContent = res;

}	

}
init();
