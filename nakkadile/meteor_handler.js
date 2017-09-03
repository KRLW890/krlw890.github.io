var meteors = [
    new Image(),
    new Image(),
    new Image()
];
meteors[0].src = "images/meteor1.png";
meteors[1].src = "images/meteor2.png";
meteors[2].src = "images/meteor3.png";

var meteorInstance = function()  {
    this.image = null;
    this.x = null;
    this.y = null;
};
meteorInstance.prototype.create = function(image, y) {
    this.image = image;
    this.x = 720;
    this.y = y;
};
meteorInstance.prototype.destroy = function() {
    this.image = null;
    this.x = null;
    this.y = null;
};

var spawnedMeteors = [
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance(),
    new meteorInstance()
];

var meteorSpawn = function() {
    var chance = Math.floor(Math.random()*7);
    if (chance < 3) {
        for (var a = 0; a < spawnedMeteors.length; a++) {
            if (typeof spawnedMeteors[a].image !== "number") {
                spawnedMeteors[a].create(Math.floor(chance), Math.random()*390);
                break;
            }
        }
    }
};


