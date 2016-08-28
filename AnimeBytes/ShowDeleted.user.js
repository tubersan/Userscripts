// ==UserScript==
// @name        AnimeBytes ShowDeleted
// @namespace   mukti.moe
// @author      mukti
// @description Automatically add "&showdeleted=1" to all forum post URLs
// @include     *animebytes.tv/forums.php*
// @include     *animebyt.es/forums.php*
// @version     1.1
// @icon http://animebytes.tv/favicon.ico
// ==/UserScript==

var tire = /^.*&threadid=.*$/
var frre = /^.*forums.php.*$/
var dmre = /^.*&showdeleted.*/
var url = window.location.href;    
if (url.match(tire) && url.match(frre) && !(url.match(dmre))){
   url += '&showdeleted=1';
   console.log(url);
   window.location.href = url;
}

// Add '&showdeleted=1' to all forum thread links on the current page
var threadregex = /forums\.php\?([^&]+&)*action=viewthread/
var links = document.getElementsByTagName('a');
for (var i = 0, link; (link = links[i]); i++) {
  if (threadregex.exec(link.getAttribute('href'))) {
    link.setAttribute('href', link.getAttribute('href') + '&showdeleted=1');
  }
}
