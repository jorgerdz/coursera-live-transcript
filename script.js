
const REFRESH_TIME = 1500;

let transcriptScrollInterval = setInterval(run, REFRESH_TIME);
let parentElement;

function setupScrollBox() {
    parentElement.style = 'overflow:auto; height: 45vh;';
    parentElement.addEventListener('scroll', (ev) => ev.preventDefault());
}

function getActiveElement() {
    var active = parentElement.querySelector('.rc-Phrase.active');
    return active;
}

function scrollToElement(element) {
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

function run() {
    parentElement = document.getElementsByClassName('rc-InteractiveTranscript')[0];
    if (!parentElement) return;

    setupScrollBox();
    scrollToElement(getActiveElement());
}
