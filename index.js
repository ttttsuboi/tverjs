const Tver = {
  player: function() {
    return window.__bcplayer;
  },
  currentTime: function() {
    let now = this.player().currentTime();
    return now;
  },
  forwardTime: function(time) {
    this.player().currentTime(this.currentTime() + time);
  },
  backTime: function(time) {
    this.player().currentTime(this.currentTime() - time);
  }
}

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    Tver.backTime(10);
  }
  else if (e.keyCode == '39') {
    Tver.forwardTime(10);
  }
}
