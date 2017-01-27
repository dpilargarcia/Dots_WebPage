$(document).ready(function(){
    
    var height = $(window).height();
    
    ajustes();
    
    function ajustes(){
        $("section#cuerpo").css({"margin-top": height - 80 + "px"});    
    }
    
    $(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor").css({
				"-webkit-filter": "blur(" + pixels + "px)"
			});
		}
	});
    
});