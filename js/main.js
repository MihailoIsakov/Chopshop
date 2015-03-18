
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $("#video-wallpaper").wallpaper({
        source: {
            poster: "img/python.png",
            video: "http://www.youtube.com/watch?v=AiCFtmdrvHM"
        }
    });
});