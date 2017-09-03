var gristType = function(type, points, spawn) {
    this.image = new Image();
    this.image.src = "images/grist-" + type + ".png";
    this.points = points;
    this.spawn = spawn;
};
var grist = [
    new gristType("blue", 10, 60),
    new gristType("purple", 20, 25),
    new gristType("red", 50, 10),
    new gristType("tar", 150, 4),
    new gristType("diamond", 500, 1)
];


var gristInstance = function()  {
    this.type = null;
    this.x = null;
    this.y = null;
};
gristInstance.prototype.create = function(type, y) {
    this.type = type;
    this.x = 720;
    this.y = y;
};
gristInstance.prototype.destroy = function() {
    this.type = null;
    this.x = null;
    this.y = null;
};

var spawnedGrist = [
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance(),
    new gristInstance()
];

var gristSpawn = function() {
    var chance = Math.random()*275;
    if (chance < 100) {
        for (var a = 0; a < spawnedGrist.length; a++) {
            if (typeof spawnedGrist[a].type !== "number") {
                var b = 0;
                while (chance > 0) {
                    chance -= grist[b].spawn;
                    if (chance < 0) {
                        spawnedGrist[a].create(b, Math.random()*402);
                    }
                    
                    b++;
                }
                
                break;
            }
        }
    }
};


