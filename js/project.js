// project.js - The JavaScript File for Our Group Project
// Author: Shelby Decker ADD NAMES HERE
// Prototype Due: 5/30/23 7:00a

// this will be the javascript file that does 'stuff' on our webpage

// randomize function ----------------------------------------------------------------------------------------------------------------
// returns a random song from the arr playlist
function displayRandom(arr){
    // generate a random index
    var randomIndex = Math.floor(Math.random() * arr.length);
    // access the random index of lofi songs array
    var randomSong = arr[randomIndex];

    // for debugging
    
    console.log("Song Title: ", randomSong.title);
    console.log("artist: ", randomSong.artist);
    console.log("link: ", randomSong.youtube);
    

    // return the random song object
    return randomSong;
}
// -----------------------------------------------------------------------------------------------------------------------------------

// Lofi Songs button stuff
// find button 
var lofi_button = document.getElementById("lofi");
var angry_button = document.getElementById("angry");
var bad_bitch_button = document.getElementById("bad-bitch");
var hurt_button = document.getElementById("hurt");
var feel_good_button = document.getElementById("feel-good");
var lovesick_button = document.getElementById("lovesick");

// attach event listener to button & call displayRandom fxn using temporary arrays
lofi_button.addEventListener("click", function(){
    // pick a song
    var lofi_song = displayRandom(lofi_songs);
    // attach song stuff to output
    document.getElementById("song-output").innerHTML = "Title: " + lofi_song.title + "<br>Artist: " + lofi_song.artist + "<br>Youtube Link:<br>" + lofi_song.youtube + "<br>";
    //selector.appendChild("addition");
})

// attach event listener to button & call displayRandom fxn using jsonFetch
angry_button.addEventListener("click", function(){
    // call json Fetch
    //var angry_songs = jsonFetch();
    // debugging 
    //console.log(angry_songs);
    // pick a song
    var angry_song = displayRandom(angry_songs);
    // attach song stuff to output
    document.getElementById("song-output").innerHTML = "Title: " + angry_song.title + "<br>Artist: " + angry_song.artist + "<br>Youtube Link:<br>" + angry_song.youtube + "<br>";
    //selector.appendChild("addition");
})
// bad_bitch_button.addEventListener("click", display(bad_bitch_songs));
// hurt_button.addEventListener("click", display(hurt_songs));
// feel_good_button.addEventListener("click", display(feel_good_songs));
// lovesick_button.addEventListener("click", display(lovesick_songs));

/* -----------------------------------------------------------------------------------------------------------------------------------
// this is to use the fetch api to gather separate json files to link songs.
// using async function so other functions of the website will be usable
async function jsonFetch(){
    // declare the request URL from github site
    const requestURL = "https://github.io/shldecke/Art101Group10Project/js/angry.json";
    // initialize a new request object
    const request = new Request(requestURL);

    // make a network request using fetch() and returns a response obj
    const response = await fetch(request);
    // retreive the response as a JSON using .json
    const songs = await response.json();
    // return the songs array to do work on
    return songs;
}
----------------------------------------------------------------------------------------------------------------------------------- */
// songs for the prototype 
function display(arr){
    var song = displayRandom(arr);
    document.getElementById("song-output").innerHTML = "Title: " + song.title + "<br>Artist: " + song.artist + "<br>Youtube Link:<br>" + song.youtube + "<br>"; 
}
function getEmpoweringSongs(){
    $.ajax({
        url: "https://shldecke.github.io/Art101Group10Project/js/bad-bitch.json",
        type: "GET"
    })
    .done(function(data){
        display(data);
    })
}
var bad_bitch_songs = [];
var lovesick_songs = [];
var feel_good_songs = [];
var hurt_songs = [];

var angry_songs = [
    {
        "title": "100%",
        "artist" : "Sonic Youth",
        "ft.artist": ["none"],
        "youtube link": "https://www.youtube.com/watch?v=N3gN9Up6hmc&ab_channel=SonicYouthVEVO"
    },
    {"title": "12XU", "artist": "Minor Threat", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=Aq8c1s5RhyE&ab_channel=MinorThreat-Topic"},
    {"title": "Brand New City", "artists": "Mitski", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=zgI56IFtQto&ab_channel=mitskimitski"},
    {"title": "Seeing Red", "artist": "Minor Threat", "ft.artist": ["none"],
     "youtube": "https://www.youtube.com/watch?v=ZM_JlObmQbQ&ab_channel=MinorThreat-Topic"},
    {"title": "People Ain't No Good", "artist": "The Cramps", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=CT4EJ0l0hUc&ab_channel=TheCramps-Topic"},
    {"title": "Nazi Punks Fuck Off", "artist": "Dead Kennedys", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=iyc62g7YQM0&ab_channel=DeadKennedys-Topic"},
    {"title": "Survival Tactics", "artist": "Joey Bada$$", "ft.artist": ["Capital Steez"], 
    "youtube": "https://www.youtube.com/watch?v=jG-2IpcYyk0&ab_channel=BIGMURS"},
    {"title": "Burn Hollywood Burn", "artist": "Public Enemy", "ft.artist": ["Ice Cube", "Big Daddy Kane"], 
    "youtube": "https://www.youtube.com/watch?v=Vt1KfJhyMqw&ab_channel=PublicEnemy-Topic"},
    {"title": "The Nigga Ya Love To Hate", "artist": "Ice Cube", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=Iah9PyfcFRA&ab_channel=O%27SheaJacksondk"},
    {"title": "Time 4 Sumaksion", "artist": "Redman", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=FMUcfbpcIeg&ab_channel=Redman-Topic"},
    {"title": "Insane in the Brain", "artist": "Cypress Hill", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=XOcyKObnwg4&ab_channel=CypressHill-Topic"},
    {"title": "Neighbors", "artist": "J. Cole", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=wSRGnRAfUQg&ab_channel=IxnayontheHombredk"},
    {"title": "The Bitch In Yoo", "artist": "Common", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=cBVqGYPe1Qs&ab_channel=Common-Topic"},
    {"title": "Ether", "artist": "Nas", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=zfyQ8muKLdc&ab_channel=Nas-Topic"},
    {"title": "Me Against The World", "artist": "2Pac", "ft.artist": ["Dramacydal"], 
    "youtube": "https://www.youtube.com/watch?v=md15-bpJpdY&ab_channel=DreniEntertainment"},
    {"title": "Mad Dog", "artist": "NCT 127", "ft.artist": ["none"],
     "youtube": "https://www.youtube.com/watch?v=wMY6Xmppxm0&ab_channel=NCT127-Topic"},
    {"title": "Crazy", "artist": "Doechii", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=ySnmmnDXq2E&ab_channel=IamdoechiiVEVO"},
    {"title": "Limp", "artist": "Fiona Apple", "ft.artist": ["none"], 
    "youtube": "https://www.youtube.com/watch?v=CfTNpbraBbI&ab_channel=fionaappleVEVO"},
    {"title": "SIMP", "artist": "Rico Nasty", "ft.artist": ["Full Tac", "Lil Mariko"], 
    "youtube": "https://www.youtube.com/watch?v=N8kSHeIVYh4&ab_channel=FullTac"}
];
 
var lofi_songs = [
    {
        "title": "Tomorrow",
        "artist" : "Kevin Penkin",
        "ft.artist": ["none"],
        "youtube link": "<idk>"
    },
    {"title": "Yuri on ICE", "artist": "Taro Umebayashi", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Lilac", "artists": "Kainbeats", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Nocturnal", "artist": "noni", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Fields", "artist": "Leavv", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Afterglow", "artist": "Goson", "ft.artist": ["Dreamfield"], "youtube": "smthg"},
    {"title": "Bbydhyonchord", "artist": "Aphex Twin", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Gymnopedie No.1", "artist": "Erik Satie", "ft.artist": ["Philippe Entremont"], "youtube": "smthg"},
    {"title": "Colors of My Life", "artist": "Mantovani", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Sorry", "artist": "Dusty Clav", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Inochi no Namae/The Name of Life", "artist": "Jeremy Ng", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Roygbiv", "artist": "Boards of Canada", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Know Who You Are At Every Age", "artist": "Cocteau Twins", "ft.artist": ["none"], "youtube": "smthg"},
    {"title": "Limerence", "artist": "Yves Tumor", "ft.artist": ["none"], "youtube": "smthg"}
];
