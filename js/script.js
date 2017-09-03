
$(function() {

	$(document).mouseleave(function() {
	     $('#popup').modal({
	    	backdrop: 'static'
	    });
	});
	

	$('.modal').on('show.bs.modal', function () {
	        if ($(document).height() > $(window).height()) {
	            // no-scroll
	            $('body').addClass("modal-open-noscroll");
	        }
	        else {
	            $('body').removeClass("modal-open-noscroll");
	        }
	    });

    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    });

});