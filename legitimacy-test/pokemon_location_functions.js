var genStart = [1, 152, 252, 387, 494, 650, 722, 803];
var labels = [
    ["RBY", "GSC", "RSE", "FRLG", "DP/Pt", "HGSS", "BW /\nB2W2", "XY", "ORAS", "SM"],
    ["Wild", "Recieved", "Safari", "Sport", "Dream"]
];

var pokemonForm = function(id) {
    this.id = id;
    this.info = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ];
}

var first = false;
var confirmming = false; //apparently its "confirming", but I've already spelt it as "confirmming" throughout the program, so I'm not changing it.
var selected = 0;
var gen = 0;
var collectedInfo = [];
if (localStorage.getItem("KRLW890pokemonlocations") !== null) {
    collectedInfo = JSON.parse(localStorage.getItem("KRLW890pokemonlocations"));
    selected = collectedInfo.length-1;
}
else { first = true; }

var drawScreen = function(click) {};

var last = function() {
if (first === false && confirmming === false && selected > 0) {
    selected--;
    document.getElementById("next").innerHTML = "Next";
    drawScreen();
}
};

var next = function() {
if (first === false && confirmming === false) {
    selected++;
    
    if ((selected+1) === genStart[gen+1]) {
        downloadFile();
    }
    else {
        if (selected === collectedInfo.length) { collectedInfo.push(new pokemonForm(genStart[gen]+selected)); }
        if ((selected+2) === genStart[gen+1]) { document.getElementById("next").innerHTML = "Finish"; }
        drawScreen();
    }
}
};


var pokemon = [];

var save = function() {
    localStorage.setItem("KRLW890pokemonlocations", JSON.stringify(collectedInfo));
};
var confirmReset = function() { /*to be filled in later*/ };


var createCSV = function() {
var output = "";

for (var a = 0; a < collectedInfo.length; a++) {
    for (var b = 0; b < collectedInfo[a].info.length; b++) {
        output += "\n" + collectedInfo[a].id + "," + b;
        
        for (var c = 0; c < collectedInfo[a].info[b].length; c++) {
            output += "," + collectedInfo[a].info[b][c];
        }
    }
}

return output;
};

function downloadAsFile(filename, type, data) {
    window.URL = window.URL || window.webkitURL;
    var a = document.createElement("a");
    var blob = new Blob([data], {type: type});
    var url = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};

var downloadFile = function() {
    downloadAsFile("Gen"+(gen+1)+"_data.csv", "text/html", createCSV());
};

