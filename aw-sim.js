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
    1,1,1,1,1,1,1,1,30,30,30,30, //Blessing Cities
    50,50,50,50,50,50,50,50, //Military Cities
    10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10, //Small Industrial Cities
    30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30, //Medium Industrial Cities
    50,50,50,50,50,50,50,50 //Large Industrial Cities
];
const colors = ["#F1F1F1","#ff6095","#ff9641","#88ff89","#d38cf1","#ff3830","#ffc952","#56ffd2","#b2f1ff"];
const factions = ["Twin Dragon Faction", "Shadow Faction", "Lordsbane Faction", "Tempest Faction", "Ages Faction", "Scarlet Faction", "Longreach Faction", "Frost Faction", "Justice Faction"];
const links = [[29,30,31,32,33,34,35,36],[73,101],[74,102],[85,107],[86,108],[87,109],[88,110],[99,115],[100,116],[53,73],[54,74],[47,56,86],[47,58,88],[60,100],[59,99],[46,57,87],[46,55,85],[45,65],[47,69],[48,72],[46,68],[101,103],[102,104],[106,108],[110,112],[114,116],[113,115],[109,111],[105,107],[0,119],[0,119],[0,122],[0,122],[0,120],[0,120],[0,121],[0,121],[79,103],[83,105],[90,112],[94,114],[93,113],[89,111],[84,106],[80,104],[17,53,54],[15,16,20,55,57],[11,12,18,58,58],[19,59,60],[65,67,119],[66,68,121],[69,71,122],[70,72,120],[9,45,54],[10,45,53],[16,46,57],[11,47,58],[15,46,55],[12,47,56],[14,48,60],[13,48,59],[65,66,119],[67,69,122],[68,70,121],[71,72,120],[17,49,61],[50,61,117],[49,62,118],[20,50,63],[18,51,62],[52,63,123],[51,64,124],[19,52,64],[1,9,101],[2,10,102],[76,81],[75,79],[78,80],[77,82],[37,76],[44,77],[75,83],[78,84],[38,81],[43,82],[3,16,107],[4,11,108],[5,15,109],[6,12,110],[42,91],[39,92],[89,95],[90,98],[41,96],[40,97],[91,96],[93,95],[94,98],[92,97],[7,14,115],[8,13,116],[1,21,73],[2,22,74],[21,37,117],[22,44,118],[28,38,117],[23,43,118],[3,28,85],[4,23,86],[5,27,87],[6,24,88],[27,42,123],[24,39,124],[26,41,123],[25,40,124],[7,26,99],[8,25,100],[66,103,105],[67,104,106],[29,30,49,61],[33,34,52,64],[35,36,50,63],[31,32,51,62],[70,111,113],[71,112,114]];
const buildings = [["Twin Dragon City",701,701], ["Shadow Fortress",453,53], ["Lordsbane Fort",949,53], ["Tempest Keep",65,437], ["Hall of Ages",1337,437], ["Scarlet Palace",65,965], ["Longreach Castle",1337,965], ["Fortress of Frost",453,1349], ["City of Judgement",949,1349], ["Stage 1",601,85], ["Stage 2",801,85], ["Stage 3",1289,609], ["Stage 4",1289,793], ["Stage 5",801,1317], ["Stage 6",601,1317], ["Stage 7",113,793], ["Stage 8",113,609], ["Stage 9",701,217], ["Stage 10",1195,701], ["Stage 11",701,1185], ["Stage 12",207,701], ["Stage 13",493,213], ["Stage 14",909,213], ["Stage 15",1191,493], ["Stage 16",1191,909], ["Stage 17",909,1189], ["Stage 18",493,1189], ["Stage 19",211,909], ["Stage 20",211,493], ["Stage 21",653,597], ["Stage 22",749,597], ["Stage 23",805,653], ["Stage 24",805,749], ["Stage 25",749,805], ["Stage 26",653,805], ["Stage 27",597,749], ["Stage 28",597,653], ["Stage 29",355,259], ["Stage 30",259,355], ["Stage 31",1145,1047], ["Stage 32",1049,1143], ["Stage 33",353,1143], ["Stage 34",257,1047], ["Stage 35",1143,353], ["Stage 36",1047,257], ["Potion 1",701,133], ["Potion 2",113,701], ["Potion 3",1289,701], ["Potion 4",701,1269], ["Resources 1",781,413], ["Resources 2",413,621], ["Resources 3",989,781], ["Resources 4",621,989], ["S. Blessing 1",653,53], ["S. Blessing 2",749,53], ["S. Blessing 3",33,653], ["S. Blessing 4",1369,653], ["S. Blessing 5",33,749], ["S. Blessing 6",1369,749], ["S. Blessing 7",653,1349], ["S. Blessing 8",749,1349], ["L. Blessing 1",621,413], ["L. Blessing 2",989,621], ["L. Blessing 3",413,781], ["L. Blessing 4",781,989], ["Military 1",701,301], ["Military 2",525,509], ["Military 3",877,509], ["Military 4",301,701], ["Military 5",1101,701], ["Military 6",525,893], ["Military 7",877,893], ["Military 8",701,1101], ["S. Industrial 1",549,53], ["S. Industrial 2",853,53], ["S. Industrial 3",79,79], ["S. Industrial 4",239,79], ["S. Industrial 5",1161,79], ["S. Industrial 6",1321,79], ["S. Industrial 7",287,191], ["S. Industrial 8",1113,191], ["S. Industrial 9",79,239], ["S. Industrial 10",1321,239], ["S. Industrial 11",191,287], ["S. Industrial 12",1209,287], ["S. Industrial 13",65,565], ["S. Industrial 14",1337,565], ["S. Industrial 15",65,837], ["S. Industrial 16",1337,837], ["S. Industrial 17",191,1113], ["S. Industrial 18",1211,1113], ["S. Industrial 19",79,1161], ["S. Industrial 20",1323,1161], ["S. Industrial 21",287,1209], ["S. Industrial 22",1115,1209], ["S. Industrial 23",79,1321], ["S. Industrial 24",239,1321], ["S. Industrial 25",1163,1321], ["S. Industrial 26",1323,1321], ["S. Industrial 27",549,1349], ["S. Industrial 28",853,1349], ["M. Industrial 1",501,133], ["M. Industrial 2",901,133], ["M. Industrial 3",445,301], ["M. Industrial 4",957,301], ["M. Industrial 5",301,445], ["M. Industrial 6",1101,445], ["M. Industrial 7",129,501], ["M. Industrial 8",1273,501], ["M. Industrial 9",129,901], ["M. Industrial 10",1273,901], ["M. Industrial 11",301,957], ["M. Industrial 12",1101,957], ["M. Industrial 13",445,1101], ["M. Industrial 14",957,1101], ["M. Industrial 15",501,1269], ["M. Industrial 16",901,1269], ["L. Industrial 1",397,413], ["L. Industrial 2",1005,413], ["L. Industrial 3",701,493], ["L. Industrial 4",701,909], ["L. Industrial 5",493,701], ["L. Industrial 6",909,701], ["L. Industrial 7",397,989], ["L. Industrial 8",1005,989], ["Village 1",79,15], ["Village 2",111,15], ["Village 3",143,15], ["Village 4",175,15], ["Village 5",207,15], ["Village 6",239,15], ["Village 7",271,15], ["Village 8",303,15], ["Village 9",335,15], ["Village 10",367,15], ["Village 11",1033,15], ["Village 12",1065,15], ["Village 13",1097,15], ["Village 14",1129,15], ["Village 15",1161,15], ["Village 16",1193,15], ["Village 17",1225,15], ["Village 18",1257,15], ["Village 19",1289,15], ["Village 20",1321,15], ["Village 21",421,21], ["Village 22",485,21], ["Village 23",517,21], ["Village 24",581,21], ["Village 25",621,21], ["Village 26",685,21], ["Village 27",717,21], ["Village 28",781,21], ["Village 29",821,21], ["Village 30",885,21], ["Village 31",917,21], ["Village 32",981,21], ["Village 33",63,31], ["Village 34",95,31], ["Village 35",127,31], ["Village 36",191,31], ["Village 37",223,31], ["Village 38",255,31], ["Village 39",287,31], ["Village 40",351,31], ["Village 41",383,31], ["Village 42",1017,31], ["Village 43",1049,31], ["Village 44",1113,31], ["Village 45",1145,31], ["Village 46",1177,31], ["Village 47",1209,31], ["Village 48",1273,31], ["Village 49",1305,31], ["Village 50",1337,31], ["Village 51",501,37], ["Village 52",701,37], ["Village 53",901,37], ["Village 54",47,47], ["Village 55",111,47], ["Village 56",207,47], ["Village 57",271,47], ["Village 58",367,47], ["Village 59",1033,47], ["Village 60",1129,47], ["Village 61",1193,47], ["Village 62",1289,47], ["Village 63",1353,47], ["Village 64",31,63], ["Village 65",127,63], ["Village 66",191,63], ["Village 67",287,63], ["Village 68",351,63], ["Village 69",383,63], ["Village 70",1017,63], ["Village 71",1049,63], ["Village 72",1113,63], ["Village 73",1209,63], ["Village 74",1273,63], ["Village 75",1369,63], ["Village 76",501,69], ["Village 77",701,69], ["Village 78",901,69], ["Village 79",15,79], ["Village 80",143,79], ["Village 81",175,79], ["Village 82",303,79], ["Village 83",335,79], ["Village 84",367,79], ["Village 85",1033,79], ["Village 86",1065,79], ["Village 87",1097,79], ["Village 88",1225,79], ["Village 89",1257,79], ["Village 90",1385,79], ["Village 91",421,85], ["Village 92",485,85], ["Village 93",517,85], ["Village 94",685,85], ["Village 95",717,85], ["Village 96",885,85], ["Village 97",917,85], ["Village 98",981,85], ["Village 99",31,95], ["Village 100",127,95], ["Village 101",191,95], ["Village 102",287,95], ["Village 103",351,95], ["Village 104",383,95], ["Village 105",1017,95], ["Village 106",1049,95], ["Village 107",1113,95], ["Village 108",1209,95], ["Village 109",1273,95], ["Village 110",1369,95], ["Village 111",469,101], ["Village 112",533,101], ["Village 113",669,101], ["Village 114",733,101], ["Village 115",869,101], ["Village 116",933,101], ["Village 117",15,111], ["Village 118",47,111], ["Village 119",111,111], ["Village 120",207,111], ["Village 121",271,111], ["Village 122",367,111], ["Village 123",1033,111], ["Village 124",1129,111], ["Village 125",1193,111], ["Village 126",1289,111], ["Village 127",1353,111], ["Village 128",1385,111], ["Village 129",31,127], ["Village 130",63,127], ["Village 131",95,127], ["Village 132",127,127], ["Village 133",191,127], ["Village 134",223,127], ["Village 135",255,127], ["Village 136",287,127], ["Village 137",351,127], ["Village 138",383,127], ["Village 139",1017,127], ["Village 140",1049,127], ["Village 141",1113,127], ["Village 142",1145,127], ["Village 143",1177,127], ["Village 144",1209,127], ["Village 145",1273,127], ["Village 146",1305,127], ["Village 147",1337,127], ["Village 148",1369,127], ["Village 149",15,143], ["Village 150",79,143], ["Village 151",143,143], ["Village 152",175,143], ["Village 153",239,143], ["Village 154",271,143], ["Village 155",303,143], ["Village 156",335,143], ["Village 157",1065,143], ["Village 158",1097,143], ["Village 159",1129,143], ["Village 160",1161,143], ["Village 161",1225,143], ["Village 162",1257,143], ["Village 163",1321,143], ["Village 164",1385,143], ["Village 165",421,149], ["Village 166",453,149], ["Village 167",549,149], ["Village 168",581,149], ["Village 169",621,149], ["Village 170",653,149], ["Village 171",749,149], ["Village 172",781,149], ["Village 173",821,149], ["Village 174",853,149], ["Village 175",949,149], ["Village 176",981,149], ["Village 177",159,159], ["Village 178",255,159], ["Village 179",319,159], ["Village 180",1081,159], ["Village 181",1145,159], ["Village 182",1241,159], ["Village 183",437,165], ["Village 184",469,165], ["Village 185",533,165], ["Village 186",565,165], ["Village 187",637,165], ["Village 188",669,165], ["Village 189",733,165], ["Village 190",765,165], ["Village 191",837,165], ["Village 192",869,165], ["Village 193",933,165], ["Village 194",965,165], ["Village 195",15,175], ["Village 196",79,175], ["Village 197",143,175], ["Village 198",175,175], ["Village 199",239,175], ["Village 200",335,175], ["Village 201",1065,175], ["Village 202",1161,175], ["Village 203",1225,175], ["Village 204",1257,175], ["Village 205",1321,175], ["Village 206",1385,175], ["Village 207",421,181], ["Village 208",453,181], ["Village 209",485,181], ["Village 210",549,181], ["Village 211",581,181], ["Village 212",621,181], ["Village 213",653,181], ["Village 214",685,181], ["Village 215",717,181], ["Village 216",749,181], ["Village 217",781,181], ["Village 218",821,181], ["Village 219",853,181], ["Village 220",917,181], ["Village 221",949,181], ["Village 222",981,181], ["Village 223",517,189], ["Village 224",885,189], ["Village 225",31,191], ["Village 226",63,191], ["Village 227",95,191], ["Village 228",127,191], ["Village 229",191,191], ["Village 230",223,191], ["Village 231",351,191], ["Village 232",383,191], ["Village 233",1017,191], ["Village 234",1049,191], ["Village 235",1177,191], ["Village 236",1209,191], ["Village 237",1273,191], ["Village 238",1305,191], ["Village 239",1337,191], ["Village 240",1369,191], ["Village 241",469,197], ["Village 242",669,197], ["Village 243",733,197], ["Village 244",933,197], ["Village 245",15,207], ["Village 246",47,207], ["Village 247",111,207], ["Village 248",207,207], ["Village 249",239,207], ["Village 250",335,207], ["Village 251",367,207], ["Village 252",1033,207], ["Village 253",1065,207], ["Village 254",1161,207], ["Village 255",1193,207], ["Village 256",1289,207], ["Village 257",1353,207], ["Village 258",1385,207], ["Village 259",461,221], ["Village 260",525,221], ["Village 261",557,221], ["Village 262",621,221], ["Village 263",653,221], ["Village 264",749,221], ["Village 265",781,221], ["Village 266",845,221], ["Village 267",877,221], ["Village 268",941,221], ["Village 269",31,223], ["Village 270",127,223], ["Village 271",191,223], ["Village 272",223,223], ["Village 273",255,223], ["Village 274",319,223], ["Village 275",1081,223], ["Village 276",1145,223], ["Village 277",1177,223], ["Village 278",1209,223], ["Village 279",1273,223], ["Village 280",1369,223], ["Village 281",445,237], ["Village 282",477,237], ["Village 283",509,237], ["Village 284",541,237], ["Village 285",573,237], ["Village 286",669,237], ["Village 287",733,237], ["Village 288",829,237], ["Village 289",861,237], ["Village 290",893,237], ["Village 291",925,237], ["Village 292",957,237], ["Village 293",15,239], ["Village 294",143,239], ["Village 295",175,239], ["Village 296",207,239], ["Village 297",239,239], ["Village 298",271,239], ["Village 299",303,239], ["Village 300",1097,239], ["Village 301",1129,239], ["Village 302",1161,239], ["Village 303",1193,239], ["Village 304",1225,239], ["Village 305",1257,239], ["Village 306",1385,239], ["Village 307",429,253], ["Village 308",461,253], ["Village 309",525,253], ["Village 310",685,253], ["Village 311",717,253], ["Village 312",877,253], ["Village 313",941,253], ["Village 314",973,253], ["Village 315",31,255], ["Village 316",127,255], ["Village 317",159,255], ["Village 318",223,255], ["Village 319",255,255], ["Village 320",287,255], ["Village 321",1113,255], ["Village 322",1145,255], ["Village 323",1177,255], ["Village 324",1241,255], ["Village 325",1273,255], ["Village 326",1369,255], ["Village 327",669,269], ["Village 328",413,269], ["Village 329",733,269], ["Village 330",989,269], ["Village 331",15,271], ["Village 332",47,271], ["Village 333",111,271], ["Village 334",143,271], ["Village 335",239,271], ["Village 336",271,271], ["Village 337",303,271], ["Village 338",1097,271], ["Village 339",1129,271], ["Village 340",1161,271], ["Village 341",1257,271], ["Village 342",1289,271], ["Village 343",1353,271], ["Village 344",1385,271], ["Village 345",397,285], ["Village 346",525,285], ["Village 347",621,285], ["Village 348",653,285], ["Village 349",749,285], ["Village 350",781,285], ["Village 351",877,285], ["Village 352",1005,285], ["Village 353",31,287], ["Village 354",63,287], ["Village 355",95,287], ["Village 356",127,287], ["Village 357",255,287], ["Village 358",287,287], ["Village 359",1113,287], ["Village 360",1145,287], ["Village 361",1273,287], ["Village 362",1305,287], ["Village 363",1337,287], ["Village 364",1369,287], ["Village 365",381,301], ["Village 366",509,301], ["Village 367",541,301], ["Village 368",573,301], ["Village 369",637,301], ["Village 370",765,301], ["Village 371",829,301], ["Village 372",861,301], ["Village 373",893,301], ["Village 374",1021,301], ["Village 375",15,303], ["Village 376",79,303], ["Village 377",143,303], ["Village 378",239,303], ["Village 379",271,303], ["Village 380",1129,303], ["Village 381",1161,303], ["Village 382",1257,303], ["Village 383",1321,303], ["Village 384",1385,303], ["Village 385",397,317], ["Village 386",493,317], ["Village 387",557,317], ["Village 388",621,317], ["Village 389",781,317], ["Village 390",845,317], ["Village 391",909,317], ["Village 392",1005,317], ["Village 393",159,319], ["Village 394",223,319], ["Village 395",1177,319], ["Village 396",1241,319], ["Village 397",413,333], ["Village 398",477,333], ["Village 399",525,333], ["Village 400",573,333], ["Village 401",829,333], ["Village 402",925,333], ["Village 403",989,333], ["Village 404",15,335], ["Village 405",79,335], ["Village 406",143,335], ["Village 407",175,335], ["Village 408",207,335], ["Village 409",1193,335], ["Village 410",1225,335], ["Village 411",1257,335], ["Village 412",1321,335], ["Village 413",1385,335], ["Village 414",333,349], ["Village 415",397,349], ["Village 416",429,349], ["Village 417",461,349], ["Village 418",493,349], ["Village 419",557,349], ["Village 420",621,349], ["Village 421",685,349], ["Village 422",717,349], ["Village 423",781,349], ["Village 424",845,349], ["Village 425",909,349], ["Village 426",941,349], ["Village 427",973,349], ["Village 428",1005,349], ["Village 429",1069,349], ["Village 430",31,351], ["Village 431",63,351], ["Village 432",95,351], ["Village 433",127,351], ["Village 434",191,351], ["Village 435",1209,351], ["Village 436",1273,351], ["Village 437",1305,351], ["Village 438",1337,351], ["Village 439",1369,351], ["Village 440",349,365], ["Village 441",381,365], ["Village 442",413,365], ["Village 443",445,365], ["Village 444",509,365], ["Village 445",541,365], ["Village 446",573,365], ["Village 447",637,365], ["Village 448",669,365], ["Village 449",733,365], ["Village 450",765,365], ["Village 451",829,365], ["Village 452",861,365], ["Village 453",893,365], ["Village 454",957,365], ["Village 455",989,365], ["Village 456",1021,365], ["Village 457",1053,365], ["Village 458",15,367], ["Village 459",47,367], ["Village 460",79,367], ["Village 461",111,367], ["Village 462",207,367], ["Village 463",1193,367], ["Village 464",1289,367], ["Village 465",1321,367], ["Village 466",1353,367], ["Village 467",1385,367], ["Village 468",365,381], ["Village 469",429,381], ["Village 470",525,381], ["Village 471",557,381], ["Village 472",589,381], ["Village 473",653,381], ["Village 474",749,381], ["Village 475",813,381], ["Village 476",845,381], ["Village 477",877,381], ["Village 478",973,381], ["Village 479",1037,381], ["Village 480",1085,381], ["Village 481",31,383], ["Village 482",95,383], ["Village 483",127,383], ["Village 484",191,383], ["Village 485",1209,383], ["Village 486",1273,383], ["Village 487",1305,383], ["Village 488",1369,383], ["Village 489",285,397], ["Village 490",349,397], ["Village 491",445,397], ["Village 492",509,397], ["Village 493",541,397], ["Village 494",573,397], ["Village 495",669,397], ["Village 496",733,397], ["Village 497",829,397], ["Village 498",861,397], ["Village 499",893,397], ["Village 500",957,397], ["Village 501",1053,397], ["Village 502",1115,397], ["Village 503",269,413], ["Village 504",333,413], ["Village 505",461,413], ["Village 506",493,413], ["Village 507",557,413], ["Village 508",685,413], ["Village 509",717,413], ["Village 510",845,413], ["Village 511",909,413], ["Village 512",941,413], ["Village 513",1069,413], ["Village 514",1133,413], ["Village 515",17,421], ["Village 516",113,421], ["Village 517",177,421], ["Village 518",1225,421], ["Village 519",1289,421], ["Village 520",1385,421], ["Village 521",253,429], ["Village 522",349,429], ["Village 523",445,429], ["Village 524",477,429], ["Village 525",573,429], ["Village 526",669,429], ["Village 527",701,429], ["Village 528",733,429], ["Village 529",829,429], ["Village 530",925,429], ["Village 531",957,429], ["Village 532",1053,429], ["Village 533",1149,429], ["Village 534",237,445], ["Village 535",365,445], ["Village 536",429,445], ["Village 537",493,445], ["Village 538",557,445], ["Village 539",589,445], ["Village 540",653,445], ["Village 541",685,445], ["Village 542",717,445], ["Village 543",749,445], ["Village 544",813,445], ["Village 545",845,445], ["Village 546",909,445], ["Village 547",973,445], ["Village 548",1037,445], ["Village 549",1165,445], ["Village 550",17,453], ["Village 551",113,453], ["Village 552",177,453], ["Village 553",1225,453], ["Village 554",1289,453], ["Village 555",1385,453], ["Village 556",221,461], ["Village 557",253,461], ["Village 558",349,461], ["Village 559",381,461], ["Village 560",413,461], ["Village 561",509,461], ["Village 562",541,461], ["Village 563",573,461], ["Village 564",605,461], ["Village 565",637,461], ["Village 566",669,461], ["Village 567",733,461], ["Village 568",765,461], ["Village 569",797,461], ["Village 570",829,461], ["Village 571",861,461], ["Village 572",893,461], ["Village 573",989,461], ["Village 574",1021,461], ["Village 575",1053,461], ["Village 576",1149,461], ["Village 577",1181,461], ["Village 578",33,469], ["Village 579",97,469], ["Village 580",161,469], ["Village 581",193,469], ["Village 582",1209,469], ["Village 583",1241,469], ["Village 584",1305,469], ["Village 585",1369,469], ["Village 586",237,477], ["Village 587",333,477], ["Village 588",397,477], ["Village 589",429,477], ["Village 590",493,477], ["Village 591",557,477], ["Village 592",621,477], ["Village 593",653,477], ["Village 594",749,477], ["Village 595",781,477], ["Village 596",845,477], ["Village 597",909,477], ["Village 598",973,477], ["Village 599",1005,477], ["Village 600",1069,477], ["Village 601",1165,477], ["Village 602",17,485], ["Village 603",49,485], ["Village 604",81,485], ["Village 605",177,485], ["Village 606",1225,485], ["Village 607",1321,485], ["Village 608",1353,485], ["Village 609",1385,485], ["Village 610",317,493], ["Village 611",413,493], ["Village 612",445,493], ["Village 613",477,493], ["Village 614",637,493], ["Village 615",765,493], ["Village 616",925,493], ["Village 617",957,493], ["Village 618",989,493], ["Village 619",1085,493], ["Village 620",33,501], ["Village 621",65,501], ["Village 622",1337,501], ["Village 623",1369,501], ["Village 624",237,509], ["Village 625",301,509], ["Village 626",333,509], ["Village 627",397,509], ["Village 628",461,509], ["Village 629",621,509], ["Village 630",781,509], ["Village 631",941,509], ["Village 632",1005,509], ["Village 633",1069,509], ["Village 634",1101,509], ["Village 635",1165,509], ["Village 636",185,517], ["Village 637",1217,517], ["Village 638",17,517], ["Village 639",49,517], ["Village 640",81,517], ["Village 641",1321,517], ["Village 642",1353,517], ["Village 643",1385,517], ["Village 644",221,525], ["Village 645",253,525], ["Village 646",285,525], ["Village 647",349,525], ["Village 648",381,525], ["Village 649",477,525], ["Village 650",573,525], ["Village 651",605,525], ["Village 652",797,525], ["Village 653",829,525], ["Village 654",925,525], ["Village 655",1021,525], ["Village 656",1053,525], ["Village 657",1117,525], ["Village 658",1149,525], ["Village 659",1181,525], ["Village 660",33,533], ["Village 661",97,533], ["Village 662",161,533], ["Village 663",1241,533], ["Village 664",1305,533], ["Village 665",1369,533], ["Village 666",269,541], ["Village 667",365,541], ["Village 668",397,541], ["Village 669",461,541], ["Village 670",493,541], ["Village 671",589,541], ["Village 672",685,541], ["Village 673",717,541], ["Village 674",813,541], ["Village 675",909,541], ["Village 676",941,541], ["Village 677",1005,541], ["Village 678",1037,541], ["Village 679",1133,541], ["Village 680",17,549], ["Village 681",113,549], ["Village 682",177,549], ["Village 683",1225,549], ["Village 684",1289,549], ["Village 685",1385,549], ["Village 686",285,557], ["Village 687",349,557], ["Village 688",381,557], ["Village 689",413,557], ["Village 690",445,557], ["Village 691",477,557], ["Village 692",509,557], ["Village 693",669,557], ["Village 694",733,557], ["Village 695",893,557], ["Village 696",925,557], ["Village 697",957,557], ["Village 698",989,557], ["Village 699",1021,557], ["Village 700",1053,557], ["Village 701",1117,557], ["Village 702",269,573], ["Village 703",301,573], ["Village 704",333,573], ["Village 705",365,573], ["Village 706",397,573], ["Village 707",429,573], ["Village 708",461,573], ["Village 709",525,573], ["Village 710",877,573], ["Village 711",941,573], ["Village 712",973,573], ["Village 713",1005,573], ["Village 714",1037,573], ["Village 715",1069,573], ["Village 716",1101,573], ["Village 717",1133,573], ["Village 718",17,581], ["Village 719",177,581], ["Village 720",1225,581], ["Village 721",1385,581], ["Village 722",381,589], ["Village 723",445,589], ["Village 724",541,589], ["Village 725",861,589], ["Village 726",957,589], ["Village 727",1021,589], ["Village 728",461,605], ["Village 729",525,605], ["Village 730",877,605], ["Village 731",941,605], ["Village 732",1037,605], ["Village 733",161,621], ["Village 734",221,621], ["Village 735",285,621], ["Village 736",317,621], ["Village 737",349,621], ["Village 738",477,621], ["Village 739",509,621], ["Village 740",621,621], ["Village 741",685,621], ["Village 742",717,621], ["Village 743",781,621], ["Village 744",893,621], ["Village 745",925,621], ["Village 746",1053,621], ["Village 747",1085,621], ["Village 748",1117,621], ["Village 749",1181,621], ["Village 750",1241,621], ["Village 751",81,637], ["Village 752",177,637], ["Village 753",301,637], ["Village 754",365,637], ["Village 755",461,637], ["Village 756",493,637], ["Village 757",637,637], ["Village 758",701,637], ["Village 759",733,637], ["Village 760",765,637], ["Village 761",909,637], ["Village 762",941,637], ["Village 763",1037,637], ["Village 764",1101,637], ["Village 765",1225,637], ["Village 766",1321,637], ["Village 767",97,653], ["Village 768",221,653], ["Village 769",285,653], ["Village 770",381,653], ["Village 771",445,653], ["Village 772",477,653], ["Village 773",717,653], ["Village 774",925,653], ["Village 775",957,653], ["Village 776",1021,653], ["Village 777",1117,653], ["Village 778",1181,653], ["Village 779",1305,653], ["Village 780",1133,669], ["Village 781",81,669], ["Village 782",177,669], ["Village 783",237,669], ["Village 784",269,669], ["Village 785",365,669], ["Village 786",397,669], ["Village 787",429,669], ["Village 788",461,669], ["Village 789",557,669], ["Village 790",637,669], ["Village 791",845,669], ["Village 792",941,669], ["Village 793",973,669], ["Village 794",1005,669], ["Village 795",1037,669], ["Village 796",1165,669], ["Village 797",1225,669], ["Village 798",1321,669], ["Village 799",65,685], ["Village 800",161,685], ["Village 801",253,685], ["Village 802",349,685], ["Village 803",413,685], ["Village 804",445,685], ["Village 805",541,685], ["Village 806",621,685], ["Village 807",653,685], ["Village 808",781,685], ["Village 809",861,685], ["Village 810",957,685], ["Village 811",989,685], ["Village 812",1053,685], ["Village 813",1149,685], ["Village 814",1241,685], ["Village 815",1337,685], ["Village 816",49,701], ["Village 817",429,701], ["Village 818",637,701], ["Village 819",765,701], ["Village 820",973,701], ["Village 821",1353,701], ["Village 822",65,717], ["Village 823",161,717], ["Village 824",253,717], ["Village 825",349,717], ["Village 826",413,717], ["Village 827",445,717], ["Village 828",541,717], ["Village 829",621,717], ["Village 830",749,717], ["Village 831",781,717], ["Village 832",861,717], ["Village 833",957,717], ["Village 834",989,717], ["Village 835",1053,717], ["Village 836",1149,717], ["Village 837",1241,717], ["Village 838",1337,717], ["Village 839",81,733], ["Village 840",177,733], ["Village 841",237,733], ["Village 842",269,733], ["Village 843",365,733], ["Village 844",397,733], ["Village 845",429,733], ["Village 846",461,733], ["Village 847",557,733], ["Village 848",765,733], ["Village 849",845,733], ["Village 850",941,733], ["Village 851",973,733], ["Village 852",1005,733], ["Village 853",1037,733], ["Village 854",1133,733], ["Village 855",1165,733], ["Village 856",1225,733], ["Village 857",1321,733], ["Village 858",97,749], ["Village 859",221,749], ["Village 860",285,749], ["Village 861",381,749], ["Village 862",445,749], ["Village 863",477,749], ["Village 864",685,749], ["Village 865",925,749], ["Village 866",957,749], ["Village 867",1021,749], ["Village 868",1117,749], ["Village 869",1181,749], ["Village 870",1305,749], ["Village 871",81,765], ["Village 872",177,765], ["Village 873",301,765], ["Village 874",365,765], ["Village 875",461,765], ["Village 876",493,765], ["Village 877",637,765], ["Village 878",669,765], ["Village 879",701,765], ["Village 880",765,765], ["Village 881",909,765], ["Village 882",941,765], ["Village 883",1037,765], ["Village 884",1101,765], ["Village 885",1225,765], ["Village 886",1321,765], ["Village 887",161,781], ["Village 888",221,781], ["Village 889",285,781], ["Village 890",317,781], ["Village 891",349,781], ["Village 892",477,781], ["Village 893",509,781], ["Village 894",621,781], ["Village 895",685,781], ["Village 896",717,781], ["Village 897",781,781], ["Village 898",893,781], ["Village 899",925,781], ["Village 900",1053,781], ["Village 901",1085,781], ["Village 902",1117,781], ["Village 903",1181,781], ["Village 904",1241,781], ["Village 905",461,797], ["Village 906",525,797], ["Village 907",877,797], ["Village 908",941,797], ["Village 909",381,813], ["Village 910",445,813], ["Village 911",541,813], ["Village 912",861,813], ["Village 913",957,813], ["Village 914",1021,813], ["Village 915",17,821], ["Village 916",177,821], ["Village 917",1225,821], ["Village 918",1385,821], ["Village 919",269,829], ["Village 920",301,829], ["Village 921",333,829], ["Village 922",365,829], ["Village 923",397,829], ["Village 924",429,829], ["Village 925",461,829], ["Village 926",525,829], ["Village 927",877,829], ["Village 928",941,829], ["Village 929",973,829], ["Village 930",1005,829], ["Village 931",1037,829], ["Village 932",1069,829], ["Village 933",1101,829], ["Village 934",1133,829], ["Village 935",285,845], ["Village 936",349,845], ["Village 937",381,845], ["Village 938",413,845], ["Village 939",445,845], ["Village 940",477,845], ["Village 941",509,845], ["Village 942",669,845], ["Village 943",733,845], ["Village 944",893,845], ["Village 945",925,845], ["Village 946",957,845], ["Village 947",989,845], ["Village 948",1021,845], ["Village 949",1053,845], ["Village 950",1117,845], ["Village 951",17,853], ["Village 952",113,853], ["Village 953",177,853], ["Village 954",1225,853], ["Village 955",1289,853], ["Village 956",1385,853], ["Village 957",269,861], ["Village 958",365,861], ["Village 959",397,861], ["Village 960",461,861], ["Village 961",493,861], ["Village 962",589,861], ["Village 963",685,861], ["Village 964",717,861], ["Village 965",813,861], ["Village 966",909,861], ["Village 967",941,861], ["Village 968",1005,861], ["Village 969",1037,861], ["Village 970",1133,861], ["Village 971",33,869], ["Village 972",97,869], ["Village 973",161,869], ["Village 974",1241,869], ["Village 975",1305,869], ["Village 976",1369,869], ["Village 977",221,877], ["Village 978",253,877], ["Village 979",285,877], ["Village 980",349,877], ["Village 981",381,877], ["Village 982",477,877], ["Village 983",573,877], ["Village 984",605,877], ["Village 985",797,877], ["Village 986",829,877], ["Village 987",925,877], ["Village 988",1021,877], ["Village 989",1053,877], ["Village 990",1117,877], ["Village 991",1149,877], ["Village 992",1181,877], ["Village 993",17,885], ["Village 994",49,885], ["Village 995",81,885], ["Village 996",185,885], ["Village 997",1217,885], ["Village 998",1321,885], ["Village 999",1353,885], ["Village 1000",1385,885], ["Village 1001",237,893], ["Village 1002",301,893], ["Village 1003",333,893], ["Village 1004",397,893], ["Village 1005",461,893], ["Village 1006",621,893], ["Village 1007",781,893], ["Village 1008",941,893], ["Village 1009",1005,893], ["Village 1010",1069,893], ["Village 1011",1101,893], ["Village 1012",1165,893], ["Village 1013",33,901], ["Village 1014",65,901], ["Village 1015",1337,901], ["Village 1016",1369,901], ["Village 1017",317,909], ["Village 1018",413,909], ["Village 1019",445,909], ["Village 1020",477,909], ["Village 1021",637,909], ["Village 1022",765,909], ["Village 1023",925,909], ["Village 1024",957,909], ["Village 1025",989,909], ["Village 1026",1085,909], ["Village 1027",17,917], ["Village 1028",49,917], ["Village 1029",81,917], ["Village 1030",177,917], ["Village 1031",1225,917], ["Village 1032",1321,917], ["Village 1033",1353,917], ["Village 1034",1385,917], ["Village 1035",237,925], ["Village 1036",333,925], ["Village 1037",397,925], ["Village 1038",429,925], ["Village 1039",493,925], ["Village 1040",557,925], ["Village 1041",621,925], ["Village 1042",653,925], ["Village 1043",749,925], ["Village 1044",781,925], ["Village 1045",845,925], ["Village 1046",909,925], ["Village 1047",973,925], ["Village 1048",1005,925], ["Village 1049",1069,925], ["Village 1050",1165,925], ["Village 1051",33,933], ["Village 1052",97,933], ["Village 1053",161,933], ["Village 1054",193,933], ["Village 1055",1209,933], ["Village 1056",1241,933], ["Village 1057",1305,933], ["Village 1058",1369,933], ["Village 1059",221,941], ["Village 1060",253,941], ["Village 1061",349,941], ["Village 1062",381,941], ["Village 1063",413,941], ["Village 1064",509,941], ["Village 1065",541,941], ["Village 1066",573,941], ["Village 1067",605,941], ["Village 1068",637,941], ["Village 1069",669,941], ["Village 1070",733,941], ["Village 1071",765,941], ["Village 1072",797,941], ["Village 1073",829,941], ["Village 1074",861,941], ["Village 1075",893,941], ["Village 1076",989,941], ["Village 1077",1021,941], ["Village 1078",1053,941], ["Village 1079",1149,941], ["Village 1080",1181,941], ["Village 1081",17,949], ["Village 1082",113,949], ["Village 1083",177,949], ["Village 1084",1225,949], ["Village 1085",1289,949], ["Village 1086",1385,949], ["Village 1087",237,957], ["Village 1088",365,957], ["Village 1089",429,957], ["Village 1090",493,957], ["Village 1091",557,957], ["Village 1092",589,957], ["Village 1093",653,957], ["Village 1094",685,957], ["Village 1095",717,957], ["Village 1096",749,957], ["Village 1097",813,957], ["Village 1098",845,957], ["Village 1099",909,957], ["Village 1100",973,957], ["Village 1101",1037,957], ["Village 1102",1165,957], ["Village 1103",253,973], ["Village 1104",349,973], ["Village 1105",445,973], ["Village 1106",477,973], ["Village 1107",573,973], ["Village 1108",669,973], ["Village 1109",701,973], ["Village 1110",733,973], ["Village 1111",829,973], ["Village 1112",925,973], ["Village 1113",957,973], ["Village 1114",1053,973], ["Village 1115",1149,973], ["Village 1116",17,981], ["Village 1117",113,981], ["Village 1118",177,981], ["Village 1119",1225,981], ["Village 1120",1289,981], ["Village 1121",1385,981], ["Village 1122",269,989], ["Village 1123",333,989], ["Village 1124",461,989], ["Village 1125",493,989], ["Village 1126",557,989], ["Village 1127",685,989], ["Village 1128",717,989], ["Village 1129",845,989], ["Village 1130",909,989], ["Village 1131",941,989], ["Village 1132",1069,989], ["Village 1133",1133,989], ["Village 1134",285,1005], ["Village 1135",349,1005], ["Village 1136",445,1005], ["Village 1137",509,1005], ["Village 1138",541,1005], ["Village 1139",573,1005], ["Village 1140",669,1005], ["Village 1141",733,1005], ["Village 1142",829,1005], ["Village 1143",861,1005], ["Village 1144",893,1005], ["Village 1145",957,1005], ["Village 1146",1053,1005], ["Village 1147",1117,1005], ["Village 1148",31,1017], ["Village 1149",95,1017], ["Village 1150",127,1017], ["Village 1151",191,1017], ["Village 1152",1211,1017], ["Village 1153",1275,1017], ["Village 1154",1307,1017], ["Village 1155",1371,1017], ["Village 1156",365,1021], ["Village 1157",429,1021], ["Village 1158",525,1021], ["Village 1159",557,1021], ["Village 1160",589,1021], ["Village 1161",653,1021], ["Village 1162",749,1021], ["Village 1163",813,1021], ["Village 1164",845,1021], ["Village 1165",877,1021], ["Village 1166",973,1021], ["Village 1167",1037,1021], ["Village 1168",15,1033], ["Village 1169",47,1033], ["Village 1170",79,1033], ["Village 1171",111,1033], ["Village 1172",207,1033], ["Village 1173",1195,1033], ["Village 1174",1291,1033], ["Village 1175",1323,1033], ["Village 1176",1355,1033], ["Village 1177",1387,1033], ["Village 1178",349,1037], ["Village 1179",381,1037], ["Village 1180",413,1037], ["Village 1181",445,1037], ["Village 1182",509,1037], ["Village 1183",541,1037], ["Village 1184",573,1037], ["Village 1185",637,1037], ["Village 1186",669,1037], ["Village 1187",733,1037], ["Village 1188",765,1037], ["Village 1189",829,1037], ["Village 1190",861,1037], ["Village 1191",893,1037], ["Village 1192",957,1037], ["Village 1193",989,1037], ["Village 1194",1021,1037], ["Village 1195",1053,1037], ["Village 1196",31,1049], ["Village 1197",63,1049], ["Village 1198",95,1049], ["Village 1199",127,1049], ["Village 1200",191,1049], ["Village 1201",1211,1049], ["Village 1202",1275,1049], ["Village 1203",1307,1049], ["Village 1204",1339,1049], ["Village 1205",1371,1049], ["Village 1206",333,1053], ["Village 1207",397,1053], ["Village 1208",429,1053], ["Village 1209",461,1053], ["Village 1210",493,1053], ["Village 1211",557,1053], ["Village 1212",621,1053], ["Village 1213",685,1053], ["Village 1214",717,1053], ["Village 1215",781,1053], ["Village 1216",845,1053], ["Village 1217",909,1053], ["Village 1218",941,1053], ["Village 1219",973,1053], ["Village 1220",1005,1053], ["Village 1221",1069,1053], ["Village 1222",15,1065], ["Village 1223",79,1065], ["Village 1224",143,1065], ["Village 1225",175,1065], ["Village 1226",207,1065], ["Village 1227",1195,1065], ["Village 1228",1227,1065], ["Village 1229",1259,1065], ["Village 1230",1323,1065], ["Village 1231",1387,1065], ["Village 1232",413,1069], ["Village 1233",477,1069], ["Village 1234",573,1069], ["Village 1235",829,1069], ["Village 1236",925,1069], ["Village 1237",989,1069], ["Village 1238",159,1081], ["Village 1239",223,1081], ["Village 1240",1179,1081], ["Village 1241",1243,1081], ["Village 1242",397,1085], ["Village 1243",493,1085], ["Village 1244",557,1085], ["Village 1245",621,1085], ["Village 1246",781,1085], ["Village 1247",845,1085], ["Village 1248",909,1085], ["Village 1249",1005,1085], ["Village 1250",79,1097], ["Village 1251",143,1097], ["Village 1252",239,1097], ["Village 1253",271,1097], ["Village 1254",1131,1097], ["Village 1255",1163,1097], ["Village 1256",1259,1097], ["Village 1257",1323,1097], ["Village 1258",1387,1097], ["Village 1259",381,1101], ["Village 1260",509,1101], ["Village 1261",541,1101], ["Village 1262",573,1101], ["Village 1263",637,1101], ["Village 1264",765,1101], ["Village 1265",829,1101], ["Village 1266",861,1101], ["Village 1267",893,1101], ["Village 1268",1021,1101], ["Village 1269",63,1113], ["Village 1270",95,1113], ["Village 1271",127,1113], ["Village 1272",255,1113], ["Village 1273",287,1113], ["Village 1274",1115,1113], ["Village 1275",1147,1113], ["Village 1276",1275,1113], ["Village 1277",1307,1113], ["Village 1278",1339,1113], ["Village 1279",1371,1113], ["Village 1280",397,1117], ["Village 1281",525,1117], ["Village 1282",621,1117], ["Village 1283",653,1117], ["Village 1284",749,1117], ["Village 1285",781,1117], ["Village 1286",877,1117], ["Village 1287",1005,1117], ["Village 1288",47,1129], ["Village 1289",111,1129], ["Village 1290",143,1129], ["Village 1291",239,1129], ["Village 1292",271,1129], ["Village 1293",303,1129], ["Village 1294",1099,1129], ["Village 1295",1131,1129], ["Village 1296",1163,1129], ["Village 1297",1259,1129], ["Village 1298",1291,1129], ["Village 1299",1355,1129], ["Village 1300",1387,1129], ["Village 1301",413,1133], ["Village 1302",669,1133], ["Village 1303",733,1133], ["Village 1304",845,1133], ["Village 1305",989,1133], ["Village 1306",31,1145], ["Village 1307",127,1145], ["Village 1308",159,1145], ["Village 1309",223,1145], ["Village 1310",255,1145], ["Village 1311",287,1145], ["Village 1312",1115,1145], ["Village 1313",1147,1145], ["Village 1314",1179,1145], ["Village 1315",1243,1145], ["Village 1316",1275,1145], ["Village 1317",1371,1145], ["Village 1318",429,1149], ["Village 1319",461,1149], ["Village 1320",525,1149], ["Village 1321",685,1149], ["Village 1322",717,1149], ["Village 1323",877,1149], ["Village 1324",941,1149], ["Village 1325",973,1149], ["Village 1326",143,1161], ["Village 1327",175,1161], ["Village 1328",207,1161], ["Village 1329",239,1161], ["Village 1330",271,1161], ["Village 1331",303,1161], ["Village 1332",1099,1161], ["Village 1333",1131,1161], ["Village 1334",1163,1161], ["Village 1335",1195,1161], ["Village 1336",1227,1161], ["Village 1337",1259,1161], ["Village 1338",1387,1161], ["Village 1339",445,1165], ["Village 1340",477,1165], ["Village 1341",509,1165], ["Village 1342",541,1165], ["Village 1343",573,1165], ["Village 1344",669,1165], ["Village 1345",733,1165], ["Village 1346",829,1165], ["Village 1347",861,1165], ["Village 1348",893,1165], ["Village 1349",925,1165], ["Village 1350",957,1165], ["Village 1351",31,1177], ["Village 1352",127,1177], ["Village 1353",191,1177], ["Village 1354",223,1177], ["Village 1355",255,1177], ["Village 1356",319,1177], ["Village 1357",1083,1177], ["Village 1358",1147,1177], ["Village 1359",1179,1177], ["Village 1360",1211,1177], ["Village 1361",1275,1177], ["Village 1362",1371,1177], ["Village 1363",461,1181], ["Village 1364",525,1181], ["Village 1365",557,1181], ["Village 1366",621,1181], ["Village 1367",653,1181], ["Village 1368",749,1181], ["Village 1369",781,1181], ["Village 1370",845,1181], ["Village 1371",877,1181], ["Village 1372",941,1181], ["Village 1373",973,1181], ["Village 1374",15,1193], ["Village 1375",47,1193], ["Village 1376",111,1193], ["Village 1377",207,1193], ["Village 1378",239,1193], ["Village 1379",335,1193], ["Village 1380",367,1193], ["Village 1381",1035,1193], ["Village 1382",1067,1193], ["Village 1383",1163,1193], ["Village 1384",1195,1193], ["Village 1385",1291,1193], ["Village 1386",1355,1193], ["Village 1387",1387,1193], ["Village 1388",469,1205], ["Village 1389",669,1205], ["Village 1390",733,1205], ["Village 1391",933,1205], ["Village 1392",31,1209], ["Village 1393",63,1209], ["Village 1394",95,1209], ["Village 1395",127,1209], ["Village 1396",191,1209], ["Village 1397",223,1209], ["Village 1398",351,1209], ["Village 1399",383,1209], ["Village 1400",1019,1209], ["Village 1401",1051,1209], ["Village 1402",1179,1209], ["Village 1403",1211,1209], ["Village 1404",1275,1209], ["Village 1405",1307,1209], ["Village 1406",1339,1209], ["Village 1407",1371,1209], ["Village 1408",517,1213], ["Village 1409",885,1213], ["Village 1410",421,1221], ["Village 1411",453,1221], ["Village 1412",485,1221], ["Village 1413",549,1221], ["Village 1414",581,1221], ["Village 1415",621,1221], ["Village 1416",653,1221], ["Village 1417",685,1221], ["Village 1418",717,1221], ["Village 1419",749,1221], ["Village 1420",781,1221], ["Village 1421",821,1221], ["Village 1422",853,1221], ["Village 1423",917,1221], ["Village 1424",949,1221], ["Village 1425",981,1221], ["Village 1426",15,1225], ["Village 1427",79,1225], ["Village 1428",143,1225], ["Village 1429",175,1225], ["Village 1430",239,1225], ["Village 1431",335,1225], ["Village 1432",1067,1225], ["Village 1433",1163,1225], ["Village 1434",1227,1225], ["Village 1435",1259,1225], ["Village 1436",1323,1225], ["Village 1437",1387,1225], ["Village 1438",437,1237], ["Village 1439",469,1237], ["Village 1440",533,1237], ["Village 1441",565,1237], ["Village 1442",637,1237], ["Village 1443",669,1237], ["Village 1444",733,1237], ["Village 1445",765,1237], ["Village 1446",837,1237], ["Village 1447",869,1237], ["Village 1448",933,1237], ["Village 1449",965,1237], ["Village 1450",159,1241], ["Village 1451",255,1241], ["Village 1452",319,1241], ["Village 1453",1083,1241], ["Village 1454",1147,1241], ["Village 1455",1243,1241], ["Village 1456",421,1253], ["Village 1457",453,1253], ["Village 1458",549,1253], ["Village 1459",581,1253], ["Village 1460",621,1253], ["Village 1461",653,1253], ["Village 1462",749,1253], ["Village 1463",781,1253], ["Village 1464",821,1253], ["Village 1465",853,1253], ["Village 1466",949,1253], ["Village 1467",981,1253], ["Village 1468",15,1257], ["Village 1469",79,1257], ["Village 1470",143,1257], ["Village 1471",175,1257], ["Village 1472",239,1257], ["Village 1473",271,1257], ["Village 1474",303,1257], ["Village 1475",335,1257], ["Village 1476",1067,1257], ["Village 1477",1099,1257], ["Village 1478",1131,1257], ["Village 1479",1163,1257], ["Village 1480",1227,1257], ["Village 1481",1259,1257], ["Village 1482",1323,1257], ["Village 1483",1387,1257], ["Village 1484",31,1273], ["Village 1485",63,1273], ["Village 1486",95,1273], ["Village 1487",127,1273], ["Village 1488",191,1273], ["Village 1489",223,1273], ["Village 1490",255,1273], ["Village 1491",287,1273], ["Village 1492",351,1273], ["Village 1493",383,1273], ["Village 1494",1019,1273], ["Village 1495",1051,1273], ["Village 1496",1115,1273], ["Village 1497",1147,1273], ["Village 1498",1179,1273], ["Village 1499",1211,1273], ["Village 1500",1275,1273], ["Village 1501",1307,1273], ["Village 1502",1339,1273], ["Village 1503",1371,1273], ["Village 1504",15,1289], ["Village 1505",47,1289], ["Village 1506",111,1289], ["Village 1507",207,1289], ["Village 1508",271,1289], ["Village 1509",367,1289], ["Village 1510",1035,1289], ["Village 1511",1131,1289], ["Village 1512",1195,1289], ["Village 1513",1291,1289], ["Village 1514",1355,1289], ["Village 1515",1387,1289], ["Village 1516",469,1301], ["Village 1517",533,1301], ["Village 1518",669,1301], ["Village 1519",733,1301], ["Village 1520",869,1301], ["Village 1521",933,1301], ["Village 1522",31,1305], ["Village 1523",127,1305], ["Village 1524",191,1305], ["Village 1525",287,1305], ["Village 1526",351,1305], ["Village 1527",383,1305], ["Village 1528",1019,1305], ["Village 1529",1051,1305], ["Village 1530",1115,1305], ["Village 1531",1211,1305], ["Village 1532",1275,1305], ["Village 1533",1371,1305], ["Village 1534",421,1317], ["Village 1535",485,1317], ["Village 1536",517,1317], ["Village 1537",685,1317], ["Village 1538",717,1317], ["Village 1539",885,1317], ["Village 1540",917,1317], ["Village 1541",981,1317], ["Village 1542",15,1321], ["Village 1543",143,1321], ["Village 1544",175,1321], ["Village 1545",303,1321], ["Village 1546",335,1321], ["Village 1547",367,1321], ["Village 1548",1035,1321], ["Village 1549",1067,1321], ["Village 1550",1099,1321], ["Village 1551",1227,1321], ["Village 1552",1259,1321], ["Village 1553",1387,1321], ["Village 1554",501,1333], ["Village 1555",701,1333], ["Village 1556",901,1333], ["Village 1557",31,1337], ["Village 1558",127,1337], ["Village 1559",191,1337], ["Village 1560",287,1337], ["Village 1561",351,1337], ["Village 1562",383,1337], ["Village 1563",1019,1337], ["Village 1564",1051,1337], ["Village 1565",1115,1337], ["Village 1566",1211,1337], ["Village 1567",1275,1337], ["Village 1568",1371,1337], ["Village 1569",47,1353], ["Village 1570",111,1353], ["Village 1571",207,1353], ["Village 1572",271,1353], ["Village 1573",367,1353], ["Village 1574",1035,1353], ["Village 1575",1131,1353], ["Village 1576",1195,1353], ["Village 1577",1291,1353], ["Village 1578",1355,1353], ["Village 1579",501,1365], ["Village 1580",701,1365], ["Village 1581",901,1365], ["Village 1582",63,1369], ["Village 1583",95,1369], ["Village 1584",127,1369], ["Village 1585",191,1369], ["Village 1586",223,1369], ["Village 1587",255,1369], ["Village 1588",287,1369], ["Village 1589",351,1369], ["Village 1590",383,1369], ["Village 1591",1019,1369], ["Village 1592",1051,1369], ["Village 1593",1115,1369], ["Village 1594",1147,1369], ["Village 1595",1179,1369], ["Village 1596",1211,1369], ["Village 1597",1275,1369], ["Village 1598",1307,1369], ["Village 1599",1339,1369], ["Village 1600",581,1381], ["Village 1601",781,1381], ["Village 1602",981,1381], ["Village 1603",421,1381], ["Village 1604",485,1381], ["Village 1605",517,1381], ["Village 1606",621,1381], ["Village 1607",685,1381], ["Village 1608",717,1381], ["Village 1609",821,1381], ["Village 1610",885,1381], ["Village 1611",917,1381], ["Village 1612",79,1385], ["Village 1613",111,1385], ["Village 1614",143,1385], ["Village 1615",175,1385], ["Village 1616",207,1385], ["Village 1617",239,1385], ["Village 1618",271,1385], ["Village 1619",303,1385], ["Village 1620",335,1385], ["Village 1621",367,1385], ["Village 1622",1035,1385], ["Village 1623",1067,1385], ["Village 1624",1099,1385], ["Village 1625",1131,1385], ["Village 1626",1163,1385], ["Village 1627",1195,1385], ["Village 1628",1227,1385], ["Village 1629",1259,1385], ["Village 1630",1291,1385], ["Village 1631",1323,1385], ["Village 1632",159,47], ["Village 1633",319,47], ["Village 1634",1081,47], ["Village 1635",1241,47], ["Village 1636",159,111], ["Village 1637",319,111], ["Village 1638",1081,111], ["Village 1639",1241,111], ["Village 1640",437,117], ["Village 1641",565,117], ["Village 1642",637,117], ["Village 1643",765,117], ["Village 1644",837,117], ["Village 1645",965,117], ["Village 1646",47,159], ["Village 1647",111,159], ["Village 1648",207,159], ["Village 1649",367,159], ["Village 1650",1033,159], ["Village 1651",1193,159], ["Village 1652",1289,159], ["Village 1653",1353,159], ["Village 1654",159,207], ["Village 1655",1241,207], ["Village 1656",637,253], ["Village 1657",765,253], ["Village 1658",493,269], ["Village 1659",557,269], ["Village 1660",845,269], ["Village 1661",909,269], ["Village 1662",47,319], ["Village 1663",111,319], ["Village 1664",1289,319], ["Village 1665",1353,319], ["Village 1666",365,333], ["Village 1667",653,333], ["Village 1668",749,333], ["Village 1669",877,333], ["Village 1670",1037,333], ["Village 1671",159,367], ["Village 1672",1241,367], ["Village 1673",317,381], ["Village 1674",477,381], ["Village 1675",701,381], ["Village 1676",925,381], ["Village 1677",525,429], ["Village 1678",877,429], ["Village 1679",145,437], ["Village 1680",1257,437], ["Village 1681",461,461], ["Village 1682",941,461], ["Village 1683",269,493], ["Village 1684",365,493], ["Village 1685",589,493], ["Village 1686",813,493], ["Village 1687",1037,493], ["Village 1688",1133,493], ["Village 1689",429,525], ["Village 1690",653,525], ["Village 1691",749,525], ["Village 1692",973,525], ["Village 1693",317,541], ["Village 1694",1085,541], ["Village 1695",237,557], ["Village 1696",621,557], ["Village 1697",781,557], ["Village 1698",1165,557], ["Village 1699",145,565], ["Village 1700",1257,565], ["Village 1701",701,573], ["Village 1702",493,589], ["Village 1703",909,589], ["Village 1704",557,621], ["Village 1705",845,621], ["Village 1706",253,637], ["Village 1707",1149,637], ["Village 1708",145,653], ["Village 1709",333,653], ["Village 1710",525,653], ["Village 1711",669,653], ["Village 1712",877,653], ["Village 1713",1069,653], ["Village 1714",1257,653], ["Village 1715",749,669], ["Village 1716",381,701], ["Village 1717",573,701], ["Village 1718",829,701], ["Village 1719",1021,701], ["Village 1720",653,733], ["Village 1721",145,749], ["Village 1722",333,749], ["Village 1723",525,749], ["Village 1724",733,749], ["Village 1725",877,749], ["Village 1726",1069,749], ["Village 1727",1257,749], ["Village 1728",253,765], ["Village 1729",1149,765], ["Village 1730",557,781], ["Village 1731",845,781], ["Village 1732",493,813], ["Village 1733",909,813], ["Village 1734",701,829], ["Village 1735",145,837], ["Village 1736",1257,837], ["Village 1737",237,845], ["Village 1738",621,845], ["Village 1739",781,845], ["Village 1740",1165,845], ["Village 1741",317,861], ["Village 1742",1085,861], ["Village 1743",429,877], ["Village 1744",653,877], ["Village 1745",749,877], ["Village 1746",973,877], ["Village 1747",269,909], ["Village 1748",365,909], ["Village 1749",589,909], ["Village 1750",813,909], ["Village 1751",1037,909], ["Village 1752",1133,909], ["Village 1753",461,941], ["Village 1754",941,941], ["Village 1755",145,965], ["Village 1756",1257,965], ["Village 1757",525,973], ["Village 1758",877,973], ["Village 1759",317,1021], ["Village 1760",477,1021], ["Village 1761",701,1021], ["Village 1762",925,1021], ["Village 1763",1085,1021], ["Village 1764",159,1033], ["Village 1765",1243,1033], ["Village 1766",365,1069], ["Village 1767",525,1069], ["Village 1768",653,1069], ["Village 1769",749,1069], ["Village 1770",877,1069], ["Village 1771",1037,1069], ["Village 1772",47,1081], ["Village 1773",111,1081], ["Village 1774",1291,1081], ["Village 1775",1355,1081], ["Village 1776",493,1133], ["Village 1777",557,1133], ["Village 1778",909,1133], ["Village 1779",637,1149], ["Village 1780",765,1149], ["Village 1781",159,1193], ["Village 1782",1243,1193], ["Village 1783",47,1241], ["Village 1784",111,1241], ["Village 1785",207,1241], ["Village 1786",367,1241], ["Village 1787",1035,1241], ["Village 1788",1195,1241], ["Village 1789",1291,1241], ["Village 1790",1355,1241], ["Village 1791",437,1285], ["Village 1792",565,1285], ["Village 1793",637,1285], ["Village 1794",765,1285], ["Village 1795",837,1285], ["Village 1796",965,1285], ["Village 1797",159,1289], ["Village 1798",319,1289], ["Village 1799",1083,1289], ["Village 1800",1243,1289], ["Village 1801",159,1353], ["Village 1802",319,1353], ["Village 1803",1083,1353], ["Village 1804",1243,1353]];

const TOTAL_ATTACK = 0;
const TOTAL_DEFENSE = 1;
const TOTAL_HEALTH = 2;
const HEALING_SPEED = 3;
const GATHERING_SPEED = 4;

const SMALL = 0;
const MEDIUM = 1;
const LARGE = 2;

const OBSIDIAN = 0;
const SILVER = 1;
const BRASS = 2;

const BLESSINGS = [[10, 10, 10], [0, 0, 0], [35, 35, 35],10, 20];
const INDUSTRIAL_SLOTS = [[20, 30, 60], [30, 40, 100], [40, 80, 120]];
const INDUSTRIAL_SPEED = [[28800, 46800, 90000], [36000, 57600, 118800], [50400, 82800, 165600]];

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
    if (show_villages)
        $("#mapV").show();
    else
        $("#mapV").hide();
    refreshCanvas();
}

function attack(id) {
    score[map[id]] -= kingship[id];
    map[id] = getNextColor(id);
    score[map[id]] += kingship[id];
    refreshBuilding(id);
    updateURL();
    refreshCanvas();
    showTooltip(id);
}

function refreshBuilding(id) {
    var ele = $("#i" + id);
    var src = ele.attr('src').split('');
    src[10] = map[id];
    src = src.join('');
    ele.attr('src',src);
}

function getNextColor(id) {
    switch(id) {
        //Shadow
        case 9: return (map[id] == 0 && map[73] != 0)?map[73]:0;
        case 21: return (map[id] == 0 && map[101] != 0)?map[101]:0;
        //Lordsbane
        case 10: return (map[id] == 0 && map[74] != 0)?map[74]:0;
        case 22: return (map[id] == 0 && map[102] != 0)?map[102]:0;
        //Tempest
        case 16: return (map[id] == 0 && map[85] != 0)?map[85]:0;
        case 28: return (map[id] == 0 && map[107] != 0)?map[107]:0;
        //Ages
        case 11: return (map[id] == 0 && map[86] != 0)?map[86]:0;
        case 23: return (map[id] == 0 && map[108] != 0)?map[108]:0;
        //Scarlet
        case 15: return (map[id] == 0 && map[87] != 0)?map[87]:0;
        case 27: return (map[id] == 0 && map[109] != 0)?map[109]:0;
        //Longreach
        case 12: return (map[id] == 0 && map[88] != 0)?map[88]:0;
        case 24: return (map[id] == 0 && map[110] != 0)?map[110]:0;
        //Frost
        case 14: return (map[id] == 0 && map[99] != 0)?map[99]:0;
        case 26: return (map[id] == 0 && map[115] != 0)?map[115]:0;
        //Justice
        case 13: return (map[id] == 0 && map[100] != 0)?map[100]:0;
        case 25: return (map[id] == 0 && map[116] != 0)?map[116]:0;
        default:    
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
}

function refreshCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (show_villages)
        drawMapVillages();
    
    if (show_names) {
        for(var i = 0; i < map.length; i++)
            drawMapName(i);
    }
    
    if (show_kingship) {
        for(var i = 0; i < map.length; i++)
            drawKingship(i);
    }
}

function drawMapVillages() {
    var mod = 10;
    var x;
    var y;
    for(var i = 0; i < buildings.length; i++) {
        if (i < map.length) {
            ctx.strokeStyle = colors[map[i]];
            ctx.fillStyle = hex2rgb(colors[map[i]]);
        }
        else {
            ctx.strokeStyle = "#FFFFFF";
            ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        }
        
        x = 17 + buildings[i][1]*10/12;
        y = 17 + buildings[i][2]*10/12;
        
        switch(true) {
            case (i >= 0 && i <= 8): //Main Cities
                mod = 38; 
                break;
            case (i == 11 || i == 12 || i == 15 || i == 16): //Stages 3, 4, 7, 8
                mod = 34;
                break;
            case (i == 18 || i == 20): //Stages 10, 12
                mod = 36;
                break;
            case (i >= 9 && i <= 20): //Stages 1 to 12 (except for previous case)
                mod = 28; 
                break;
            case (i >= 21 && i <= 28): //Stages 13 to 17
                mod = 20;
                break;
            case (i >= 29 && i <= 36): //Stages 21 to 28
                mod = 30;
                break;
            case (i >= 37 && i <= 44): //Stages 29 to 36
                mod = 38;
                break;
            case (i >= 45 && i <= 124): //Rest of main buildings
                mod = 38; 
                break;
            case (i == 760 || i == 761 || i == 1120 || i == 1121): //Devs fucking around villages (part 1)
                mod = 18;
                break;
            case (i == 523 || i >= 1756): //Devs fucking around villages (part 2)
                mod = 24; 
                break;
            default: mod = 11; //Rest of villages
        }
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(x, y - mod);
        ctx.lineTo(x + mod, y);
        ctx.lineTo(x, y + mod);
        ctx.lineTo(x - mod, y);
        ctx.lineTo(x, y - mod);
        ctx.fill();
        ctx.stroke();
    }       
}

function hex2rgb(hex){
  var r = parseInt(hex.slice(1,3), 16);
      g = parseInt(hex.slice(3,5), 16);
      b = parseInt(hex.slice(5,7), 16);
  return 'rgba('+r+', '+g+', '+b+', 0.3)';
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
    var mod = 8;
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
        var mod = show_names?20:10;
        ctx.font = "10px Sans-serif";
        ctx.textAlign = "center";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;
        ctx.strokeText(str, pos.left+w/2,pos.top+h+mod);
        ctx.fillStyle = "#FFFF00"; // Yellow
        ctx.fillText(str, pos.left+w/2,pos.top+h+mod);
    }
}

function getCitiesBuffs(id) {
    if (id <= 0 || id > 8)
        return "";
    
    var buffs = [0, 0, 0, 0, 0]; //TA, TD, TH, HS, GS
    var rss = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; //SMALL (OB/SI/BR), MEDIUM (OB/SI/BR), LARGE (OB/SI/BR)
    
    for(var i = 9; i < map.length; i++) {
        if (map[i] == id) {
            switch (true) {
                case (i >= 45 && i <= 48): //Potion
                    buffs[HEALING_SPEED] += BLESSINGS[HEALING_SPEED];
                    break;
        
                case (i >= 49 && i <= 52): //Resources
                    buffs[GATHERING_SPEED] += BLESSINGS[GATHERING_SPEED];
                    break;
        
                case (i >= 53 && i <= 60): //Small Blessing
                    buffs[TOTAL_ATTACK] += BLESSINGS[SMALL][TOTAL_ATTACK];
                    buffs[TOTAL_DEFENSE] += BLESSINGS[SMALL][TOTAL_DEFENSE];
                    buffs[TOTAL_HEALTH] += BLESSINGS[SMALL][TOTAL_HEALTH];
                    break;
                
                case (i >= 61 && i <= 64): //Large Blessing
                    buffs[TOTAL_ATTACK] += BLESSINGS[LARGE][TOTAL_ATTACK];
                    buffs[TOTAL_DEFENSE] += BLESSINGS[LARGE][TOTAL_DEFENSE];
                    buffs[TOTAL_HEALTH] += BLESSINGS[LARGE][TOTAL_HEALTH];
                    break;
                    
                case (i >= 73 && i <= 100): //Small Industrial
                    rss[SMALL][OBSIDIAN] += INDUSTRIAL_SLOTS[SMALL][OBSIDIAN];
                    rss[SMALL][SILVER] += INDUSTRIAL_SLOTS[SMALL][SILVER];
                    rss[SMALL][BRASS] += INDUSTRIAL_SLOTS[SMALL][BRASS];
                    break;
                
                case (i >= 101 && i <= 116): //Medium Industrial
                    rss[MEDIUM][OBSIDIAN] += INDUSTRIAL_SLOTS[MEDIUM][OBSIDIAN];
                    rss[MEDIUM][SILVER] += INDUSTRIAL_SLOTS[MEDIUM][SILVER];
                    rss[MEDIUM][BRASS] += INDUSTRIAL_SLOTS[MEDIUM][BRASS];
                    break;
                
                case (i >= 117 && i <= 124): //Large Industrial
                    rss[LARGE][OBSIDIAN] += INDUSTRIAL_SLOTS[LARGE][OBSIDIAN];
                    rss[LARGE][SILVER] += INDUSTRIAL_SLOTS[LARGE][SILVER];
                    rss[LARGE][BRASS] += INDUSTRIAL_SLOTS[LARGE][BRASS];
                    break;        
                }
        }
    }
    
    var res = "";
    
    if (rss[SMALL][OBSIDIAN] != 0) {
        res += "<hr><div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + rss[SMALL][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[SMALL][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + rss[SMALL][SILVER] + " x " + (INDUSTRIAL_SPEED[SMALL][OBSIDIAN]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + rss[SMALL][BRASS] + " x " + (INDUSTRIAL_SPEED[SMALL][OBSIDIAN]).toLocaleString() + "/h<br>" +
                "</div>";
    }
    if (rss[MEDIUM][OBSIDIAN] != 0) {
        res += "<hr><div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + rss[MEDIUM][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[MEDIUM][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + rss[MEDIUM][SILVER] + " x " + (INDUSTRIAL_SPEED[MEDIUM][OBSIDIAN]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + rss[MEDIUM][BRASS] + " x " + (INDUSTRIAL_SPEED[MEDIUM][OBSIDIAN]).toLocaleString() + "/h<br>" +
                "</div>";
    }
    if (rss[LARGE][OBSIDIAN] != 0) {
        res += "<hr><div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + rss[LARGE][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[LARGE][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + rss[LARGE][SILVER] + " x " + (INDUSTRIAL_SPEED[LARGE][OBSIDIAN]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + rss[LARGE][BRASS] + " x " + (INDUSTRIAL_SPEED[LARGE][OBSIDIAN]).toLocaleString() + "/h<br>" +
                "</div>";
    }
    if (buffs[TOTAL_ATTACK] != 0) 
        res += "<hr><div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Total Attack:<br>Total Defense:<br>Total Health:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">&nbsp;+" + buffs[TOTAL_ATTACK] + "%<br>&nbsp;+" + buffs[TOTAL_DEFENSE] +"%<br>&nbsp;+" + buffs[TOTAL_HEALTH] +"%<br></div>" +
                    "</div>";
    if (buffs[HEALING_SPEED] != 0) 
        res += "<hr><div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Healing Speed:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">&nbsp;+" + buffs[HEALING_SPEED] + "%<br></div>" +
                    "</div>";
    if (buffs[GATHERING_SPEED] != 0)
        res += "<hr><div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Gathering Speed:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">&nbsp;+" + buffs[GATHERING_SPEED] + "%<br></div>" +
                    "</div>";
    return res;
}

function showTooltip(id) {
    var res = "<hr><span style=\"color: red;\">";
    var kings = kingship[id];
    switch (true) {
        //Shadow
        case (id == 9 || id == 21): res +=  "Only " + factions[1] + " can declare war</span><br><hr>"; break;
        //Lordsbane
        case (id == 10 || id == 22): res += "Only " + factions[2] + " can declare war</span><br><hr>"; break;
        //Tempest
        case (id == 16 || id == 28): res += "Only " + factions[3] + " can declare war</span><br><hr>"; break;
        //Ages
        case (id == 11 || id == 23): res += "Only " + factions[4] + " can declare war</span><br><hr>"; break;
        //Scarlet
        case (id == 15 || id == 27): res += "Only " + factions[5] + " can declare war</span><br><hr>"; break;
        //Longreach
        case (id == 12 || id == 24): res += "Only " + factions[6] + " can declare war</span><br><hr>"; break;
        //Frost
        case (id == 14 || id == 26): res += "Only " + factions[7] + " can declare war</span><br><hr>"; break;
        //Justice
        case (id == 13 || id == 25): res += "Only " + factions[8] + " can declare war</span><br><hr>"; break;
        //Military Cities
        case (id >= 65 && id <= 72): res += "Troops can be deployed from this city</span><br><hr>"; break;
        default: res = "<hr>";
    }
    if (id <= 8)
        kings += score[id];
    
    res += $("#i"+ id).attr("alt") + "<br>Kingship: <span style=\"color: yellow;\">" + kings + "</span>/min<br><hr>";
    
    switch (true) {
        case (id > 0 && id <= 8): //Bases
            res += "<div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/grain.png\">&nbsp;400 x " + (360000).toLocaleString() + "/h<br>" + 
                    "</div>" + getCitiesBuffs(id);
            break;
        
        case (id >= 45 && id <= 48): //Potion
            res += "<div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Healing Speed:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">+" + BLESSINGS[HEALING_SPEED] + "%<br></div>" +
                    "</div>";
            break;

        case (id >= 49 && id <= 52): //Resources
            res += "<div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Gathering Speed:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">+" + BLESSINGS[GATHERING_SPEED] + "%<br></div>" +
                    "</div>";
            break;

        case (id >= 53 && id <= 60): //Small Blessing
            res += "<div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Total Attack:<br>Total Defense:<br>Total Health:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">+" + BLESSINGS[SMALL][TOTAL_ATTACK] +"%<br>+" + BLESSINGS[SMALL][TOTAL_DEFENSE] +"%<br>+" + BLESSINGS[SMALL][TOTAL_HEALTH] +"%<br></div>" +
                    "</div>";
            break;
        
        case (id >= 61 && id <= 64): //Large Blessing
            res += "<div class=\"blessingContainer\">" +
                        "<div style=\"width: 60%; float: left; text-align: right;\">Total Attack:<br>Total Defense:<br>Total Health:<br></div>" +
                        "<div style=\"width: 36%; float: right; text-align: left;\">" + BLESSINGS[LARGE][TOTAL_ATTACK] +"%<br>+" + BLESSINGS[LARGE][TOTAL_DEFENSE] +"%<br>+" + BLESSINGS[LARGE][TOTAL_HEALTH] +"%<br></div>" +
                    "</div>";
            break;
            
        case (id >= 73 && id <= 100): //Small Industrial
            res += "<div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + INDUSTRIAL_SLOTS[SMALL][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[SMALL][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + INDUSTRIAL_SLOTS[SMALL][SILVER] + " x " + (INDUSTRIAL_SPEED[SMALL][SILVER]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + INDUSTRIAL_SLOTS[SMALL][BRASS] + " x " + (INDUSTRIAL_SPEED[SMALL][BRASS]).toLocaleString() + "/h<br>" +
                    "</div>";
            break;
        
        case (id >= 101 && id <= 116): //Medium Industrial
            res += "<div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + INDUSTRIAL_SLOTS[MEDIUM][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[MEDIUM][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + INDUSTRIAL_SLOTS[MEDIUM][SILVER] + " x " + (INDUSTRIAL_SPEED[MEDIUM][SILVER]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + INDUSTRIAL_SLOTS[MEDIUM][BRASS] + " x " + (INDUSTRIAL_SPEED[MEDIUM][BRASS]).toLocaleString() + "/h<br>" +
                    "</div>";
            break;
        
        case (id >= 117 && id <= 124): //Large Industrial
            res += "<div class=\"materialContainer\">" +
                    "<img class=\"materialPic\" src=\"./img/map/obsidian.png\">&nbsp;" + INDUSTRIAL_SLOTS[LARGE][OBSIDIAN] + " x " + (INDUSTRIAL_SPEED[LARGE][OBSIDIAN]).toLocaleString() + "/h<br>" + 
                    "<img class=\"materialPic\" src=\"./img/map/silver.png\">&nbsp;" + INDUSTRIAL_SLOTS[LARGE][SILVER] + " x " + (INDUSTRIAL_SPEED[LARGE][SILVER]).toLocaleString() + "/h<br>" +
                    "<img class=\"materialPic\" src=\"./img/map/brass.png\">&nbsp;" + INDUSTRIAL_SLOTS[LARGE][BRASS] + " x " + (INDUSTRIAL_SPEED[LARGE][BRASS]).toLocaleString() + "/h<br>" +
                    "</div>";
            break;        
    }
    
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
