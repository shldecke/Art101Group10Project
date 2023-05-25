// project.js - The JavaScript File for Our Group Project
// Author: Shelby Decker ADD NAMES HERE
// Due: 5/30/23

// this will be the javascript file that does 'stuff' on our webpage
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

}