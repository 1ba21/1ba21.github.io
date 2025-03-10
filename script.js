const video = document.getElementById('video');
const videoItems = document.querySelectorAll('.video-list li');

videoItems.forEach(item => {
    item.addEventListener('click', function () {
        const videoSrc = this.getAttribute('data-video');
        video.src = videoSrc;
        video.load();
        video.play();
    });
});
