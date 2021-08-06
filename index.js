// handles layout when the page loads
if(window.innerWidth >= 800) {   
    desktopLayout();
}

// handles layout when browser window size changes during browsing 
window.addEventListener("resize",() => {
    if(window.innerWidth >= 800) {   
        desktopLayout();
    }else {
        mobileLayout();
    }
})

// functions handling background of the site
function desktopLayout() {
    document.getElementById("background").src = "./images/pattern-background-desktop.svg" ;
}

function mobileLayout() {
    document.getElementById("background").src = "./images/pattern-background-mobile.svg" ;
}