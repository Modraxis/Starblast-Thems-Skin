// ==UserScript==
// @name        Cool Starblast Modding
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description -
// @author      Basit
// @match       https://starblast.data.neuronality.com/modding/moddingcontent.html
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
    transition: background 0.5s, color 0.5s;
}

.header {
    text-align: left !important;
    user-select: none !important;
    color: var(--Main-color) !important;
    font-size: 1.3em !important;
    border-bottom: solid 2px var(--Light-color) !important;
    box-shadow: 0 0 30px var(--Main-color) !important;
}

.iconsbar.runiconsbar a,
.sbg.sbg-fly-full,
.sbg.sbg-help-full,
#terminal div,
.iconsbar {
    color: var(--Main-color) !important;
}

.header div a {
    font-family: 'Lato', sans-serif !important;
    border-radius: 10px !important;
    font-size: 0.7em !important;
    color: var(--Main-color) !important;
    background: transparent !important;
}

.header div a:hover {
    text-decoration: underline !important;
}

.ace_content {
    border-right: 1px solid var(--sec-Main-color);
}

#terminal {
    font-family: 'Lato', sans-serif !important;
    text-align: left;
    background-color: var(--Dark-color);
    padding: 20px;
    color: var(--Main-color);
    font-family: Monospace;
    font-size: 10pt;
    background: var(--sec-Dark-color);
    box-shadow: 0 0 10px 10px var(--sec-Main-color) inset !important;
    box-shadow: 0 0 200px 0 var(--sec-Dark-color) inset !important;
    border-radius: 8px !important;
}

.cmd .cursor {
    background: var(--Main-color) !important;
}

.terminal,
.cmd,
.terminal .terminal-output div div,
.cmd .prompt {
    color: var(--Main-color) !important;
}

.header h {
    position: absolute !important;
    top: 30px;
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
    background-color: transparent !important;
}

.ace_layer.ace_gutter-layer.ace_folding-enabled {
    background: var(--Dark-color) !important;
    color: var(--Main-color) !important;
}

.fa.fa-fw {
    color: var(--Main-color) !important;
}

.centerpanel label,
.centerpanel a {
    border-radius: 8px !important;
    background: var(--Dark-color) !important;
}

select {
    font-family: Lato, Sans-Serif;
    font-size: 1em;
    padding: 3px 5px;
    color: var(--Main-color);
    background: var(--Dark-color);
    border: 1px solid var(--Main-color);
    vertical-align: middle;
    outline: none;
    width: 110px;
    border-radius: 8px;
    box-sizing: border-box;
}

.terminal-output div a {
    font-weight: bold !important;
    color: var(--Main-color) !important;
    background: transparent !important;
    text-decoration: none !important;
}

.terminal-output div a:hover {
    text-decoration: underline !important;
}

.error {
    font-weight: bold !important;
    border-bottom: 2px dashed;
}

[data-tooltip]:before {
    -webkit-border-radius: 8px !important;
    -moz-border-radius: 8px !important;
    border-radius: 8px !important;
    background-color: var(--Dark-color) !important;
    color: var(--Main-color) !important;
    border: 1px solid var(--Main-color) !important;
    content: attr(data-tooltip) !important;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    border-radius: 10px;
    outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 200px;
    height: 5px;
    background: linear-gradient(to right, red, yellow, #00FF00, blue, red);
    border-radius: 5px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 20px;
    background: var(--Main-color);
    cursor: pointer;
}

input[type="range"]:focus::-webkit-slider-thumb,
input[type="range"]:hover::-webkit-slider-thumb {
    background: var(--Main-color);
}

input[type="range"]:active::-webkit-slider-thumb {
    background: var(--Main-color);
}

fa.fa-fw.fa-forward.colors:before {
    content: "\f200" !important;
}

#fieldview {
    border: 1px solid var(--sec-Main-color);
}
    `));

    document.head.appendChild(styleItem);

    var colorButton = document.createElement('a');
    colorButton.href = '#';
    colorButton.id = 'Console';
    colorButton.style.float = 'left';
    colorButton.style.margin = '0 10px';
    colorButton.innerHTML = 'Set Color';
    colorButton.addEventListener('click', function () {
        hueAdjuster.style.display = hueAdjuster.style.display === 'none' ? 'block' : 'none';
    });

    var iconsBar = document.querySelector('.iconsbar.runiconsbar');
    iconsBar.insertBefore(colorButton, iconsBar.childNodes[iconsBar.childNodes.length - 2]);

    window.addEventListener('load', function () {
        var fieldview = document.getElementById('fieldview');

        fieldview.width = 0;
        fieldview.height = 0;
    });

    var imageElement = document.querySelector('.logo');
    if (imageElement) {
        imageElement.src = 'https://raw.githubusercontent.com/Modraxis/Starblast-Thems-Skin/main/Cool%20Starblast%20Modding/Logo.png';
    }
})();
