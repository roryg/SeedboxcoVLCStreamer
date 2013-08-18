// Set up the simpleGet plugin
var simpleGetEmbed = document.getElementById('simpleGetPluginId');
var simpleGetPlugin = simpleGetEmbed.SimpleGetPlugin();

var username = localStorage['seedboxco-username'];
var password = localStorage['seedboxco-password'];
var vlcPath = localStorage['vlc-player-path'];

// Open the seed box file manager in a new tab
chrome.browserAction.onClicked.addListener(function() {
    var username = localStorage['seedboxco-username'];
    var password = localStorage['seedboxco-password'];

    var fileManagerURL = 'http://' + username + ':' + password + '@' + username + '.cloud.sn/files/?sort_by=mod&sort_as=asc&dir=torrents/completed';

    chrome.tabs.create({'url': fileManagerURL});
});

// Play media in VLC player when requested
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "playMedia") {
        simpleGetPlugin.callApplication(vlcPath, request.mediaURL.trim());

        sendResponse({status: "Opening " + request.mediaURL + " in VLC player."});
    }
});