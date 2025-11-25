// Display the QR code image
const qrContainer = document.querySelector("#qr");
const qrImage = document.createElement("img");
qrImage.src = "Photo/kishor0513.png";
qrImage.alt = "QR Code - Scan for Surprise";
qrImage.style.width = "250px";
qrImage.style.height = "250px";
qrImage.style.border = "2px solid #000";
qrImage.style.borderRadius = "8px";

qrContainer.appendChild(qrImage);
