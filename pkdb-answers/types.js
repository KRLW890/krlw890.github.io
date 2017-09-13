var type = function(name, weaknesses, resistances, immune, fillColor, textColor) {
    this.name = name || "none";
    this.weaknesses = weaknesses || [];
    this.resistances = resistances || [];
    this.immune = immune || [];
};

var types = [
    new type("Normal", ["Fighting"], [], ["Ghost"]),
    new type("Fire", ["Water", "Ground", "Rock"], ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"], []),
    new type("Water", ["Electric", "Grass"], ["Fire", "Water", "Ice", "Steel"], []),
    new type("Electric", ["Ground"], ["Electric", "Flying", "Steel"], []),
    new type("Grass", ["Fire", "Poison", "Flying", "Bug", "Ice"], ["Water", "Electric", "Grass", "Ground"], []),
    new type("Ice", ["Fire", "Fighting", "Rock", "Steel"], ["Ice"], []),
    new type("Fighting", ["Flying", "Psychic", "Fairy"], ["Bug", "Rock", "Dark"], []),
    new type("Poison", ["Ground", "Psychic"], ["Grass", "Fighting", "Poison", "Bug", "Fairy"], []),
    new type("Ground", ["Water", "Grass", "Ice"], ["Poison", "Rock"], ["Electric"]),
    new type("Flying", ["Electric", "Ice", "Rock"], ["Grass", "Fighting", "Bug"], ["Ground"]),
    new type("Psychic", ["Ghost", "Bug", "Dark"], ["Fighting", "Psychic"], []),
    new type("Bug", ["Fire", "Flying", "Rock"], ["Grass", "Fighting", "Ground"], []),
    new type("Rock", ["Water", "Grass", "Fighting", "Ground", "Steel"], ["Normal", "Fire", "Poison", "Flying"], []),
    new type("Ghost", ["Ghost", "Dark"], ["Poison", "Bug"], ["Normal", "Fighting"]),
    new type("Dragon", ["Ice", "Dragon", "Fairy"], ["Fire", "Water", "Electric", "Grass"], []),
    new type("Dark", ["Fighting", "Bug", "Fairy"], ["Ghost", "Dark"], ["Psychic"]),
    new type("Steel", ["Fire", "Fighting", "Ground"], ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"], ["Poison"]),
    new type("Fairy", ["Poison", "Steel"], ["Fighting", "Bug", "Dark"], ["Dragon"]),
    new type("Immortal", [], [], ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy", "none"]), // MAYBE not a real type...
    new type("none")
];
var findTypeValue = function(input) {
    var output = 19;
    switch (input.toLowerCase()) {
        case "normal": output = 0; break;
        case "fire": output = 1; break;
        case "water": output = 2; break;
        case "electric": output = 3; break;
        case "grass": output = 4; break;
        case "ice": output = 5; break;
        case "fighting": output = 6; break;
        case "poison": output = 7; break;
        case "ground": output = 8; break;
        case "flying": output = 9; break;
        case "psychic": output = 10; break;
        case "bug": output = 11; break;
        case "rock": output = 12; break;
        case "ghost": output = 13; break;
        case "dragon": output = 14; break;
        case "dark": output = 15; break;
        case "steel": output = 16; break;
        case "fairy": output = 17; break;
        case "immortal": output = 18; break;
        default: output = 19; break;
    }
    return output;
};

var findEffectiveness = function(defender, attacker) {
    if (typeof defender === "string") { defender = findTypeValue(defender); }
    if (typeof attacker === "number") { attacker = types[attacker].name; }
    
    for (var a = 0; a < types[defender].weaknesses.length; a++) {
        if (types[defender].weaknesses[a] === attacker) { return 2; }
    }
    for (var a = 0; a < types[defender].resistances.length; a++) {
        if (types[defender].resistances[a] === attacker) { return 0.5; }
    }
    for (var a = 0; a < types[defender].immune.length; a++) {
        if (types[defender].immune[a] === attacker) { return 0; }
    }
    
    return 1;
};

