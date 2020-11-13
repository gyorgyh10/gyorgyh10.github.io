function osszeadas(e, m) {
    let elso = document.querySelector("." + e);
    let elsoSzam = Math.floor(Math.random() * 10)+ 1 ;
    elso.innerHTML = elsoSzam;
    let masodik = document.querySelector("." + m);
    let masodikSzam = Math.floor(Math.random() * 10) + 1;
    masodik.innerHTML = "+ " + masodikSzam;
    return elsoSzam + masodikSzam;
}

var osszeg1 = osszeadas("elso1", "masodik1");
var osszeg2 = osszeadas("elso2", "masodik2");
var osszeg3 = osszeadas("elso3", "masodik3");
var osszeg4 = osszeadas("elso4", "masodik4");
var osszeg5 = osszeadas("elso5", "masodik5");

function ellenorzes(o, ossz) {
    let osszeg = document.querySelector("." + o);
    if (osszeg.value) {
        osszeg.style.border = "none";
        if (parseInt(osszeg.value) == ossz) {
            osszeg.style.color = "green";
            return 1
        }
        else {
            osszeg.style.color = "red";
            return 0
        }
    }
    else {
        return 100;
    }

}
audio = new Audio("pics/Dance.mp3" ) ;

function megoldas() {
    let eredmeny = ellenorzes("osszeg1", osszeg1) + ellenorzes("osszeg2", osszeg2) + ellenorzes("osszeg3", osszeg3) + ellenorzes("osszeg4", osszeg4) + ellenorzes("osszeg5", osszeg5);
    console.log(eredmeny);
    
    if (eredmeny==5) {
        document.querySelector(".kep").src="pics/like.gif";
        audio.play();
    }
    if (eredmeny==4) {
        document.querySelector(".kep").src="pics/.jpg"
    }
    if (eredmeny==3) {
        document.querySelector(".kep").src="pics/.jpg"
    }
    if (eredmeny==2) {
        document.querySelector(".kep").src="pics/G2.gif"
    }
    if (eredmeny==1) {
        document.querySelector(".kep").src="pics/G1.gif"
    }
    if (eredmeny>5) {
        document.querySelector(".kep").src="pics/pirosLap.gif"
    }
    
}