// project.js - The JavaScript File for Our Group Project
// Author: Shelby Decker ADD NAMES HERE
// Prototype Due: 5/30/23 7:00a

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Pulling the songs from JSON

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
// displays the song with the correct formatting
function display(arr){
    console.log("displayed fxn");
    var song = displayRandom(arr);
    $("#song-output").html("Title: " + song.title + "<br>Artist: " + song.artist + "<br>Youtube Link: <a href='" + song.youtube + "'>" + song.youtube + "</a>");
    //document.getElementById("song-output").innerHTML = "Title: " + song.title + "<br>Artist: " + song.artist + "<br>Youtube Link:<br>" + song.youtube + "<br>"; 
}

// pulls the song from the json file with the URL as strURL
function getSongs(strURL){
    console.log("clicked!");
    $.ajax({
        url: strURL,
        //"https://shldecke.github.io/Art101Group10Project/js/bad-bitch.json",
        type: "GET",
        dataType: "json",
        data: [],
    })
    .done(function(data){
        display(data);          // might need to indicate which element with square brackets in one of these fxns...
    })
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// using jquery to print the songs

var bad_bitch_button = $("#bad-bitch");
bad_bitch_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/bad-bitch.json");
})
var lofi_button = $("#lofi");
lofi_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/lofi.json");
})

var lovesick_button = $("#lovesick");
lovesick_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/love-sick.json");
})

var hurt_button = $("#hurt");
hurt_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/hurt.json");
})

var feel_good_button = $("#feel-good");
feel_good_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/feel-good.json");
})

var angry_button = $("#angry");
angry_button.click(function(){
    getSongs("https://shldecke.github.io/Art101Group10Project/js/angry.json");
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// javascript animation

$(document).ready(function() {
    // Optional: Adjust the duration of the scroll animation
    var scrollDuration = 10; // seconds
  
    // Calculate the width of the scroll content based on its content
    var scrollContent = $('#albums');
    var contentWidth = scrollContent.scrollWidth;
    scrollContent.width(contentWidth);
  
    // Set the animation duration on the scroll content
    scrollContent.css({
        'animation-duration': scrollDuration + 's', 
        'animation-iteration-count': 'infinite',
    });
  });
  


    