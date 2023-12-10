// ==UserScript==
// @name        Cool Starblast Ship Editor
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description -
// @author      Basit
// @match       https://starblast.data.neuronality.com/shipeditor/index.html
// @grant       none
// @antifeature tracking
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';

    function updateColors(selectedHue) {
        document.documentElement.style.setProperty('--Hue', selectedHue);
        document.documentElement.style.setProperty('--Main-color', `hsl(${selectedHue}, 100%, 50%)`);
        document.documentElement.style.setProperty('--Light-color', `hsl(${selectedHue}, 100%, 80%)`);
        document.documentElement.style.setProperty('--Dark-color', `hsl(${selectedHue}, 100%, 4%)`);
        document.documentElement.style.setProperty('--sec-Main-color', `hsla(${selectedHue}, 100%, 50%, 0.5)`);
        document.documentElement.style.setProperty('--sec-Dark-color', `hsla(${selectedHue}, 100%, 12%, 0.5)`);
    }

    var hueAdjuster = document.createElement('input');
    hueAdjuster.type = 'range';
    hueAdjuster.min = '0';
    hueAdjuster.max = '360';

    var storedHue = localStorage.getItem('selectedHue');
    if (storedHue) {
        hueAdjuster.value = storedHue;
        updateColors(storedHue);
    } else {
        hueAdjuster.value = '0';
        updateColors('0');
    }

    hueAdjuster.style.display = 'none';
    hueAdjuster.style.position = 'absolute';
    hueAdjuster.style.top = '10px';
    hueAdjuster.style.left = '50%';
    hueAdjuster.style.transform = 'translateX(-50%)';
    hueAdjuster.addEventListener('input', function (event) {
        var selectedHue = event.target.value;
        localStorage.setItem('selectedHue', selectedHue);
        updateColors(selectedHue);
    });
    document.body.appendChild(hueAdjuster);

    var hueIndicator = document.createElement('span');
    hueIndicator.style.position = 'absolute';
    hueIndicator.style.top = '30px';
    hueIndicator.style.left = '50%';
    hueIndicator.style.fontFamily = 'Lato, sans-serif';
    hueIndicator.style.transform = 'translateX(-50%)';
    document.body.appendChild(hueIndicator);

    updateColors(hueAdjuster.value);

    var styleItem = document.createElement("style");
    styleItem.type = "text/css";
    styleItem.appendChild(document.createTextNode(`
body,
html {
    background: var(--Dark-color) !important;
    color: var(--Main-color) !important;
    user-select: none !important;
}

.header {
    text-align: left !important;
    user-select: none !important;
    color: var(--Main-color) !important;
    font-size: 1.3em !important;
    border-bottom: solid 2px var(--Light-color) !important;
    box-shadow: 0 0 30px var(--Main-color) !important;
}

.header div h {
    font-weight: bold !important;
}

.header a {
    font-family: 'Lato', sans-serif !important;
    border-radius: 10px !important;
    font-size: 0.7em !important;
    color: var(--Main-color) !important;
    background: transparent !important;
}

.header a:hover {
    text-decoration: underline !important;
}

.iconsbar,
.sbg,
.fa.fa-fw {
    color: var(--Main-color) !important;
}

.editor.ace_editor.ace-monokai.ace_dark {
    border-right: 1px solid var(--sec-Main-color);
}

*::-webkit-scrollbar-thumb {
    border-radius: 20px !important;
    box-shadow: none !important;
    background: var(--sec-Main-color) !important;
}

*::-webkit-scrollbar {
    width: 7px !important;
}

*::-webkit-scrollbar:horizontal {
    height: 7px !important;
}

*::-webkit-scrollbar-track {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: var(--Dark-color) !important;
}

.ace_layer.ace_gutter-layer.ace_folding-enabled {
    color: var(--Main-color) !important;
    background: var(--Dark-color) !important;
}

.centerpanel label,
.centerpanel a,
[data-tooltip]::before,
[data-tooltip]::after,
[data-tooltip] {
    background: var(--Dark-color) !important;
    color: var(--Main-color) !important;
    border-radius: 8px !important;
    transition: 0.5s !important;
}

[data-tooltip]::before,
[data-tooltip]::after {
    border: 1px solid var(--Main-color) !important;
}

[data-tooltip]:hover {
    background: var(--Main-color) !important;

    .sbg,
    .fa.fa-fw {
        color: var(--Dark-color) !important;
    }
}

a[style="background: grey"] {
    background: var(--Main-color) !important;

    .fa.fa-fw {
        color: var(--Dark-color) !important;
    }
}

select {
    font-family: Lato, Sans-Serif !important;
    font-size: 1em !important;
    padding: 3px 5px !important;
    color: var(--Main-color) !important;
    background: var(--Dark-color) !important;
    border: 1px solid var(--Main-color) !important;
    vertical-align: middle !important;
    outline: none !important;
    width: 110px !important;
    border-radius: 8px !important;
    box-sizing: border-box !important;
    margin-bottom: 3px !important;
}

*::placeholder {
    color: var(--sec-Main-color) !important;
}

#insiderenderpanel {
    cursor: grab;
}

.ace_content {
    background: var(--Dark-color) !important;
}

#disclaimer {
    background: var(--Dark-color) !important;
    border: 1px solid var(--Main-color) !important;
    border-radius: 12px !important;
    box-shadow: 0 0 10px var(--Main-color) !important;
    overflow: hidden !important;
}

.title {
    background: var(--Dark-color) !important;
    border-bottom: 3px solid var(--Main-color) !important;
}

#acceptDisclaimer {
    background: var(--Dark-color) !important;
    color: var(--Main-color) !important;
    border-radius: 10px !important;
    border: 1px solid var(--Main-color) !important;
    font-weight: 600 !important;
    transition: 0.5s !important;
}

#acceptDisclaimer:hover {
    transform: scale(1.1) !important;
    background: var(--Main-color) !important;
    color: var(--Dark-color) !important;
    transition: 0.5s !important;
}

.warning {
    background: var(--Dark-color) !important;
}

#hide-warning {
    border-radius: 8px !important;
    padding: 4px 14px !important;
    border-color: var(--Main-color) !important;
    color: var(--Main-color) !important;
    background: transparent !important;
    border: 1pt solid !important;
    font-size: 10pt !important;
    margin: 0 !important;
    float: right !important;
    margin-top: -2pt !important;
    transition: 0.5s !important;
}

#hide-warning:hover {
    background: var(--Main-color) !important;
    color: var(--Dark-color) !important;
    transform: scale(1.1) !important;
}

button {
    cursor: pointer !important;
}

.overlay {
    background: var(--sec-Dark-color) !important;
}

#shipLoader {
    background: var(--Dark-color) !important;
    border: 1px solid var(--Main-color) !important;
    border-radius: 12px !important;
    box-shadow: 0 0 10px var(--Main-color) !important;
    overflow: hidden !important;
}

#closeModal {
    background: transparent !important;
    color: #FF0000 !important;
    font-size: 1.2em !important;
    transition: 0.5s !important;
}

.shipgroup {
    background: var(--sec-Dark-color) !important;
    color: var(--Main-color) !important;
    border: none !important;
    border-radius: 8px !important;
    transition: 0.5s !important;
    overflow: hidden !important;
}

.shipgroup:hover {
    transform: scale(1.15) !important;
}

.shipgroup canvas {
    position: relative !important;
    top: 100px !important;
    right: 100px !important;
    transform: rotate(45deg) !important;
    transition: 0.5s !important;
}

.shipgroup.highlighted canvas,
.shipgroup:hover canvas {
    top: 0 !important;
    right: 0 !important;
}

.shipgroup div {
    position: relative !important;
    top: -28px !important;
    font-size: 1.4em !important;
    transition: 0.5s;
}

.shipgroup.highlighted div,
.shipgroup:hover div {
    top: 0px !important;

}

#shapecanvas {
    opacity: 0.75 !important;
    border-radius: 0 0 0 15px !important;
}

input[type="range"] {
    -webkit-appearance: none !important;
    appearance: none !important;
    background: transparent !important;
    border-radius: 10px !important;
    outline: none !important;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 200px !important;
    height: 5px !important;
    background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000) !important;
    border-radius: 5px !important;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    appearance: none !important;
    width: 10px !important;
    height: 20px !important;
    background: var(--Main-color) !important;
    cursor: pointer !important;
}

input[type="range"]:active::-webkit-slider-thumb,
input[type="range"]:focus::-webkit-slider-thumb,
input[type="range"]:hover::-webkit-slider-thumb {
    background: var(--Main-color) !important;
}

#Preview {
    float: left !important;
}

#wrongECP,
#shipLoader {
    transition: 0.5s !important;
    transform: translateX(-50%) translateY(-50%) scale(0);
}

.editorpanel,
.renderpanelcontainer {
    transition: 0.5s !important;
}

.ace_active-line {
    background: hsla(var(--Hue), 100%, 12%, 0.7) !important;
}

.ace-monokai .ace_marker-layer .ace_selection {
    background: hsla(var(--Hue), 100%, 25%) !important;
}
    `));

    document.head.appendChild(styleItem);

    if (localStorage.getItem('acceptedDisclaimer')) {
        styleItem.appendChild(document.createTextNode(`
          #disclaimer {
             transition: 0.5s !important;
             transform: translateX(-50%) translateY(-50%) scale(0);
          }
       `));
    }

    var overlay = document.querySelector('.overlay');
    var shipLoader = document.getElementById('shipLoader');
    var wrongECP = document.getElementById('wrongECP');
    var disclaimer = document.getElementById('disclaimer');

    if (overlay && shipLoader && disclaimer) {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.target.style.display === 'block') {
                    shipLoader.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
                    wrongECP.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
                    disclaimer.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
                } else {
                    shipLoader.style.transform = '';
                    wrongECP.style.transform = '';
                    disclaimer.style.transform = '';
                }
            });
        });
        observer.observe(overlay, { attributes: true, attributeFilter: ['style'] });
    }

    function removeWarning() {
        let warn = document.querySelector("div.warning");
        if (warn != null) {
            warn.remove();
            let centerpanel = document.querySelector(".centerpanel");
            if (centerpanel != null) centerpanel.style.top = "60px";
        }
    }

    setTimeout(function () {
        if (localStorage.getItem("remove-warning") !== "true") {
            let hideWarning = document.createElement("button");
            hideWarning.setAttribute("id", "hide-warning");
            hideWarning.innerHTML = "I understand. Don't show this again";
            hideWarning.addEventListener("click", function () {
                localStorage.setItem("remove-warning", true);
                removeWarning();
            });

            let warn = document.querySelector("div.warning");
            if (warn != null) {
                warn.appendChild(hideWarning);
            }
        }
    }, 30000);

    if (localStorage.getItem("remove-warning") === "true") {
        removeWarning();
    }

    var isGrabbing = false;
    function toggleCursor() {
        var insiderenderpanel = document.getElementById("insiderenderpanel");
        if (insiderenderpanel) {
            insiderenderpanel.style.cursor = isGrabbing ? "grabbing" : "grab";
        }
    }
    var insiderenderpanel = document.getElementById("insiderenderpanel");
    if (insiderenderpanel) {
        insiderenderpanel.addEventListener("mousedown", function () {
            isGrabbing = true;
            toggleCursor();
        });

        window.addEventListener("mouseup", function () {
            isGrabbing = false;
            toggleCursor();
        });
    }

    var colorButton = document.createElement('a');
    colorButton.href = '#';
    colorButton.style.margin = '0 5px';
    colorButton.style.float = 'right';
    colorButton.innerHTML = 'Set Color';
    colorButton.addEventListener('click', function () {
        hueAdjuster.style.display = hueAdjuster.style.display === 'none' ? 'block' : 'none';
    });

    var termsOfUseLink = document.getElementById('showDisclaimer');
    termsOfUseLink.parentNode.insertBefore(colorButton, termsOfUseLink.nextSibling);

    var imageElement = document.querySelector('.logo');
    if (imageElement) {
        imageElement.src = 'https://raw.githubusercontent.com/Modraxis/Starblast-Thems-Skin/main/Cool%20Starblast%20Modding/Logo.png';
    }
})();