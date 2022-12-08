function idade() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('dateofbirth');
  var idade = ano - Number(fano.value);
  var res = document.getElementById('age');
  res.innerHTML = ` ${idade}`;
}
