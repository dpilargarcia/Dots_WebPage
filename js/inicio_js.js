$(document).ready(function(){
    $("#banner").css({"height":$(window).height() + "px"}); //Alto del banner igual al tamaño del navegador
    
    var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "0px", "width": "50px","height":"50px"});
				$("header").css({"background-color": "#fff", "opacity": "1"});

                flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
				$("header").css({"background-color": "fff", "opacity": "0.7"});

                flag = false;
			}
		}
    });
});