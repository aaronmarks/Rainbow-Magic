var ball_size = 50;

function enlarge_ball() {
    ball_size += (ball_size * 4);
    var style = "height: " + ball_size + "px;";
    setStyle('ball', style);
    var style = "width: " + ball_size + "px;";
    setStyle('ball', style);
}

function setStyle(id, style) {
    $(id).style.cssText += ";" + style;
}
