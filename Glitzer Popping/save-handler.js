var saves = [];
var backups = [];

var setSaveBoxes = function()
{
    if (localStorage.getItem("GP-savedsubstructures") != null)
        saves = JSON.parse(localStorage.getItem("GP-savedsubstructures"));
    else
    {
        for (var i = 0; i < 10; i++)
            saves.push(["Empty", 0, ""]);
    }
    for (var i = 0; i < 10; i++)
        backups.push("");
    
    for (var i = 0; i < 10; i++)
    {
        document.getElementById("save"+i).classList.add("savefile");
        document.getElementById("save"+i).file = i;
        if (saves[i][0] != "Empty")
        {
            document.getElementById("save"+i).innerText = saves[i][0];
            document.getElementById("save"+i).appendChild(document.createElement("br"));
            document.getElementById("save"+i).appendChild(createSaveButton(i));
            document.getElementById("save"+i).appendChild(createLoadButton(i));
            document.getElementById("save"+i).appendChild(createDeleteButton(i));
        }
        else
        {
            document.getElementById("save"+i).innerText = "Empty";
            document.getElementById("save"+i).appendChild(document.createElement("br"));
            document.getElementById("save"+i).appendChild(createSaveButton(i));
        }
    }
};

var createSaveButton = function(file)
{
    var button = document.createElement("button");
    button.file = file;
    button.innerText = "Save";
    
    button.addEventListener("click", function() {
        if (typeof corruptionType == "number")
        {
            if (saves[this.file][0] != "Empty")
                backups[this.file] = JSON.stringify(saves[this.file]);
            saves[this.file][0] = document.getElementById("pokemon-0").value + " > " + document.getElementById("pokemon-2").value;
            saves[this.file][1] = corruptionType;
            saves[this.file][2] = getFullStructureHex();
            localStorage.setItem("GP-savedsubstructures", JSON.stringify(saves));
            
            document.getElementById("save"+this.file).innerText = saves[this.file][0];
            document.getElementById("save"+this.file).appendChild(document.createElement("br"));
            if (saves[this.file][0] != "Empty")
                document.getElementById("save"+this.file).appendChild(createUndoButton(this.file, false));
            document.getElementById("save"+this.file).appendChild(createSaveButton(this.file));
            document.getElementById("save"+this.file).appendChild(createLoadButton(this.file));
            document.getElementById("save"+this.file).appendChild(createDeleteButton(this.file));
        }
    });
    
    return button;
};

var createUndoButton = function(file, redo)
{
    var button = document.createElement("button");
    button.file = file;
    if (redo)
        button.innerText = "Redo";
    else
        button.innerText = "Undo";
    
    button.addEventListener("click", function() {
        if (saves[this.file][0] != "Empty")
        {
            var temp = JSON.stringify(saves[this.file]);
            saves[this.file] = JSON.parse(backups[this.file]);
            backups[this.file] = temp;
        }
        else
        {
            saves[this.file] = JSON.parse(backups[this.file]);
            backups[this.file] = "";
        }
        
        document.getElementById("save"+this.file).innerText = saves[this.file][0];
        document.getElementById("save"+this.file).appendChild(document.createElement("br"));
        if (backups[this.file] != "")
            document.getElementById("save"+this.file).appendChild(createUndoButton(this.file, true));
        document.getElementById("save"+this.file).appendChild(createSaveButton(this.file));
        document.getElementById("save"+this.file).appendChild(createLoadButton(this.file));
        document.getElementById("save"+this.file).appendChild(createDeleteButton(this.file));
        localStorage.setItem("GP-savedsubstructures", JSON.stringify(saves));
    });
    
    return button;
};

var createLoadButton = function(file)
{
    var button = document.createElement("button");
    button.file = file;
    button.innerText = "Load";
    
    button.addEventListener("click", function() {
        document.getElementById("corType"+saves[this.file][1]).click();
        restoreStructures(saves[this.file][2]);
    });
    
    return button;
};

var createDeleteButton = function(file)
{
    var button = document.createElement("button");
    button.file = file;
    button.innerText = "Delete";
    
    button.addEventListener("click", function() {
        backups[this.file] = JSON.stringify(saves[this.file]);
        saves[this.file][0] = "Empty";
        saves[this.file][1] = 0;
        saves[this.file][2] = "";
        localStorage.setItem("GP-savedsubstructures", JSON.stringify(saves));
        
        document.getElementById("save"+this.file).innerText = "Empty";
        document.getElementById("save"+this.file).appendChild(document.createElement("br"));
        document.getElementById("save"+this.file).appendChild(createUndoButton(this.file, false));
        document.getElementById("save"+this.file).appendChild(createSaveButton(this.file));
    });
    
    return button;
};

var getSingleStructureHex = function(start)
{
    var output = "";
    for (var i = (start+1)*13 + 1; i > start*12 + start + 2; i--)
        output += document.getElementById("hexVal"+i).value;
    return output;
};

var getFullStructureHex = function()
{
    var output = "";
    for (var i = 3; i >= 0; i--)
        output += getSingleStructureHex(i);
    return output;
};

var restoring = false;
var restoreStructures = function(hex)
{
    restoring = true;
    for (var i = 3; i >= 0; i--)
    {
        for (var j = 11; j >= 0; j--)
        {
            document.getElementById("hexVal"+(i*13+j+3)).value = hex.charAt(0) + hex.charAt(1);
            synchValues(document.getElementById("hexVal"+(i*13+j+3)));
            var temp = "";
            for (var k = 2; k < hex.length; k++)
                temp += hex.charAt(k);
            hex = temp;
        }
    }
    restoring = false;
};




