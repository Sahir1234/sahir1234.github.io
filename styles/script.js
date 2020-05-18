$(document).ready(function(){

	var mousePos = {};

	function getRandomInt(min, max) {
 		return Math.round(Math.random() * (max - min + 1)) + min;
	}

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
  		if(mousePos.x > 0 && mousePos.y > 0 && mousePos.x < maxWidth && mousePos.y < maxHeight){

    			var range = 15;

    			var color = "background: rgb("+getRandomInt(255,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";

    			var sizeInt = getRandomInt(10, 20);
					var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

					var leftInt = getRandomInt(Math.max(mousePos.x-range-sizeInt, 0), Math.min(mousePos.x+range-sizeInt, maxWidth - sizeInt - 10));
    			var left = "left: " + leftInt + "px;";

					var topInt = getRandomInt(Math.max(mousePos.y-range-sizeInt, 0), Math.min(mousePos.y+range-sizeInt, maxHeight - sizeInt - 10));
    			var top = "top: " + topInt + "px;";

    			var style = left+top+color+size;
    			$("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();});
  				}
		}, 1);
});
