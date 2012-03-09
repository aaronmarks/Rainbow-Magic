function set_bg_color(id, hex) {
    var sheet = document.createElement('style');
    sheet.innerHTML="#" + id + "{background:" + hex + ";}";
    document.body.appendChild(sheet);
}

function random_hex(){
    var hex = "";
    for(var i=0; i<6; i++){
        var num = Math.floor(Math.random()*16)
        switch(num){
            case 0:
                hex = hex + "A";
                break;
            case 1:
                hex = hex + "B";
                break;
            case 2:
                hex = hex + "C";
                break;
            case 3:
                hex = hex + "D";
                break;
            case 4:
                hex = hex + "E";
                break;
            case 5:
                hex = hex + "F";
                break;
            default:
                hex = hex + (num - 6);
        }
    }
    return hex;
}

function change_phrase() {
    var phrases = new Array("Artichoke Fortitude", "Crump Dance Patty", "Fort Antioch, Texas",
    "Our Lady, Antiquity", "Sundays with Mavis", "An Amazing Artifact", "Burning Man, Man", "A Tudor Assignment");
    var num = Math.floor(Math.random()*phrases.length);
    while(document.getElementById('center').innerHTML == phrases[num]) {
        var num = Math.floor(Math.random()*phrases.length);
    }
    document.getElementById('center').innerHTML = phrases[num];
}

for(var i=0; i<10000; i++) {
    var a = Math.floor(Math.random()*5);
    var t = setTimeout("set_bg_color('trs', random_hex());", 100)
    var t = setTimeout("set_bg_color('tls', random_hex());", 100)
    var t = setTimeout("set_bg_color('brs', random_hex());", 100)
    var t = setTimeout("set_bg_color('bls', random_hex());", 100)
    if(a==0) {var t = setTimeout("set_bg_color('body', random_hex());", 100)}
}
