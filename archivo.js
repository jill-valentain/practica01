
function num1(){
  let valor1 = parseFloat(document.getElementById("input1").value);
  let valor2;
  let mensaje = document.getElementById("div1");
  valor2 = valor1
  function num2(){
    if(typeof valor2 === "number" && valor2 >= 1){
        valor2 -= 1;
        mensaje.innerHTML = valor2;
        setTimeout(num2,1000);
    } else {
        mensaje.innerHTML = "Termino.....!!!";
    }
  }
  num2();
}
function num3(){
  let valor1 = parseFloat(document.getElementById("input1").value);
  let valor2;
  let mensaje = document.getElementById("div1");
  valor2 = valor1
    
  function num2(){    
    if(typeof valor2 === "number" && valor2 <= 99){
        valor2 += 1;
        mensaje.innerHTML = valor2;
        setTimeout(num2,1000);
    } else {
        mensaje.innerHTML = "Termino.....!!!";
    }
  }
  num2();
}
  
function num4(event) {
  if (event.key === "Enter") {
    let respuesta1 = prompt("1(ascendente) o 2(descendente)");

    if (respuesta1 === "1") {
      num1();
    } else if (respuesta1 === "2") {
      num3();
    }
  }
}

document.getElementById("button1").addEventListener("click", num1);
document.getElementById("button2").addEventListener("click", num3);
document.getElementById("input1").addEventListener("keydown", num4);
