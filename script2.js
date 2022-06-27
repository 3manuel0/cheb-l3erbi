const ducks = document.querySelector(".ducks");
function sound() {
  var sound = new Audio("shoot1.mp3");
  var score = $(":input");
  sound.volume = 0.15;
  var song = new Audio("winner1.mp3");
  song.loop = true;

  sound.play();
  var s = 0;
  for (i = 0; i <= 9; i++) {
    if (score[i].checked) {
      s = s + 1;
      console.log(i);
      console.log(s);
    }
  }
  if (s >= 10) {
    setTimeout(function () {
      $("#scene2").css("display", "block");
      $("#scene").css("display", "none");
      song.volume = 0.15;
      song.play();
    }, 600);
  }
}
ducks.addEventListener("click", () => {
  sound();
});
