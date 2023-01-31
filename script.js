function updateTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}
setInterval(updateTime, 1000);