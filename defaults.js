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
        }),
    new setting("Ditto catch results Gen 3", true,
        function() {
            selected = 1;
            percent = 100-23.4;
            attempts = 5;
            printin("The chance of catching a ditto at 1% health with a great ball is 23.4%. Therefore, the chance of *not* catching one is the opposite, and we simply have to find how likely it is for 1 ditto to escape after 5 attempts.");
        }),
    new setting("Ditto catch results Gen 4", false,
        function() {
            selected = 1;
            percent = 100-14.3;
            attempts = 5;
            printin("The chance of catching a ditto at 1% health with a poke ball is 14.3%.");
            printin("");
        }),

];

var changeAttempts = function(val) {};
var changePercent = function(val) {};
var changeNumerator = function(val) {};
var changeDenominator = function(val) {};

