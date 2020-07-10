$(document).ready(function(){

	var mousePos = {};

	$(window).mousemove(function(e) {
  		mousePos.x = e.pageX;
 		mousePos.y = e.pageY;
	});

	$(window).mouseleave(function(e) {
  		mousePos.x = -1;
  		mousePos.y = -1;
	});

	var draw = setInterval(function(){
			var maxWidth = window.innerWidth;
			var maxHeight = window.innerHeight;
			var sizeInt = 20;
  		if(mousePos.x > 0 && mousePos.y > 0 && mousePos.x < (maxWidth - 1.5*sizeInt) && mousePos.y < (maxHeight - 1.5*sizeInt)){

    			var color = "background: white;";

					var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

					var leftInt = mousePos.x - 5;
    			var left = "left: " + leftInt + "px;";

					var topInt = mousePos.y - 5;
    			var top = "top: " + topInt + "px;";

    			var style = left+top+color+size;
    			$("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();});
  				}
		}, 1);
});
