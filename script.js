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

function uploadd()
{
    var input=document.getElementById("upload");
    const responseDiv = document.getElementById('response');

    var freader=new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload=function() { 
        document.getElementById("video").src=freader.result;
    }
    
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3000/uploadd");

    let data = new FormData();
    data.append('video', input.files[0]);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                responseDiv.textContent = 'Video uploaded successfully.';
            } else {
                responseDiv.textContent = 'Upload failed.';
            }
        }
    };

    xhr.send(data);
}

function move () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", " http://localhost:3000/move");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            console.log("trim"); 
        }
    }

    xhr.send();
}

function trim() {

    let textJSON = {tdStart : tdStart.textContent, tdEnd : tdEnd.textContent};
    textJSON = JSON.stringify(textJSON);

    vidEl = document.querySelector(".videoElement video");
    // vidEl.src = "./yuii.mp4";

    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/trim");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            vidEl.src = "./yuii.mp4";
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(textJSON);

    console.log(textJSON);

}

function newLi() {
    const tr = document.createElement('li');
    const trConnect = 
    `
        <div class="greenSlider x" onclick="openGreenSLider()">
            <div>
                <div class="timeDisplay x">
                    <div class="tdStart x">0000</div>
                    <div></div>
                    <div class="tdEnd x">0000</div>
                </div>
                <div class="greenSliderRelativex">
                    <div class="greyxx"></div>
                    <div class="greenHandlex">
                        <div class="greyHandlexx"></div>
                        <div class="greenPartx"></div>
                        <div class="greyHandlexy"></div>
                    </div>
                    <div class="greyxy"></div>
                </div>
            </div>
        </div>
    `
    ;
    tr.innerHTML = trConnect;
    document.querySelector('.scrollEffect ul').appendChild(tr);
    console.log("ttt");
}

let greenBool = 'notclicked';

// function openGreenSLider() {

//     if (greenBool == 'clicked')
//     {
//         greenSlider.style.height = 4 + "rem";
//         greyxxObj.style.height = 1 + "rem";
//         greyxyObj.style.height = 1 + "rem";
//         xx.style.height = 2 + "rem";
//         xy.style.height = 2 + "rem";
//         timeDisplay.style.display = "none";
//         greyxxObj.style.marginTop = 0.4 + "rem";
//         greyxyObj.style.marginTop = 0.4   + "rem";
//         xx.style.marginTop = 0.6 + "rem";
//         xy.style.marginTop = 0.6 + "rem";
//         greenPartx.style.height = 1.6 + "rem";
//         greenPartx.style.marginTop = 0.8 + "rem";

//         greenBool = 'notclicked';
//     }
//     else if (greenBool == 'notclicked') {
//         greenSlider.style.height = 7 + "rem";
//         greyxxObj.style.height = 2 + "rem";
//         greyxyObj.style.height = 2 + "rem";
//         xx.style.height = 4 + "rem";
//         xy.style.height = 4 + "rem";
//         timeDisplay.style.display = "grid";
//         greyxxObj.style.marginTop = 1 + "rem";
//         greyxyObj.style.marginTop = 1 + "rem";
//         xx.style.marginTop = 0 + "rem";
//         xy.style.marginTop = 0 + "rem";
//         greenPartx.style.height = 3.2 + "rem";
//         greenPartx.style.marginTop = 0.4 + "rem";

//         greenBool = 'clicked';
//     }
//     console.log("jj");
// }

end.addEventListener("mousedown", mousedownEnd);
// console.log(green.getBoundingClientRect().width);

function mousedownEnd(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    
    let prevX = e.clientX;
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
    
        const greyxx = greyStart.getBoundingClientRect(),
        greyxy = greyEnd.getBoundingClientRect(),
        greenHandle = green.getBoundingClientRect();

        greyEnd.style.width = greyxy.width + newX + "px";
        green.style.width = greenHandle.width - newX + "px";
        
        prevX = e.clientX;

        const ex = greyxx.width + greenHandle.width;
        const ey = greyxx.width + greenHandle.width + greyxy.width;

        let ez = (ex / ey) * 120;
        ez = parseInt(ez);


        console.log(ez + "s");

        tdEnd.textContent = ez;
    }
    
    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
};

start.addEventListener("mousedown", mousedownStart);

function mousedownStart(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    
    let prevX = e.clientX;
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
    
        const greyxx = greyStart.getBoundingClientRect(),
        greyxy = greyEnd.getBoundingClientRect(),
        greenHandle = green.getBoundingClientRect();

        greyStart.style.width = greyxx.width - newX + "px";
        green.style.width = greenHandle.width + newX + "px";
        
        prevX = e.clientX;

        const ex = greyxx.width;
        const ey = greyxx.width + greenHandle.width + greyxy.width;

        let ez = (ex / ey) * 120;
        ez = parseInt(ez);


        console.log(ez + "s");

        tdStart.textContent = ez;
    }
    
    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
};


xx.addEventListener("mousedown", mousedownStartx);
xy.addEventListener("mousedown", mousedownStarty);

function mousedownStartx(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    
    let prevX = e.clientX;
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
    
        const greyxx = greyxxObj.getBoundingClientRect(),
        greyxy = greyxyObj.getBoundingClientRect(),
        greenHandle = greenHandlexObj.getBoundingClientRect();

        greyxxObj.style.width = greyxx.width - newX + "px";
        greenHandlexObj.style.width = greenHandle.width + newX + "px";
        
        prevX = e.clientX;

        const ex = greyxx.width;
        const ey = greyxx.width + greenHandle.width + greyxy.width;

        let ez = (ex / ey) * 120;
        ez = parseInt(ez);


        console.log(ez + "s");
        tdStartx.textContent = ez;

    }
    
    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
};

function mousedownStarty(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    
    let prevX = e.clientX;
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
    
        const greyxy = greyxyObj.getBoundingClientRect(),
        greyxx = greyxxObj.getBoundingClientRect(),
        greenHandle = greenHandlexObj.getBoundingClientRect();

        greyxyObj.style.width = greyxy.width + newX + "px";
        greenHandlexObj.style.width = greenHandle.width - newX + "px";
        
        prevX = e.clientX;

        const ex = greyxx.width + greenHandle.width;
        const ey = greyxx.width + greenHandle.width + greyxy.width;

        let ez = (ex / ey) * 120;
        ez = parseInt(ez);

        // console.log("ex " + ex);
        // console.log("ey " + ey);
        // console.log("ez " + ez);
        console.log(ez + "s");
        tdEndx.textContent = ez;

    }
    
    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
};

// scrollEffect = document.querySelector(".scrollEffect");

// scrollEffect.addEventListener("scroll", scrollish);
// getgrey = grey.getBoundingClientRect();
// getgreen = green.getBoundingClientRect();
// const diff = (getgrey.top - getgreen.top);

// function scrollish() {
//     let getgreen_x = green.getBoundingClientRect();

//     green.style.top = (getgrey.top - diff) + "px";
//     console.log(getgreen_x.top);

//     getgreen_x = green.getBoundingClientRect();
// }

// green.addEventListener("mousedown", mousedownStart);

// function mousedownStart(e) {
//     window.addEventListener("mousemove", mousemove);
//     window.addEventListener("mouseup", mouseup);
    
//     let prevX = e.clientX;
    
//     function mousemove(e) {
//         let newX = prevX - e.clientX;
    
//         const rect = green.getBoundingClientRect();
    
//         green.style.left = rect.left - newX + "px";
//         green.style.width = rect.width - newX + "px";
    
//         prevX = e.clientX;
//     }
    
//     function mouseup() {
//         window.removeEventListener("mousemove", mousemove);
//         window.removeEventListener("mouseup", mouseup);
//     }
// };
    
// const effect = document.querySelector("ul");
// effect.addEventListener("mousedown", mousedownScroll);

// function mousedownScroll(e) {
//     window.addEventListener("mousemove", mousemove);
//     window.addEventListener("mouseup", mouseup);
    
//     // let prevY = e.clientY;
//     const rect = green.getBoundingClientRect();
//     tri = grey.getBoundingClientRect();
//     function mousemove() {
    
//         const rect = green.getBoundingClientRect(),
//             tri = grey.getBoundingClientRect();

//         // green.style.top = tri.top + (tri.top - rect.top) + "px";
//         console.log(tri.top);
//         console.log(rect.top);
//     }
    
//     function mouseup() {
//         window.removeEventListener("mousemove", mousemove);
//         window.removeEventListener("mouseup", mouseup);
//     }

// };

const yellowItems = [
    {
        itemName: "default-dude",
        itemType:  "mp4",
    },
    {
        itemName: "dancing",
        itemType:  "mp4",
    },
    {
        itemName: "aelogo",
        itemType:  "png",
    },
    {
        itemName: "asset-7",
        itemType:  "png",
    },
    {
        itemName: "xdrake",
        itemType:  "mp3",
    },
    {
        itemName: "xrand",
        itemType:  "mp3",
    },
    {
        itemName: "three-boats",
        itemType:  "mp4",
    },
    {
        itemName: "sunset",
        itemType:  "mp4",
    },
    {
        itemName: "asset-1",
        itemType:  "png",
    },
    {
        itemName: "orange-boat",
        itemType:  "mp4",
    },
    {
        itemName: "oh-five",
        itemType:  "mp4",
    },
    {
        itemName: "asset-2",
        itemType:  "png",
    },
    {
        itemName: "two-man-standing",
        itemType:  "mp4",
    },
    {
        itemName: "grey-dusk",
        itemType:  "mp4",
    },
    {
        itemName: "lux-glass",
        itemType:  "mp4",
    },
    {
        itemName: "imgtovid",
        itemType:  "mp4",
    },
    {
        itemName: "trim-vid",
        itemType:  "mp4",
    },
    {
        itemName: "xover",
        itemType:  "mp4",
    },
    {
        itemName: "xtrim",
        itemType:  "mp4",
    },
    {
        itemName: "xtovid",
        itemType:  "mp4",
    },
    {
        itemName: "over-vid",
        itemType:  "mp4",
    },
    {
        itemName: "xconcat",
        itemType:  "mp4",
    },
]

const ulYellow = document.querySelector('.yellow .ul-li .ul-container ul');
const ulLayer = document.querySelector('.layers .layer-list-container ul');

function renderYellow()
{
    yellowItems.forEach(element => {
        const li = document.createElement('li');
    
        const liConnect = 
        `
                <div>${element.itemName}/<span>${element.itemType}</span></div>
        `;
    
        li.innerHTML = liConnect;

        ulYellow.appendChild(li);
    });
}
renderYellow();


function appendYellow(element)
{
    const li = document.createElement('li');
    let obj = "obj";

    const liConnect = 
    `
            <div>${element}/<span>${obj}</span></div>
    `;

    li.innerHTML = liConnect;

    ulYellow.appendChild(li);
}

function appendLayer(element)
{
    const li = document.createElement('li');
    let obj = "obj";

    const liConnect = 
    `
            <div>
            <div class="list-circle">
                <div></div>
            </div>
            <div class="list-item">
                ${element}
            </div>
        </div>
    `;

    li.innerHTML = liConnect;

    ulLayer.appendChild(li);
}

const video = document.querySelector('.videoElement video');
const yellowUl = document.querySelector('.yellow .ul-container');

yellowUl.addEventListener("click", function (e) {
    console.log('clicked');
      const content = e.target.textContent.trim().slice(0, -4);
      video.src = `./${content}.mp4`;
      console.log(e.target.textContent);
});

const layerUl = document.querySelector('.layer-list-container .layer-list');
  
layerUl.addEventListener("click", function (e) {
    console.log('clicked');
    const content = e.target.textContent.trim();
    video.src = `./${content}.mp4`;
    console.log(e.target.textContent);
});

let i;
i = 0;

function changeEl(d, id) {
    const trimName = document.getElementById(id);

    if (d === "l")
    {
        dic = yellowItems[i];
        trimName.value = dic.itemName;
        i--;
        console.log(i);
        console.log(yellowItems.length);
        if (i < 0)
        {
            i = yellowItems.length - 1;
        }
    }

    else if (d === "r")
    {
        dic = yellowItems[i];
        trimName.value = dic.itemName;
        i++;
        console.log(i);
        console.log(yellowItems.length);

        if (i === yellowItems.length)
        {
            i = 0;
        }
    }
}

const orangeButton = document.querySelectorAll('.left .orange button');

const orangeTabs = {
    trim: document.querySelector('.tab-display.trim'),
    audio: document.querySelector('.tab-display.audio'),
    convert: document.querySelector('.tab-display.convert'),
    overlay: document.querySelector('.tab-display.overlay'),
    concat: document.querySelector('.tab-display.concat'),
  };

function stuff(id) {
    console.log(id);

    if (orangeTabs[id]) {
        orangeTabs[id].classList.toggle(`tab-display-active-${id}`);
    }
    // orangeTab_convert.classList.toggle(`tab-display-active-${id}`);
};

orangeButton.forEach(el => { el.addEventListener('click', (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    id = id.substring(0, id.length - 2);

    stuff(id);

    el.classList.toggle(`orange-button-white`);

})});


const fileList = [];
let textJSON = {};

function saveTrim() {
    const trimName = document.getElementById("trim-name");
    const startName = document.getElementById("startName");
    const endName = document.getElementById("endName");
    const title = document.getElementById("trimTitle");

    console.log(trimName.value);

    fileList.pop();
    fileList.push(trimName.value);

    textJSON = {selectFile: fileList , startTime: startName.value, endTime: endName.value, title: title.value};
    textJSON = JSON.stringify(textJSON);

    let addDict = {itemName: title.value, itemType: "obj"};

    yellowItems.push(addDict);

    console.log(textJSON);

    const tr = document.createElement('li');
    const trConnect = 
    `
        <div>
            ${trimName.value}
        </div>
    `
    ;
    tr.innerHTML = trConnect;

    const ul = document.querySelector('.body-el-el .body-el-selected ul');
    ul.replaceChild(tr, ul.firstChild);
}



function exportTrim()
{
    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/saveTrim");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            console.log("sent");
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(textJSON);

    textJSON = JSON.parse(textJSON);
    console.log(textJSON.title);
    console.log(textJSON);

    appendYellow(textJSON.title);
    appendLayer(textJSON.title);
    textJSON = {};
}

let buttonMergeL = document.getElementById('2');
let buttonMergeR = document.getElementById('21');

let buttonAllignL = document.getElementById('1');
let buttonAllignR = document.getElementById('11');

let idConcat = ""

const changeidBottom = () => {
    idConcat = "bottom"
}

const changeidTop = () => {
    idConcat = "top"
}

buttonMergeL.addEventListener("click", changeidBottom);
buttonMergeR.addEventListener("click", changeidBottom);

buttonAllignL.addEventListener("click", changeidTop);
buttonAllignR.addEventListener("click", changeidTop);

const fileListConcatAllign = [];
const fileListConcatMerge = [];
let concatJSON = {};

function saveConcat() {
    const title = document.getElementById("concat-name");
    
    if (idConcat === "bottom")
    {
        const trimName = document.getElementById("concat-file-merge");
        console.log(trimName.value);

        fileListConcatMerge.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        let ul = document.querySelector('.body-el-el .body-el-selected.concat-merge ul');
        ul.appendChild(tr);
    }

    else if (idConcat === "top")
    {
        const trimName = document.getElementById("concat-file-allign");
        console.log(trimName.value);

        fileListConcatAllign.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        let ul = document.querySelector('.body-el-el .body-el-selected.concat-allign ul');
        ul.appendChild(tr);
    }
    
    concatJSON = {allign: fileListConcatAllign, merge: fileListConcatMerge, top: "", bottom: "", left: "", rigth: "", width: "", heigth: "", title: title.value};
    concatJSON = JSON.stringify(concatJSON);

    let addDict = {itemName: title.value, itemType: "obj"};

    yellowItems.push(addDict);

    console.log(concatJSON);

}

const concatul = document.querySelector('.body-el-el .body-el-selected.concat-merge ul');

function removeLi() 
{
    concatJSON = JSON.parse(concatJSON);
    concatJSON.merge;
    // concatJSON.merge.pop();
    fileListConcatMerge.pop();
    concatul.removeChild(concatul.lastChild);
    console.log(concatJSON.merge);
    concatJSON = JSON.stringify(concatJSON);
}

function exportConcat()
{
    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/saveConcat");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            console.log("sent");
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(concatJSON);

    console.log(concatJSON);

    concatJSON = JSON.parse(concatJSON);
    appendYellow(concatJSON.title);
    appendLayer(concatJSON.title);

    convertJSON = {};
}

let buttonZeroL = document.getElementById('3');
let buttonZeroR = document.getElementById('31');

let buttonOneL = document.getElementById('4');
let buttonOneR = document.getElementById('41');

let idOverlay = ""

const changeidOne = () => {
    idOverlay = "bottom"
}

const changeidZero = () => {
    idOverlay = "top"
}

buttonOneL.addEventListener("click", changeidOne);
buttonOneR.addEventListener("click", changeidOne);

buttonZeroL.addEventListener("click", changeidZero);
buttonZeroR.addEventListener("click", changeidZero);

const fileListOverlayZero = [];
const fileListOverlayOne = [];
let overlayJSON = {};

function saveOverlay() {
    const title = document.getElementById("overlayInput");

    if (idOverlay === "bottom")
    {
        const trimName = document.getElementById("overlay-file-one");
        
        console.log(trimName.value);

        fileListOverlayOne.pop();
        fileListOverlayOne.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        const ul = document.querySelector('.body-el-el .body-el-selected.overlay-one ul')
       ul.replaceChild(tr, ul.firstChild);
    }

    else if (idOverlay === "top")
    {
        const trimName = document.getElementById("overlay-file-zero");
        console.log(trimName.value);

        fileListOverlayZero.pop();
        fileListOverlayZero.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        const ul = document.querySelector('.body-el-el .body-el-selected.overlay-zero ul');
        ul.replaceChild(tr, ul.firstChild);
    }

    const otop = document.getElementById("topOverlay");
    const oleft = document.getElementById("leftOverlay");
    const owidth = document.getElementById("widthOverlay");
    const oheight = document.getElementById('heightOverlay');

    
    overlayJSON = {zero: fileListOverlayZero, one: fileListOverlayOne, top: otop.value, left: oleft.value, width: owidth.value, height: oheight.value, title: title.value};
    overlayJSON = JSON.stringify(overlayJSON);

    let addDict = {itemName: title.value, itemType: "obj"};

    yellowItems.push(addDict);

    console.log(overlayJSON);

}

function exportOverlay()
{
    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/saveOverlay");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            console.log("sent");
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(overlayJSON);

    console.log(overlayJSON);
    
    overlayJSON = JSON.parse(overlayJSON);
    appendYellow(overlayJSON.title);
    appendLayer(overlayJSON.title);
    overlayJSON = {};
}



let buttonConvertL = document.getElementById('3');
let buttonConvertR = document.getElementById('31');


const fileListConvert = [];
let convertJSON = {};

function saveConvert() {
    
    const trimName = document.getElementById("convertmp-file");
    const duration = document.getElementById("convertDuration");
    const title = document.getElementById("convertMp");

    console.log(trimName.value);

    fileListConvert.pop();
    fileListConvert.push(trimName.value);

    const tr = document.createElement('li');
    const trConnect = 
    `
        <div>
            ${trimName.value}
        </div>
    `
    ;

    tr.innerHTML = trConnect;
    
    const ul = document.querySelector('.body-el-el .body-el-selected.convert ul');
    ul.replaceChild(tr, ul.firstChild);
    
    convertJSON = {selectFile: fileListConvert, duration: duration.value, title: title.value};
    convertJSON = JSON.stringify(convertJSON);

    let addDict = {itemName: title.value, itemType: "obj"};

    yellowItems.push(addDict);

    console.log(convertJSON);

}

function exportConvert()
{
    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/saveConvert");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            console.log("sent");
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(convertJSON);

    console.log(convertJSON);

    convertJSON = JSON.parse(convertJSON);
    appendYellow(convertJSON.title);
    appendLayer(convertJSON.title);

    convertJSON = {};
}

let buttonFirstL = document.getElementById('6');
let buttonFirstR = document.getElementById('61');

let buttonSecondL = document.getElementById('7');
let buttonSecondR = document.getElementById('71');

let buttonThirdL = document.getElementById('8');
let buttonThirdR = document.getElementById('81');

let idAudio = ""

const changeidThird = () => {
    idAudio = "bottom"
}

const changeidSecond = () => {
    idAudio = "middle"
}

const changeidFirst = () => {
    idAudio = "top"
}

buttonFirstL.addEventListener("click", changeidFirst);
buttonFirstR.addEventListener("click", changeidFirst);

buttonSecondL.addEventListener("click", changeidSecond);
buttonSecondR.addEventListener("click", changeidSecond);

buttonThirdL.addEventListener("click", changeidThird);
buttonThirdR.addEventListener("click", changeidThird);

const fileListFirst = [];
const fileListSecond = [];
const fileListThird = [];
const firstExtList = [];
const secondExtList = [];
const thirdExtList = [];
let audioJSON = {};

function saveAudio() {
    const title = document.getElementById("audioInput");

    if (idAudio === "bottom")
    {
        const trimName = document.getElementById("select-video-file");
        console.log(trimName.value);

        fileListThird.pop();
        fileListThird.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        const ul = document.querySelector('.body-el-el .body-el-selected.third ul');
        ul.replaceChild(tr, ul.firstChild);    }

    else if (idAudio === "middle")
    {
        const trimName = document.getElementById("select-audio-file");
        console.log(trimName.value);

        fileListSecond.pop();
        fileListSecond.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        const ul = document.querySelector('.body-el-el .body-el-selected.second ul');
        ul.replaceChild(tr, ul.firstChild);
    }

    else if (idAudio === "top")
    {
        const trimName = document.getElementById("remove-audio-file");
        console.log(trimName.value);

        fileListFirst.pop();
        fileListFirst.push(trimName.value);

        const tr = document.createElement('li');
        const trConnect = 
        `
            <div>
                ${trimName.value}
            </div>
        `
        ;

        tr.innerHTML = trConnect;
        
        const ul = document.querySelector('.body-el-el .body-el-selected.first ul');
        ul.replaceChild(tr, ul.firstChild);
    }
    
    audioJSON = {first: fileListFirst, firstExt: firstExtList, second: fileListSecond, secondExt: secondExtList, third: fileListThird, thirdExt: thirdExtList, title: title.value};
    audioJSON = JSON.stringify(audioJSON);

    let addDict = {itemName: title.value, itemType: "obj"};

    yellowItems.push(addDict);

    console.log(audioJSON);

}

function exportAudio()
{
    let xhr = new XMLHttpRequest();

    xhr.open("POST", " http://localhost:3000/addAudio");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200){
            console.log("sent");
        }
    }

    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.send(audioJSON);

    console.log(audioJSON);
    // console.log(audioJSON(third[0]));

    audioJSON = JSON.parse(audioJSON);
    appendYellow(audioJSON.title);
    appendLayer(audioJSON.title);
    
    audioJSON = {};
}