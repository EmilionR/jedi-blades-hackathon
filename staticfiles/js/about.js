document.addEventListener('DOMContentLoaded', function() {
    const overlays = document.querySelectorAll('.overlay');
    const hoverInfo = document.getElementById('hover-info');

    overlays.forEach(overlay => {
        overlay.addEventListener('mouseenter', function() {
            hoverInfo.textContent = this.dataset.info;
            hoverInfo.style.display = 'block';
            hoverInfo.style.opacity = '1';
            hoverInfo.style.left = this.getBoundingClientRect().left + 'px';
            hoverInfo.style.top = (this.getBoundingClientRect().top - hoverInfo.offsetHeight) + 'px';
        });

        overlay.addEventListener('mouseleave', function() {
            hoverInfo.style.opacity = '0';
            setTimeout(() => {
                hoverInfo.style.display = 'none';
            }, 300);
        });

        overlay.addEventListener('mousemove', function(e) {
            hoverInfo.style.left = e.pageX + 20 + 'px';
            hoverInfo.style.top = e.pageY + 20 + 'px';
        });
    });
});