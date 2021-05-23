// ==UserScript==
// @name         GitHub 万圣节
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  GitHub 万圣节提交样式
// @author       tanyiqu
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let colors = [
        '#ebedf0',
        '#ffee4a',
        '#ffc501',
        '#fe9600',
        '#03001c'
    ];

    let my_github_css_text = '';
    for (let i = 0; i < 5; i++) {
        my_github_css_text += `
            .ContributionCalendar-day[data-level="${i}"] {
                fill: ${colors[i]}
            }
        `;
    }

    let my_css_style = document.createElement('style');
    my_css_style.innerHTML = my_github_css_text;
    document.getElementsByTagName('head').item(0).appendChild(my_css_style);


})();