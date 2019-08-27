(() => {
    /*
     * Ripple effect
     */
    // Waves.attach('.button', ['waves-button', 'waves-float']);
    // Waves.attach('.button', ['waves-button', 'waves-float']);
    // Waves.attach('button', ['waves-button', 'waves-light']);
    // Waves.init();
    // console.log('TCL: Waves', Waves);
    // ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
    // const btns = document.querySelectorAll('.btn');
    // btns.forEach(btn => {
    //     btn.addEventListener('mousedown', ripplet);
    // });

    document.querySelector('.hamburger').addEventListener(
        'click',
        function() {
            this.classList.toggle('is-active');
        },
        false
    );

    // window.requestAnimationFrame(function() {
    //     console.log('paint!');
    // });

    // window.addEventListener('scroll', function() {
    //     let position = scrollPosition();
    //     console.log(`scrollY ${position}`);
    //     // console.log(position);
    // });

    // function scrollPosition() {
    //     return window.scrollY;
    // }

    /*******************************************************************
     *  Optimized window on scroll evend,
     *  it use rAF form throttling function execution
     *******************************************************************/

    // const scrollBreakPoint = 250;
    // const navbar = document.getElementById('navbar');

    // let ticking = false;
    // let isShrinked = false;
    // // let scrollPosition = 0;

    // function shrinkNavbar(position) {
    //     // console.log('TCL: isShrinked', isShrinked);
    //     // console.log('TCL: shrinkNavbar -> position', position);

    //     if (!isShrinked && position > scrollBreakPoint) {
    //         navbar.classList.add('navbar-shrink');
    //         isShrinked = true;
    //     } else if (isShrinked && position < scrollBreakPoint) {
    //         navbar.classList.remove('navbar-shrink');
    //         isShrinked = false;
    //     }
    // }

    // window.addEventListener('scroll', function() {
    //     // scrollPosition = window.screenY;
    //     if (!ticking) {
    //         window.requestAnimationFrame(function() {
    //             shrinkNavbar(window.scrollY);
    //             ticking = false;
    //         });
    //     }
    //     ticking = true;
    // });
    /*******************************************************************/

    // /**
    //  * Select navbarlink based on url
    //  *
    //  * @param {*} navbar
    //  */
    // function selectNavbarLink(navbar) {
    //     let pathname = window.location.pathname;
    //     //if (pathname === '/') pathname += 'index.html';
    //     navbar.querySelector(`a[href='${pathname}']`).classList.add('active');
    // }
    // selectNavbarLink(navbar);
})();
