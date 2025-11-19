let output = 0;

document.getElementById("result").innerText = output;

//bodloguud
function bodlogo1() {
  output = 0;
  let a = prompt("(Гурвалжингийн приметрийг олох) эхний талыг оруулна уу:");
  let b = prompt("(Гурвалжингийн приметрийг олох) 2 дох талыг оруулна уу:");
  let c = prompt("(Гурвалжингийн приметрийг олох) 3 дах талыг оруулна уу:");
  output = +a + +b + +c;
  document.getElementById("result").innerText = output;
}

function bodlogo2() {
  output = 0;
  let n = +1 + +3 + +5 + +7 + +8.7;
  output = "(1,3,5,7,8.7 бүхэл тооны нийлбэрийг ол) =" + n;
  document.getElementById("result").innerText = output;
}

function bodlogo3() {
  output = 0;
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
  output = 0;
  let n = Math.floor(98 / 60);
  let a = 98 % 60;
  output =
    "(өгөгдсөн 98 секундыг минут секунд болго)  минут =" + n + " секунд =" + a;
  document.getElementById("result").innerText = output;
}

function bodlogo5() {
  output = 0;
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
  output = 0;
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
  output = 0;
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
  output = 0;
  let a = +prompt("(өгөгдсөн цагыг хоног цаг болго) цагийг оруулна уу:");
  let honog = Math.floor(a / 24);
  let tsag = a % 24;
  output =
    "(өгөгдсөн цагыг хоног цаг болго)  хоног =" + honog + " цаг =" + tsag;
  document.getElementById("result").innerText = output;
}

function bodlogo2_2() {
  output = 0;
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
  output = 0;
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
  output = 0;
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
  output = 0;
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
  output = 0;
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

function bodlogo3_1() {
  output = 0;
  let a = +prompt("(2  тооны ихийг олох) a too oruulna uu:");
  let b = +prompt("(2  тооны ихийг олох) b too oruulna uu:");
  if (a > b) {
    output = a + " тоо нь их";
  } else {
    output = b + " тоо нь их";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_2() {
  output = 0;
  let too = prompt("(тэгш сондгой олох hha) тоо оруулна уу:");
  let TOO = Number(too);
  output = TOO;
  if (output % 2 == 1) {
    output = "сондго";
  } else {
    output = "тэгш";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_3() {
  output = 0;
  let a = +prompt("(өгөгдсөн 3 тооны их багыг ол) 1-р тоог оруулна уу:");
  let b = +prompt("(өгөгдсөн 3 тооны их багыг ол) 2-р тоог оруулна уу:");
  let c = +prompt("(өгөгдсөн 3 тооны их багыг ол) 3-р тоог оруулна уу:");
  let ih = 0;
  let baga = 0;
  if (a > b && a > c) {
    ih = a;
  } else if (b > a && b > c) {
    ih = b;
  } else if (c > a && c > b) {
    ih = c;
  }

  if (a < b && a < c) {
    baga = a;
  } else if (b < a && b < c) {
    baga = b;
  } else if (c < a && c < b) {
    baga = c;
  }
  output = ih + " нь их " + baga + "нь  бага";
  document.getElementById("result").innerText = output;
}

function bodlogo3_4() {
  output = 0;
  let a = prompt("(string -ийн уртийг хэвлэх) string -ийг оруулна уу");
  output = a.length;
  document.getElementById("result").innerText = output;
}

function bodlogo3_5() {
  output = 0;
  let a = prompt("(стрингийн эхний болон сүүлийн элемент) стринг оруулна уу");
  let urt = a.length;
  let last = a[urt - 1];
  let first = a[0];
  output = "эхний тэмдэгт " + first + " сүүлийн тэмдэгт " + last;
  document.getElementById("result").innerText = output;
}

function bodlogo3_6() {
  output = 0;
  let a = prompt("(стрингийг том үсэг болгох) стринг оруулна уу");
  let anh = a;
  let tom = a.toUpperCase();
  output = "таний оруулсан стринг: " + anh + " томруулсан стринг: " + tom;
  document.getElementById("result").innerText = output;
}

function bodlogo3_7() {
  output = 0;
  let a = prompt(
    "(стринг дотор тусгай тэмдэгт байгаа эсэхийг шалгах. тусгай тэмдэгт 'n') стринг оруулна уу"
  );
  let urt = a.length;
  let n = "n";
  let i = 0;
  while (i < urt) {
    if (n == a[i]) {
      output = 1;
    }
    i++;
  }
  if (output == 1) {
    output = "true";
  } else {
    output = "false";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_8() {
  output = 0;
  fizz = 0;
  buzz = 0;
  let a = +prompt(
    "тоог 3 болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz,"
  );
  if (a % 3 === 0) {
    fizz = 1;
  } else {
    fizz = 0;
  }
  if (a % 5 === 0) {
    buzz = 1;
  } else {
    buzz = 0;
  }

  if (fizz === 1 && buzz === 1) {
    output = "FizzBuzz";
  } else if (fizz === 1) {
    output = "Fizz";
  } else if (buzz === 1) {
    output = "Buzz";
  } else {
    output = 0;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_9() {
  output = 0;
  let a = prompt("(2 стрингийг нэгтгэх) эхний стрингийг оруулна уу");
  let b = prompt("(2 стрингийг нэгтгэх) дараагий стрингийг оруулна уу");
  output = a + b;
  document.getElementById("result").innerText = output;
}

function bodlogo3_10() {
  output = 0;
  let a = +prompt("(2 тооны дундаж) эхний тоог оруулна уу");
  let b = +prompt("(2 тооны дундаж) дараагын тоог оруулна уу");
  output = (a + b) / 2;
  document.getElementById("result").innerText = output;
}

function bodlogo3_11() {
  output = 0;
  let a = +prompt("(эерэг сөрөг эсэхийг шалгах) эхний тоог оруулна уу");
  if (a > 0) {
    output = "эерэг";
  }
  if (a < 0) {
    output = "сөрөг";
  } else if (a === 0) {
    output = "тэгтэй тэнцүү";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_12() {
  output = 0;
  let a = +prompt("(тоог 10 аас их эсэхийг шалгах) тоог оруулна уу");
  if (a > 10) {
    output = "тоо 10 аас их";
  } else if (a === 10) {
    output = "тоо 10 тай тэнцүү";
  } else {
    output = "тоо 10 аас бага";
  }

  document.getElementById("result").innerText = output;
}

function bodlogo3_13() {
  output = 0;
  let a = +prompt("(2 тоо тэнцүү эсэхийг шалгах) эхний тоог оруулна уу");
  let b = +prompt("(2 тоо тэнцүү эсэхийг шалгах) дараагын тоог оруулна уу");
  if (a == b) {
    output = "2 тоо тэнцүү байна";
  } else {
    output = "2 тоо ялгаатай байна";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_14() {
  output = 0;
  let a = +prompt(
    "(Тоог 100-аас их, 0-аас бага эсэхийг шалгах) тоог оруулна уу"
  );
  if (a < 100) {
    output = "тоо 100 аас их байна";
  } else if (a < 0) {
    output = "тоо 0 ээс бага байна";
  } else {
    output = "тоо 100 аас бага 0 ээс их байна";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_15() {
  output = 0;
  let a = +prompt("(Тоог 10%, 20%, 30% өсгөх) тоог оруулна уу");
  output = a * 1.1 + " " + a * 1.2 + " " + a * 1.3;
  document.getElementById("result").innerText = output;
}

function bodlogo3_16() {
  output = 0;
  let a = +prompt("(Тоог 100-аас хэтэрвэл 100 болгож хэвлэх) тоог оруулна уу");
  if (a > 100) {
    output = 100;
  } else {
    output = a;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_17() {
  output = 0;
  let a = prompt("(Хоёр тэмдэгт ижил эсэхийг шалгах) тоог оруулна уу");
  let b = prompt("(Хоёр тэмдэгт ижил эсэхийг шалгах) тоог оруулна уу");
  if (a === b) {
    output = "2 тэмдэгт ижил байна";
  } else {
    output = "2 тэмдэгт ялгаатай байна";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_18() {
  output = 0;
  let a = prompt(
    "(Хоёр оронтой тооны цифрүүдийг сольж урвуулах) тоог оруулна уу"
  );
  let negj = 0;
  let arawt = 0;
  if (a > 99 || a < 0) {
    output = "2 оронтой тоо оруулна уу";
  } else {
    negj = a % 10;
    arawt = Math.floor(a / 10);
    output = negj * 10 + arawt;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_19() {
  output = 0;
  let a = prompt(
    "(Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх) тоог оруулна уу"
  );
  if (a < 0) {
    output = Math.abs(a);
  } else {
    output = a;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo3_20() {
  output = 0;

  let miSec = Date.now();
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const year_avg = 365.25 * day;
  const month_avg = year_avg / 12;

  let remainingMs = miSec;

  let years = Math.floor(remainingMs / year_avg);
  remainingMs = remainingMs % year_avg;

  let months = Math.floor(remainingMs / month_avg);
  remainingMs = remainingMs % month_avg;

  let days = Math.floor(remainingMs / day);
  remainingMs = remainingMs % day;
  let hours = Math.floor(remainingMs / hour);
  remainingMs = remainingMs % hour;
  let minutes = Math.floor(remainingMs / min);
  remainingMs = remainingMs % min;
  let seconds = Math.floor(remainingMs / sec);
  let milliseconds = remainingMs % sec; // Үлдсэн ms

  output = `
        1970.01.01-ээс хойш өнгөрсөн хугацаа:
        - Он (ойролцоо): ${years}
        - Сар (ойролцоо): ${months}
        - Өдөр: ${days}
        - Цаг: ${hours}
        - Минут: ${minutes}
        - Секунд: ${seconds}
        - Миллисекунд: ${milliseconds}
    `;

  document.getElementById("result").innerText = output;
}
function bodlogo3_21() {
  output = 0;
  let b = +prompt(
    "(Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ) дугаар оруулна уу"
  );
  let a = 0;

  if (b < 1000 || b > 9999 || isNaN(b)) {
    output = "4 оронтой зөв дугаар (1000-9999) оруулна уу.";
  } else {
    a = b % 10;
    a = a % 5;

    if (a === 1) {
      output = "Даваа гараг";
    } else if (a === 2) {
      output = "Мягмар гараг";
    } else if (a === 3) {
      output = "Лхагва гараг";
    } else if (a === 4) {
      output = "Пүрэв гараг";
    } else if (a === 0) {
      output = "Баасан гараг";
    }
  }

  document.getElementById("result").innerText = output;
}

function bodlogo4_1() {
  alert("Pinecone гэж 1 удаа хэвлэ.");
  output = "Pinecone";
  document.getElementById("result").innerText = output;
}

function bodlogo4_2() {
  alert("Pinecone гэж 10 удаа хэвлэ.");
  output = " ";
  let a = "Pinecone ";
  let i = 0;
  while (i < 10) {
    output += a + "\n";
    i++;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_3() {
  let b = prompt("(Pinecone-г n удаа хэвлэнэ) n-ийг оруул");
  output = " ";
  let a = "Pinecone ";
  let i = 0;
  while (i < b) {
    output += a + "\n";
    i++;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_4() {
  alert("(20 хүртэлх сондгой тоонуудыг хэвлэх)");
  output = " ";
  let i = 1;
  while (i < 20) {
    output += i + "\n";
    i += 2;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_5() {
  alert("(40 хүртэлх тэгш тоонуудыг хэвлэх)");
  output = " ";
  let i = 2;
  while (i < 40) {
    output += i + "\n";
    i += 2;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_6() {
  alert("(20 хүртэлх тэгш тоонуудын нийлбэрийг ол.");
  output = 0;
  let i = 2;
  while (i < 20) {
    output += i;
    i += 2;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_7() {
  alert("(40 хүртэлх сондгой тоонуудын нийлбэрийг ол.");
  output = 0;
  let i = 1;
  while (i < 40) {
    output += i;
    i += 2;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_8() {
  let n = +prompt("(Өгөгдсөн n тоо хүртэлх тооны нийлбэрийг ол.) n тоог оруул");
  output = 0;
  let i = 1;
  while (i <= n) {
    output += i;
    i += 1;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_9() {
  let n = +prompt("(100 гийн тоог n удаа нэм.) n тоог оруул");
  output = 0;
  let i = 100;
  output = i * n;

  document.getElementById("result").innerText = output;
}

function bodlogo4_10() {
  alert("(125 хүртэлх тооны үржвэрийг ол.)");
  output = 1;
  let i = 1;
  while (i <= 12) {
    output *= i;
    i += 1;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_11() {
  alert("(125 хүртэлх сондгой тооны үржвэрийг ол.)");
  output = 1;
  let i = 1;
  while (i <= 12) {
    output *= i;
    i += 2;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo4_12() {
  let n = +prompt("(n тооны factorial ийг ол.) n тоог оруул");
  output = 1;
  let i = 1;
  while (i <= n) {
    output *= i;
    i += 1;
  }
  document.getElementById("result").innerText = output;
}

function bodlogo5_1() {
  output = 0;
  alert("(🥩, 🌾, 🥔, 🥕, 🥬 array ийн уртийг ол)");
  let a = ["🥩", "🌾", "🥔", "🥕", "🥬"];
  output = a.length;
  document.getElementById("result").innerText = output;
}

function bodlogo5_2() {
  output = 0;
  let a = [];
  alert("10 урттай number array үүсгэ");
  for (let i = 1; i <= 10; i++) {
    a.push(i);
  }
  output = a;
  document.getElementById("result").innerText = output;
}

function bodlogo5_3() {
  output = " ";
  let a = [];
  alert("5 урттай string array үүсгэ");
  for (let i = 1; i <= 5; i++) {
    let b = "student" + i;
    a.push(b);
  }
  output = a;
  document.getElementById("result").innerText = output;
}

function bodlogo5_4() {
  output = 0;
  alert("Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]");
  let a = [1, 2, 3, 4, 5, 6, 7];
  let urt = a.length;
  let first = a[0];
  let last = a[urt - 1];
  output = "эхний элемент: " + first + " сүүлийн элемент: " + last;
  document.getElementById("result").innerText = output;
}

function bodlogo5_5() {
  output = 0;
  alert(
    "(одорхой элемент массив дотор байгаа эсэхийг шалга. тусгай тэмдэгт 'byd')"
  );
  let a = ["ford", "toyota", "mercedes", " chevrolet ", "tesla", "byd"];
  let urt = a.length;
  let n = "byd";
  let i = 0;
  while (i < urt) {
    if (n == a[i]) {
      output = 1;
    }
    i++;
  }
  if (output == 1) {
    output = "[ford, toyota, mercedes, chevrolet, tesla, byd]: " + "true";
  } else {
    output = "[ford, toyota, mercedes, chevrolet, tesla, byd]: " + "false";
  }
  document.getElementById("result").innerText = output;
}

function bodlogo5_6() {
  output = 0;
  alert("Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])");
  let a = [1, 2, 3, 4, 5, 6, 7];
  let max = Math.max(...a);
  output = max;
  document.getElementById("result").innerText = output;
}

function bodlogo5_7() {
  output = 0;
  alert("Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])");
  let a = [1, 2, 3, 4, 5, 6, 7];
  let min = Math.min(...a);
  output = min;
  document.getElementById("result").innerText = output;
}

function bodlogo5_8() {
  output = 0;
  alert("Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])");
  let a = [1, 2, 3, 4, 5, 6, 7];
  let b = [];
  i = 1;
  while (i < 7) {
    b.push(a[i]);
    i += 2;
  }
  output = b;
  document.getElementById("result").innerText = output;
}

function bodlogo5_9() {
  output = 0;
  alert(
    "Тодорхой тоо массив дотор хэдэн удаа орсныг тоол. (number array, [ 2,3 , 1,6,7,10,11,2] , 2 )"
  );
  let a = [2, 3, 1, 6, 7, 10, 11, 2];
  let urt = a.length;
  let b = 0;
  i = 0;
  while (i < urt) {
    if (2 === a[i]) {
      b += 1;
    }
    i++;
  }
  output = b;
  document.getElementById("result").innerText = output;
}

function bodlogo5_10() {
  output = 0;
  alert("Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])");
  let a = [1, 2, 3, 4, 5, 6, 7];
  let urt = a.length;
  let b = [];
  let i = 0;
  let c = 0;
  while (i < urt) {
    b.push(a[c] * 2);
    c++;
    i++;
  }
  output = b;
  document.getElementById("result").innerText = output;
}

function bodlogo5_11() {
  output = " ";
  alert("Бүх үгсийг том үсгээр (uppercase) болго. [a, b, c, d, e ,f]");
  let a = ["a", "b", "c", "d", "e", "f"];
  let urt = a.length;
  let tom = [];
  for (i = 0; i < urt; i++) {
    tom.push(a[i].toUpperCase());
  }
  output = "анхны массив: " + a + " томруулсан массив: " + tom;
  document.getElementById("result").innerText = output;
}

function bodlogo5_12() {
  output = " ";
  alert("Бүх үгсийг жижиж үсгээр (lowercase) болго. [A,B,C,D,E,T,Y,I,O,F]");
  let a = ["A", "B", "C", "D", "E", "T", "Y", "I", "O", "F"];
  let urt = a.length;
  let tom = [];
  for (i = 0; i < urt; i++) {
    tom.push(a[i].toLowerCase());
  }
  output = "анхны массив: " + a + " жижигрүүлсэн массив: " + tom;
  document.getElementById("result").innerText = output;
}
