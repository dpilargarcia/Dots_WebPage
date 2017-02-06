$(document).ready(function(){
    $("#banner").css({"height":$(window).height() + "px"}); //Alto del banner igual al tamaño del navegador
    
    var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "0px", "width": "50px","height":"50px"});
				$("header").css({"background-color": "#fff"});
                $("header ul a").css({"color": "#404040"});
                $("#drop li a").css({"color": "#fff"});
                
                flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
				$("header").css({"background-color": "transparent"});
                $("header ul a").css({"color": "#fff"});
                $("#drop li a").css({"color": "#fff"});

                flag = false;
			}
		}
    });
});
