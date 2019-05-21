window.onload = () => {
    let menu = document.querySelector('.menu');
    let icn = document.querySelector('span.fas');
    let nav = document.querySelector('header');
    let anchors = document.querySelectorAll('.nav-link');
    
    menu.onclick = () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            menu.classList.remove('open');
            icn.classList.remove('fa-times');
            icn.classList.add('fa-bars');
        } else {
            nav.classList.add('open');
            menu.classList.add('open');
            icn.classList.remove('fa-bars');
            icn.classList.add('fa-times');
        }
    };

    anchors.forEach(anchor => {
        anchor.onclick = () => {
            nav.classList.remove('open');
            menu.classList.remove('open');
            icn.classList.remove('fa-times');
            icn.classList.add('fa-bars');
        }
    });
};