var inputs = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', sumSubtractValor);
}

function sumSubtractValor() {
  var resultado = parseFloat(this.value);
  var principal = document.getElementById('total-pagar');
  var total = parseFloat(principal.value);

  this.checked == true ? total += resultado : total -= resultado;

  principal.value = total;
}