//vars
var underworld = document.getElementsByClassName("underworld").length;
var mipedian = document.getElementsByClassName("mipedian").length;
var danian = document.getElementsByClassName("danian").length;
var overworld = document.getElementsByClassName("overworld").length;
var countUnderworld = -1;
var countMipe = -1;
var countDanian = -1;
var countOverworld = -1;

//functions
function mipedianSRC() {
    console.log(countMipe);
    return x = document.getElementsByClassName("mipedian")[countMipe].src;
}

function underworldSRC() {
    console.log(countUnderworld);
    return x = document.getElementsByClassName("underworld")[countUnderworld].src;
}

function danianSRC() {
    console.log(countDanian);
    return x = document.getElementsByClassName("danian")[countDanian].src;
}
function overworldSRC() {
    console.log(countOverworld);
    return x = document.getElementsByClassName("overworld")[countOverworld].src;
}

//danian
D = 0
function nextDanian() {
    M = -1;
    countMipe = -1;
    U = -1;
    countUnderworld = -1;
    O = -1;
    countOverworld = -1;

    countDanian++;
    if (countDanian >= danian) {
        countDanian = 0;
    }
    if (D <= 0) {
        D++
        $(".carousel").carousel(12)
    }
}
function prevDanian() {
    M = -1;
    countMipe = -1;
    U = -1;
    countUnderworld = -1;
    O = -1;
    countOverworld = -1;

    countDanian--
    if (countDanian < 0) {
        countDanian = danian - 1;
    }
    if (D <= 0) {
        D++;
        $(".carousel").carousel(15)
    }
}

//overworld
O = 0;
function nextOverworld() {
    M = -1;
    countMipe = -1;
    U = -1;
    countUnderworld = -1;
    D = -1;
    countDanian = -1;

    countOverworld++
    if (countOverworld >= overworld) {
        countOverworld = 0;
    }
    if (O <= 0) {
        O++;
        $('.carousel').carousel(8);
    }
}

function prevOverworld() {
    M = -1;
    countMipe = -1;
    U = -1;
    countUnderworld = -1;
    D = -1;
    countDanian = -1;

    countOverworld--
    if (countOverworld < 0) {
        countOverworld = overworld - 1;
    }
    if (O <= 0) {
        O++;
        $('.carousel').carousel(11);
    }
}

//Mipedians

var M = 0;
function nextMipe() {
    O = -1;
    countOverworld = -1;
    U = -1;
    countUnderworld = -1;
    D = -1;
    countDanian = -1;


    countMipe++
    if (countMipe >= mipedian) {
        countMipe = m;
    }
    if (M <= 0) {
        M++;
        $('.carousel').carousel(4);
    }
}
function prevMipe() {
    O = -1;
    countOverworld = -1;
    U = -1;
    countUnderworld = -1;
    D = -1;
    countDanian = -1;

    countMipe--
    if (countMipe < 0) {
        countMipe = mipedian - 1;
    }
    if (M <= 0) {
        M++;
        $('.carousel').carousel(7);
    }
}
//Underworld
U = 0;

function nextUnderworld() {
    O = -1;
    countOverworld = -1;
    D = -1;
    countDanian = -1;
    M = -1;
    countMipe = -1;

    countUnderworld++;
    if (countUnderworld >= underworld) {
        countUnderworld = 0
    }
    if (U <= 0) {
        U++;
        $('.carousel').carousel(0);
    }

}
function prevUnderworld() {
    O = -1;
    countOverworld = -1;
    D = -1;
    countDanian = -1;
    M = -1;
    countMipe = -1;

    countUnderworld--;
    if (countUnderworld < 0) {
        countUnderworld = underworld - 1;
    }
    if (U <= 0) {
        U++;
        $('.carousel').carousel(3);
    }

}
function Card1() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card1.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card1.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card1.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card1.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}
function Card2() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card2.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card2.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card2.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card2.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}

function Card3() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card3.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card3.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card3.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card3.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}

function Card4() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card4.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card4.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card4.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card4.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}

function Card5() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card5.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card5.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card5.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card5.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}

function Card6() {
    if (countUnderworld > countMipe && countUnderworld > countOverworld && countUnderworld > countDanian) {
        card6.src = underworldSRC();

    } else if (countMipe > countUnderworld && countMipe > countDanian && countMipe > countOverworld) {
        card6.src = mipedianSRC();

    } else if (countDanian > countMipe && countDanian > countOverworld && countDanian > countUnderworld) {
        card6.src = danianSRC();

    } else if (countOverworld > countUnderworld && countOverworld > countDanian && countOverworld > countMipe) {
        card6.src = overworldSRC();

    } else {
        alert("Erro!Choose one card!")
    }
}

//listerns
clickTop1 = document.getElementsByClassName("button1")[0];
clickBot1 = document.getElementsByClassName("button2")[0];
clickTop2 = document.getElementsByClassName("button1")[1];
clickBot2 = document.getElementsByClassName("button2")[1];
clickTop3 = document.getElementsByClassName("button1")[2];
clickBot3 = document.getElementsByClassName("button2")[2];
clickTop4 = document.getElementsByClassName("button1")[3];
clickBot4 = document.getElementsByClassName("button2")[3];
card1 = document.getElementsByClassName("card1")[0];
card2 = document.getElementsByClassName("card2")[0];
card3 = document.getElementsByClassName("card3")[0];
card4 = document.getElementsByClassName("card4")[0];
card5 = document.getElementsByClassName("card5")[0];
card6 = document.getElementsByClassName("card6")[0];


card1.addEventListener("click", Card1)
card2.addEventListener("click", Card2)
card3.addEventListener("click", Card3)
card4.addEventListener("click", Card4)
card5.addEventListener("click", Card5)
card6.addEventListener("click", Card6)

clickTop1.addEventListener("click", nextUnderworld)
clickBot1.addEventListener("click", prevUnderworld)
clickTop2.addEventListener("click", nextDanian)
clickBot2.addEventListener("click", prevDanian)
clickTop3.addEventListener("click", nextOverworld)
clickBot3.addEventListener("click", prevOverworld)
clickTop4.addEventListener("click", nextMipe)
clickBot4.addEventListener("click", prevMipe)
