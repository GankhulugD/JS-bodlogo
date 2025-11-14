let output = 0;

document.getElementById("result").innerText = output;

//bodloguud
function bodlogo1() {
  let a = prompt("(Гурвалжингийн приметрийг олох) эхний талыг оруулна уу:");
  let b = prompt("(Гурвалжингийн приметрийг олох) 2 дох талыг оруулна уу:");
  let c = prompt("(Гурвалжингийн приметрийг олох) 3 дах талыг оруулна уу:");
  output = +a + +b + +c;
  document.getElementById("result").innerText = output;
}

function bodlogo2() {
  let n = +1 + +3 + +5 + +7 + +8.7;
  output = "(1,3,5,7,8.7 бүхэл тооны нийлбэрийг ол) =" + n;
  document.getElementById("result").innerText = output;
}

function bodlogo3() {
  let n = +10 + +5;
  let a = +10 * +5;
  output =
    "(Өгөгдсөн тэгш өнцөгтийн талбай ба приметрийг ол. урт=10 өргөн=5)  приметр =" +
    n +
    " талбай =" +
    a;
  document.getElementById("result").innerText = output;
}

function bodlogo4() {
  let n = Math.floor(98 / 60);
  let a = 98 % 60;
  output =
    "(өгөгдсөн 98 секундыг минут секунд болго)  минут =" + n + " секунд =" + a;
  document.getElementById("result").innerText = output;
}

function bodlogo5() {
  let n = +prompt(
    "(өгөгдсөн секундыг цаг минут секунд болго) секунд оруулна уу:"
  );
  if (n >= 3600) {
    let tsag = Math.floor(n / 3600);
    let m = n % 3600;
    let minut = Math.floor(m / 60);
    let sekund = m % 60;
    output = " цаг =" + tsag + " минут =" + minut + " cекунд =" + sekund;
  } else {
    minut = Math.floor(n / 60);
    sekund = n % 60;
    output = " цаг = 0" + " минут =" + minut + " cекунд =" + sekund;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo6() {
  let a = +prompt("(өгөгдсөн минут секундыг секунд болго) минут оруулна уу:");
  let b = +prompt("(өгөгдсөн минут секундыг секунд болго) секунд оруулна уу:");
  if (a >= 0) {
    let minut = Math.floor(a * 60);
    sekund = minut + b;
    output = " cекунд =" + sekund;
  } else {
    output = " cекунд =" + b;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo7() {
  let c = +prompt("(өгөгдсөн цаг минут секундыг секунд болго) цаг оруулна уу:");
  let a = +prompt(
    "(өгөгдсөн цаг минут секундыг секунд болго) минут оруулна уу:"
  );
  let b = +prompt(
    "(өгөгдсөн цаг минут секундыг секунд болго) секунд оруулна уу:"
  );

  //   if (c >= 1) {
  let tsag = Math.floor(c * 3600);
  let minut = Math.floor(a * 60);
  let sekund = minut + tsag + b;
  output = " cекунд =" + sekund;
  //   } else if (c<3600){
  //     let minut = Math.floor(a * 60);
  //     sekund= minut + tsag + b;
  //   }
  //   } else if (c < 1) {
  //     let minut = Math.floor(a * 60);
  //     let sekund = minut + b;
  //     output = " cекунд =" + sekund;
  //   }
  document.getElementById("result").innerText = output;
}

function bodlogo2_1() {
  let a = +prompt("(өгөгдсөн цагыг хоног цаг болго) цагийг оруулна уу:");
  let honog = Math.floor(a / 24);
  let tsag = a % 24;
  output =
    "(өгөгдсөн цагыг хоног цаг болго)  хоног =" + honog + " цаг =" + tsag;
  document.getElementById("result").innerText = output;
}

function bodlogo2_2() {
  let a = +prompt("(өгөгдсөн хоног цагийг цаг болго) хоног оруулна уу:");
  let b = +prompt("(өгөгдсөн хоног цагийг цаг болго) цаг оруулна уу:");
  if (a >= 1) {
    let minut = Math.floor(a * 24);
    sekund = minut + b;
    output = " цаг =" + sekund;
  } else {
    output = " цаг =" + b;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo2_3() {
  let a = +prompt("(өгөгдсөн сарыг жил, сар болго) сарыг оруулна уу:");
  let honog = Math.floor(a / 12);
  let tsag = a % 12;
  output = "(өгөгдсөн сарыг жил, сар болго)  жил =" + honog + " сар =" + tsag;
  document.getElementById("result").innerText = output;
}

function bodlogo2_4() {
  let a = +prompt("(өгөгдсөн жил, сарыг сар болго) жил оруулна уу:");
  let b = +prompt("(өгөгдсөн жил, сарыг сар болго) сар оруулна уу:");
  if (a >= 1) {
    let minut = Math.floor(a * 12);
    sekund = minut + b;
    output = " сар =" + sekund;
  } else {
    output = " сар =" + b;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo2_5() {
  let a = +prompt("(өгөгдсөн 4 тооны ихийг ол) 1-р тоог оруулна уу:");
  let b = +prompt("(өгөгдсөн 4 тооны ихийг ол) 2-р тоог оруулна уу:");
  let c = +prompt("(өгөгдсөн 4 тооны ихийг ол) 3-р тоог оруулна уу:");
  let d = +prompt("(өгөгдсөн 4 тооны ихийг ол) 4-р тоог оруулна уу:");
  if (a > b && a > c && a > d) {
    output = a;
  }
  if (b > a && b > c && b > d) {
    output = b;
  }
  if (c > a && c > b && c > d) {
    output = c;
  }
  if (d > a && d > b && d > c) {
    output = d;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo2_6() {
  let a = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 1-р тоог оруулна уу:");
  let b = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 2-р тоог оруулна уу:");
  let c = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 3-р тоог оруулна уу:");
  let d = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 4-р тоог оруулна уу:");
  let product = 1;

  if (a < 5) {
    product = product * a;
  }
  if (b < 5) {
    product = product * b;
  }

  if (c < 5) {
    product = product * c;
  }
  if (d < 5) {
    product = product * d;
  }

  let output;
  if (product === 1) {
    output = "5-аас бага тоо олдсонгүй. Үржвэр: 1";
  } else {
    output = "5-аас бага тоонуудын үржвэр: " + product;
  }

  document.getElementById("result").innerText = output;
}

function bodlogo2_7() {
  let a = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 1-р тоог оруулна уу:");
  let b = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 2-р тоог оруулна уу:");
  let c = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 3-р тоог оруулна уу:");
  let d = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 4-р тоог оруулна уу:");
  let e = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 5-р тоог оруулна уу:");
  let f = +prompt("(5-аас бага тоонуудын үржвэрийг олох) 6-р тоог оруулна уу:");
  let product = 1;

  if (a > 5) {
    product = product * a;
  }
  if (b > 5) {
    product = product * b;
  }
  if (c > 5) {
    product = product * c;
  }
  if (d > 5) {
    product = product * d;
  }
  if (e > 5) {
    product = product * e;
  }
  if (f > 5) {
    product = product * f;
  }

  let output;
  if (product === 1) {
    output = "5-аас их тоо олдсонгүй. Үржвэр: 1";
  } else {
    output = "5-аас их тоонуудын үржвэр: " + product;
  }

  document.getElementById("result").innerText = output;
}

// let a = 1;
// let b = 2;

// const addInt = () => {
//   c = a + b;
//   console.log(c, "dsadsads");

//   return c;
// };
