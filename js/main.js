function playMusic() {
        var audioEle = document.getElementById("audio");
      if (audioEle.paused){
        audioEle.play();
      }else {
        audioEle.pause();
      }
    }
    
    $("#music").click(function(){
      play();
    });

    var player = document.getElementById("audio");
    play();
    function play(){
    swal("这里是我的引导页面\n这样你就不会在这里迷路了😋\n点一下音乐也挺好听的(。_。)", {
            buttons: {
                cancel: "音乐",
                allow: "确认"
            }
        }).then(function(value) {
            if (value == "allow") {
                player.pause()
            } else {
                player.play();
            }
        });
    }
