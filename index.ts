class Buttons {
  onButton(): string {
    return "<div><button id='sumar'>+</button><button id='restar'>-</button><button id='dividir'>/</button><button id='multiplicar'>x</button></div>";
  }
}

const buttons = new Buttons();

document.body.innerHTML = buttons.onButton();

const sumNumbers = document.getElementById("sumar");
const restNumbers = document.getElementById("restar");
const divNumbers = document.getElementById("dividir");
const multNumbers = document.getElementById("multiplicar");

class Calculate {
  sing: string;
  constructor(public numberOne: number, public numberTwo: number) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }
  calculation(sign): Array<string> {
    let resultOperation: number;
    let result: string;

    switch (sign) {
      case "+":
        resultOperation = this.numberOne + this.numberTwo;
        result = resultOperation.toString();
        return [
          `<div class="operador"> <p> ${this.numberOne} + ${this.numberTwo} = </p>
          <input id="suma"></input><button id="button">Enviar</button></div>`,
          result,
          "Sumar",
        ];

      case "-":
        resultOperation = this.numberOne - this.numberTwo;
        result = resultOperation.toString();
        return [
          `<div class="operador"> <p>${this.numberOne} - ${this.numberTwo} = </p>
          <input id="suma"></input><button id="button">Enviar</button></div>`,
          result,
          "Restar",
        ];
      case "/":
        resultOperation = this.numberOne / this.numberTwo;
        result = resultOperation.toString();
        return [
          `<div class="operador"> <p> ${this.numberOne} : ${this.numberTwo} = </p>
          <input id="suma"></input><button id="button">Enviar</button></div>`,
          result,
          "Dividir",
        ];
      case "x":
        resultOperation = this.numberOne * this.numberTwo;
        result = resultOperation.toString();
        return [
          `<div class="operador"> <p> ${this.numberOne} x ${this.numberTwo} = </p>
          <input id="suma"></input><button id="button">Enviar</button></div>`,
          result,
          "Multiplicar",
        ];
    }
  }
}

const sum = new Calculate(
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20)
);

class Operation {
  result = sum.calculation(this.sign)[1];
  constructor(public sign: string) {}

  showOperation(): string {
    return (
      "<div id=section>" +
      "<h1>" +
      sum.calculation(this.sign)[2] +
      "</h1>" +
      sum.calculation(this.sign)[0] +
      "</div>"
    );
  }
}

function sendValue() {
  const button = document.getElementById("button");

  button.onclick = function () {
    const num = document.getElementById("suma");

    if (num === op.result) {
      return (document.body.innerHTML = "<h1 class='resultado'>Correcto</h1>");
    } else {
      return (document.body.innerHTML =
        "<h1 class='resultado'>Error, es: " + op.result + "</h1>");
    }
  };
}

let op;

sumNumbers.onclick = () => {
  op = new Operation("+");
  document.body.innerHTML = op.showOperation();
  sendValue();
};

restNumbers.onclick = () => {
  op = new Operation("-");
  document.body.innerHTML = op.showOperation();
  sendValue();
};

divNumbers.onclick = () => {
  op = new Operation("/");
  document.body.innerHTML = op.showOperation();
  sendValue();
};

multNumbers.onclick = () => {
  op = new Operation("x");

  document.body.innerHTML = op.showOperation();
  sendValue();
};
