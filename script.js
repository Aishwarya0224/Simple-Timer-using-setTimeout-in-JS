var seconds = Number(prompt("Please set the countdown seconds"));
var user = prompt("Enter your name");

function countDown(seconds, elem) {
  var element = document.getElementById(elem);
  element.innerHTML = `Counting down  ${seconds} seconds..`;
  if (seconds < 1) {
    clearTimeout(timer);
    element.innerHTML = `🎉Congratulations ${user}, Have a great day ahead!`;
  }
  seconds--;
  var timer = setTimeout("countDown(" + seconds + ',"' + elem + '")', 1000);
  4;
}
countDown(seconds, "status");
10;
