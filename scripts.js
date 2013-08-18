var files = document.getElementsByClassName('file');

// Loop through all the elements that are links to files and
// add a play button if they're .mkv .mp4 or .avi videos.
for (var i = 0; i < files.length; i++) {
    if (files[i].innerText.match(/\.mkv$|\.mp4$|\.avi$/i)) {
        var playButton = document.createElement('a');

        playButton.className = 'play-button';
        playButton.innerHTML = "Play Video";

        playButton.onclick = function(e) {
            e.preventDefault();

            var mediaURL = this.parentNode.getElementsByClassName('file')[0].href;

            chrome.extension.sendRequest({method: "playMedia", mediaURL: mediaURL}, function(response) {
                console.log(response.status);
            });
        }

        files[i].parentNode.appendChild(playButton);
    }
}