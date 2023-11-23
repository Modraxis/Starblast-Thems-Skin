// ==UserScript==
// @name        SRV Theme
// @namespace    -
// @version     1.0
// @description -
// @author      Basit
// @match        https://starblast.io/
// @grant        none
// @antifeature tracking
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    var styleItem = document.createElement("style");
    styleItem.type = "text/css";
    styleItem.appendChild(document.createTextNode(`
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');

:root {
    --Light-color: #00B7F5;
    --Dark-color: #031237;
    --sec-Light-color: rgba(0, 184, 245, 0.5);
    --sec-Dark-color: rgba(3, 18, 55, 0.5);
    --Background-Dark-color: rgba(3, 18, 55, 0.25);
    --Center-Logo: url(https://raw.githubusercontent.com/Modraxis/Starblast-Thems-Skin/main/SRV%20Theme/SRV%20Logo.png);
}

* {
    font-family: 'Exo', sans-serif;
    user-select: none;
}

#logo img {
    opacity: 0;
    overflow: hidden !important;
}

#logo {
    background: var(--Center-Logo) no-repeat;
    background-size: cover !important;
    animation: show-logo;
    animation-duration: 2s;
    overflow: hidden !important;
    animation-fill-mode: forwards;
}

@keyframes show-logo {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.MuiGrid-container,
#cgbottom,
#cgpreroll {
    display: none !important;
}

.changelog-new,
.extrabutton {
    position: relative;
    top: 0;
    right: 250px;
    background: var(--sec-Dark-color);
    border-radius: 0 12px 12px 0;
    border: 1px solid var(--Light-color);
    color: var(--Light-color);
    margin-top: 15px;
    text-align: center;
    overflow: hidden;
    box-shadow: none;
    transition: .5s;
}

.changelog-new:focus,
.extrabutton:focus,
.changelog-new:hover,
.extrabutton:hover {
    right: 15px;
    box-shadow: 0 0 12px var(--Light-color);
}

.changelog-new h2 {
    text-shadow: 0 0 5px var(--Light-color);
    border-bottom: 2px solid var(--Light-color);
    border-radius: 20px;
}

.modal-header a,
.changelog-new p a {
    background: transparent !important;
    color: var(--Light-color) !important;
    text-decoration: none !important;
    border: none !important;
}

.modal-header a:hover,
.changelog-new p a:hover {
    text-decoration: underline !important;
    color: var(--Light-color) !important;
    background: transparent !important;
    box-shadow: none !important;
}

.full-changelog {
    border-left: none !important;
    border-bottom: none !important;
    border-right: none !important;
}

.changelog-new a,
.full-changelog {
    background: transparent !important;
    border: 2px solid var(--Light-color);
    color: var(--Light-color) !important;
    text-align: center !important;
    overflow: hidden !important;
    transition: .5s !important;
}

.full-changelog:focus,
.full-changelog:hover,
.changelog-new a:focus,
.changelog-new a:hover {
    color: var(--Dark-color) !important;
    background: var(--Light-color) !important;
    box-shadow: 0 0 10px var(--Light-color);
}

input::placeholder {
    text-shadow: none !important;
    color: var(--sec-Light-color) !important;
}

.inputwrapper {
    background: var(--sec-Dark-color) !important;
    color: var(--Light-color) !important;
    border: 1px solid var(--Light-color) !important;
    border-radius: 15px !important;
    box-shadow: 0 0 10px var(--Light-color) !important;
    transition: 0.5s !important;
}

.inputwrapper img {
    left: 5px !important;
}

#colors span,
.colorchosen {
    border-radius: 12px !important;
}

#colors .selected {
    transform: scale(1.2) !important;
    box-shadow: none !important;
}

#play {
    background: var(--sec-Dark-color) !important;
    border-radius: 20px !important;
    border: 1px solid var(--Light-color) !important;
    color: var(--Light-color) !important;
    overflow: hidden !important;
    box-shadow: none !important;
    transition: 0.5s;
}

#play:before {
    content: '';
    position: absolute;
    top: 20px;
    left: -100%;
    width: 100%;
    height: 0%;
    background: var(--Light-color);
    border-radius: 10px;
    transform: rotate(-45deg);
    box-shadow: 0 0 20px 20px var(--Light-color);
    animation: shine 2s infinite;
}

@keyframes shine {
    0% {
        left: -100%;
    }

    100% {
        left: 400%;
    }
}

#play:focus,
#play:hover {
    transform: scale(1.05);
}

#play>span {
    text-shadow: 0 0 30px var(--Light-color);
}

#game_modes {
    background: var(--sec-Dark-color) !important;
    color: var(--Light-color) !important;
    border-top: 1px solid var(--Light-color);
    text-shadow: none !important;
}

.fa.fa-caret-left,
#prevMode {
    position: relative;
    top: 0;
    right: 0;
    color: var(--Light-color) !important;
    transition: .5s !important;
    text-shadow: none;
}

.fa.fa-caret-left:hover,
#prevMode:hover {
    right: 8px;
    text-shadow: 0 0 10px var(--Light-color) !important;
}

.fa.fa-caret-right,
#nextMode {
    position: relative;
    top: 0;
    left: 0;
    color: var(--Light-color) !important;
    transition: .5s !important;
    text-shadow: none;
}

.fa.fa-caret-right:hover,
#nextMode:hover {
    left: 8px;
    text-shadow: 0 0 10px var(--Light-color) !important;
}

.social i,
.mobile-social i,
.mobile-tools i,
.stats i {
    background: var(--sec-Dark-color) !important;
    color: var(--Light-color) !important;
    border: 1px solid var(--Light-color) !important;
    border-radius: 15px !important;
    box-shadow: none !important;
    text-shadow: none !important;
    transition: 0.5s !important;
}

.social i:focus,
.mobile-social i:focus,
.mobile-tools i:focus,
.stats i:focus,
.social i:hover,
.mobile-social i:hover,
.mobile-tools i:hover,
.stats i:hover {
    background: var(--Light-color) !important;
    color: var(--Dark-color) !important;
    transform: scale(1.1) !important;
}

.sbg-diamond,
.sbg-twitter:focus .sbg-diamond,
.sbg-facebook:focus .sbg-diamond,
.sbg-twitter:hover .sbg-diamond,
.sbg-facebook:hover .sbg-diamond {
    color: var(--Light-color) !important;
    transition: 0.5s !important;
}

#training {
    background: var(--sec-Dark-color) !important;
    border-radius: 15px !important;
    border: 1px solid var(--Light-color) !important;
    color: var(--Light-color) !important;
    font-weight: 500 !important;
    box-shadow: none !important;
    text-shadow: none !important;
    transition: 0.5s !important;
}

#training:focus,
#training:hover {
    background: var(--Light-color) !important;
    color: var(--Dark-color) !important;
    box-shadow: 0 0 5px var(--Light-color) !important;
}

#training>span {
    position: relative;
    bottom: 18px;
    transition: 0.5s;
    font-weight: 500;
    font-size: 20px
}

#training:hover span {
    bottom: -2px;
}

.sbg-fw {
    position: relative;
    top: 100px;
    color: var(--Dark-color);
    transition: 0.5s;
}

#training:hover .sbg-fw {
    top: -2px;
}

#moddingspace,
#donate,
#rankings {
    background: var(--sec-Dark-color);
    border-radius: 15px;
    border: 1px solid var(--Light-color);
    color: var(--Light-color);
    box-shadow: none;
    text-shadow: none !important;
    font-weight: 500 !important;
    transition: 0.5s;
    overflow: hidden;
}

#moddingspace:focus,
#moddingspace:hover,
#donate:focus,
#donate:hover,
#rankings:focus,
#rankings:hover {
    background: var(--Light-color);
    color: var(--Dark-color);
    box-shadow: 0 0 5px var(--Light-color);
}

#moddingspace>span {
    position: relative;
    bottom: 20px;
    transition: 0.5s;
    font-size: 15px
}

#donate>span {
    position: relative;
    bottom: 22px;
    transition: 0.5s;
    font-size: 15px
}

#rankings>span {
    position: relative;
    bottom: 20px;
    transition: 0.5s;
    font-size: 15px
}

.sbg-modding,
.fa.fa-fw.fa-trophy,
.fa.ecplogo img {
    position: relative;
    bottom: 100px;
    transition: 0.5s;
}

.fa.fa-fw.fa-trophy {
    color: var(--Dark-color) !important;
}

.sbg.sbg-modding.fa-2x,
.changelog-new a .sbg.sbg-modding {
    bottom: 0;
}

#moddingspace:focus .sbg-modding,
#moddingspace:hover .sbg-modding,
#moddingspace:focus span,
#moddingspace:hover span,
#rankings:focus .fa.fa-fw.fa-trophy,
#rankings:hover .fa.fa-fw.fa-trophy,
#rankings:focus span,
#rankings:hover span,
#donate:focus .fa.ecplogo img,
#donate:hover .fa.ecplogo img,
#donate:focus span,
#donate:hover span {
    bottom: -2px;
}

.modal {
    background: var(--Dark-color) !important;
    border: 1px solid var(--Light-color) !important;
    color: var(--Light-color) !important;
    box-shadow: none !important;
    text-shadow: none !important;
    font-weight: 500 !important;
    transition: 0.5s !important;
}

.modal .header {
    background: var(--sec-Dark-color) !important;
    color: var(--Light-color);
    border-bottom: 5px solid var(--Light-color);
}

.modal .close-modal {
    font-family: sans-serif !important;
    text-shadow: 0 0 10px var(--Light-color) !important;
    transition: 0.5s !important;
}

.modal .close-modal:hover {
    color: red !important;
    text-shadow: 0 0 10px red !important;
    background: transparent !important;
    text-shadow: none !important;
    transform: rotate(90deg) !important;
}

*::-webkit-scrollbar-thumb {
    border-radius: 20px !important;
    box-shadow: none !important;
    background: var(--Light-color) !important;
}

*::-webkit-scrollbar {
    width: 10px !important;
}

*::-webkit-scrollbar-track {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
}

.gmodes a,
#infologo {
    display: none !important;
}

.infos h2 {
    text-align: center !important;
    border-bottom: 3px solid var(--Light-color) !important;
}

.modwrap {
    border-bottom: 3px solid var(--Light-color) !important;
}

.blue,
.infos p a {
    padding: 10px 10px !important;
    color: var(--Light-color) !important;
    font-weight: 600 !important;
}

.infos p a:focus,
.infos p a:hover {
    text-decoration: underline !important;
}

.modwrap img {
    filter: none !important;
}

.mod .title {
    position: relative;
    bottom: 10px;
    font-size: 12px !important;
    background: #fff !important;
    color: #000 !important;
    border-radius: 0 0 10px 10px !important;
}

.slider {
    border: 1px solid var(--Light-color);
    background: var(--sec-Dark-color);
    transition: .8s !important;
    border-radius: 20px;
}

.slider:before {
    content: '';
    position: absolute;
    left: 3px;
    bottom: 3px;
    height: 26px;
    width: 26px;
    background: var(--Light-color);
    transition: .8s !important;
    border-radius: 100%;
}

input:checked+.slider {
    box-shadow: 0 0 12px var(--Light-color);
    border: 1px solid var(--Light-color);
    background-color: var(--Light-color);
}

input:checked+.slider:before,
.option input:checked+.slider:before {
    background: var(--Dark-color) !important;
}

.range {
    border: 1px solid var(--Light-color) !important;
    color: var(--Light-color) !important;
    background: var(--sec-Dark-color) !important;
    border-radius: 10px !important;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    background: transparent;
    border-radius: 10px;
    outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: var(--sec-Light-color);
    border-radius: 5px;
}

input[type="range"]:focus::-webkit-slider-runnable-track,
input[type="range"]:hover::-webkit-slider-runnable-track {
    background: var(--sec-Light-color);
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 25px;
    border-radius: 10px;
    background: var(--Light-color);
    cursor: pointer;
}

input[type="range"]:focus::-webkit-slider-thumb,
input[type="range"]:hover::-webkit-slider-thumb {
    background: var(--Light-color);
}

input[type="range"]:active::-webkit-slider-thumb {
    background: var(--Light-color);
}

select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    border: 1px solid var(--Light-color) !important;
    border-radius: 10px;
    color: var(--Light-color) !important;
    background: var(--Dark-color) !important;
    cursor: pointer;
    outline: none;
    transition: 0.5s;
}

select::-ms-expand {
    display: none;
}

select option {
    padding: 10px;
}

select option:checked {
    background-color: var(--Light-color);
    color: var(--Dark-color);
}

select:hover,
select:focus {
    box-shadow: 0 0 8px var(--Light-color);
}

input:disabled,
select:disabled {
    opacity: 30%;
    box-shadow: none !important;
    transition: 0.5s;
}

#ECPKey,
#licenceKey,
.stats input,
input[type="number"],
.modal input[type="text"] {
    background: var(--Dark-color) !important;
    color: var(--Light-color) !important;
    border: 1px solid var(--Light-color) !important;
    border-radius: 10px !important;
    text-shadow: none !important;
    box-shadow: none;
    outline: none !important;
    transition: 0.5s !important;
}

.stats input:focus,
.stats input:hover,
#ECPKey:focus,
#ECPKey:hover,
#licenceKey:focus,
#licenceKey:hover,
input[type="number"]:focus,
input[type="number"]:hover,
.modal input[type="text"]:focus,
.modal input[type="text"]:hover {
    box-shadow: 0 0 8px var(--Light-color);
}

input[type="color"] {
    width: 40px !important;
    height: 35px !important;
    border: none !important;
    border-radius: 10px !important;
    outline: none !important;
    cursor: pointer !important;
}

input[type="color"]::-webkit-color-swatch {
    border: 1px solid var(--Light-color) !important;
    border-radius: 10px !important;
}

input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0 !important;
}

.stats small {
    border: 1px solid var(--Light-color) !important;
    background: var(--sec-Dark-color) !important;
}

#ECPKey {
    text-shadow: 0 0 5px var(--Light-color);
}

hr {
    border-color: transparent !important;
}

.title.frozenbg,
.ecpverifiedlogo.frozenbg,
.shippreview.frozenbg {
    color: var(--Light-color) !important;
    background: var(--sec-Dark-color) !important;
    border: 1px solid var(--Light-color) !important;
    border-radius: 10px !important;
    box-shadow: none !important;
    outline: none !important;
    text-shadow: none !important;
}

#continue_btn,
#respawn_btn,
.stats,
#licenceKeyBtn,
.pricechoice span,
.buy-on.frozenbg,
.gmodes span,
.region.frozenbg,
.donate-btn,
.ecpinput.ecpbtn,
#viewEcp,
#removeEcp,
#removeEcpFake,
.modecp a,
#reset-crystals-color {
    background: var(--sec-Dark-color) !important;
    color: var(--Light-color) !important;
    border: 1px solid var(--Light-color) !important;
    border-radius: 10px !important;
    transition: 0.5s !important;
    box-shadow: none !important;
    outline: none !important;
    text-shadow: none !important;
}

#continue_btn:focus,
#respawn_btn:hover,
#continue_btn:hover,
#respawn_btn:hover,
#licenceKeyBtn:focus,
#licenceKeyBtn:hover,
.pricechoice .active,
.pricechoice span:focus,
.pricechoice span:hover,
.buy-on.frozenbg:focus,
.buy-on.frozenbg:hover,
.gmodes span:focus,
.gmodes span:hover,
.region.frozenbg.active,
.region.frozenbg:focus,
.region.frozenbg:hover,
.donate-btn:focus,
.donate-btn:hover,
.ecpinput.ecpbtn:hover,
#viewEcp:hover,
#removeEcp:hover,
#removeEcpFake:hover,
.modecp a:focus,
.modecp a:hover,
#reset-crystals-color:focus,
#reset-crystals-color:hover {
    transform: scale(1.1) !important;
    background: var(--Light-color) !important;
    color: var(--Dark-color) !important;
    box-shadow: 0 0 10px var(--Light-color) !important;
}

#refresh_btn {
    background: rgba(60, 0, 0, 0.5) !important;
    color: #FF0000 !important;
    border: 1px solid #FF0000 !important;
    border-radius: 10px !important;
    transition: 0.5s !important;
    box-shadow: none !important;
    outline: none !important;
    text-shadow: none !important;
}

#refresh_btn:focus,
#refresh_btn:hover {
    transform: scale(1.1) !important;
    background: #FF0000 !important;
    color: rgba(60, 0, 0, 1) !important;
    box-shadow: 0 0 10px #FF0000 !important;
}

.modal .modecp {
    position: relative !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    background: transparent !important;
    color: var(--Light-color);
}

.modal-header {
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    background: transparent !important;
    color: var(--Light-color);
}

thead {
    background: var(--Dark-color) !important;
}

#ranks .rankings tbody tr:nth-child(odd) {
    background: var(--sec-Dark-color);
}

th,
td {
    border-color: var(--Light-color) !important;
}

.fa.fa-long-arrow-down {
    color: #FF0000 !important;
    text-shadow: 0 0 5px #FF0000 !important;
}

.fa.fa-long-arrow-up {
    color: #00FF00 !important;
    text-shadow: 0 0 5px #00FF00 !important;
}

.regions {
    background: transparent !important;
    border-bottom: 3px solid var(--Light-color) !important;
}

td img {
    box-shadow: none !important;
    border: 2px solid var(--Light-color) !important;
}

.download-apps a img {
    border: none !important;
    box-shadow: none !important;
    transition: 0.5s !important;
    border-radius: 12px !important;
}

.download-apps a img:focus,
.download-apps a img:hover {
    transform: scale(1.1) !important;
}

tr:nth-child(1) .fa.fa-trophy {
    color: gold !important;
}

tr:nth-child(2) .fa.fa-trophy {
    color: silver !important;
}

tr:nth-child(3) .fa.fa-trophy {
    color: #cd7f32 !important;
}

tr .fa.fa-trophy {
    color: transparent;
}

#mappreview {
    background: var(--Dark-color) !important;
    border-radius: 10px !important;
    border: none !important;
    transition: 0.5s !important;
}

#overlay {
    background: var(--Background-Dark-color);
}

.mouse-right,
.mouse-left,
.mouse-top {
    border-color: var(--Dark-color) !important;
}

.kb-z,
.kb-ctrl,
.mouse-container {
    background: var(--Light-color) !important;
    color: var(--Dark-color) !important;
    border: none !important;
}

.desktop table {
    background: var(--Dark-color) !important;
    color: var(--Light-color) !important;
}

.loaderprogress {
    background: var(--Light-color) !important;
    border-radius: 0 10px 10px 0 !important;
    box-shadow: 0 0 10px var(--Light-color) !important;
    text-shadow: none !important;
    outline: none !important;
}

#content,
.textprogress,
#respawn {
    color: var(--Light-color) !important;
    text-shadow: 0 0 20px var(--Light-color) !important;
}

.gameloaderwrapper {
    background: var(--Dark-color) !important;
    border-radius: 10px !important;
    border: 2px solid var(--Light-color);
    box-shadow: 0 0 10px var(--Light-color) !important;
    text-shadow: none !important;
    overflow: hidden !important;
    outline: none !important;
}

.statinfo {
    border-bottom: 1px solid var(--Light-color);
}

.top-right {
    background: transparent;
    color: var(--Light-color) !important;
    text-shadow: 0 0 15px var(--Light-color);
}

.acw-new:nth-child(2) img {
    height: 38vh;
    border: 1px solid var(--Light-color) !important;
    border-radius: 12px;
    box-shadow: 0 0 10px var(--Light-color) !important;
}

#calendar_event {
    border-bottom: none !important;
}

#customEventable {
    background: var(--sec-Dark-color);
    border-radius: 12px;
    border: 1px solid var(--Light-color);
    color: var(--Light-color);
    box-shadow: none;
    transition: 0.5s;
}

#customEventable:focus,
#customEventable:hover {
    box-shadow: 0 0 12px var(--Light-color);
}
`))
    document.head.appendChild(styleItem);
})();
