var up = document.querySelector("button#up");
				up.addEventListener("touchstart", function(event) {
    			var e = jQuery.Event("keydown", { keyCode: 38 });
	                jQuery("body").trigger(e);
  				});
  				up.addEventListener("touchend", function(event) {
    			var e = jQuery.Event("keyup", { keyCode: 38 });    //up
	                jQuery("body").trigger(e);
  				});
  				var down = document.querySelector("button#down");
				down.addEventListener("touchstart", function(event) {
    			var e = jQuery.Event("keydown", { keyCode: 40 });
	                jQuery("body").trigger(e);
  				});
  				down.addEventListener("touchend", function(event) {
    			var e = jQuery.Event("keyup", { keyCode: 40 });    //down
	                jQuery("body").trigger(e);
  				});
  				var toleft = document.querySelector("button#toleft");
				toleft.addEventListener("touchstart", function(event) {
    			var e = jQuery.Event("keydown", { keyCode: 37 });
	                jQuery("body").trigger(e);
  				});
  				toleft.addEventListener("touchend", function(event) {
    			var e = jQuery.Event("keyup", { keyCode: 37 });    //left
	                jQuery("body").trigger(e);
  				});
  				var toright = document.querySelector("button#toright");
				toright.addEventListener("touchstart", function(event) {
    			var e = jQuery.Event("keydown", { keyCode: 39 });
	                jQuery("body").trigger(e);
  				});
  				toright.addEventListener("touchend", function(event) {
    			var e = jQuery.Event("keyup", { keyCode: 39 });    //right
	                jQuery("body").trigger(e);
  				});
  				var reverse = document.querySelector("button#reverse");
				reverse.addEventListener("touchstart", function(event) {
    			var e = jQuery.Event("keydown", { keyCode: 90 });
	                jQuery("body").trigger(e);
  				});
  				reverse.addEventListener("touchend", function(event) {
    			var e = jQuery.Event("keyup", { keyCode: 90 });    //reverse
	                jQuery("body").trigger(e);
  				});