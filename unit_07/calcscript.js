function calctentip() {

  var bill = document.getElementById("enterbill").value;

  var tip = bill / 10;

  document.getElementById("showtip").style.display = "block";
  document.getElementById("showliltip").innerHTML = tip;

}

function calcfivetip() {

  var bill = document.getElementById("enterbill").value;

  var tip = bill / 20;

  document.getElementById("showtip").style.display = "block";
  document.getElementById("showliltip").innerHTML = tip;

}

function calctwofivetip() {

  var bill = document.getElementById("enterbill").value;

  var tip = bill / 4;

  document.getElementById("showtip").style.display = "block";
  document.getElementById("showliltip").innerHTML = tip;

}

function calcbigtip() {

  var bill = document.getElementById("enterbill").value;

  if ((bill / 4) > (2+(bill/10))){
    tip = bill / 4
  }
  else {
    tip = 2+(bill/10)
  }

  document.getElementById("showtip").style.display = "block";
  document.getElementById("showliltip").innerHTML = tip;

}

document.getElementById("tenbutn").onclick = function() {
  calctentip();

}

document.getElementById("fivebutn").onclick = function() {
  calcfivetip();

}

document.getElementById("twofivebutn").onclick = function() {
  calctwofivetip();

}

document.getElementById("bigbutn").onclick = function() {
  calcbigtip();

}
