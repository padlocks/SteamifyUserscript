// ==UserScript==
// @name         Steamify
// @namespace    https://github.com/padlocks/SteamifyUserscript
// @version      1.0
// @description  It opens Steam related links in the Steam client.
// @author       padlocks
// @match        http://*.steampowered.com/*
// @match        https://*.steampowered.com/*
// @match        http://*.steamcommunity.com/*
// @match        https://*.steamcommunity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;
    if (url.includes("steamcommunity.com") || url.includes("steampowered.com")) {
        let steamURL = "steam://openurl/" + url;
        window.open(steamURL,"_self");
    }
})();