var prevScrollpos = window.scrollY;

window.onscroll = function() {

    var currentScrollpos = window.scrollY;

    if (prevScrollpos > currentScrollpos){
        document.getElementById('navbar').style.top = "0";
    }
    else{
        document.getElementById('navbar').style.top = "-110px";
    }
    
    prevScrollpos = currentScrollpos;
}

console.log('running');