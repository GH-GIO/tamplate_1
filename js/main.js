
// start of the video
const video = document.querySelector('.main_video');
const btn = document.querySelector('.play_btn');


btn.addEventListener('click', () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
})


function updateBtn() {
    const icon = this.paused ? '<i class="fas fa-play"></i> ' : '<i class="fas fa-pause"></i>';
    btn.innerHTML = icon;
}


video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);


//end of the video