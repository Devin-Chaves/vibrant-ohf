var ABOUT_TEXT = 'What is IntelliTXT?';
var ABOUT_LINK = 'http://www.vibrantmedia.com/whatisIntelliTXT.asp';
var creativeAPI = window.frameElement.creativeAPI;
var adInstance = creativeAPI.adInstance;
var log = creativeAPI.log;
// Initialise the video player
var videoplayer = creativeAPI.videoplayer(window, document);
var videoHolder = document.getElementById('videoTV');

// Let Kormorant know that we've opened so that it can
// log engagement
creativeAPI.channel.fire("open");
// Let Kormorant know that the close button has been triggered
// So that it can remove the takeover from the DOM and log close
creativeAPI.events.bind(document.getElementById('closeButton'), 'click', function() {
  creativeAPI.channel.fire('close');
});
