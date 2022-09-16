/*
    All-Out War K265's simulator
    Copyright (C) 2022  [BoL] Aethia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    
    No copyright infringement intended, some text descriptions and 
    all images belong to the rightful owners.
*/

const WHITE = 0;      // Twin Dragon Faction
const PINK = 1;       // Shadow Faction
const ORANGE = 2;     // Lordsbane Faction
const GREEN = 3;      // Tempest Faction
const PURPLE = 4;     // Ages Faction
const RED = 5;        // Scarlet Faction
const YELLOW = 6;     // Longreach Faction
const AQUA = 7;       // Frost Faction
const BLUE = 8;       // Justice Faction

const kingship = [
    90,0,0,0,0,0,0,0,0, //Bases
    1,1,1,1,1,1,1,1, //Faction Stages
    1,1,1,1, //Middle Stages
    1,1,1,1,1,1,1,1, //Stages
    1,1,1,1,1,1,1,1, //Twin Dragon Stages
    1,1,1,1,1,1,1,1, //Other Stages
    1,1,1,1, //Potion Cities
    30,30,30,30, //Resources Cities
    1,1,30,30,1,1,1,1,30,30,1,1, //Blessing Cities
    50,50,50,50,50,50,50,50, //Military Cities
    10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10, //Small Industrial Cities
    30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30, //Medium Industrial Cities
    50,50,50,50,50,50,50,50 //Large Industrial Cities
    ];
const colors = ["#F1F1F1","#ff6095","#ff9641","#88ff89","#d38cf1","#ff3830","#ffc952","#56ffd2","#b2f1ff"];
const factions = ["Twin Dragon Faction", "Shadow Faction", "Lordsbane Faction", "Tempest Faction", "Ages Faction", "Scarlet Faction", "Longreach Faction", "Frost Faction", "Justice Faction"];

var prev = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var map = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var show_names = true;
var show_kingship = false;
var show_villages = false;
var canvas;
var ctx;

function initialize() {
    
    window.addEventListener('contextmenu', function (e) { 
        e.preventDefault(); 
    }, false);
    
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    refreshCanvas();
}

function toggleMapNames() {
    if (!show_names){
        $("#bNamesMap1").html("Hide Names");
        $("#bNamesMap2").html("Hide Names");
    }
    else {
        $("#bNamesMap1").html("Show Names");
        $("#bNamesMap2").html("Show Names");
    }
    show_names = !show_names;
    refreshCanvas();
}

function toggleMapKingship() {
    if (!show_kingship) {
        $("#bKingshipMap1").html("Hide Kingship");
        $("#bKingshipMap2").html("Hide Kingship");
    }
    else {
        $("#bKingshipMap1").html("Show Kingship");
        $("#bKingshipMap2").html("Show Kingship");
    }
    show_kingship = !show_kingship;
    refreshCanvas();
}

function toggleMapVillages() {
    if (!show_villages) {
        $("#bVillagesMap1").html("Hide Kingship");
        $("#bVillagesMap2").html("Hide Kingship");
    }
    else {
        $("#bVillagesMap1").html("Show Kingship");
        $("#bVillagesMap2").html("Show Kingship");
        
    }
    show_villages = !show_villages;
    refreshVillages();
}

function refreshVillages() {
    if (show_villages) {
        $("#map").attr("src","./img/map/map-villages.jpg");
        $("#warning_villages").show();
    }
    else {
        $("#map").attr("src","./img/map/map.jpg");
        $("#warning_villages").hide();
    }
}

function refreshCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawMapRegions();
    
    if (show_names) {
        for(var i = 0; i < map.length; i++)
            drawMapName(i);
    }

    if (show_kingship) {
        for(var i = 0; i < map.length; i++)
            drawKingship(i);
    }
}

function drawMapRegions() {
    for(var i = 0; i < 9; i++)
        drawMainRegion(i, 18);
}

function hex2rgb(hex){
  var r = parseInt(hex.slice(1,3), 16);
      g = parseInt(hex.slice(3,5), 16);
      b = parseInt(hex.slice(5,7), 16);
  return 'rgba('+r+', '+g+', '+b+', 0.5)';
}

function drawMainRegion(id, mod) {
    var ele = $("#i"+id);
    var pos = ele.position();
    var w = ele.width();
    var h = ele.height();
    
    ctx.beginPath();
    ctx.strokeStyle = colors[id];
    ctx.fillStyle = hex2rgb(colors[id]);
    
    ctx.lineWidth = 2;
    ctx.moveTo(pos.left + w/2, pos.top - mod);
    ctx.lineTo(pos.left + w + mod, pos.top + h/2);
    ctx.lineTo(pos.left + w/2, pos.top + h + mod);
    ctx.lineTo(pos.left - mod, pos.top + h/2);
    ctx.lineTo(pos.left + w/2, pos.top - mod);
    ctx.fill();
    ctx.stroke();
}

function getColor(i1,i2) {
    if (map[i1] == map[i2]) 
        return colors[map[i1]];
    return "#F1F1F1";
}

function drawMapName(id) {
    var ele = $("#i"+id);
    var pos = ele.position();
    var w = ele.width();
    var h = ele.height();
    var str = ele.attr("alt");
    var mod = 10;
    if (id == PINK || id == ORANGE)
        mod = -48;
    if (id < 9)
        ctx.font = "12px Sans-serif";
    else
        ctx.font = "10px Sans-serif";
    ctx.textAlign = "center";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1.5;
    ctx.strokeText(str, pos.left+w/2,pos.top+h+mod);
    ctx.fillStyle = "#FFFFFF"; // White
    ctx.fillText(str, pos.left+w/2,pos.top+h+mod);
}

function drawKingship(id) {
    if (id == 0 || id > 8) {
        var ele = $("#i"+id);
        var pos = ele.position();
        var w = ele.width();
        var h = ele.height();
        var str = kingship[id] + " / min";
        if (show_names)
            var mod = 22;
        else
            var mod = 12;
        ctx.font = "10px Sans-serif";
        ctx.textAlign = "center";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;
        ctx.strokeText(str, pos.left+w/2,pos.top+h+mod);
        ctx.fillStyle = "#FFFF00"; // Yellow
        ctx.fillText(str, pos.left+w/2,pos.top+h+mod);
    }
}

function showTooltip(id) {
    var res = $("#i"+ id).attr("alt") + "<br>Kingship: " + kingship[id] + "/min<br>";
    $("#tData").html(res);
    $("#tContainer").show();
    $("#tData").show();
    var h = $("#tData").height();
    var w = $("#tData").width();
    $("#tContainer").css('top', ($("#i" + id).position().top - h + 50) +"px");
    $("#tContainer").css('left',($("#i" + id).position().left - (w/2)) + "px");
}

function hideTooltip() {
    $("#tContainer").hide();
    $("#tData").hide();
    refreshCanvas();
}

function resetMap() {
    
}

function randomMap() {
    
}