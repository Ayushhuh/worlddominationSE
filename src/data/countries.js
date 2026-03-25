export const countriesData = {

india:{name:"India",economy:3000,baseGDP:120,army:250,air:90,naval:60,integration:0,neighbors:["china","pakistan","nepal"],owner:"player"},
china:{name:"China",economy:5500,baseGDP:150,army:400,air:160,naval:130,integration:0,neighbors:["india","russia"],owner:"ai"},
usa:{name:"USA",economy:7000,baseGDP:180,army:280,air:250,naval:200,integration:0,neighbors:["canada","mexico"],owner:"ai"},
russia:{name:"Russia",economy:3500,baseGDP:100,army:450,air:120,naval:90,integration:0,neighbors:["china","germany"],owner:"ai"},

japan:{name:"Japan",economy:5000,baseGDP:150,army:140,air:160,naval:150,integration:0,neighbors:["china"],owner:"ai"},
germany:{name:"Germany",economy:4500,baseGDP:140,army:180,air:130,naval:80,integration:0,neighbors:["france","poland"],owner:"ai"},
uk:{name:"UK",economy:4200,baseGDP:135,army:160,air:140,naval:110,integration:0,neighbors:["france"],owner:"ai"},
france:{name:"France",economy:4000,baseGDP:130,army:170,air:120,naval:70,integration:0,neighbors:["germany","spain"],owner:"ai"},
italy:{name:"Italy",economy:3200,baseGDP:110,army:140,air:100,naval:90,integration:0,neighbors:["france"],owner:"ai"},
spain:{name:"Spain",economy:3100,baseGDP:105,army:130,air:90,naval:80,integration:0,neighbors:["france"],owner:"ai"},

brazil:{name:"Brazil",economy:2500,baseGDP:90,army:200,air:70,naval:50,integration:0,neighbors:["argentina"],owner:"ai"},
argentina:{name:"Argentina",economy:1800,baseGDP:70,army:150,air:50,naval:40,integration:0,neighbors:["brazil"],owner:"ai"},
canada:{name:"Canada",economy:3000,baseGDP:110,army:140,air:90,naval:80,integration:0,neighbors:["usa"],owner:"ai"},
mexico:{name:"Mexico",economy:2200,baseGDP:80,army:160,air:60,naval:50,integration:0,neighbors:["usa"],owner:"ai"},
chile:{name:"Chile",economy:1500,baseGDP:65,army:120,air:40,naval:30,integration:0,neighbors:["argentina"],owner:"ai"},
peru:{name:"Peru",economy:1400,baseGDP:60,army:110,air:40,naval:30,integration:0,neighbors:["brazil"],owner:"ai"},
colombia:{name:"Colombia",economy:1600,baseGDP:70,army:130,air:50,naval:40,integration:0,neighbors:["brazil"],owner:"ai"},

pakistan:{name:"Pakistan",economy:1500,baseGDP:60,army:200,air:50,naval:30,integration:0,neighbors:["india"],owner:"ai"},
bangladesh:{name:"Bangladesh",economy:1200,baseGDP:50,army:140,air:30,naval:20,integration:0,neighbors:["india"],owner:"ai"},
nepal:{name:"Nepal",economy:500,baseGDP:25,army:60,air:5,naval:0,integration:0,neighbors:["india"],owner:"ai"},
srilanka:{name:"Sri Lanka",economy:800,baseGDP:40,army:90,air:20,naval:20,integration:0,neighbors:["india"],owner:"ai"},

australia:{name:"Australia",economy:2800,baseGDP:100,army:120,air:90,naval:100,integration:0,neighbors:["indonesia"],owner:"ai"},
indonesia:{name:"Indonesia",economy:2600,baseGDP:95,army:180,air:70,naval:60,integration:0,neighbors:["australia"],owner:"ai"},
philippines:{name:"Philippines",economy:1400,baseGDP:60,army:120,air:40,naval:50,integration:0,neighbors:["japan"],owner:"ai"},
vietnam:{name:"Vietnam",economy:2000,baseGDP:75,army:160,air:60,naval:50,integration:0,neighbors:["china"],owner:"ai"},
thailand:{name:"Thailand",economy:2100,baseGDP:80,army:150,air:60,naval:50,integration:0,neighbors:["vietnam"],owner:"ai"},

saudi:{name:"Saudi Arabia",economy:3500,baseGDP:120,army:150,air:100,naval:80,integration:0,neighbors:["uae"],owner:"ai"},
uae:{name:"UAE",economy:2000,baseGDP:90,army:100,air:80,naval:70,integration:0,neighbors:["saudi"],owner:"ai"},
iran:{name:"Iran",economy:2700,baseGDP:100,army:220,air:80,naval:60,integration:0,neighbors:["iraq"],owner:"ai"},
iraq:{name:"Iraq",economy:1500,baseGDP:60,army:140,air:40,naval:20,integration:0,neighbors:["iran"],owner:"ai"},
israel:{name:"Israel",economy:2200,baseGDP:90,army:160,air:120,naval:60,integration:0,neighbors:["egypt"],owner:"ai"},

egypt:{name:"Egypt",economy:2000,baseGDP:80,army:180,air:60,naval:50,integration:0,neighbors:["saudi"],owner:"ai"},
nigeria:{name:"Nigeria",economy:1800,baseGDP:75,army:160,air:50,naval:40,integration:0,neighbors:["ghana"],owner:"ai"},
ghana:{name:"Ghana",economy:900,baseGDP:45,army:90,air:20,naval:20,integration:0,neighbors:["nigeria"],owner:"ai"},
kenya:{name:"Kenya",economy:1000,baseGDP:50,army:100,air:30,naval:20,integration:0,neighbors:["ethiopia"],owner:"ai"},
ethiopia:{name:"Ethiopia",economy:1100,baseGDP:55,army:120,air:20,naval:0,integration:0,neighbors:["kenya"],owner:"ai"},
southafrica:{name:"South Africa",economy:2200,baseGDP:85,army:140,air:60,naval:50,integration:0,neighbors:["namibia"],owner:"ai"},
morocco:{name:"Morocco",economy:1500,baseGDP:65,army:120,air:40,naval:30,integration:0,neighbors:["algeria"],owner:"ai"},
algeria:{name:"Algeria",economy:1600,baseGDP:70,army:130,air:50,naval:40,integration:0,neighbors:["morocco"],owner:"ai"},

// Europe expansion
poland:{name:"Poland",economy:2800,baseGDP:100,army:180,air:80,naval:40,integration:0,neighbors:["germany"],owner:"ai"},
ukraine:{name:"Ukraine",economy:2000,baseGDP:80,army:220,air:60,naval:30,integration:0,neighbors:["russia"],owner:"ai"},
netherlands:{name:"Netherlands",economy:3000,baseGDP:110,army:120,air:90,naval:80,integration:0,neighbors:["germany"],owner:"ai"},
sweden:{name:"Sweden",economy:2800,baseGDP:100,army:110,air:90,naval:70,integration:0,neighbors:["norway"],owner:"ai"},
norway:{name:"Norway",economy:2600,baseGDP:95,army:100,air:80,naval:80,integration:0,neighbors:["sweden"],owner:"ai"},

// filler small countries for scale
denmark:{name:"Denmark",economy:2000,baseGDP:80,army:80,air:60,naval:60,integration:0,neighbors:["germany"],owner:"ai"},
finland:{name:"Finland",economy:2100,baseGDP:85,army:100,air:70,naval:40,integration:0,neighbors:["russia"],owner:"ai"},
belgium:{name:"Belgium",economy:2400,baseGDP:90,army:90,air:70,naval:40,integration:0,neighbors:["france"],owner:"ai"},
austria:{name:"Austria",economy:2300,baseGDP:85,army:100,air:60,naval:30,integration:0,neighbors:["germany"],owner:"ai"},
switzerland:{name:"Switzerland",economy:3000,baseGDP:110,army:90,air:60,naval:0,integration:0,neighbors:["italy"],owner:"ai"},

// keep adding similar pattern if needed...
};