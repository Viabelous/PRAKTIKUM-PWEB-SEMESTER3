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
    document.body.classList.toggle("dark-mode");

    if (filename == "DarkModeButton.png"){
        document.getElementById('modeimage').src = "LightModeButton.png";
    } 
    else {
        document.getElementById('modeimage').src = "DarkModeButton.png";
    }
}


function tidakBukaLowongan(){
    alert(" Sedang tidak membuka lowongan");
}


function bannerHotel(){
    var x = document.getElementById("namaHotel").innerHTML;
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



function appear(cboxid, formid){
    var form = document.getElementById(cboxid);
    var x = document.getElementById(formid);

    if (form.checked == true) {
        x.style.display = "table-row";
      } else {
        x.style.display = "none";
      }
}
