let tabuada = 2;
let nome = "Maria"
function escreva () {
    // 2 x 1 =
    document.write(tabuada + " x 1 + "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 + "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 + "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 + "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 + "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 + "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 + "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 + "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 + "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 + "+(tabuada*10)+"<br><br>");
    document.write("Feito por " + nome);

}
//for(inicio,validação,incremento)
function minhaTabuada(){
  for(let i = 1; i <= 10; i++){
    document.write("Tabuada do " + i + "<br>")
    for(let j = 1; <= 10; j++){
    document.write(i + " x " + j + " = "+(j*i)+"<br>");
  }
  document.write("<br>");

  }
}

function quadrado (){
  for(let i = 2; i <= 20; i++){
    document.write("O quadrado de " + 1 + " é " + (i*i) + "<br>");
  }
}
