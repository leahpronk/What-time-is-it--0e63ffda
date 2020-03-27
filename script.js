const pi = 3.14;

function diaMeter() {
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
  diaMeter();
}
