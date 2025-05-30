// Temperature conversion
document
  .getElementById("temperature-convert")
  .addEventListener("click", function () {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  });

// Weight conversion
document
  .getElementById("weight-convert")
  .addEventListener("click", function () {
    let kilo = document.getElementById("kilo").value;
    let pounds = kilo * 2.205;
    document.getElementById("pounds").value = pounds.toFixed(2);
  });

// Distance conversion
document
  .getElementById("distance-convert")
  .addEventListener("click", function () {
    let km = document.getElementById("km").value;
    let miles = km / 1.609;
    document.getElementById("miles").value = miles.toFixed(2);
  });
