function generateQRCode() {
    let qrText = document.getElementById("qrText").value.trim();
    let qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = ""; // Clear previous QR code

    if (qrText === "") {
        alert("Please enter text or a URL!");
        return;
    }

    // Ensure proper URL format
    if (!qrText.startsWith("http") && qrText.includes(".")) {
        qrText = "https://" + qrText;
    }

    let qr = new QRCode(qrCodeDiv, {
        text: encodeURIComponent(qrText),
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    document.getElementById("downloadBtn").style.display = "block";
}

// Function to download the QR code
function downloadQRCode() {
    let qrCodeCanvas = document.querySelector("#qrCode canvas");
    let qrImage = qrCodeCanvas.toDataURL("image/png");
    
    let downloadLink = document.createElement("a");
    downloadLink.href = qrImage;
    downloadLink.download = "QRCode.png";
    downloadLink.click();
}
