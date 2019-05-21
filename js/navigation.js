window.onload = () => {
    let menu = document.querySelector('.menu');
    let icn = document.querySelector('span.fas');
    let nav = document.querySelector('header');
    let anchors = document.querySelectorAll('.nav-link');
    let close = () => {
        nav.classList.remove('open');
        menu.classList.remove('open');
        icn.classList.remove('fa-times');
        icn.classList.add('fa-bars');
    };
    let open = () => {
        nav.classList.add('open');
        menu.classList.add('open');
        icn.classList.remove('fa-bars');
        icn.classList.add('fa-times');
    }
    
    menu.onclick = () => {
        if (nav.classList.contains('open')) {
            close();
        } else {
            open();
        }
    };

    anchors.forEach(anchor => {
        anchor.onclick = () => {
            close();
        }
    });

    window.onscroll = () => {
        if(nav.classList.contains('open')) {
            close();
        }
    }
};