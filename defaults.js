var printin = function(str) {};

var selected = 1;
var percent = 100;
var fraction = {
    num: 1,
    den: 1
};

var attempts = 1;
var chancePerAttempt = 1;
var chance = 0;
var findChance = function() {
    if (selected === 1) { chancePerAttempt = 1/(percent/100); }
    else { chancePerAttempt = fraction.den/fraction.num; }
};

    
var setting = function(name, selected, template) {
    this.name = name;
    this.selected = selected;
    this.setTemplate = function() {
        template();
        findChance();
        chance = 0;
    }
};
var settingSelected = true;
var defaults = [
    new setting("Shiny chance Gen 2-5", false,
        function() {
            selected = 2;
            fraction.num = 1;
            fraction.den = 8192;
            attempts = 1;
        }),
    new setting("Shiny chance Gen 6+", false,
        function() {
            selected = 2;
            fraction.num = 1;
            fraction.den = 4096;
            attempts = 1;
        })
];

var changeAttempts = function(val) {};
var changePercent = function(val) {};
var changeNumerator = function(val) {};
var changeDenominator = function(val) {};

