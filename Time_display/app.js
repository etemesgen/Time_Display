function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // add a zero in front of numbers<10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('display_time').innerHTML = hours + ":" + minutes + ":" + seconds;
    time = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();