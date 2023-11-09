let nav = document.querySelector('.botn')
const handleScroll = () => {

    // if (window.scrollTop() > 45) {
    //     nav.addClass('sticky-top');
    // } else {
    //     nav.removeClass('sticky-top');
    // }
    // if (window.scrollTop() > 45) {
    nav.addClass('sticky-top');
    // } else {
    //     nav.removeClass('sticky-top');
    // }
}
nav.addEventListener('click', handleScroll)