function setVideoPlayer() {
    //Check for mp4 SRC and build player! - or Vast!
    if (ca.doesExist('mp4Src', true) || ca.doesExist('vastSrc', true)) {
        var videoSource = ca.getParam('mp4Src');
        var vast = null;
        if (ca.doesExist('vastSrc', true)) {
            if (!ca.doesExist('vastMp4Src', true)) {
                ca.setParam('vastMp4Src', '//intellitxt.com/ast/ee318636-be5b-dc11-9c93-005056c00008/vmuk52455/onesecondvideo.mp4');
                videoSource = ca.getParam('vastMp4Src');
            }
            vast = ca.getParam('vastSrc');
        }

        //Setup existing params or fallbacks
        var pw = ca.setToExist('playerW', true, 480);
        var as = ca.setToExist('autoplay', true, true);
        var volume = ca.setToExist('volume', true, '40');
        var mute = ca.setToExist('startMute', true, false);
        //var ffVideo = ca.setToExist('ffVideo',true,true);

        if (Math.floor(parseInt(volume)) > 100) {
            volume = 100;
        } else if (Math.floor(parseInt(volume)) < 0) {
            volume = 0;
        } else {
            volume = Math.floor(parseInt(volume));
        }

        /*
         ==========  Settings for smaller screens/mobile ================
        */
        var smallerScreen = ($(window).width() < 900 && $(window).width() > 500 && $(window).height() > 600);
        var smallScreen = ($(window).width() < 900 && $(window).width() > 500 && $(window).height() < 600);


        if (smallerScreen) {
            pw = 480;
        } else if ($(window).width() < 500 || smallScreen) {
            pw = 300;
        }
        /*
         ==========  END: Settings for smaller screens/mobile ================
        */

        //setup player Object
        var playerSettings = {
            'mp4Src': 'http://images.intellitxt.com/a/105671/20170227-mosaic/assets/BareMinerals-Emelyne-Natural.mp4', //-> mandarory
            'playerW': pw,
            //'name':ffVideo,
            'autostart': as,
            'mute': mute,
            'volume': volume,
            'vast': vast,
            'controls': true
        };

        var vh = document.getElementById('videoHolder');
        cm.createJWPlayer(playerSettings, vh);
    } else {}
}

// if ($("#videoHolder").length) {
//             cm.removeJWPlayer("videoHolder");
//             //$('.lightboxclose').removeClass('videoLightboxClose');
//         }
//
//
//
//
//        object.communication.on('Main_Video' + ' Complete', function() {
//             ca.setParam('videoFirstPlayThrough', true);
//         });
//
//        if ($("#leftElements").find("#vm_jp_player_container_vm_player_0").length > 0) {
//             if (!ca.getParam('videoFirstPlayThrough')) {
//                 if (ca.doesExist(ca.getParam('Video_' + 'Main_Video'))) {
//                     var player = ca.getParam('Video_' + 'Main_Video');
//                     player.play();
//                 }
//                 //object.communication.fire('Main_Video'+'clickToPlay',function(){
//                 //video.play();
//                 //});
//             } else {
//                 object.communication.fire('Main_Video' + 'click_interaction', function() {
//                     video.pause();
//                 });
//             }
//         } else {
//
//            /*video.on('complete', function (event) {
//                  channel.fire(videoPlayerName + ' Complete');
//                  object.communication.fire(videoPlayerName + ' Complete');
//                  if(ca.getParam('globalPlayerSetting')[videoPlayerName]['fps']){
//                      cl.logVideoEvent('complete', video);
//                      ca.getParam('globalPlayerSetting')[videoPlayerName]['fps'] = false;
//                  }*/
//
//        }
