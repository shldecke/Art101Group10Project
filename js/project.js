// project.js - The JavaScript File for Our Group Project
// Author: Shelby Decker ADD NAMES HERE
// Due: 5/30/23

// this will be the javascript file that does 'stuff' on our webpage

// template to add links when button is clicked
document.getElementById("tester-button").addEventListener("click", function() {
    fetch("songs.json")
      .then(response => response.json())
      .then(data => {
        var songs = data.songs;
        var randomSong = generateRandomSong(songs);
        document.getElementById("songTitle").textContent = randomSong.title;
        document.getElementById("songArtist").textContent = randomSong.artist;
        document.getElementById("songGenre").textContent = randomSong.genre;
      })
      .catch(error => console.error(error));
  });
  
  function generateRandomSong(songs) {
    var randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  }
  
  