function set_bg_color(id, hex) {
    var sheet = document.createElement('style');
    sheet.innerHTML="#" + id + "{background:" + hex + ";}";
    document.body.appendChild(sheet);
}

function random_hex(){
    var hex = "";
    var letters = new Array("A", "B", "C", "D", "E", "F");
    for(var i=0; i<6; i++){
        var num = Math.floor(Math.random()*16);
        if (num < 6) { hex = hex + letters[num]; }
        else { hex = hex + (num - 6); }
    }
    return hex;
}

function change_phrase() {
    var phrases = new Array(
    "&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;&Delta;",
    "Amazing Artifact", 
    "Artichoke Flats", 
    "Burning Man, Man", 
    "Crump Dance Party", 
    "Daggers Ethiopian",
    "Dirty Milkshake",
    "Earl of Ice Cream",
    "Future Desserts",
    "Monkey Soup",
    "Neutrino Tuesday",
    "Our Lady Antiquity", 
    "Petunia Davis",
    "Sundays with Mavis", 
    "The Grumble Boys",
    "Tofu Explosion",
    "Tudor Assignment",
    "Yurt Hummus"
    );
    var num = Math.floor(Math.random()*phrases.length);
    while($('center').innerHTML == phrases[num]) {
        var num = Math.floor(Math.random()*phrases.length);
    }
    $('center').innerHTML = phrases[num];
}

function hide_pointers() {
    var ids = new Array("trs", "tls", "brs", "bls");
    for (var i=0; i< ids.length; i++) {
        $(ids[i] + '_img').hide();
    }
}

function rotate_text_shadow(id){
    var sheet = document.createElement('style');
}

for(var i=0; i<10000; i++) {
    var a = Math.floor(Math.random()*5);
    var t = setTimeout("set_bg_color('trs', random_hex());", 100)
    var t = setTimeout("set_bg_color('tls', random_hex());", 100)
    var t = setTimeout("set_bg_color('brs', random_hex());", 100)
    var t = setTimeout("set_bg_color('bls', random_hex());", 100)
    if(a==0) {var t = setTimeout("set_bg_color('body', random_hex());", 100)}
}
