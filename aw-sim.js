/*
    All-Out War Brotherhood of Light's simulator
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
const links = [[29,30,31,32,33,34,35,36],[73,101],[74,102],[85,107],[86,108],[87,109],[88,110],[99,115],[100,116],[53,73],[54,74],[47,56,86],[47,58,88],[60,100],[59,99],[46,57,87],[46,55,85],[45,65],[47,69],[48,72],[46,68],[101,103],[102,104],[106,108],[110,112],[114,116],[113,115],[109,111],[105,107],[0,119],[0,119],[0,122],[0,122],[0,120],[0,120],[0,121],[0,121],[79,103],[83,105],[90,112],[94,114],[93,113],[89,111],[84,106],[80,104],[17,53,54],[15,16,20,55,57],[11,12,18,58,58],[19,59,60],[65,67,119],[66,68,121],[69,71,122],[70,72,120],[9,45,54],[10,45,53],[16,46,57],[11,47,58],[15,46,55],[12,47,56],[14,48,60],[13,48,59],[65,66,119],[67,69,122],[68,70,121],[71,72,120],[17,49,61],[50,61,117],[49,62,118],[20,50,63],[18,51,62],[52,63,123],[51,64,124],[19,52,64],[1,9,101],[2,10,102],[76,81],[75,79],[78,80],[77,82],[37,76],[44,77],[75,83],[78,84],[38,81],[43,82],[3,16,107],[4,11,108],[5,15,109],[6,12,110],[42,91],[39,92],[89,95],[90,98],[41,96],[40,97],[91,96],[93,95],[94,98],[92,97],[7,14,115],[8,13,116],[1,21,73],[2,22,74],[21,37,117],[22,44,118],[28,38,117],[23,43,118],[3,28,85],[4,23,86],[5,27,87],[6,24,88],[27,42,123],[24,39,124],[26,41,123],[25,40,124],[7,26,99],[8,25,100],[66,103,105],[67,104,106],[29,30,49,61],[33,34,52,64],[35,36,50,63],[31,32,51,62],[70,111,113],[71,112,114]];

var prev = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var map = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score = [74200,0,0,0,0,0,0,0,0];
var show_names = true;
var show_kingship = false;
var show_villages = false;
var canvas;
var ctx;

var recruit = $(".recruit");
var recruitIndex = -1;

function showNextRecruit() {
    ++recruitIndex;
    recruit.eq(recruitIndex % recruit.length)
        .fadeIn(2000)
        .delay(2000)
        .fadeOut(2000, showNextRecruit);
}
    
function initialize() {
    
    window.addEventListener('contextmenu', function (e) { 
        e.preventDefault(); 
    }, false);
    
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    refreshCanvas();
    const idx = document.URL.indexOf('?');
    if (idx != -1) {
        var imports = (document.URL.substring(idx+1,document.URL.length));
        if (imports == null || imports.length < 2)
            return;
        var aux;
        
        imports = imports.slice(2);
        for(var i = 0; i < imports.length; i++) {
            var j = parseInt(imports[i]);
            score[map[i]] -= kingship[i];
            map[i] = j;
            score[map[i]] += kingship[i];
            refreshBuilding(i);
        }
    }
    recruit = $(".recruit");
    recruitIndex = -1;
    showNextRecruit();
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
        $("#bVillagesMap1").html("Hide Villages");
        $("#bVillagesMap2").html("Hide Villages");
    }
    else {
        $("#bVillagesMap1").html("Show Villages");
        $("#bVillagesMap2").html("Show Villages");
        
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

function attack(id) {
    map[id] = getNextColor(id);
    refreshBuilding(id);
    updateURL();
    refreshCanvas();
    showTooltip(id);
}

function refreshBuilding(id) {
    var ele = $("#i" + id);
    var src = ele.attr('src').split('');
    src[10] = map[id]; //TODO: dymamic
    src = src.join('');
    ele.attr('src',src);
}

function getNextColor(id) {
    var res = []
    for(var i = 0; i < links[id].length; i++){
        var color = map[links[id][i]];
        if (color != map[id] && color > prev[id] && res.indexOf(color) == -1){
            res.push(color);
        }
    }
    res.sort();
    if (res.length == 0) {
        prev[id] = 0;
        return 0;
    }
    else {
        prev[id] = res[0];
        return res[0];
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
    ctx.strokeStyle = colors[map[id]];
    ctx.fillStyle = hex2rgb(colors[map[id]]);
    
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
    for(var i = 9; i < map.length; i++) {
        map[i] = 0;
        prev[i] = 0;
        refreshBuilding(i);
    }
    map[0] = 0;
    prev[0] = 0;
    refreshBuilding(0);
    score = [74200,0,0,0,0,0,0,0,0];
    updateURL();
    refreshCanvas();
}

function randomMap() {
    resetMap();
    var conquered = [1,2,3,4,5,6,7,8];
    var faction = 1;
    var rnd;
    var linksS = [[29,30,31,32,33,34,35,36],[73,101],[74,102],[85,107],[86,108],[87,109],[88,110],[99,115],[100,116],[53,73],[54,74],[47,56,86],[47,58,88],[60,100],[59,99],[46,57,87],[46,55,85],[45,65],[47,69],[48,72],[46,68],[101,103],[102,104],[106,108],[110,112],[114,116],[113,115],[109,111],[105,107],[0,119],[0,119],[0,122],[0,122],[0,120],[0,120],[0,121],[0,121],[79,103],[83,105],[90,112],[94,114],[93,113],[89,111],[84,106],[80,104],[17,53,54],[15,16,20,55,57],[11,12,18,58,58],[19,59,60],[65,67,119],[66,68,121],[69,71,122],[70,72,120],[9,45,54],[10,45,53],[16,46,57],[11,47,58],[15,46,55],[12,47,56],[14,48,60],[13,48,59],[65,66,119],[67,69,122],[68,70,121],[71,72,120],[17,49,61],[50,61,117],[49,62,118],[20,50,63],[18,51,62],[52,63,123],[51,64,124],[19,52,64],[1,9,101],[2,10,102],[76,81],[75,79],[78,80],[77,82],[37,76],[44,77],[75,83],[78,84],[38,81],[43,82],[3,16,107],[4,11,108],[5,15,109],[6,12,110],[42,91],[39,92],[89,95],[90,98],[41,96],[40,97],[91,96],[93,95],[94,98],[92,97],[7,14,115],[8,13,116],[1,21,73],[2,22,74],[21,37,117],[22,44,118],[28,38,117],[23,43,118],[3,28,85],[4,23,86],[5,27,87],[6,24,88],[27,42,123],[24,39,124],[26,41,123],[25,40,124],[7,26,99],[8,25,100],[66,103,105],[67,104,106],[29,30,49,61],[33,34,52,64],[35,36,50,63],[31,32,51,62],[70,111,113],[71,112,114]];
    while(conquered.length < 125) {
        faction = (Math.round(Math.random() * 100)%8) + 1;
        rnd = Math.round(Math.random() * 100)%(linksS[faction].length);
        var id = linksS[faction][rnd];
        linksS[faction].splice(rnd,1);
        if (map[id] == WHITE){
            score[map[id]] -= kingship[id];
            map[id] = getNextColor(id);
            score[map[id]] += kingship[id];
            refreshBuilding(id)
            conquered.push(id);
            (linksS[faction]).push(...linksS[id]);
            linksS[id] = [];
            //updateFactionsData();
        }
    }
    refreshCanvas();
    updateURL();
}

function updateURL() {
    var url_export_m = getMapId();
    var url = new URL(document.URL.toString());
    var query_string = url.search;
    var search_params = new URLSearchParams(query_string); 
    search_params.set('m', url_export_m);
    url.search = search_params.toString();
    var new_url = url.toString();
    if (history.pushState)
        window.history.pushState("", "", new_url);
    else
        document.location.href = new_url;
}

function getMapId() {
    var res = "";
    for(var i = 0; i < map.length; i++)
        res += map[i];
    return res;
}
