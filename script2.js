function calc() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('dateofbirth');
  var idade = ano - Number(fano.value);
  var res = document.getElementById('age');
  res.innerHTML = ` ${idade}`;

  var height = document.getElementById('height');
  var heigval = Number(height.value);
  var weight = document.getElementById('weight');
  var weigval = Number(weight.value);
  var bmi = weigval / heigval ** 2;
  var bmires = document.getElementById('bmi');
  bmires.innerHTML = `${bmi}`;
}
