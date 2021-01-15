var Buttons = /** @class */ (function () {
  function Buttons() {}
  Buttons.prototype.onButton = function () {
    return "<div><button id='sumar'>+</button><button id='restar'>-</button><button id='dividir'>/</button><button id='multiplicar'>x</button></div>";
  };
  return Buttons;
})();
var buttons = new Buttons();
document.body.innerHTML = buttons.onButton();
var sumNumbers = document.getElementById("sumar");
var restNumbers = document.getElementById("restar");
var divNumbers = document.getElementById("dividir");
var multNumbers = document.getElementById("multiplicar");
var Calculate = /** @class */ (function () {
  function Calculate(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }
  Calculate.prototype.calculation = function (sign) {
    var result;
    var message;
    switch (sign) {
      case "+":
        result = this.numberOne + this.numberTwo;
        return [
          '<div class="operador"> <p> ' +
            this.numberOne +
            " + " +
            this.numberTwo +
            ' = </p>\n          <input id="suma"></input><button id="button">Enviar</button></div>',
          result,
          (message = "Sumar"),
        ];
      case "-":
        result = this.numberOne - this.numberTwo;
        return [
          '<div class="operador"> <p>' +
            this.numberOne +
            " - " +
            this.numberTwo +
            ' = </p>\n          <input id="suma"></input><button id="button">Enviar</button></div>',
          result,
          (message = "Restar"),
        ];
      case "/":
        result = this.numberOne / this.numberTwo;
        return [
          '<div class="operador"> <p> ' +
            this.numberOne +
            " : " +
            this.numberTwo +
            ' = </p>\n          <input id="suma"></input><button id="button">Enviar</button></div>',
          result,
          (message = "Dividir"),
        ];
      case "x":
        result = this.numberOne * this.numberTwo;
        return [
          '<div class="operador"> <p> ' +
            this.numberOne +
            " x " +
            this.numberTwo +
            ' = </p>\n          <input id="suma"></input><button id="button">Enviar</button></div>',
          result,
          (message = "Multiplicar"),
        ];
    }
  };
  return Calculate;
})();
var sum = new Calculate(
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20)
);
var Operation = /** @class */ (function () {
  function Operation(sign) {
    this.sign = sign;
    this.result = sum.calculation(this.sign)[1];
  }
  Operation.prototype.showOperation = function () {
    return (
      "<div id=section>" +
      "<h1>" +
      sum.calculation(this.sign)[2] +
      "</h1>" +
      sum.calculation(this.sign)[0] +
      "</div>"
    );
  };
  return Operation;
})();
function sendValue() {
  var button = document.getElementById("button");
  button.onclick = function () {
    var num = +document.getElementById("suma").value;
    if (num === op.result) {
      return (document.body.innerHTML = "<h1 class='resultado'>Correcto</h1>");
    } else {
      return (document.body.innerHTML =
        "<h1 class='resultado'>Error, es: " + op.result + "</h1>");
    }
  };
}
var op;
sumNumbers.onclick = function () {
  op = new Operation("+");
  document.body.innerHTML = op.showOperation();
  sendValue();
};
restNumbers.onclick = function () {
  op = new Operation("-");
  document.body.innerHTML = op.showOperation();
  sendValue();
};
divNumbers.onclick = function () {
  op = new Operation("/");
  document.body.innerHTML = op.showOperation();
  sendValue();
};
multNumbers.onclick = function () {
  op = new Operation("x");
  document.body.innerHTML = op.showOperation();
  sendValue();
};
