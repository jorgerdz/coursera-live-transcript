
const REFRESH_TIME = 1500;

let transcriptScrollInterval = setInterval(run, REFRESH_TIME);
let parentElement;

function setupScrollBox() {
    parentElement.style = 'overflow:auto; height: 45vh;';
}

function getActiveElement() {
    var active = parentElement.querySelector('.rc-Phrase.active');
    return active;
}

function scrollToElement(element) {
    if (!element.offsetTop) debugger
    parentElement.scroll({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
}

function run() {
    parentElement = document.getElementsByClassName('rc-InteractiveTranscript')[0];
    if (!parentElement) return;

    let activeElement = getActiveElement();
    if (!activeElement) return;

    setupScrollBox();
    scrollToElement(activeElement);
}
