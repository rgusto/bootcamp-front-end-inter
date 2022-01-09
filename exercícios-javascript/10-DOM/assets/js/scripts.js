const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeCls = 'dark-mode';

function changeClasses() {
    button.classList.toggle(darkModeCls);
    h1.classList.toggle(darkModeCls);
    body.classList.toggle(darkModeCls);
    footer.classList.toggle(darkModeCls);
}

function changeText() {
    const lightModeTxt = 'Light Mode';    
    const darkModeTxt = 'Dark Mode'; 

    if (body.classList.contains(darkModeCls)) {
        button.innerHTML = lightModeTxt;
        h1.innerHTML = darkModeTxt + 'ON';
        return;
    }

    button.innerHTML = darkModeTxt;
    h1.innerHTML = lightModeTxt + 'ON';

}

function changeMode() {
    changeClasses();
    changeText();
}

button.addEventListener('click', changeMode);