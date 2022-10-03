document.addEventListener("mouseover", stars);
document.addEventListener("mouseout", unstars);

function stars() {
    document.getElementById("icon").src = "Clara Stella Icon-Big.png"
}

function unstars() {
    document.getElementById("icon").src = "Clara Stella Icon.png"
}

function changeMode(){
    var fullPath = document.getElementById("modeimage").src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');

    if (filename == "DarkModeButton.png"){
        darkMode();
    } 
    else {
        lightMode();
    }
}


function darkMode(){
    document.getElementById('modeimage').src = "LightModeButton.png";

    document.body.style.backgroundColor = "black";

    var atas = document.getElementById("namaHotel");
    atas.style.backgroundColor = "black";
    atas.style.color = "lightgrey";

    var akhir = document.getElementById("footerid");
    akhir.style.backgroundColor = "black";
    akhir.style.color = "#7FFFD4";

    document.getElementById("icon").style.backgroundColor = "black";
    
    var ContentTable = document.getElementsByClassName("Content");
    for(var i = 0; i < ContentTable.length; i++) {
            ContentTable[i].style.backgroundColor = "lightgrey";
    }

    var bod = document.getElementsByClassName("contplace");
    for(var i = 0; i < bod.length; i++) {

        var bod2 = bod[i].getElementsByTagName("td");
            for(var j = 0; j < bod2.length; j++){
            bod2[j].style.backgroundColor = "lightgrey";

            var bod3a = bod2[j].getElementsByTagName("p");
            for(var k = 0; k < bod3a.length; k++){
            bod3a[k].style.backgroundColor = "lightgrey";
            bod3a[k].style.color = "black";
            }

            var bod3b = bod2[j].getElementsByTagName("img");
            for(var k = 0; k < bod3b.length; k++){
            bod3b[k].style.backgroundColor = "lightgrey";
            }
        }
    }

    document.getElementById("header").style.backgroundColor = "black";

    var awal = document.getElementById("header").getElementsByTagName("td");
    for(var i = 0; i < awal.length; i++) { 
        awal[i].style.backgroundColor = "black";
    }
}


function lightMode(){
    document.getElementById('modeimage').src = "DarkModeButton.png"

    document.body.style.backgroundColor = "peachpuff";

    var atas = document.getElementsByClassName("upper");
    for(var i = 0; i < atas.length; i++) { 
        atas[i].style.backgroundColor = "darkcyan";
        atas[i].style.color = "white";
    }

    var akhir = document.getElementById("footerid");
    akhir.style.backgroundColor = "peachpuff";
    akhir.style.color = "black";

    document.getElementById("icon").style.backgroundColor = "darkcyan";
    
    var ContentTable = document.getElementsByClassName("Content");
    for(var i = 0; i < ContentTable.length; i++) {
            ContentTable[i].style.backgroundColor = "white";
    }

    var bod = document.getElementsByClassName("contplace");
    for(var i = 0; i < bod.length; i++) {

        var bod2 = bod[i].getElementsByTagName("td");
            for(var j = 0; j < bod2.length; j++){
            bod2[j].style.backgroundColor = "white";

            var bod3a = bod2[j].getElementsByTagName("p");
            for(var k = 0; k < bod3a.length; k++){
            bod3a[k].style.backgroundColor = "white";
            bod3a[k].style.color = "black";
            }

            var bod3b = bod2[j].getElementsByTagName("img");
            for(var k = 0; k < bod3b.length; k++){
            bod3b[k].style.backgroundColor = "white";
            }
        }
    }

    document.getElementById("header").style.backgroundColor = "darkcyan";

    var awal = document.getElementById("header").getElementsByTagName("td");
    for(var i = 0; i < awal.length; i++) { 
        awal[i].style.backgroundColor = "darkcyan";
    }
}


function tidakBukaLowongan(){
    alert(" Sedang tidak membuka lowongan");
}


function bannerHotel(){
    var x = document.getElementById("namaHotel").innerHTML
    if (x == "Hotel Clara Stella"){
        document.getElementById("namaHotel").innerHTML = ("La Clara Stella");
    } else if (x == "La Clara Stella"){
        document.getElementById("namaHotel").innerHTML = ("クララ ステラ イン");
        document.getElementById("namaHotel").style.fontSize = "43.5px";
    } else if (x == "クララ ステラ イン"){
        document.getElementById("namaHotel").innerHTML = ("클라라 스텔라의 숙소");
        document.getElementById("namaHotel").style.fontSize = "47.15px";
    }else {
        document.getElementById("namaHotel").innerHTML = ("Hotel Clara Stella");
        document.getElementById("namaHotel").style.fontSize = "50px";
    }
}
