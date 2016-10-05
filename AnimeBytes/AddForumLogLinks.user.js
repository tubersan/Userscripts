// ==UserScript==
// @name        AnimeBytes Link Forum Log
// @namespace   mukti.moe
// @author      mukti
// @description Add links to threads and posts from the forum log page.
// @include     *animebytes.tv/log.php?type=forum*
// @include     *animebyt.es/log.php?type=forum*
// @version     1.1
// @icon        http://animebytes.tv/favicon.ico
// ==/UserScript==


var fltables = document.getElementsByTagName('table');
var forumlog = fltables[fltables.length - 1];
var tpre = /.*(Thread|Post|Posts)\s#(\d+,?)+\s(\(Thread\s(\d+)\))?.*/;

for (var i = 0, row; row = forumlog.rows[i]; i++) {

	for (var j = 0, cell; cell = row.cells[j]; j++) {

		if(cell.innerHTML.match(tpre)) {
			
			var matches = tpre.exec(cell.innerHTML);
			
			if(matches[1].match(/Thread/)) {
				
				var strreplace = matches[1] + " #" + matches[2];
				cell.innerHTML = cell.innerHTML.replace(strreplace, "<a href='https://animebytes.tv/forums.php?action=viewthread&threadid=" + matches[2] + "'>" + strreplace + "</a>");
				
			}
			
			if(matches[1].match(/Post/)) {
				
				// Eventually loop through multiple posts in a log entry... once you figure out how to determin page...
				//if(matches[1] == 'Posts') {
				//	
				//	var posts = matches[2].split(",");
				//	
				//}
				
				var strreplace = "Thread " + matches[4];
				cell.innerHTML = cell.innerHTML.replace(strreplace, "<a href='https://animebytes.tv/forums.php?action=viewthread&threadid=" + matches[4] + "'>" + strreplace + "</a>");
				var test = cell;
				
			}
			
		}
	
	}

}