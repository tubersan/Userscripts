// ==UserScript==
// @name        AnimeBytes Link Forum Log
// @namespace   mukti.moe
// @author      mukti
// @description Add links to threads and posts from the forum log page.
// @include     *animebytes.tv/log.php?type=forum*
// @include     *animebyt.es/log.php?type=forum*
// @version     2.0
// @icon        http://animebytes.tv/favicon.ico
// ==/UserScript==

function loadPost(postID) {
	$.ajax({
		type: "GET",
		url: "https://animebytes.tv/ajax.php" ,
		datatype: "text",
		data: {
			action: "forums" ,
			type: "d_postid" ,
			pID: postID ,
		},
		success: function(data) {
			var fixedPostLink = data.replace(/\&amp\;/g, "&").replace(/["]/g, "");
			window.location.href = "https://animebytes.tv/" + fixedPostLink;
		}
	});
}

var fltables = document.getElementsByTagName('table');
var forumlog = fltables[fltables.length - 1];
var tpre = /.*(Thread|Post|Posts)\s#([\d,]+)\s(\(Thread\s(\d+)\))?.*/;

for (var i = 0, row; row = forumlog.rows[i]; i++) {

	for (var j = 0, cell; cell = row.cells[j]; j++) {

		if(cell.innerHTML.match(tpre)) {
			
			var matches = tpre.exec(cell.innerHTML);
			
			if(matches[1].match(/Thread/)) {
				
				var strreplace = matches[2];
				cell.innerHTML = cell.innerHTML.replace(strreplace, "<a href='https://animebytes.tv/forums.php?action=viewthread&threadid=" + strreplace + "'>" + strreplace + "</a>");
				
			}
			
			if(matches[1].match(/Post/)) {
				
				if(matches[1] == 'Posts') {
					
					var posts = matches[2].split(",");
					
					for (var k = 0, post; post = posts[k]; k++) {
						
						cell.innerHTML = cell.innerHTML.replace(post, '<a href="javascript:void(0);" onclick="loadPost(' + post + ');">' + post + '</a>');

					}
					
				} else {
					
					post = matches[2]
					cell.innerHTML = cell.innerHTML.replace(post, '<a href="javascript:void(0);" onclick="loadPost(' + post + ');">' + post + '</a>');
					
				}
				
				var strreplace = matches[4];
				cell.innerHTML = cell.innerHTML.replace(strreplace, "<a href='https://animebytes.tv/forums.php?action=viewthread&threadid=" + strreplace + "'>" + strreplace + "</a>");
				
			}
			
		}
	
	}

}