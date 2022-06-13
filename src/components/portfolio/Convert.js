function convert_image(image, i){
    const Port_img = document.getElementsByClassName("port_img");
    let userImage = new Image();
    userImage.src = image;
    let canvas = document.createElement("canvas");
    let context =  canvas.getContext("2d");
    userImage.onload = function () {
        canvas.width = userImage.width;
        canvas.height = userImage.height;
        context.drawImage(userImage, 0, 0);
        let wImageSrc = canvas.toDataURL("image/webp");
        Port_img[i].src = wImageSrc;
    };
}

export {convert_image}