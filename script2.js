document.querySelectorAll('.ethnic-wear-item').forEach(item => {
    let hoverTimeout;

    item.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            const video = item.querySelector('video');
            const img = item.querySelector('img');
            if (video) {
                img.style.display = 'none';
                video.style.display = 'block';
                video.play();
            }
        }, 2000); // 2 seconds
    });

    item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        const video = item.querySelector('video');
        const img = item.querySelector('img');
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
            img.style.display = 'block';
        }
    });
});