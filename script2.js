function glucose() {
  let glucose1 = document.getElementById('glucose1');
  let gluco1Num = Number(glucose1.value);
  if (gluco1Num > 100) {
    window.alert('Above normal!');
  }
}
