$(document).ready(function() {

  var array = [1,2,3,4,5];
  var numero = prompt("inserisci un numero da 1 a 5 per vincere")
  var pory = false;

  //passo l'array cercando la var numero
  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    // controllo se il numero cercato è uguale ai numeri nell'array
    if (item == numero) {
      pory = true;
    }
  }

  // se il numero inserito è stato trovato, pory diventa true
  if (pory == true) {
    alert('Hai vinto un biscotto, ma se piove si scioglie');
  }else {
    alert(numero + ' ti sembra un numero compreso tra 1 e 5?');
  }
})
