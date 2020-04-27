
'use strict';
function openprop(evt, propname) {
    
    //declare variable
    var i, tabcontent, tablinks;
    
    //Get all elements with class="tabcontent" and hide them
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    
    //tablinks = document.getElementsByClassName ("tablinks");
    //for(i=0; i<tablinks.length; i++) {
    //    tablinks[i].className = tablinks[i].className.replace ("active","");
    //}
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(propname).style.display = "block";
    //evt.currentTarget.className += "active";
}

var slideindex = 1;

function showslide(n) {
    
    var i, slides, nav;
    slides = document.getElementsByClassName("myslides");
//    nav = document.getElementsByClassName("navigator-link");
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none"; }

//        nav[i].className = nav[i].className.replace("active","");
    slides[n - 1].style.display = "block";
//    nav[n-1].className += "active";
    
    
}

var wslideindex = 0;



function slideshow() {
    
    var j, wslides;
    wslides = document.getElementsByClassName("work-slides");
    for (j = 0; j < wslides.length; j++) {wslides[j].style.display = 'none'; }
    wslideindex++;
    if (wslideindex > wslides.length) {wslideindex = 1; }
    wslides[wslideindex - 1].style.display = 'block';
    setTimeout(slideshow(), 500);
}


slideshow();

function openmenu() {
    
    var cond;
    cond = document.getElementsByClassName("small-nav").style.display;
    if (cond = "none") {
        document.getElementsByClassName("small-nav").style.display = "flex" ;
    }
    else
    {
        document.getElementsByClassName("small-nav").style.display = "none" ;
    }
}


