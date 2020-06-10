function content(i){
    if(i == "kintore"){
        document.getElementById("kintore").style.display="block";
        document.getElementById("kendo").style.display="none";
        document.getElementById("game").style.display="none";
    }else if(i == "kendo"){
        document.getElementById("kintore").style.display="none";
        document.getElementById("kendo").style.display="block";
        document.getElementById("game").style.display="none";
    }else if(i == "game"){
        document.getElementById("kintore").style.display="none";
        document.getElementById("kendo").style.display="none";
        document.getElementById("game").style.display="block";
    }
}