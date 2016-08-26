// ==UserScript==
// @name        AnimeBytes ShowDeleted
// @namespace   mukti.moe
// @author      mukti
// @description Automatically add "&showdeleted=1" to all forum post URLs
// @include     *animebytes.tv/forums.php*
// @include     *animebyt.es/forums.php*
// @version     1
// @icon http://animebytes.tv/favicon.ico
// ==/UserScript==

tire = /^.*&threadid=.*$/
frre = /^.*forums.php.*$/
dmre = /^.*&showdeleted.*/
var url = window.location.href;    
if (url.match(tire) && url.match(frre) && !(url.match(dmre))){
   url += '&showdeleted=1';
   console.log(url);
   window.location.href = url;
}
