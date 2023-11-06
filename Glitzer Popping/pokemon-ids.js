var mon = function(name, expRate, glitch) {
    this.name = name;
    this.expRate = expRate;
    this.glitch = glitch || false;
};

var pokemon = [
    new mon("??????????", 0, true),
    new mon("Bulbasaur", 4),
    new mon("Ivysaur", 4),
    new mon("Venusaur", 4),
    new mon("Charmander", 4),
    new mon("Charmeleon", 4),
    new mon("Charizard", 4),
    new mon("Squirtle", 4),
    new mon("Wartortle", 4),
    new mon("Blastoise", 4),
    new mon("Caterpie", 2),
    new mon("Metapod", 2),
    new mon("Butterfree", 2),
    new mon("Weedle", 2),
    new mon("Kakuna", 2),
    new mon("Beedrill", 2),
    new mon("Pidgey", 4),
    new mon("Pidgeotto", 4),
    new mon("Pidgeot", 4),
    new mon("Rattata", 2),
    new mon("Raticate", 2),
    new mon("Spearow", 2),
    new mon("Fearow", 2),
    new mon("Ekans", 2),
    new mon("Arbok", 2),
    new mon("Pikachu", 2),
    new mon("Raichu", 2),
    new mon("Sandshrew", 2),
    new mon("Sandslash", 2),
    new mon("Nidoran-F", 4),
    new mon("Nidorina", 4),
    new mon("Nidoqueen", 4),
    new mon("Nidoran-M��", 4),
    new mon("Nidorino", 4),
    new mon("Nidoking", 4),
    new mon("Clefairy", 3),
    new mon("Clefable", 3),
    new mon("Vulpix", 2),
    new mon("Ninetales", 2),
    new mon("Jigglypuff", 3),
    new mon("Wigglytuff", 3),
    new mon("Zubat", 2),
    new mon("Golbat", 2),
    new mon("Oddish", 4),
    new mon("Gloom", 4),
    new mon("Vileplume", 4),
    new mon("Paras", 2),
    new mon("Parasect", 2),
    new mon("Venonat", 2),
    new mon("Venomoth", 2),
    new mon("Diglett", 2),
    new mon("Dugtrio", 2),
    new mon("Meowth", 2),
    new mon("Persian", 2),
    new mon("Psyduck", 2),
    new mon("Golduck", 2),
    new mon("Mankey", 2),
    new mon("Primeape", 2),
    new mon("Growlithe", 1),
    new mon("Arcanine", 1),
    new mon("Poliwag", 4),
    new mon("Poliwhirl", 4),
    new mon("Poliwrath", 4),
    new mon("Abra", 4),
    new mon("Kadabra", 4),
    new mon("Alakazam", 4),
    new mon("Machop", 4),
    new mon("Machoke", 4),
    new mon("Machamp", 4),
    new mon("Bellsprout", 4),
    new mon("Weepinbell", 4),
    new mon("Victreebel", 4),
    new mon("Tentacool", 1),
    new mon("Tentacruel", 1),
    new mon("Geodude", 4),
    new mon("Graveler", 4),
    new mon("Golem", 4),
    new mon("Ponyta", 2),
    new mon("Rapidash", 2),
    new mon("Slowpoke", 2),
    new mon("Slowbro", 2),
    new mon("Magnemite", 2),
    new mon("Magneton", 2),
    new mon("Farfetch'd", 2),
    new mon("Doduo", 2),
    new mon("Dodrio", 2),
    new mon("Seel", 2),
    new mon("Dewgong", 2),
    new mon("Grimer", 2),
    new mon("Muk", 2),
    new mon("Shellder", 1),
    new mon("Cloyster", 1),
    new mon("Gastly", 4),
    new mon("Haunter", 4),
    new mon("Gengar", 4),
    new mon("Onix", 2),
    new mon("Drowzee", 2),
    new mon("Hypno", 2),
    new mon("Krabby", 2),
    new mon("Kingler", 2),
    new mon("Voltorb", 2),
    new mon("Electrode", 2),
    new mon("Exeggcute", 1),
    new mon("Exeggutor", 1),
    new mon("Cubone", 2),
    new mon("Marowak", 2),
    new mon("Hitmonlee", 2),
    new mon("Hitmonchan", 2),
    new mon("Lickitung", 2),
    new mon("Koffing", 2),
    new mon("Weezing", 2),
    new mon("Rhyhorn", 1),
    new mon("Rhydon", 1),
    new mon("Chansey", 3),
    new mon("Tangela", 2),
    new mon("Kangaskhan", 2),
    new mon("Horsea", 2),
    new mon("Seadra", 2),
    new mon("Goldeen", 2),
    new mon("Seaking", 2),
    new mon("Staryu", 1),
    new mon("Starmie", 1),
    new mon("Mr. Mime", 2),
    new mon("Scyther", 2),
    new mon("Jynx", 2),
    new mon("Electabuzz", 2),
    new mon("Magmar", 2),
    new mon("Pinsir", 1),
    new mon("Tauros", 1),
    new mon("Magikarp", 1),
    new mon("Gyarados", 1),
    new mon("Lapras", 1),
    new mon("Ditto", 2),
    new mon("Eevee", 2),
    new mon("Vaporeon", 2),
    new mon("Jolteon", 2),
    new mon("Flareon", 2),
    new mon("Porygon", 2),
    new mon("Omanyte", 2),
    new mon("Omastar", 2),
    new mon("Kabuto", 2),
    new mon("Kabutops", 2),
    new mon("Aerodactyl", 1),
    new mon("Snorlax", 1),
    new mon("Articuno", 1),
    new mon("Zapdos", 1),
    new mon("Moltres", 1),
    new mon("Dratini", 1),
    new mon("Dragonair", 1),
    new mon("Dragonite", 1),
    new mon("Mewtwo", 1),
    new mon("Mew", 4),
    new mon("Chikorita", 4),
    new mon("Bayleef", 4),
    new mon("Meganium", 4),
    new mon("Cyndaquil", 4),
    new mon("Quilava", 4),
    new mon("Typhlosion", 4),
    new mon("Totodile", 4),
    new mon("Croconaw", 4),
    new mon("Feraligatr", 4),
    new mon("Sentret", 2),
    new mon("Furret", 2),
    new mon("Hoothoot", 2),
    new mon("Noctowl", 2),
    new mon("Ledyba", 3),
    new mon("Ledian", 3),
    new mon("Spinarak", 3),
    new mon("Ariados", 3),
    new mon("Crobat", 2),
    new mon("Chinchou", 1),
    new mon("Lanturn", 1),
    new mon("Pichu", 2),
    new mon("Cleffa", 3),
    new mon("Igglybuff", 3),
    new mon("Togepi", 3),
    new mon("Togetic", 3),
    new mon("Natu", 2),
    new mon("Xatu", 2),
    new mon("Mareep", 4),
    new mon("Flaaffy", 4),
    new mon("Ampharos", 4),
    new mon("Bellossom", 4),
    new mon("Marill", 3),
    new mon("Azumarill", 3),
    new mon("Sudowoodo", 2),
    new mon("Politoed", 4),
    new mon("Hoppip", 4),
    new mon("Skiploom", 4),
    new mon("Jumpluff", 4),
    new mon("Aipom", 3),
    new mon("Sunkern", 4),
    new mon("Sunflora", 4),
    new mon("Yanma", 2),
    new mon("Wooper", 2),
    new mon("Quagsire", 2),
    new mon("Espeon", 2),
    new mon("Umbreon", 2),
    new mon("Murkrow", 4),
    new mon("Slowking", 2),
    new mon("Misdreavus", 3),
    new mon("Unown", 2),
    new mon("Wobbuffet", 2),
    new mon("Girafarig", 2),
    new mon("Pineco", 2),
    new mon("Forretress", 2),
    new mon("Dunsparce", 2),
    new mon("Gligar", 4),
    new mon("Steelix", 2),
    new mon("Snubbull", 3),
    new mon("Granbull", 3),
    new mon("Qwilfish", 2),
    new mon("Scizor", 2),
    new mon("Shuckle", 4),
    new mon("Heracross", 1),
    new mon("Sneasel", 4),
    new mon("Teddiursa", 2),
    new mon("Ursaring", 2),
    new mon("Slugma", 2),
    new mon("Magcargo", 2),
    new mon("Swinub", 1),
    new mon("Piloswine", 1),
    new mon("Corsola", 3),
    new mon("Remoraid", 2),
    new mon("Octillery", 2),
    new mon("Delibird", 3),
    new mon("Mantine", 1),
    new mon("Skarmory", 1),
    new mon("Houndour", 1),
    new mon("Houndoom", 1),
    new mon("Kingdra", 2),
    new mon("Phanpy", 2),
    new mon("Donphan", 2),
    new mon("Porygon2", 2),
    new mon("Stantler", 1),
    new mon("Smeargle", 3),
    new mon("Tyrogue", 2),
    new mon("Hitmontop", 2),
    new mon("Smoochum", 2),
    new mon("Elekid", 2),
    new mon("Magby", 2),
    new mon("Miltank", 1),
    new mon("Blissey", 3),
    new mon("Raikou", 1),
    new mon("Entei", 1),
    new mon("Suicune", 1),
    new mon("Larvitar", 1),
    new mon("Pupitar", 1),
    new mon("Tyranitar", 1),
    new mon("Lugia", 1),
    new mon("Ho-Oh", 1),
    new mon("Celebi", 4),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("glitch", 0, true),
    new mon("Treecko", 4),
    new mon("Grovyle", 4),
    new mon("Sceptile", 4),
    new mon("Torchic", 4),
    new mon("Combusken", 4),
    new mon("Blaziken", 4),
    new mon("Mudkip", 4),
    new mon("Marshtomp", 4),
    new mon("Swampert", 4),
    new mon("Poochyena", 2),
    new mon("Mightyena", 2),
    new mon("Zigzagoon", 2),
    new mon("Linoone", 2),
    new mon("Wurmple", 2),
    new mon("Silcoon", 2),
    new mon("Beautifly", 2),
    new mon("Cascoon", 2),
    new mon("Dustox", 2),
    new mon("Lotad", 4),
    new mon("Lombre", 4),
    new mon("Ludicolo", 4),
    new mon("Seedot", 4),
    new mon("Nuzleaf", 4),
    new mon("Shiftry", 4),
    new mon("Nincada", 5),
    new mon("Ninjask", 5),
    new mon("Shedinja", 5),
    new mon("Taillow", 4),
    new mon("Swellow", 4),
    new mon("Shroomish", 6),
    new mon("Breloom", 6),
    new mon("Spinda", 3),
    new mon("Wingull", 2),
    new mon("Pelipper", 2),
    new mon("Surskit", 2),
    new mon("Masquerain", 2),
    new mon("Wailmer", 6),
    new mon("Wailord", 6),
    new mon("Skitty", 3),
    new mon("Delcatty", 3),
    new mon("Kecleon", 4),
    new mon("Baltoy", 2),
    new mon("Claydol", 2),
    new mon("Nosepass", 2),
    new mon("Torkoal", 2),
    new mon("Sableye", 4),
    new mon("Barboach", 2),
    new mon("Whiscash", 2),
    new mon("Luvdisc", 3),
    new mon("Corphish", 6),
    new mon("Crawdaunt", 6),
    new mon("Feebas", 5),
    new mon("Milotic", 5),
    new mon("Carvanha", 1),
    new mon("Sharpedo", 1),
    new mon("Trapinch", 4),
    new mon("Vibrava", 4),
    new mon("Flygon", 4),
    new mon("Makuhita", 6),
    new mon("Hariyama", 6),
    new mon("Electrike", 1),
    new mon("Manectric", 1),
    new mon("Numel", 2),
    new mon("Camerupt", 2),
    new mon("Spheal", 4),
    new mon("Sealeo", 4),
    new mon("Walrein", 4),
    new mon("Cacnea", 4),
    new mon("Cacturne", 4),
    new mon("Snorunt", 2),
    new mon("Glalie", 2),
    new mon("Lunatone", 3),
    new mon("Solrock", 3),
    new mon("Azurill", 3),
    new mon("Spoink", 3),
    new mon("Grumpig", 3),
    new mon("Plusle", 2),
    new mon("Minun", 2),
    new mon("Mawile", 3),
    new mon("Meditite", 2),
    new mon("Medicham", 2),
    new mon("Swablu", 5),
    new mon("Altaria", 5),
    new mon("Wynaut", 2),
    new mon("Duskull", 3),
    new mon("Dusclops", 3),
    new mon("Roselia", 4),
    new mon("Slakoth", 1),
    new mon("Vigoroth", 1),
    new mon("Slaking", 1),
    new mon("Gulpin", 6),
    new mon("Swalot", 6),
    new mon("Tropius", 1),
    new mon("Whismur", 4),
    new mon("Loudred", 4),
    new mon("Exploud", 4),
    new mon("Clamperl", 5),
    new mon("Huntail", 5),
    new mon("Gorebyss", 5),
    new mon("Absol", 4),
    new mon("Shuppet", 3),
    new mon("Banette", 3),
    new mon("Seviper", 6),
    new mon("Zangoose", 5),
    new mon("Relicanth", 1),
    new mon("Aron", 1),
    new mon("Lairon", 1),
    new mon("Aggron", 1),
    new mon("Castform", 2),
    new mon("Volbeat", 5),
    new mon("Illumise", 6),
    new mon("Lileep", 5),
    new mon("Cradily", 5),
    new mon("Anorith", 5),
    new mon("Armaldo", 5),
    new mon("Ralts", 1),
    new mon("Kirlia", 1),
    new mon("Gardevoir", 1),
    new mon("Bagon", 1),
    new mon("Shelgon", 1),
    new mon("Salamence", 1),
    new mon("Beldum", 1),
    new mon("Metang", 1),
    new mon("Metagross", 1),
    new mon("Regirock", 1),
    new mon("Regice", 1),
    new mon("Registeel", 1),
    new mon("Kyogre", 1),
    new mon("Groudon", 1),
    new mon("Rayquaza", 1),
    new mon("Latias", 1),
    new mon("Latios", 1),
    new mon("Jirachi", 1),
    new mon("Deoxys", 1),
    new mon("Chimecho", 3),
    new mon("Egg", 0),
    new mon("Unown-B", 2),
    new mon("Unown-C", 2),
    new mon("Unown-D", 2),
    new mon("Unown-E", 2),
    new mon("Unown-F", 2),
    new mon("Unown-G", 2),
    new mon("Unown-H", 2),
    new mon("Unown-I", 2),
    new mon("Unown-J", 2),
    new mon("Unown-K", 2),
    new mon("Unown-L", 2),
    new mon("Unown-M", 2),
    new mon("Unown-N", 2),
    new mon("Unown-O", 2),
    new mon("Unown-P", 2),
    new mon("Unown-Q", 2),
    new mon("Unown-R", 2),
    new mon("Unown-S", 2),
    new mon("Unown-T", 2),
    new mon("Unown-U", 2),
    new mon("Unown-V", 2),
    new mon("Unown-W", 2),
    new mon("Unown-X", 2),
    new mon("Unown-Y", 2),
    new mon("Unown-Z", 2),
    new mon("Unown-!", 2),
    new mon("Unown-?", 2)
];

var EXPgroup = [0, 0, 0];
var EXPformula = [
    function(exp) { return "Level ???"; },
    function(exp) {
        if (exp >= 1250000)
            return "Level 100";
        else
            return "Level "+Math.floor(Math.cbrt(Math.ceil(4*exp/5)));
    },
    function(exp) {
        if (exp >= 1000000)
            return "Level 100";
        else
            return "Level "+Math.floor(Math.cbrt(exp));
    },
    function(exp) {
        if (exp >= 800000)
            return "Level 100";
        else
            return "Level "+Math.floor(Math.cbrt(5*exp/4));
    },
    function(exp) {
        if (exp >= 1059860)
            return "Level 100";
        else if (exp == 0)
            return "Level 0";
        else if (exp <= 9)
            return "Level 1";
        else
        {
            var l;
            for (l = 0; exp >= Math.floor(6/5*Math.pow(l,3) - 15*Math.pow(l,2) + 100*l - 140); l++) {}
            return "Level " + (l-1);
        }
    },
    function(exp) {
        if (exp >= 600000)
            return "Level 100";
        else
        {
            var l;
            if (exp < 125000)
                for (l = 1; exp >= Math.floor(Math.pow(l,3)*(100-l)/50); l++) {}
            else if (exp < 257834)
                for (l = 51; exp >= Math.floor(Math.pow(l,3)*(150-l)/100); l++) {}
            else if (exp < 583539)
                for (l = 69; exp >= Math.floor(Math.pow(l,3)*Math.floor((1911-10*l)/3) / 500); l++) {}
            else
                for (l = 99; exp >= Math.floor(Math.pow(l,3)*(160-l)/100); l++) {
                    if (l >= 160)
                    {
                        l = 1000;
                        break;
                    }
                }
            return "Level " + (l-1);
        }
    },
    function(exp) {
        if (exp >= 1640000)
            return "Level 100";
        else
        {
            var l;
            if (exp < 1957)
                for (l = 1; exp >= Math.floor(Math.pow(l,3) * (Math.floor((l+1)/3)+24)/50); l++) {}
            else if (exp < 46656)
                for (l = 16; exp >= Math.floor(Math.pow(l,3) * (l+14)/50); l++) {}
            else
                for (l = 37; exp >= Math.floor(Math.pow(l,3) * (Math.floor(l/2)+32)/50); l++) {}
            return "Level " + (l-1);
        }
    }
];
var setEXP = function(id, col) {
    if (id >= pokemon.length) { EXPgroup[col] = 0; }
    else { EXPgroup[col] = pokemon[id].expRate; }
    if (document.getElementById("expDec-"+col).value >= 0) { document.getElementById("lvByEXP-"+col).innerText = EXPformula[EXPgroup[col]](document.getElementById("expDec-"+col).value); }
};

var getPokemon = {
    byId: function(value, col, fullProgram) {
        if (fullProgram !== false) { setEXP(value, col); }
        document.getElementById("pokemonNote-"+col).innerText = "";
        if (value >= pokemon.length) { return "glitch"; }
        else { return pokemon[value].name; }
    },
    
    byName: function(name, col, fullProgram) {
        var value = "?";
        if (name === "") { value = 0; }
        else {
            for (var a = 0; a < pokemon.length; a++) {
                if (name.toLowerCase() === pokemon[a].name.toLowerCase()) {
                    value = a;
                    break;
                }
            }
        }
        
        if (value === "?") {
            document.getElementById("pokemonNote-"+col).innerText = " Pokemon not found";
            return "abort";
        }
        else {
            document.getElementById("pokemonNote-"+col).innerText = "";
            if (fullProgram !== false) {
                setEXP(value, col);
            }
            return value;
        }
    }
};