function contactMe() {
    alert("Thanks for contacting me...!");
}

function about(){
    document.getElementById("about").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
  
function skills(){
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function education(){
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

function contact(){
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

