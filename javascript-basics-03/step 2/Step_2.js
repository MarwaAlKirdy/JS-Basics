document.querySelector("#hide").addEventListener("click", ()=>anchors("hide"));

document.querySelector("#show").addEventListener("click",()=> anchors("show"));


function anchors (id) {
    if(id == "show") {
        document.querySelector("#texte").style.display = "block";
    }
    else if(id == "hide"){
        document.querySelector("#texte").style.display = "none";
    }
}