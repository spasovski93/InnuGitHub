const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 650) {
        navBar.classList.add('scrolled')
    } else {
        navBar.classList.remove('scrolled');
    }
})                                                                                      