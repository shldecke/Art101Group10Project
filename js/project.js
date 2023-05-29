// project.js - The JavaScript File for Our Group Project
// Author: Shelby Decker ADD NAMES HERE
// Prototype Due: 5/30/23 7:00a

// this will be the javascript file that does 'stuff' on our webpage

// randomize function
// returns a random song from the arr playlist
function displayRandom(arr){
    // generate a random index
    var randomIndex = Math.floor(Math.random() * lofi_songs.length);
    // access the random index of lofi songs array
    var randomSong = arr[randomIndex];

    // for debugging
    console.log("Song Title: ", randomSong.title);
    console.log("artist: ", randomSong.artist);
    console.log("link: ", randomSong.youtube);
    
    // return the random song object
    return randomSong;
}

// Lofi Songs button stuff
// find button 
var lofi_button = document.getElementById("lofi");
// finding the gifset section                                                       if u want to hide the section, you might need to edit this
var selector = document.getElementById("gifset");
// adding a header to title the results                                             here too
//var addition = document.createElement("h3");
//addition.innerHTML = "Your Selected Song";                                          // !

// attach event listener to button & call displayRandom fxn
lofi_button.addEventListener("click", function(){
    // pick a song
    var lofi_song = displayRandom(lofi_songs);
    // attach song stuff to output
    document.getElementById("song-output").innerHTML = "Title: " + lofi_song.title + "<br>Artist: " + lofi_song.artist + "<br>Youtube Link: " + lofi_song.youtube + "<br>";
    //selector.appendChild("addition");
})


// angry songs button stuff
// love-sick songs button stuff
// hurt songs button stuff
// feel-good songs button stuff
// bad-bitch songs button stuff

// temp array to hold songs 
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
]


/*  this is to use the separate json files to link songs.
// using async function so other functions of the website will be usable
async function random_lofi(){
    // declare the request URL from github site
    const requestURL = "https://github.io/shldecke/Art101Group10Project/js/lofi.json";
    // initialize a new request object
    const request = new Request(requestURL);

    // make a network request using fetch() and returns a response obj
    const response = await fetch(request);
    // retreive the response as a JSON using .json
    const lofi_songs = await response.json();

    // randomize & then store in a variable

    // once we've selected the song, it's time to append to the webpage

}*/