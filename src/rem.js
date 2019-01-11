const baseSize = 40;

function setRem() {
    const scale = document.documentElement.clientWidth / 750
    document.documenElement.style.fontSize = (baseSize * Math.min(scale, 2) + 'px')
}
setRem();
window.onresize = function() {
    setRem();
}