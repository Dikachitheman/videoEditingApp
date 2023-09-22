let end               = document.querySelector(".greyHandle.end");
let start             = document.querySelector(".greyHandle.start");
let green             = document.querySelector(".greenHandle");
let greyStart         = document.querySelector(".grey.start");
let greyEnd           = document.querySelector(".grey.end");
let tdStart           = document.querySelector(".tdStart");
let tdEnd             = document.querySelector(".tdEnd");
let tdStartx          = document.querySelector(".tdStart.x");
let tdEndx            = document.querySelector(".tdEnd.x");
let xx                = document.querySelector(".greyHandlexx");
let xy                = document.querySelector(".greyHandlexy");
let greyxxObj         = document.querySelector(".greyxx");
let greyxyObj         = document.querySelector(".greyxy");
let greenHandlexObj   = document.querySelector(".greenHandlex");
let greenSlider       = document.querySelector(".greenSlider.x");
let timeDisplay       = document.querySelector(".timeDisplay.x");
let greenSliderRelative    = document.querySelector(".greenSliderRelativex");
let greenPartx        = document.querySelector(".greenPartx");



const layerUl = document.querySelector('.layer-list-container .layer-list');
  
layerUl.addEventListener("click", function (e) {
    console.log('clicked');
    const content = e.target.textContent.trim();

    if (content.substring(content.length - 4) === '.mp4')
    {
        video.src = `./videos/${content}`;
        video.style.display = 'grid';
        image.style.display = 'none';
    }

    if (content.substring(content.length - 4) === '.png')
    {
        video.src = `./videos/${content}`;
        video.style.display = 'none';
        image.style.display = 'grid';
    }

    console.log(e.target.textContent);
});
