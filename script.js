var beepOne1 = new Audio("laarbi.mp3");

$(".laarbi").mouseover(function () {
  beepOne1.play();
});

var beepOne2 = new Audio("houyam.mp3");
beepOne2.volume = 0.15;
$(".houyam").mouseover(function () {
  beepOne2.play();
});
