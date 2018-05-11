// ==UserScript==
// @name         PWN Legend of Zoroark Tweaks Prerelease
// @namespace    http://jacenboy.ml/
// @version      1.0
// @description  Tweaks to make PWN's Legend of Zoroark theme better
// @author       JacenBoy
// @match        *forums.petalburgwoods.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log("PWN Tweaks loaded");
    
    var stylesheet = "https://raw.githubusercontent.com/JacenBoy/PWN-Legend-of-Zoroark-Tweaks/prerelease/style.css";
    
    var link = document.createElement( "link" );
    link.href = stylesheet;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
    console.log("Stylesheet applied");

    var i = 0;
    while (i <= document.getElementsByClassName("nodecontrols").length - 1) {
        document.getElementsByClassName("nodecontrols")[i].innerHTML = '<a onclick="window.scrollTo(0, 0)">Top</a>&nbsp;' + document.getElementsByClassName("nodecontrols")[i].innerHTML;
        i++;
    }
})();
