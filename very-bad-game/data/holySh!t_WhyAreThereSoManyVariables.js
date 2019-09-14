var page = "logo";

var K = false;
var R = true; //I know I don't need this, but it's fun to tinker with
var L = true; //I know I don't need this, but it's fun to tinker with
var W = false;
var num890 = false;

//I don't know whether I need ALL of these, but it's the first method that came to mind
var RLine = 275;
var RArc = 273;
var RX = 150;
var RY = 165;
var LY = 75;
var LX = 150;
var KLine = 275;
var KX1 = 150;
var KY1 = 165;
var KX2 = 150;
var KY2 = 165;
var WX1 = 50;
var WY1 = 75;
var WX2 = 125;
var WY2 = 275;
var WX3 = 200;
var WY3 = 100;
var WX4 = 275;
var WY4 = 275;
var numRed = 0;
var numGreen = 0;
var fadeCount = 0;
var fade = 0;



var TH = true;
var titleCount = 0;
var titleSpeed = 1;
var nextOrBack = false;
var returnTo = "home";


var sceneCount = 0;
var sceneFade = 0;
var intro = true;
var intermission = true;
var TitleHere = [true, false];
var underscore = "_";
var udrscrTimer = [0, 0];
var epilText = [ ["T","y","p","e"," ","i","n"," ","a"," ","n","a","m","e"], " "];
var typedLetters = [];
var insert;
var insertCheck = false;
var enterName = false;
var creditsY = 450;
var creditsFade = -200;

{
var music = [
    new Audio("data/song_1-5.mp3"),
    new Audio("data/song_6-8.mp3"),
    new Audio("data/song_9-15.mp3"),
    new Audio("data/song_16_main.mp3"),
    new Audio("data/song_16_climax.mp3")
];
for (var a = 0; a < music.length; a++) {
    music[a].addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

var playLaser = new Audio("data/laser.mp3");
var playerX = 30;
var playerY = 370;
var biNum = [0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1];
var biCount = 0;
var keys = [];
var space = " ";
var stage = 1;
var stageCount = 1;
if (localStorage.getItem("unlocked") > 0) { stageCount = localStorage.getItem("unlocked"); }
else { localStorage.setItem("unlocked", "1"); }

var stageSelect = false;
var stageChosen = false;
var stageComplete = false;
var dead = false;
var speed = 2;
{var up = true;
var down = true;
var left = true;
var right = true;
var upConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    var upTrue = function() {
    upConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];};
var downConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    var downTrue = function() {
downConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];};
var leftConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    var leftTrue = function() {
leftConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];};
var rightConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    var rightTrue = function() {
rightConditions = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];};
var toolPlace = [true, true, true, true];
}//a lot of the badCode variables

var upCannon = false;
var downCannon = false;
var leftCannon = false;
var rightCannon = false;
var menu = false;
var restart = true;
//I learned arrays after starting, and now these variables are too integrated into the program for me to try and replace with arrays. (This message was written during development of level 9)
var enemyX1 = 100; 
var enemyY1 = 100;
var enemyX2 = 100;
var enemyY2 = 100;
var enemyX3 = 100;
var enemyY3 = 100;
var enemyX4 = 100;
var enemyY4 = 100;
var fnlEneY = [-60, -60, -60]; //By the time I got here, I wasn't going to repeat my arrayless mistake.
var eneNum = [true, true, true, true];
var enemySpeed1 = 3;
var enemySpeed2 = 3;
var enemySpeed3 = 3;
var broken = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
var toolAcquired = false;
var goalX = 15;
var goalY = 15;
var dec = [true, true, true, true, true];
var decSpeed = 0.5;
var fired = false;
var rightBullet = false;
var leftBullet = false;
var upBullet = false;
var downBullet = false;
var bulletSpd = 5;
var bulletX = -10;
var bulletY = -10;
var bulletCalled = false;
var eneActive = [false, false];
var x = [0, 0, 0, 0, 0, 0, 0];
var y = [0, 0, 0, 0, 0, 0, 0];
var scan = [true, true, true, true];
var scanCount = [0, 0];
var slow = false;
var frozen = false;
var wild = 0;
var bossX = 200;
var bossSpd = 0;
var spdChange = 7;
var attackCount = 0;
var attack = false;
var atkSelect = 0;
var atkDuration = 0;
var atkCalled = [false, false];
var stunable = false;
var eneBulletX = [200, 200, 200, 200, 200, 200];
var eneBulletY = [410, 410, 410, 410, 410, 410];
var eneWall = [true, true, true];
var special = false;
var goalStroke = 255;
var glStrkFade = 0;
var eyeFade = 250;
var endText = [1, -20];
var end = false;
var endActions = [0, 0];
} // game variables


var tip = 0;
if (localStorage.getItem("tip") === "true") { tip = 2; }
var neatTricks = [
    "For more fun, try entering some of these:",
    "skeletonKey();",
    "walkThroughWalls();",
    "invincibility();",
    "haveFun();",
    "(Keep in mind that these are case-sensitive)"
];
var permaKey = false;
var skeletonKey = function() {
    if (page === "game" && stage === 256) { return "This key belongs to the Glitch Master. Stealing is wrong."; }
    else if (tip === 2) { permaKey = true; }
    else { return "This funtion is locked because you have not completed the game!"; }
};

var walkThroughWalls = function() {
    if (page === "game" && stage === 256) { return "These walls...! They're too powerful!"; }
    else if (tip === 2) { for (var a = 0; a < broken.length; a++) { broken[a] = false; } }
    else { return "This funtion is locked because you have not completed the game!"; }
};

var invincible = false;
var invincibility = function() {
    if (page === "game" && stage === 256) { return "The Glitch Master overpowers your invincibility!"; }
    else if (tip === 2) { invincible = true; }
    else { return "This funtion is locked because you have not completed the game!"; }
};

var funMusic = [
    new Audio("data/glitch.ogg"),
    new Audio("data/dead.ogg")
];
funMusic[0].addEventListener("ended", function() {
        stageComplete = true;
    }, false);
funMusic[1].addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    }, false);
var haveFun = function() {
    if (page === "game" && stage === 256) { return "That's a bad idea."; }
    else {
        page = "game";
        stage = 256;
        restart = true;
        menu = false;
        dead = false;
        stageCompleted = false;
        end = false;
        permaKey = false;
        invincible = false;
        funMusic[0].currentTime = 0;
        localStorage.setItem("GM", "1");
        for (var a = 0; a < music.length; a++) {
            music[a].pause();
            music[a].currentTime = 0;
        }
        if (tip === 2) { return "You have no idea what you have started."; }
        else { return "Bet you thought all of these were locked. You should have stopped when you had the chance."; }
    }
};

var glitchMaster = {
    x: 200,
    y: -20,
    big: false,
    bigLength: 0,
    draw: function(x, y, big) {},
    xMove: 0,
    yMove: 1.5,
    que: [[2.1, 1], [2.4, 2], [5, 3], [6.9, 0], [7.3, 0], [7.5, 0], [9.4, 0], [9.7, 0], [10, 0], [11.3, 0], [12.5, 0], [13, 0], [14.4, 0], [14.55, 0], [14.7, 0], [14.8, 0], [15, 0], [17.1, 0], [19.6, 0], [21.1, 0], [22.4, 0], [22.9, 0], [25, 0], [25.65, 0], [26.26, 0], [26.88, 0], [27.05, 0], [27.21, 0], [27.32, 0], [27.5, 0], [28.17, 0], [28.48, 0], [28.79, 0], [29.88, 0], [30.61, 0], [31.23, 0], [31.85, 0], [32.01, 0], [32.2, 0], [32.35, 0], [32.96, 0], [33.59, 0], [34.21, 0], [34.84, 0], [35.47, 0], [36.1, 0], [36.72, 0], [37.31, 0], [38.05, 0], [38.7, 0], [39.07, 0], [39.32, 0], [39.96, 0], [40.4, 0], [40.69, 0], [41.18, 0], [41.37, 0], [41.49, 0], [42.43, 0], [42.65, 0], [43.06, 0], [43.26, 0], [43.66, 0], [43.91, 0], [44.28, 0], [44.56, 0], [44.71, 0], [44.88, 0], [45.56, 0], [45.84, 0], [46.17, 0], [46.75, 0], [46.93, 0], [47.1, 0], [47.23, 0], [47.4, 0], [48.03, 0], [48.64, 0], [49.25, 0], [49.4, 0], [49.55, 0], [49.71, 0], [49.85, 0], [50.49, 0], [51.12, 4], [55.5, 0], [55.81, 0], [56.04, 4], [60.34, 0], [60.64, 0], [60.93, 0], [62.13, 0], [63.42, 0], [63.9, 0], [65.24, 0], [65.37, 0], [65.52, 0], [65.63, 0], [65.84, 0], [67.7, 0], [67.98, 0], [68.26, 0], [70.15, 0], [70.74, 0], [71.94, 0], [73.22, 0], [73.85, 0], [74.45, 0], [74.75, 0], [75.68, 0], [76.31, 0], [76.93, 0], [7.53, 0], [77.68, 0], [77.83, 0], [77.97, 0], [78.08, 0], [80.69, 0], [81.29, 0], [81.83, 0], [82.5, 0], [82.67, 0], [82.81, 0], [82.98, 0], [83.14, 0], [84.34, 0], [84.97, 4], [88.62, 0], [88.93, 0], [89.25, 0], [91.12, 0], [91.41, 0], [91.7, 0], [92.85, 0], [94.06, 0], [94.5, 0], [95.88, 0], [96, 0], [96.13, 0], [96.31, 0], [96.51, 0], [97.97, 0], [98.23, 0], [98.37, 0], [98.6, 0], [98.73, 0], [99, 0], [99.64, 0], [100.87, 0], [101.15, 0], [101.54, 0], [102.18, 0], [102.87, 0], [103, 0], [103.38, 0], [103.93, 0], [104.37, 0], [104.9, 0], [105.2, 0], [106.41, 0], [107.03, 0], [107.67, 0], [108.31, 0], [108.45, 0], [108.57, 0], [108.7, 0], [108.91, 0], [109, 0], [109.51, 0], [110.1, 0], [111.25, 0], [111.89, 0], [112.51, 0], [113.07, 0], [113.22, 0], [113.36, 0], [113.5, 0], [113.69, 0], [114.33, 0], [114.46, 0], [114.61, 0], [114.74, 0], [114.9, 0], [115.53, 0], [115.68, 0], [115.84, 0], [115.97, 0], [116.09, 0], [116.78, 0], [116.91, 0], [117.04, 0], [117.19, 0], [117.34, 0], [118.61, 0], [119.23, 0], [119.78, 0], [120.42, 0], [121.01, 0], [121.63, 0], [121.82, 0], [122, 0], [122.21, 0], [122.99, 3], [123.26, 3], [123.38, 3], [123.64, 5], [123.65, 4], [125.61, 0], [126.03, 0], [126.33, 0], [128.03, 0], [128.36, 0], [128.62, 0], [129.86, 0], [131.12, 0], [131.61, 0], [132.97, 0], [133.12, 0], [133.3, 0], [133.42, 0], [133.54, 4], [135.33, 0], [135.72, 0], [136.06, 4], [137.9, 0], [138.24, 0], [138.55, 0], [139.09, 0], [139.72, 0], [140.07, 0], [140.32, 0], [140.92, 0], [141.93, 0], [142.08, 0], [142.23, 0], [143.5, 0], [144.17, 0], [144.81, 0], [145.49, 0], [145.65, 0], [145.8, 0], [145.92, 0], [146.07, 0], [148.7, 0], [149.39, 0], [149.92, 0], [151.16, 4], [158.89, 0], [159.57, 0], [159.73, 0], [159.88, 0], [160.04, 0], [160.19, 0], [Infinity, 0]],
    spawns: [],
    progression: 0,
    lastCommand: undefined,
    first: true,
    wild: -30,
    returnTo: 5,
    cantEscape: [["Did you really think", "you could escape the Glitch Master?!"], ["Wow.", "You're getting desperate."], ["no", ""], ["no", ""], ["no", ""], ["Okay, fine. You win.", "But only because even I agree\nthis level is bullshit."]]
};

if (localStorage.getItem("GM") > 0) {
    page = "Glitch Master";
    var z = localStorage.getItem("GM")-0+1;
    localStorage.setItem("GM", z);
}


