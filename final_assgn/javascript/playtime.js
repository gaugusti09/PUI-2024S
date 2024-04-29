function resizeSketch(iframe, parentId, aspectRatio) {
    let parent = document.getElementById(parentId);
    let w = parent.clientWidth;
    iframe.width = w;
    iframe.height = w * aspectRatio;
    iframe.contentWindow.addEventListener('resize', () => {
        let w = parent.clientWidth;
        iframe.width = w;
        iframe.height = w * aspectRatio;
    });
}