function tijd() {
  var vandaag = new Date();
  var date = vandaag.getHours() + ":" + (vandaag.getMinutes() + 1) + ":" + vandaag.getSeconds();
  document.getElementById("demo").innerHTML = date;
}



const pi = 3.14;

function diameter() {
  let diam = document.getElementById('number').value;
  let answer = diam * pi;

    document.getElementById("answer").innerText = answer;
}

function oppervlakte() {
  let diam = document.getElementById('number').value;
  let answer2 = diam * diam * pi * 0.25;

    console.log(answer2);

      document.getElementById("answer2").innerText = answer2;
}

function bereken() {
  oppervlakte();
  diameter();
}
