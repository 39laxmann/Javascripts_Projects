
let imgBox = document.getElementById("imgBox");
let QrImage = document.getElementById("QrImage");
let Qrtext = document.getElementById("Qrtext");


function generateQr() {
    if (Qrtext.value.length > 0) {

        QrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.value;
        imgBox.classList.add("show-img");
    }
    else {
        Qrtext.classList.add("error");
        setTimeout(() => { Qrtext.classList.remove("error") }, 1000)
    }


}