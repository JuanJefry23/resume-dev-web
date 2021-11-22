const videoShow = document.querySelectorAll(".video-card");

for(let i=0; i<videoShow.length; i++){
    videoShow[i].addEventListener("mouseenter", 
    function(){
        videoShow[i].play();
    })
    videoShow[i].addEventListener("mouseout", 
    function(){
        videoShow[i].pause();
    })
}

