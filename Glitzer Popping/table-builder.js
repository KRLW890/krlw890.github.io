// I would like to apologize for the absolute mess of spaghetti code before you. So basically, the entire table is built from scratch using JavaScript, and this file handles absolutely everything involved in building that table, including most of its functionality.

// table will become the HTML object for the table, corruptionType holds onto the number of the current corruption type
var table, corruptionType;

// get the most recent column and row of the table while building the table.
var getCol = function() { return Math.floor(table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length/2)*2; }
var getRow = function() { return table.tBodies[0].rows.length-1; }

/* create an input of type number or text.
   max is the maximum value for number inputs, and the max character length on text inputs
   onchange is the function that gets run on the input's change event
   id is the input's id tag
   if path is defined (as an HTML object), it appends the input to that object. Otherwise, the input is appended to the most recent cell in the table
   if input is defined (as an HTML input object), all of this is applied to that object. Otherwise, a new input is created. This is so that I can hold onto that input object before and after this function if needed
*/
var createInput = function(type, max, onchange, id, path, input) {
    if (input === undefined) { input = document.createElement("input"); }
    input.row = getRow();
    input.col = getCol();
    if (type === "number") {
        input.type = type;
        input.base10 = true;
        input.min = 0;
        input.max = max;
        input.value = 0;
    }
    else if (type === "hex") {
        input.type = "text";
        input.base10 = false;
        input.maxLength = max;
        input.value = "";
        for (var a = 0; a < max; a++) { input.value += "0"; }
    }
    else {
        input.type = type;
        input.base10 = false;
        input.maxLength = max;
    }
    input.id = id;
    input.addEventListener("change", function() { onchange(input); });
    if (path===undefined) { table.tBodies[0].rows[getRow()].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(input); }
    else { path.appendChild(input); }
};

/* create a dropdown
   options is an array of options
   onchange is the function that gets run on the input's change event
   id is the input's id tag
   if path is defined (as an HTML object), it appends the input to that object. Otherwise, the input is appended to the most recent cell in the table
*/
var createDropdown = function(options, onchange, id, path) {
    var input = document.createElement("select");
    input.id = id;
    input.row = getRow();
    input.col = getCol();
    
    for (var a = 0; a < options.length; a++) {
        var op = document.createElement("option");
        op.value = a;
        op.innerText = options[a];
        input.appendChild(op);
    }
    
    input.addEventListener("change", function() { onchange(input); });
    if (path===undefined) { table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(input); }
    else { path.appendChild(input); }
};

/* this completely builds the most standard cell type (2 bytes long, label on top, name input, decimal id input, hex id input)
   id is the start of the id used for the inputs
   retrieve links to standardized classes of functions that retrieve the id or name of pokemon/items/moves
*/
var buildStandard = function(id, retrieve) {
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(table.tBodies[0].rows.length-1);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(table.tBodies[0].rows.length);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { setCellExternally(this.col, retrieve.byId, id); };
    
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
    var n = document.createElement("label");
    n.innerText = "Name: ";
    createInput("text", 16, function(i) { setCellByName(i, retrieve.byName, id); }, id+"-"+getCol(), n);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(n);
    var note = document.createElement("label");
    note.classList.add("note");
    note.id = id+"Note-"+getCol();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(note);
    var d = document.createElement("p");
    d.innerText = "Decimal ID No: ";
    createInput("number", 65535, function(i) { setCellByNumber(i, retrieve.byId, id); }, id+"Dec-"+getCol(), d);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(d);
    var h = document.createElement("p");
    h.innerText = "Hex ID No: ";
    createInput("hex", 4, function(i) { setCellByNumber(i, retrieve.byId, id); }, id+"Hex-"+getCol(), h);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
};

/* This class of 4 functions builds each cell 

*/
var build = {
    Growth: function(offset) {
        switch (offset) {
            case 10: //unused
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "2";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Unused bytes";
            break;
            case 9: //friendship
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Friendship";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(table.tBodies[0].rows.length-1);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
                var input = document.createElement("input");
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { input.value = document.getElementById("decVal"+input.row).value; };
                createInput("number", 255, function(i) { synchValues(i); }, "", undefined, input);
            break;
            case 8: //PP ups
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(table.tBodies[0].rows.length-1);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "PP Ups used on move:";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
                for (var a = 0; a < 4; a++) {
                    var l = document.createElement("label");
                    l.innerText = " "+ (a+1) +": ";
                    createInput("number", 3, function(input) { setPPups(input, false); }, "ppup-"+getCol()+"-"+a, l);
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(l);
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() {
                    for (var a = 0; a < 4; a++) {
                        document.getElementById("ppup-"+this.col+"-"+a).value = Math.floor(document.getElementById("decVal"+this.row).value/Math.pow(4, a))%4;
                        setPPups(document.getElementById("ppup-"+this.col+"-"+a), true);
                    }
                };
            break;
            case 4: //EXP
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "4";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "EXP";
                for (var a = 0; a < 4; a++) {
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(((table.tBodies[0].rows.length-1)+a));
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                
                var level = document.createElement("p");
                level.id = "lvByEXP-"+(table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1);
                level.innerText = "Level ???";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(level);
                var d = document.createElement("p");
                d.innerText = "Total EXP: ";
                createInput("number", 4294967295, function(i) { setExpCell(i, false); }, "expDec-"+getCol(), d);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(d);
                var h = document.createElement("p");
                h.innerText = "Total EXP (Hexadecimal): ";
                var hexInput = document.createElement("input");
                createInput("hex", 8, function(i) { setExpCell(i, false); }, "expHex-"+getCol(), h, hexInput);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() {
                    hexInput.value = "";
                    for (var a = 3; a >= 0; a--) { hexInput.value += document.getElementById("hexVal"+(hexInput.row+a)).value; }
                    setExpCell(hexInput, true);
                };
                if (getCol() === 0) {
                    var protip = document.createElement("p");
                    protip.appendChild(document.createElement("br"));
                    protip.innerHTML += "*protip: Pokemon in the day care gain 1 EXP point per step. This can be used to get an exact EXP value.";
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(protip);
                }
            break;
            case 2: //held item
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "2";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Item";
                buildStandard("item", getItem);
            break;
            case 0: //Pokemon species
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "2";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Pokemon species";
                buildStandard("pokemon", getPokemon);
            break;
        }
    },
    Attacks: function(offset) {
        if (offset <= 6 && offset%2 === 0) {
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "2";
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Moveslot "+(offset/2+1);
            buildStandard("move"+offset/2, getMove);
        }
        else if (offset > 7) {
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].bonuses = 0;
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].base = 0;
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].total = 0;
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].remaining = 0;
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].id = "pp-"+getCol()+"-"+(offset-8);
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(getRow());

            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Remaining PP of slot "+(offset-7);
            var p = document.createElement("p");
            p.innerText = "0 / 0";
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(p);
            table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function(changed) {
                if (changed) { this.total = Math.floor(this.base*(this.bonuses-0+5)/5); }
                
                if (this.col === 0 && !restoring) {
                    if (changed) { this.remaining = this.total; }
                    document.getElementById("decVal"+this.row).value = this.total;
                    synchValues(document.getElementById("decVal"+this.row), this.col);
                }
                else { this.remaining = document.getElementById("decVal"+this.row).value; }
                
                p.innerText = this.remaining + " / " + this.total;
            };
        }
    },
    EVs: function(offset) {
        table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
        switch (offset) {
            case 11:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Feel";
            break;
            case 10:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Toughness";
            break;
            case 9:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Smartness";
            break;
            case 8:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Cuteness";
            break;
            case 7:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Beauty";
            break;
            case 6:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Coolness";
            break;
            case 5:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Special Defense EVs";
            break;
            case 4:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Special Attack EVs";
            break;
            case 3:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Speed EVs";
            break;
            case 2:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Defense EVs";
            break;
            case 1:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Attack EVs";
            break;
            case 0:
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "HP EVs";
            break;
        }
        table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(table.tBodies[0].rows.length-1);
        table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
        table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
        var input = document.createElement("input");
        table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { input.value = document.getElementById("decVal"+input.row).value; };
        createInput("number", 255, function(i) { synchValues(i); }, "", undefined, input);
    },
    Miscellaneous: function(offset) {
        switch (offset) {
            case 8: //Ribbons, Mew/Deoxys' obedience
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "4";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Ribbons, Mew/Deoxys' obedience";
                for (var a = 0; a < 4; a++) {
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(((table.tBodies[0].rows.length-1)+a));
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                var h = document.createElement("p");
                h.innerText = "Hex value: ";
                var hexInput = document.createElement("input");
                createInput("hex", 8, function(i) { setRibbonsFromHex(i, false); }, "ieo"+getRow()+"-"+getCol(), h, hexInput);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { setRibbonsFromHex(hexInput, true); };
                
                var ribbons = document.createElement("table");
                ribbons.classList.add("inner");
                var labels = [["Cool Rbns", "Beauty Rbns", "Cute Rbns"], ["Smart Rbns", "Tough Rbns"], ["Champion Rbn", "Winning Rbn", "Victory Rbn"], ["Artist Rbn", "Effort Rbn", "Special Rbn 1"], ["Special Rbn 2", "Special Rbn 3", "Special Rbn 4"], ["Special Rbn 5", "Special Rbn 6", "Obedient"]];
                for (var a = 0; a < 6; a++) {
                    ribbons.insertRow();
                    for (var b = 0; b < labels[a].length; b++) {
                        ribbons.rows[a].insertCell();
                        ribbons.rows[a].cells[b].classList.add("inner");
                        ribbons.rows[a].cells[b].colSpan = (6/labels[a].length);
                        ribbons.rows[a].cells[b].innerText = labels[a][b]+": ";
                        if (a < 2)
                            createDropdown(["0", "1", "2", "3", "4", "5", "6", "7"], function() { setRibbonsFromValues(hexInput); }, "ribbons-con"+(a*3+b)+"-"+getCol(), ribbons.rows[a].cells[b]);
                        else
                            createDropdown(["No", "Yes"], function() { setRibbonsFromValues(hexInput); }, "ribbons"+((a-2)*3+b)+"-"+getCol(), ribbons.rows[a].cells[b]);
                            //createInput("number", 1, function() { setRibbonsFromValues(hexInput); }, "ribbons"+((a-2)*3+b)+"-"+getCol(), ribbons.rows[a].cells[b]);
                    }
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(ribbons);
            break;
            case 4: //IVs, egg, ability
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "4";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "IVs, egg, ability";
                for (var a = 0; a < 4; a++) {
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(((table.tBodies[0].rows.length-1)+a));
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                var h = document.createElement("p");
                h.innerText = "Hex value: ";
                var hexInput = document.createElement("input");
                createInput("hex", 8, function(i) { setIEOFromHex(i, false); }, "ieo"+getRow()+"-"+getCol(), h, hexInput);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { setIEOFromHex(hexInput, true); };
                
                var ivs = document.createElement("table");
                ivs.classList.add("inner");
                ivs.insertRow();
                ivs.rows[0].insertCell();
                ivs.rows[0].cells[0].classList.add("inner");
                ivs.rows[0].cells[0].rowSpan = 3;
                ivs.rows[0].cells[0].innerText = " IVs: ";
                var statnames = [["HP", "Attack"], ["Defense", "Speed"], ["Sp. Atk", "Sp. Def"]];
                for (var a = 0; a < 3; a++) {
                    if (a > 0) { ivs.insertRow(); }
                    for (var b = 0; b < 2; b++) {
                        ivs.rows[a].insertCell();
                        ivs.rows[a].cells[ivs.rows[a].cells.length-1].classList.add("inner");
                        ivs.rows[a].cells[ivs.rows[a].cells.length-1].innerText = statnames[a][b]+": ";
                        createInput("number", 31, function() { setIEOFromValues(hexInput); }, "ieo"+getRow()+"-"+getCol()+"-"+(a*2+b), ivs.rows[a].cells[ivs.rows[a].cells.length-1]);
                    }
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(ivs);
                
                var egg = document.createElement("p");
                egg.innerText = "Is the Pokemon an egg? ";
                createDropdown(["No", "Yes"], function() { setIEOFromValues(hexInput); }, "ieo"+getRow()+"-"+getCol()+"-egg", egg);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(egg);
                var ability = document.createElement("p");
                ability.innerText = "Ability: ";
                createInput("number", 1, function() { setIEOFromValues(hexInput); }, "ieo"+getRow()+"-"+getCol()+"-ability", ability);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(ability);
            break;
            case 2: //origins
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].rowSpan = "2";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Origins";
                for (var a = 0; a < 2; a++) {
                    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(((table.tBodies[0].rows.length-1)+a));
                }
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                var h = document.createElement("p");
                h.innerText = "Hex value: ";
                var hexInput = document.createElement("input");
                createInput("hex", 4, function(i) { setOriginsFromHex(i, false); }, "origins"+getRow()+"-"+getCol(), h, hexInput);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() { setOriginsFromHex(hexInput, true); };
                
                var origins = document.createElement("table");
                origins.classList.add("inner");
                origins.insertRow();
                origins.rows[0].insertCell();
                origins.rows[0].cells[0].classList.add("inner");
                origins.rows[0].cells[0].innerText = "Met at Lv: ";
                createInput("number", 127, function() { setOriginsFromValues(hexInput); }, "origins"+getRow()+"-"+getCol()+"-lv", origins.rows[0].cells[0]);
                origins.rows[0].insertCell();
                origins.rows[0].cells[1].classList.add("inner");
                origins.rows[0].cells[1].innerText = "Game of origin: ";
                createDropdown(["Colo Bonus Disc", "Sapphire", "Ruby", "Emerald", "FireRed", "LeafGreen", "???", "???", "???", "???", "???", "???", "???", "???", "???", "Colo/XD"], function() { setOriginsFromValues(hexInput); }, "origins"+getRow()+"-"+getCol()+"-game", origins.rows[0].cells[1]);
                origins.insertRow();
                origins.rows[1].insertCell();
                origins.rows[1].cells[0].classList.add("inner");
                origins.rows[1].cells[0].innerText = "Ball: ";
                createDropdown(["???", "Master", "Ultra", "Great", "Poke", "Safari", "Net", "Dive", "Nest", "Repeat", "Timer", "Luxury", "Premier", "???", "???", "???"], function() { setOriginsFromValues(hexInput); }, "origins"+getRow()+"-"+getCol()+"-ball", origins.rows[1].cells[0]);
                origins.rows[1].insertCell();
                origins.rows[1].cells[1].classList.add("inner");
                origins.rows[1].cells[1].innerText = "OT's Gender: ";
                createDropdown(["Male", "Female"], function() { setOriginsFromValues(hexInput); }, "origins"+getRow()+"-"+getCol()+"-ot", origins.rows[1].cells[1]);
                
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(origins);
            break;
            case 1: //location
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].innerText = "Location met";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(getRow());
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
                
                createInput("text", 30, function(input) { setLocation(input); }, "location"+getCol());
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() {
                    document.getElementById("location"+this.col).value = locations[document.getElementById("decVal"+this.row).value];
                };
                var note = document.createElement("label");
                note.classList.add("note");
                note.id = "locationNote-"+getCol();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(note);
            break;
            case 0: //pokerus
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].classList.add(getRow());
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].row = getRow();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].col = getCol();
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].synch = function() {
                    setPokerus(this.row, this.col);
                };
                var strain = document.createElement("label");
                strain.innerText = "Pokerus strain: ";
                createInput("number", 15, function(input) { setPokerus(input.row, input.col, false); }, "pokerusStrain"+getCol(), strain);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(strain);
                var label = document.createElement("label");
                label.id = "pokerusLabel"+getCol();
                label.innerText = " (No Pokerus)";
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(label);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(document.createElement("br"));
                
                var days = document.createElement("p");
                days.innerText = "Days remaining: ";
                createInput("number", 15, function(input) { setPokerus(input.row, input.col, false); }, "pokerusDays"+getCol(), days);
                table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(days);
            break;
        }
    },
};

var createValueCell = function() {
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
    var d = document.createElement("p");
    d.innerText = "Decimal value: ";
    createInput("number", 255, synchValues, "decVal"+getRow(), d);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(d);
    
    var h = document.createElement("p");
    h.innerText = "Hex value: ";
    createInput("hex", 2, synchValues, "hexVal"+getRow(), h);
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells.length-1].appendChild(h);
};

var createSubstructure = function(corruption, place) {
    var pre;
    var post;
    switch (corruption.charAt(place*3+1)) {
        case "G": pre = "Growth"; break;
        case "A": pre = "Attacks"; break;
        case "E": pre = "EVs"; break;
        case "M": pre = "Miscellaneous"; break;
    }
    switch (corruption.charAt(place*3)) {
        case "G": post = "Growth"; break;
        case "A": post = "Attacks"; break;
        case "E": post = "EVs"; break;
        case "M": post = "Miscellaneous"; break;
    }
    
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].classList.add("sub-head");
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[0].innerText = pre;
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].insertCell();
    table.tBodies[0].rows[table.tBodies[0].rows.length-1].cells[2].innerText = post;
    
    for (var a = 0; a < 12; a++) {
        table.tBodies[0].insertRow();
        build[pre](a);
        createValueCell();
        build[post](a);
    }
};

var buildOrganizer = function(type) {
    table = document.getElementById("organizer");
    var oldHex = "";
    if (table.tBodies[0].innerText != "")
        oldHex = getFullStructureHex();
    table.tBodies[0].innerHTML = "";
    switch (type)
    {
    case "GG AE EM MA":
        corruptionType = 1;
        break;
    case "GG AM EA ME":
        corruptionType = 2;
        break;
    case "GA AG EM ME":
        corruptionType = 3;
        break;
    case "GA AE EG MM":
        corruptionType = 4;
        break;
    case "GA AM EE MG":
        corruptionType = 5;
        break;
    case "GE AG EA MM":
        corruptionType = 6;
        break;
    case "GE AA EM MG":
        corruptionType = 7;
        break;
    case "GE AM EG MA":
        corruptionType = 8;
        break;
    case "GM AG EE MA":
        corruptionType = 9;
        break;
    case "GM AA EG ME":
        corruptionType = 10;
        break;
    };
    
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[0].insertCell();
    table.tBodies[0].rows[0].cells[0].colSpan = 3;
    table.tBodies[0].rows[0].cells[0].classList.add("head");
    table.tBodies[0].rows[0].cells[0].innerText = "Substructure Organizer";
    
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[1].classList.add("head");
    table.tBodies[0].rows[1].insertCell();
    table.tBodies[0].rows[1].cells[0].classList.add("substructures");
    table.tBodies[0].rows[1].cells[0].innerText = "Pre-Corruption:";
    table.tBodies[0].rows[1].insertCell();
    table.tBodies[0].rows[1].cells[1].classList.add("raw-values");
    table.tBodies[0].rows[1].cells[1].innerText = "Values:";
    table.tBodies[0].rows[1].insertCell();
    table.tBodies[0].rows[1].cells[2].classList.add("substructures");
    table.tBodies[0].rows[1].cells[2].innerText = "Post-Corruption:";
    
    for (var a = 0; a < 4; a++) { createSubstructure(type, a); }
    
    if (oldHex != "")
        restoreStructures(oldHex);
};

