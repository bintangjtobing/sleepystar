//LOADING ANIMATIONS
window.addEventListener("load", function () {
    const loader = document.querySelector(".preloader");
    loader.classList.add('hidden');
});

// CLOSE BUTTON PREV NEXT BUTTON FOR LIGHTBOX ////////////////////////////////
const lightBox = document.querySelector('.lightbox');
const btnClose = document.querySelector('.lightbox-close');
btnClose.onclick = function (event) {
    event.preventDefault();
    lightBox.classList.add('hidden');
}

//VIEW YOUR ALBUM ITEM ON LIGHTBOX //#endregion
const albumItem = document.querySelectorAll('.album-item');
for (let i = 0; i < albumItem.length; i++) {
    let item = albumItem[i];
    item.onclick = function (event) {
        //SHOW LIGHTBOX///////
        lightBox.classList.remove('hidden');

        //REPLACE CURRENT IMAGES
        //GET CURRENT ITEM
        const currentImageClickedOn = event.target;
        const albumItemParent = currentImageClickedOn.parentElement;
        // console.log(currentImageClickedOn);
        // console.log(albumItemParent);

        // replace contents of lightbox image
        const lightboxImage = document.querySelector('.lightbox-image');
        lightboxImage.innerHTML = albumItemParent.innerHTML;
        // console.log(lightboxImage);
    }
}

//NEXT BUTTON FOR LIGHTBOX
const next = document.getElementById("lightbox-next")
const previous = document.getElementById("lightbox-prev")
let currentPictureIndex = undefined

function changeLightboxImage(index) {
    const imageWithinLightbox = document.getElementById("lightbox-image")
    imageWithinLightbox.src = albumItem[index].src
}
next.onclick = function (event) {
    event.preventDefault();
    if (currentPictureIndex == albumItem.length - 1) {
        currentPictureIndex = 0
    } else {
        currentPictureIndex += 1
    }
    changeLightboxImage(currentPictureIndex)
}

previous.onclick = function (event) {
    event.preventDefault();
    if (currentPictureIndex == 0) {
        currentPictureIndex = albumItem.length - 1
    } else {
        currentPictureIndex -= 1
    }
    changeLightboxImage(currentPictureIndex)
}