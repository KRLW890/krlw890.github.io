var medium = new Image();
medium.src = "images/medium.png";

var rainbow = new Image();
rainbow.src = "images/rainbow.png";
var nakkadile = [
    new Image(),
    new Image()
];
nakkadile[0].src = "images/nak1.png";
nakkadile[1].src = "images/nak2.png";

var speaker = new Image();
speaker.src = "images/speaker.png";
var sound = new Image();
sound.src = "images/sound.png";

var star = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
];
star[0].src = "images/star1.png";
star[1].src = "images/star2.png";
star[2].src = "images/star3.png";
star[3].src = "images/star4.png";
star[4].src = "images/star5.png";
star[5].src = "images/star6.png";

var stars = [];
for (var a = 0; a < 20; a++) {
    stars[a] =  {
        phase: Math.floor(Math.random()*6),
        x: Math.random()*713,
        y: Math.random()*443
    };
}

