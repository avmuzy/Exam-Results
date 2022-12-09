function calc() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('dateofbirth');
  var idade = ano - Number(fano.value);
  var res = document.getElementById('age');
  res.innerHTML = ` ${idade}`;

  var height = document.getElementById('height');
  var weight = document.getElementById('weight');
  var bmi = weight / (height**2)
  
}
