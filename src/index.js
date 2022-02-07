const photos = document.querySelectorAll('img');

////////1
let bigsize = "300"; 
let smallsize = "150";

function changeSizeImage(photo) {
    if(photo.height == bigsize) photo.height = smallsize;
    else photo.height = bigsize;
}

// ////////2
// for(let photo of photos) {
//     photo.addEventListener('click', () => {
//         let width = Math.floor(photo.naturalWidth * 0.5),
//             height = Math.floor(photo.naturalHeight * 0.5);
//         photo.style.width = width;
//         photo.style.height = height;
//     })
// }

// ///////3
// for(let photo of photos) {
//     photo.addEventListener('click', () => {
//         photo.style.zoom = +photo.style.zoom * 2;
//     })
// };