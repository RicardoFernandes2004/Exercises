function darkmode(){
    let darkIcon = document.querySelector('img');

    let element = document.body;

    element.classList.toggle("dark-mode");

    let mySrc = darkIcon.getAttribute('src');

    if( mySrc === 'assets/lua-crescente.png'){
        darkIcon.setAttribute('src', 'assets/mode-light-icon-2048x2048-17p1ch4x.png');
    } else{
        darkIcon.setAttribute('src', 'assets/lua-crescente.png');

    }
}