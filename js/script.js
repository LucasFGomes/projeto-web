var inputs = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', somaSubtraiValor);
}

function somaSubtraiValor() {
  var resultado = parseFloat(this.value);
  var principal = document.getElementById('total-pagar');
  var total = parseFloat(principal.value);

  this.checked == true ? total += resultado : total -= resultado;

  principal.value = total;
}

function agendar() {
  var inputs = document.querySelectorAll('input[type="checkbox"]');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return alert('Agendado com sucesso!');
    }
  }
  return alert('Falha ao agendar, precisa marcar um dos serviços!');
}