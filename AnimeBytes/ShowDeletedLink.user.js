// ==UserScript==
// @name        AnimeBytes ShowDeleted Link
// @namespace   mukti.moe
// @author      mukti
// @description Add a button to append "&showdeleted=1" to all forum post URLs
// @include     *animebytes.tv/forums.php*&threadid=*
// @include     *animebyt.es/forums.php*&threadid=*
// @version     1
// @icon 		http://animebytes.tv/favicon.ico
// ==/UserScript==

var lnk = document.createElement('a');
lnk.href = window.location.href + '&showdeleted=1';
lnk.appendChild(document.createTextNode('[Show Deleted Posts]'));
linkbox = document.getElementsByClassName('linkbox')[0];
linkbox.appendChild(lnk);